// sec (set carry flag) controller
export default function sec({state}) {
    // set the flag
    state.flags.set("C", 1);
}