// bvs (branch on overflow set) controller
export default function bvs({state, operandAddress}) {
    // jump if the overflow flag is true
    if (state.flags.get("V")) state.PC = operandAddress;
}