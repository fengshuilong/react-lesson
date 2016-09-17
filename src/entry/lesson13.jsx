import React,{ Component } from 'react'
import { render } from 'react-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import ReactTransitionGroup from 'react-addons-transition-group'

require('../style/base/base.less')
require('../style/pages/lesson13.less')
class List extends Component {
	constructor() {
		super()
		this.state = { list:[],value:'' }
		this.remove = this.remove.bind(this)
		this.handleClick = this.handleClick.bind(this)
		this.handleKeyDown = this.handleKeyDown.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(e) {
		this.setState({ value:e.target.value })
	}
	handleKeyDown(e) {
		if(e.nativeEvent.keyCode==13) {
			this.handleClick()
		}
	}
	handleClick() {
		let node = this.refs.in,
			value = node.value
		if(value){
			this.setState({ list:[...this.state.list,value],value:'' })
		}
	}
	remove(index) {
		console.log(index)
		this.setState({ list:[...this.state.list.slice(0,index),...this.state.list.slice(index+1)] })
	}
	render() {
		let { list,value } = this.state
		return (
			<div className="container" >
				
				<div>
					<input value={ value } onChange={ this.handleChange } ref="in" type="text" onKeyDown={ this.handleKeyDown } />
					<button onClick={ this.handleClick } >add</button>
				</div>
				<ReactCSSTransitionGroup
					component = "ul"
					transitionName="fade"
					transitionEnterTimeout={500} 
					transitionLeaveTimeout={300}
				>
				{ 
					list.map((item,index)=>{
						return <li key={ `item-${index}` }>{ item }<a href="javascript:;" onClick={ ()=>this.remove(index) } >delete</a> </li>
					})
				}
				</ReactCSSTransitionGroup>
			</div>
		)
	}
}


render(<List />,document.getElementById('app'))
module.hot.accept()