import { API_ROOT } from '../constants';

export const fetchUsers = () => {
  return(
    fetch(`${API_ROOT}/users`)
    .then(resp => resp.json())
  )
}

export const findUser = (id) => {
  return(
    fetch(`${API_ROOT}/users/${id}`)
    .then(resp => resp.json())
  )
}
