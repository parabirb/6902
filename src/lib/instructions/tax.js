// tax (transfer accumulator to x) controller
export default function tax({state}) {
    // transfer the accumulator to x
    state.X = state.A;
    // set the flags
    state.flags.set("N", state.X >> 7);
    state.flags.set("Z", state.X === 0);
}