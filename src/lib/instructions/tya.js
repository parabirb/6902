// tya (transfer y to accumulator) controller
export default function tya({state}) {
    // transfer y to the accumulator
    state.A = state.Y;
    // set the flags
    state.flags.set("N", state.A >> 7);
    state.flags.set("Z", state.A === 0);
}