import React,{ Component,PropTypes } from 'react'
let Events = require('events')
let E = new Events()
export class SuperClass extends Component {
	static childContextTypes = { 
		changeState:PropTypes.any
	}
	constructor() {
		super()
		this.state = { super:0,a:0,b:0,c:0,d:0 }
	}
	getChildContext() {
		return {
			changeState:()=>this.setState({ super:this.state.super+1 })
		}
	}
	handleClickA() {
		this.setState({ b:this.state.b+1 })
	}
	handleClickB() {
		this.setState({ a:this.state.a+1 })
	}
	handleClickC() {
		this.setState({ super:this.state.super+1 })
	}
	componentDidMount() {
		let that = this
		E.on('addOne',function() {
			that.setState({ super:that.state.super+1 })
		})
	}
	render() {
		return (
			<div>
				<h2>组件间通信</h2>
				<h4>super:{ this.state.super }</h4>
				<SubClassA click={ this.handleClickA.bind(this) } a={ this.state.a } />
				<SubClassB 
					click={ this.handleClickB.bind(this) }
					clickDeep={ this.handleClickC.bind(this) } 
					b={ this.state.b } 
				/>
			</div>
		)
	}
}

class SubClassA extends Component {
	render() {
		return (
			<div>
				<button onClick={ this.props.click } >B+1</button>
				<p>A:{this.props.a}</p>
			</div>
		)
	}
}
class SubClassB extends Component {
	render() {
		return (
			<div>
				<button onClick={ this.props.click } >A+1</button>
				<p>B:{ this.props.b }</p>
				<SubClassC click={ this.props.clickDeep }  />
				<SubClassD />
				<SubClassE />
			</div>
		)
	}
}
class SubClassC extends Component {
	render() {
		return (
			<div>
				<button onClick={ this.props.click } >Super+1 By props</button>
			</div>
		)
	}
}
class SubClassD extends Component {
	handleClick() {
		E.emit('addOne')
	}
	render() {
		return (
			<div>
				<button onClick={ this.handleClick } >Super+1 By Emitter</button>
			</div>
		)
	}
}
class SubClassE extends Component {
	static contextTypes={
		changeState:PropTypes.any
	}
	render() {
		return (
			<div>
				<button onClick={ this.context.changeState } >Super+1 By context</button>
			</div>
		)
	}
}
