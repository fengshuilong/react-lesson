import React,{ Component } from 'react'
import { render } from 'react-dom'
import { autobind } from 'core-decorators'

require('../style/base/base.less')

const Header = ()=><h3>todoList</h3>

class InputBox extends Component {
	constructor() {
		super()
		this.state = { value:'' }
		this.handleChange = this.handleChange.bind(this)
		this.handleKeyDown = this.handleKeyDown.bind(this)
		this.handleClick = this.handleClick.bind(this)
	}
	handleChange() {
		let node  = this.refs.in,
			value = node.value
		this.setState({ value:value })
	}
	handleKeyDown(e) {
		if(e.nativeEvent.keyCode==13) {
			this.handleClick()
		}
	}
	handleClick() {
		let node  = this.refs.in,
			value = node.value.trim()
		if(value) {
			this.setState({ value:'' })
			this.props.addItem(value)
		}	
	}
	render() {
		let { value } = this.state
		return (
			<div>
				<input
					ref =  'in'
					value = { value }
					onChange = { this.handleChange }
					onKeyDown = { this.handleKeyDown } 
				/>
				<button onClick = { this.handleClick } >添加一个任务</button>
			</div>
		)
	}
}

class Lists extends Component {
	render() {
		let { lists } = this.props
		return (
			<ol>
				{
					lists.map((item,index)=>{
						return (
							<li key={ `item-${index}` }>
								{ item }
								<a 
									href="javascript:;"  
									onClick={ ()=>this.props.removeItem(index) }
								>删除</a>
							</li>)
					})
				}
			</ol>
		)
	}
}

const Footer = ({ count })=><footer>当前有{ count }项任务</footer>

class TodoList extends Component {
	constructor() {
		super()
		this.state = { lists:[] }
	}
	@autobind
	addItem(value) {
		this.setState({ lists:[...this.state.lists,value] })
	}
	@autobind
	removeItem(index) {
		this.setState({ lists:[...this.state.lists.slice(0,index),...this.state.lists.slice(index+1)] })
	}
	render() {
		let { lists } = this.state,
			count = lists.length,
			footer = null
		if(count>0) {
			footer = <Footer count={ count } />
		}

		return (
			<div className="container">
				<Header  />
				<InputBox addItem={ this.addItem } />
				<Lists lists = { lists } removeItem={ this.removeItem }  />
				{ footer }
			</div>
		)
	}
}

render(<TodoList />,document.getElementById('app'))
module.hot.accept()