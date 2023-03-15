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
        // increment the program counter
        this.PC++;
        // calculate the operand address
        let operandAddress = null;
        // immediate addressing
        if (instruction.mode === "#") {
            // set the operand address
            operandAddress = this.PC;
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
            // read the operand address and increment the program counter
            operandAddress = this.dataBus({ read: true, address: this.PC }) + this.PC - 1;
            this.PC++;
        }
        // run it
        instruction.controller({mode: instruction.mode, state: this, operandAddress});
    }
};