export function isOfLegalAge (state) {
    if (state.userSeleted.years) {
        return state.userSeleted.years > 18
    }

    return null
}