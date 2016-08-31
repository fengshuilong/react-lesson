import React,{ Component } from 'react'

export class Count extends Component {
	constructor() {
		super()
		this.state = { count:0 }
	}
	handleAdd() {
		this.setState({ count:this.state.count+1 })
	}
	handleMinus() {
		this.setState({ count:this.state.count-1 })
	}
	render() {
		return (
			<div>
				<h2>状态管理</h2>
				<button onClick = { this.handleAdd.bind(this) } >add 1</button>
				<button onClick = { this.handleMinus.bind(this) } >minus 1</button>
				<p>{ this.state.count }</p>
			</div>
		)
	}
}