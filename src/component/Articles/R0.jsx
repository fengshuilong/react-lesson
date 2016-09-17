import React,{ Component } from 'react'
import { Article } from '../Article.jsx'

let intro = require('../../style/images/reactIntro.jpg')

export default class R0 extends Component {
	render() {
		return (
			<Article title="引言" >
				<p >React是Facebook推出的一款不同于以往的前端框架，它提出了虚拟DOM的概念，并使得web组件化变得更为可行。</p>
				<p>虚拟DOM的概念虽然听着很神奇，但是实际上原理很简单，当然实现出来也不简单</p>
				<p>虚拟DOM并不是说我们就抛弃了原生DOM，而是我们是js生成一个类似于DOM树的数据结构，当我们进行DOM操作的时候先在这个数据结构中进行计算比对，然后得出最优的解法，再进行DOM操作</p>
				<p>也就是说我们的操作变成了直接操作虚拟DOM树来达成间接操作DOM</p>
				<p>不直接操作DOM的主要原因就是DOM操作过于消耗性能，且不能保证你的操作是最优的DOM操作</p>
				<div className="img-container">
					<img src={ intro } />
				</div>
				<p>我们还可以借助react-router，能让网站前后端分离，构建SPA应用，使得前端的作用变得更为重要</p>
				<p >与此同时Facebook还推出了React-Native,使得用js可以来写原生app也成为了可能</p>
				<p >另外，随着ES6,webpack的推出，越来越多的框架开始用他们来构建项目，React也是如此。所以，尽早拥抱ES6吧，等到你习惯了ES6之后，你就会发现原来的js是多么无聊</p>
				<p>React还与函数式编程有一定节后，我们还会接触一些函数式编程的东西</p>
				<p >这个教程也只能带大家初步了解React，更多的东西只能靠大家自己不断地学习</p>
			</Article>
		)
	}
}
