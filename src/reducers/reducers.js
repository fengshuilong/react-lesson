import { FETCH_USERS } from '../actions/fetchUsers.js'
import { FETCH_USER }  from '../actions/fetchUser.js'

export function users(state=[],action) {
	switch(action.type){
		case FETCH_USERS:
			return action.users
		default:
			return state
	}

}
let initialState = {
	'avatar_url':'',
	'login':'',
	'html_url':'',
	'email':'',
	'bio':'',
	'public_repos':'',
	'followers':'',
	'following':'',
	'created_at':''
}

export function user(state=initialState,action) {
	switch(action.type) {
		case FETCH_USER:
			return Object.assign({},state,action.user)
		default:
			return state
	}
}