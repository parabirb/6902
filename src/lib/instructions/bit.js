// bit (test bits in memory) controller
export default function bit({state, operandAddress}) {
    // fetch the operand
    let operand = state.dataBus({ read: true, address: operandAddress });
    // set the flags
    state.flags.set("N", operand >> 7);
    state.flags.set("Z", (operand & state.A) === 0);
    state.flags.set("V", (operand >> 6) & 1);
}