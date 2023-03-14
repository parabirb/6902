// pha (push accumulator onto stack) controller
export default function pha({state}) {
    // store the accumulator on the stack
    state.dataBus({ read: false, address: 0x100 + state.SP, data: state.A });
    // decrement the stack pointer
    state.SP--;
}