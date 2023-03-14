// ldx (load x with memory) controller
export default function ldx({state, operandAddress}) {
    // load the byte at the operand address into x
    state.X = state.dataBus({ read: true, address: operandAddress });
    // set the flags
    state.flags.set("N", state.X >> 7);
    state.flags.set("Z", state.X === 0);
}