import { FETCH_USERS } from '../actions/fetchUsers.js'
import { FETCH_USER }  from '../actions/fetchUser.js'
import { FETCH_LESSON } from '../actions/fetchLesson.js'
import React,{ Component } from 'react'
import * as content from '../component/Articles'
import ErrorContent from '../component/Articles/404.jsx'

export function users(state=[],action) {
	switch(action.type){
		case FETCH_USERS:
			return action.users
		default:
			return state
	}

}
let userInitialState = {
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

export function user(state=userInitialState,action) {
	switch(action.type) {
		case FETCH_USER:
			return Object.assign({},state,action.user)
		default:
			return state
	}
}

class A extends Component {
	render() {
		return (
			<div></div>
		)
	}
}
let length = Object.keys(content).length
export function lesson(state=A,action) {
	switch(action.type) {
		case FETCH_LESSON:
			let id = action.id
			if(isNaN(id)||id>=length)return ErrorContent
			return content[`R${id}`]
		default:
			return state
	}
}