import React,{ Component } from 'react'
import { Article } from '../Article.jsx'

export default class R5 extends Component {
	render() {
		return (
			<Article title="生命周期函数" >
				<p>实例化</p>
				<span>首次实例化</span>
				<ul>
					<li>getDefaultProps</li>
					<li>getInitialState</li>
					<li>componentWillMount</li>
					<li>render</li>
					<li>componentDidMount</li>
				</ul>
				<p>存在期</p>
				<span>组件已存在时的状态改变</span>
				<ul>
					<li>componentWillReceiveProps</li>
					<li>shouldComponentUpdate</li>
					<li>componentWillUpdate</li>
					<li>render</li>
					<li>componentDidUpdate</li>
				</ul>
				<p>销毁&清理期</p>
				<li>componentWillUnmount</li>
			</Article>
		)
	}
}