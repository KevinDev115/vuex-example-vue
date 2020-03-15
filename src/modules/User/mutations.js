
export function setAllUsers (state, data) {
  state.users = data;
}

export function setSelectedUser (state, data) {
  state.userSeleted = JSON.parse(JSON.stringify(data));
}

export function removeUserInArrayByKey (state, userIndex) {
  state.users.splice(userIndex, 1)
}

export function addOrUpdateUser (state, user) {
  let exists = state.users.find(u => u.id == user.id)

  if (exists) {
    exists.name = user.name
    exists.gender = user.gender
    exists.years = user.years
    return
  }

  state.users.push(JSON.parse(JSON.stringify(user)))

}

export function resetUserSelected (state) {
  state.userSeleted = {
    name: '',
    gender: '',
    years: 0
  }
}

export function setGenders (state, data) {
  state.genders = data
}

export function setAction (state, action) {
  state.action = action

  if (state.action == 'create') {
    resetUserSelected(state)
  }
}