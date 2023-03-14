// clv (clear overflow) controller
export default function clv({state}) {
    // clear the flag
    state.flags.set("V", 0);
}