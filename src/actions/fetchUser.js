import { getUser } from '../api'

export const FETCH_USER = 'FETCH_USER'
function receiveUser(user) {
	return {
		type:FETCH_USER,
		user
	}
}

export function fetchUser(location){
	return (dispatch)=>getUser(location).then((data)=>dispatch(receiveUser(data)))
}