// stx (store x in memory) controller
export default function stx({state, operandAddress}) {
    // store x in memory
    state.dataBus({ read: false, address: operandAddress, data: state.X });
}