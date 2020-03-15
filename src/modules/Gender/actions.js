export function getAllGender ({ commit }) {
    const users = [
        {
            id: 0,
            label: 'Hombre',
            value: 'hombre',
        },
        {
            id: 0,
            label: 'Mujer',
            value: 'mujer',
        },
        {
            id: 0,
            label: 'Otro',
            value: 'otro',
        },
    ]

    commit('setAllGender', users)
}

