// dex (decrement x by one) controller
export default function dex({state}) {
    // perform the decrement
    state.X = (state.X - 1) & 0xff;
    // set the flags
    state.flags.set("N", state.X >> 7);
    state.flags.set("Z", state.X === 0);
}