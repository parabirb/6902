// ora (or memory with accumulator) controller
export default function ora({state, operandAddress}) {
    // set the accumulator
    state.A = state.A | state.dataBus({ read: true, address: operandAddress });
    // set the flags
    state.flags.set("N", state.A >> 7);
    state.flags.set("Z", state.A === 0);
}