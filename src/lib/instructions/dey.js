// dey (decrement y by one) controller
export default function dey({state}) {
    // perform the decrement
    state.Y = (state.Y - 1) & 0xff;
    // set the flags
    state.flags.set("N", state.Y >> 7);
    state.flags.set("Z", state.Y === 0);
}