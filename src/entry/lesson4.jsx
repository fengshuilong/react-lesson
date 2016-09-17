import React,{ Component } from 'react'
import { render } from 'react-dom'

require('../style/base/base.less')

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
			<div className="container" >
				<h2>计数器</h2>
				<button onClick = { this.handleAdd.bind(this) } >add 1</button>
				<button onClick = { this.handleMinus.bind(this) } >minus 1</button>
				<p>{ this.state.count }</p>
			</div>
		)
	}
}

render(<Count />,document.getElementById('app'))
module.hot.accept()