// bcs (branch on carry set) controller
export default function bcs({state, operandAddress}) {
    // jump if the carry flag is true
    if (state.flags.get("C")) state.PC = operandAddress;
}