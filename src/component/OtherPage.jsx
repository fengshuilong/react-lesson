import React,{ Component } from 'react'
import { browserHistory } from 'react-router'

export class OtherPage extends Component {
	render() {
		return (
			<div>
				<h5>我是其它页面</h5>
				<button onClick={ ()=>browserHistory.push('/lesson10.html') }>跳转到主页</button>
			</div>
		)
	}
}