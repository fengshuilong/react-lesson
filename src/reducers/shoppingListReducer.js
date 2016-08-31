import { ADD_ONE,CHANGE_ONE,SELECT_KIND } from '../actions/shoppingAction.js'

export function itemList(state=[],action) {
	switch(action.type) {
		case ADD_ONE:
			return [...state,action.list]
		case CHANGE_ONE:
			let index = action.index,
				done = state[index].done?false:true
			return [...state.slice(0,index),Object.assign({},state[index],{ done }),...state.slice(index+1)]
		default:
			return state
	}
}
export function itemKind(state='all',action) {
	switch(action.type) {
		case SELECT_KIND:
			return action.kind
		default:
			return state
	}
}