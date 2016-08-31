import React,{ Component } from 'react'
import { Header,Links } from '../component'
import { browserHistory } from 'react-router'

export class LandingPage extends Component {
	constructor() {
		super()
		this.state={ value:'' }
	}
	handleChange(e) {
		let node =  e.target,
			value = node.value
		this.setState({ value })
	}
	handleKeyDown(e) {
		if(e.nativeEvent.keyCode==13) {
			this.handleClick()
		}
	}
	handleClick() {
		let q = this.state.value
		if(!q)return
		browserHistory.push(`/search?q=${q}`)
	}
	render() {
		return(
			<div className='center' >
				<Header value="这里是freeeeaker的react demo!" />
				<div style={{ marginBottom:'20px' }} >
					<input placeholder="查询github账号" type="text"  value={ this.state.value } onChange={ this.handleChange.bind(this) } onKeyDown={ this.handleKeyDown.bind(this) }  />
					<button onClick={ this.handleClick.bind(this) } >search</button>
				</div>
				{ this.props.children }
			</div>
		)
	}
}
