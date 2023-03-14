// php (push processor status onto stack) controller
export default function php({state}) {
    // store the processor status on the stack
    state.dataBus({ read: false, address: 0x100 + state.SP, data: state.P });
    // decrement the stack pointer
    state.SP--;
}