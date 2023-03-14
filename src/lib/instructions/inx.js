// inx (increment x by one) controller
export default function inx({state}) {
    // perform the increment
    state.X = (state.X + 1) & 0xff;
    // set the flags
    state.flags.set("N", state.X >> 7);
    state.flags.set("Z", state.X === 0);
}