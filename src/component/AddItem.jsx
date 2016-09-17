import React,{ Component } from 'react'

export class AddItem extends Component {
	handleClick() {
		let node = this.refs.input,
			text = node.value.trim()
		this.props.handleAdd(text)
		node.value = ''
	}
	handleKeyDown(e) {
		if(e.nativeEvent.keyCode==13) {
			this.handleClick()
		}
	}
	render() {
		return (
			<div>
				<input type="text" ref="input" onKeyDown = { (e)=>this.handleKeyDown(e) }  />
				<button onClick={ ()=>this.handleClick() }>Add</button>				
			</div>
		)
	}
}