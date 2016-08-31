import React,{ Component } from 'react'
import { browserHistory } from 'react-router'

let timer = null

class ErrorPage extends Component {
	constructor(){
		super()
		this.state = { time:5 }
	}
	componentDidMount() {
		clearInterval(timer)
		timer = setInterval(()=>{
			this.setState({time:this.state.time-1})
		},1000)
	}
	componentDidUpdate() {
		if(this.state.time==0) {
			clearInterval(timer)
			browserHistory.push('/')
		}
	}
	componentWillUnmount() {
		clearInterval(timer)
	}
	handleClick() {
		browserHistory.push('/')
	}
	render() {
		return (
			<div>
				<h1>您要找的页面并不存在</h1>
				<p>{ this.state.time }返回首页，或者<button onClick={ this.handleClick.bind(this) } >点击这里返回</button></p>
			</div>
		)
	}
}
module.exports = ErrorPage