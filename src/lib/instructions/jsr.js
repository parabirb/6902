// jsr (jump saving return address) controller
export default function jsr({state, operandAddress}) {
    // push the upper byte of the program counter onto the stack
    state.dataBus({ read: false, address: 0x100 + state.SP, data: state.PC & 0xff });
    state.SP--;
    // push the lower byte of the program counter onto the stack
    state.dataBus({ read: false, address: 0x100 + state.SP, data: state.PC >> 8 });
    state.SP--;
    // set the program counter
    state.PC = operandAddress;
}