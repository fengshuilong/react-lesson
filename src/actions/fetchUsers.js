import { getUsers } from '../api'

export const FETCH_USERS = 'FETCH_USERS'

function receiveUsers(users) {
	return {
		type:FETCH_USERS,
		users
	}
}
export function fetchUsers(userName) {
	return (dispatch)=>getUsers(userName).then(data=>dispatch(receiveUsers(data.items)))
}