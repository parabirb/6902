// sei (set interrupt disable) controller
export default function sei({state}) {
    // set the flag
    state.flags.set("I", 1);
}