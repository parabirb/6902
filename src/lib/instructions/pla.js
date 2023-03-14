// pla (pull accumulator from stack) controller
export default function pla({state}) {
    // increment the stack pointer
    state.SP++;
    // get the accumulator from the stack
    state.A = state.dataBus({ read: true, address: 0x100 + state.SP });
    // clear the entry in the stack
    // set the flags
    state.flags.set("N", state.A >> 7);
    state.flags.set("Z", state.A === 0);
}