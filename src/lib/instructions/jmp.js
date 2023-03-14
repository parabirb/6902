// jmp (jump to location) controller
export default function jmp({state, operandAddress}) {
    // set the program counter
    state.PC = operandAddress;
}