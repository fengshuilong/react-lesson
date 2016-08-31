export const ADD_ONE = 'ADD_ONE'
export const CHANGE_ONE = 'CHANGE_ONE'
export const SELECT_KIND = 'SELECT_KIND'

export function addOne(value) {
	return {
		type:ADD_ONE,
		list:{
			value,
			done:false
		}
	}
}
export function changeOne(index) {
	return {
		type:CHANGE_ONE,
		index
	}
}
export function selectKind(kind) {
	return {
		type:SELECT_KIND,
		kind
	}
}