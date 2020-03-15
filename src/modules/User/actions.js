export function getAllUsers ({ commit, dispatch, rootState }) {
    const users = [
        {
            id: 0,
            name: 'Oscar',
            gender: 'hombre',
            years: 21
        },
        {
            id: 1,
            name: 'Kevin',
            gender: 'hombre',
            years: 16
        },
        {
            id: 2,
            name: 'RobiGay',
            gender: 'hombre',
            years: 30
        }
    ]

    commit('setAllUsers', users)
    dispatch('Gender/getAllGender', {}, { root: true })
    commit('setGenders', rootState.Gender.genders)
}

export function deleteUserById ({ state, commit }, id) {
    let userIndex = state.users.findIndex(u => u.id == id)
    commit('removeUserInArrayByKey', userIndex)
}

export function createOrUpdateUser ({ state, commit }) {

    if (state.action == 'create') {
        state.userSeleted.id = Math.round(Math.random() * 10)
    }

    commit('addOrUpdateUser', state.userSeleted)
    commit('resetUserSelected')

    state.action == 'create'

}

