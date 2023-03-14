// tsx (transfer stack pointer to x) controller
export default function tsx({state}) {
    // transfer the stack pointer to x
    state.X = state.SP;
    // set the flags
    state.flags.set("N", state.X >> 7);
    state.flags.set("Z", state.X === 0);
}