import { createStore,combineReducers } from 'redux'

const ADD_ONE = 'ADD_ONE'
const MINUS_ONE = 'MINUS_ONE'

//action
function addOne(value) {
	return {
		type:ADD_ONE,
		value
	}
}

function minusOne(value) {
	return {
		type:MINUS_ONE,
		value
	}
}

//reducer
function count(state = 0 ,action) {
	switch(action.type) {
		case ADD_ONE:
			return state+action.value
		case MINUS_ONE:
			let index= action.index
			return state-action.value
		default:
			return state
	}
}

let store = createStore(count)
	store.subscribe(function(){ console.log(store.getState()) })



let addButton = document.createElement('button')
	addButton.innerHTML = 'addOne'
	addButton.addEventListener('click',function(){
		

		store.dispatch(addOne(1))


	},false)
let minusButton = document.createElement('button')
	minusButton.innerHTML = 'minuseOne'
	minusButton.addEventListener('click',function(){


		store.dispatch(minusOne(1))


	},false)

let frag = document.createDocumentFragment()
	frag.appendChild(addButton)
	frag.appendChild(minusButton)
	document.getElementById('app').appendChild(frag)
