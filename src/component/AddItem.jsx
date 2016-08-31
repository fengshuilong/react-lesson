import React,{ Component } from 'react'

export class AddItem extends Component {
	handleClick() {
		let node = this.refs.input,
			text = node.value.trim()
		this.props.handleAdd(text)
		node.value = ''
	}
	render() {
		return (
			<div>
				<input type="text" ref="input" />
				<button onClick={ ()=>this.handleClick() }>Add</button>				
			</div>
		)
	}
}