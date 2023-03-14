// clc (clear carry flag) controller
export default function clc({state}) {
    // clear the flag
    state.flags.set("C", 0);
}