// cld (clear decimal mode) controller
export default function cld({state}) {
    // clear the flag
    state.flags.set("D", 0);
}