// sed (set decimal mode) controller
export default function sed({state}) {
    // set the flag
    state.flags.set("D", 1);
}