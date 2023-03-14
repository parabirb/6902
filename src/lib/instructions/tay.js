// tay (transfer accumulator to y) controller
export default function tay({state}) {
    // transfer the accumulator to y
    state.Y = state.A;
    // set the flags
    state.flags.set("N", state.Y >> 7);
    state.flags.set("Z", state.Y === 0);
}