import React,{ Component,PropTypes } from 'react'
export class Item extends Component {
	static contextTypes = {
		handleComplete:PropTypes.any
	}
	constructor() {
		super()
	}
	handleClick() {
		console.log(this.props.index)
		this.context.handleComplete(this.props.index)
	}
	render(){
		let textDecoration = this.props.done?'line-through':'none'
		return (
			<li style={{ textDecoration }} onClick={ this.handleClick.bind(this) } >{ this.props.value} </li>
			)
	}
}