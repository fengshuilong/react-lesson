import React,{ Component,PropTypes } from 'react'
import { render } from 'react-dom'
import { Provider,connect } from 'react-redux'
import { createStore,combineReducers } from 'redux'
import { AddItem,ItemList,Footer } from '../component'
import { addOne,changeOne,selectKind } from '../actions/shoppingAction.js'
import * as reducers from '../reducers/shoppingListReducer.js'

require('../style/base/base.less')

var store = createStore(combineReducers({...reducers}))

@connect((state)=>{
	return {
		lists:state.itemList,
		kind:state.itemKind
	}
})
class TodoList extends Component {
	static childContextTypes = {
		handleComplete:PropTypes.any
	}
	getChildContext() {
		return {
			handleComplete:(index)=>this.props.dispatch(changeOne(index))
		}
	}
	handleAdd(value) {
		this.props.dispatch(addOne(value))
	}
	handleSelect(kind) {
		this.props.dispatch(selectKind(kind))
	}
	render() {
		let footer = null
		if(this.props.lists.length>0)footer=<Footer handleSelect = { this.handleSelect.bind(this) } />	
		return (
			<div className="container" >
				<h2>todoList</h2>
				<AddItem handleAdd = { this.handleAdd.bind(this) } />
				<ItemList lists={ this.props.lists } kind={ this.props.kind }  />
				{ footer }			
			</div>
		)
	}
}




let App = (
		<Provider store = { store }>
			<TodoList />
		</Provider>
	)
render(App,document.getElementById('app'))
module.hot.accept()