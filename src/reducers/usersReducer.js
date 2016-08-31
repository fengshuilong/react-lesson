import { FETCH_USERS } from '../actions/fetchUsers.js'

export function users(state=[],action) {
	switch(action.type){
		case FETCH_USERS:
			return action.users
		default:
			return state
	}

}