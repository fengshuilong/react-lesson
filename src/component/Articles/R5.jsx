import React,{ Component } from 'react'
import { Article } from '../Article.jsx'
import { A } from '../../component'

export default class R5 extends Component {
	render() {
		return (
			<Article title="生命周期函数" >
				<h4>首次实例化</h4>
				<ul>
					<li>getDefaultProps</li>
					<li>getInitialState</li>
					<li>componentWillMount</li>
					<li>render</li>
					<li>componentDidMount</li>
				</ul>
				<h4>存在期</h4>
				<ul>
					<li>componentWillReceiveProps</li>
					<li>shouldComponentUpdate</li>
					<li>componentWillUpdate</li>
					<li>render</li>
					<li>componentDidUpdate</li>
				</ul>
				<h4>销毁&清理期</h4>
				<ul>
					<li>componentWillUnmount</li>
				</ul>
				<p><A target="6" value="demo" /></p>
				<h4>无状态组件</h4>
				<p>一般情况下，我们是需要利用组件上的各种周期函数的，但是偶尔我们的组件就是一堆html代码片段，并不需要周期函数，也不需要添加方法，因此我们可以使用一种无状态组件,Sateless Component</p>
				<p>无状态组件其实就是一个普通的函数，它接收两个参数，一个是props，一个是context</p>
			</Article>
		)
	}
}