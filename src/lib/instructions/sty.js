// sty (store y in memory) controller
export default function sty({state, operandAddress}) {
    // store y in memory
    state.dataBus({ read: false, address: operandAddress, data: state.Y });
}