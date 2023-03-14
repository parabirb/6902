// plp (pull processor status from stack) controller
export default function plp({state}) {
    // increment the stack pointer
    state.SP++;
    // get the flags from the stack
    state.P = state.dataBus({ read: true, address: 0x100 + state.SP });
}