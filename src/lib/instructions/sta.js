// sta (store accumulator in memory) controller
export default function sta({state, operandAddress}) {
    // store the accumulator in memory
    state.dataBus({ read: false, address: operandAddress, data: state.A });
}