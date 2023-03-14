// cli (clear interrupt disable) controller
export default function cli({state}) {
    // clear the flag
    state.flags.set("I", 0);
}