import React,{ Component } from 'react'
import { Link } from 'react-router'

export class MainPage extends Component {
	render() {
		return (
			<div>
				<h5>我是首页的标题</h5>
				<Link to="/lesson10.html/other">跳到其它页面</Link>
			</div>
		)
	}
}