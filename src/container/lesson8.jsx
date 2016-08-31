import React,{ Component,PropTypes } from 'react'
import { connect } from 'react-redux'
import { AddItem,ItemList,Footer } from '../component'
import { addOne,changeOne,selectKind } from '../actions/shoppingAction.js'

@connect((state)=>{
	return {
		lists:state.itemList,
		kind:state.itemKind
	}
})
export class ShoppingList extends Component {
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
			<div>
				<h2>shoppingList</h2>
				<AddItem handleAdd = { this.handleAdd.bind(this) } />
				<ItemList lists={ this.props.lists } kind={ this.props.kind }  />
				{ footer }			
			</div>
		)
	}
}
