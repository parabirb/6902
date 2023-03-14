// txa (transfer x to accumulator) controller
export default function txa({state}) {
    // transfer x to the accumulator
    state.A = state.X;
    // set the flags
    state.flags.set("N", state.A >> 7);
    state.flags.set("Z", state.A === 0);
}