// txs (transfer x to stack pointer) controller
export default function txs({state}) {
    // transfer x to the stack pointer
    state.SP = state.X;
}