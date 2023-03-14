// lda (load accumulator with memory) controller
export default function lda({state, operandAddress}) {
    // load the byte at the operand address into the accumulator
    state.A = state.dataBus({ read: true, address: operandAddress });
    // set the flags
    state.flags.set("N", state.A >> 7);
    state.flags.set("Z", state.A === 0);
}