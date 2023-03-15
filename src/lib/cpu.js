// import the instruction set and flag handler
import Flags from "./flags.js";
import instructions from "./instructions.js";

// cpu class
export default class CPU {
    // constructor
    constructor({dataBus}) {
        // set the data bus
        this.dataBus = dataBus;
        // accumulator register
        this.A = 0;
        // x index
        this.X = 0;
        // y index
        this.Y = 0;
        // stack pointer
        this.SP = 0xff;
        // program counter, read from 0xfffc; see page 10 of the W65C02S datasheet
        this.PC = (dataBus({read: true, address: 0xfffd}) << 8) | dataBus({read: true, address: 0xfffc});
        // status register (variously referred to as SR and PF, but the W65C02S datasheet refers to it as P)
        this.P = 0b00110100;
        // flag handler
        this.flags = new Flags(this);
    }

    // clock cycle
    clock() {
        // find the relevant instruction
        let instruction = instructions[this.dataBus({read: true, address: this.PC}).toString(16).padStart(2, "0")];
        // formatted instruction for debugging
        let formattedInstruction = `${this.PC.toString(16).padStart(4, "0")}: ${instruction.controller.name}`;
        // increment the program counter
        this.PC++;
        // calculate the operand address
        let operandAddress = null;
        // immediate addressing
        if (instruction.mode === "#") {
            // set the operand address
            operandAddress = this.PC;
            // set the formatted instruction
            formattedInstruction += ` #$${this.dataBus({ read: true, address: operandAddress }).toString(16).padStart(2, "0")}`;
            // increment the program counter
            this.PC++;
        }
        // absolute, absolute indexed with x, absolute indexed with y, absolute indirect
        else if (instruction.mode === "a" || instruction.mode === "a,x" || instruction.mode === "a,y" || instruction.mode === "(a)") {
            // read the initial operand address and increment the program counter
            operandAddress = (this.dataBus({read: true, address: this.PC + 1}) << 8) | this.dataBus({
                read: true,
                address: this.PC
            });
            this.PC += 2;
            // set the formatted instruction
            formattedInstruction += ` ${instruction.mode.replace("a", `$${operandAddress.toString(16).padStart(4, "0")}`)}`;
            // if we're indexing with x or y, add x or y into the operand address
            if (instruction.mode === "a,x") operandAddress += this.X;
            else if (instruction.mode === "a,y") operandAddress += this.Y;
            // if we're doing absolute indirect, load the actual operand address
            else if (instruction.mode === "(a)") {
                operandAddress = (this.dataBus({
                    read: true,
                    address: operandAddress + 1
                }) << 8) | this.dataBus({read: true, address: operandAddress});
            }
        }
        // zero page, zero page indexed with x, zero page indexed with y, zero page indirect
        else if (instruction.mode === "zp" || instruction.mode === "zp,x" || instruction.mode === "zp,y" || instruction.mode === "(zp,x)" || instruction.mode === "(zp),y") {
            // read the initial operand address and increment the program counter
            operandAddress = this.dataBus({ read: true, address: this.PC });
            this.PC++;
            // set the formatted instruction
            formattedInstruction += ` ${instruction.mode.replace("zp", `$${operandAddress.toString(16).padStart(2, "0")}`)}`;
            // if we're indexing with x or y, add x or y into the operand address
            if (instruction.mode === "zp,x" || instruction.mode === "(zp,x)") operandAddress = (operandAddress + this.X) & 0xff;
            else if (instruction.mode === "zp,y") operandAddress = (operandAddress + this.Y) & 0xff;
            // if we're doing indexed indirect, load the actual operand address
            if (instruction.mode === "(zp,x)" || instruction.mode === "(zp),y") {
                operandAddress = ((this.dataBus({
                    read: true,
                    address: operandAddress + 1
                }) << 8) | this.dataBus({read: true, address: operandAddress})) + (instruction.mode === "(zp),y" ? this.Y : 0);
            }
        }
        // relative
        else if (instruction.mode === "r") {
            // read the offset
            let offset = this.dataBus({ read: true, address: this.PC });
            // check its signature
            if (offset >> 7) offset |= 0xffffff00;
            // increment the program counter
            this.PC++;
            // set the operand address
            operandAddress = this.PC + offset;
            // set the formatted instruction
            formattedInstruction += ` $${(offset & 0xff).toString(16).padStart(2, "0")}`;
        }
        // run it
        instruction.controller({mode: instruction.mode, state: this, operandAddress});
        // return debug info
        return formattedInstruction;
    }
};