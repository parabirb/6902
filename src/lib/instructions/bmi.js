// bmi (branch on result minus) controller
export default function bmi({state, operandAddress}) {
    // jump if the negative flag is true
    if (state.flags.get("N")) state.PC = operandAddress;
}