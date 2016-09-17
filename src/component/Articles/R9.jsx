import React,{ Component } from 'react'
import { Article } from '../Article.jsx'
import { A } from '../../component'

export default class R9 extends Component {
	render() {
		return (
			<Article title="高阶组件" >
				<p>高阶组件名字其实是来源于高阶函数。高阶函数来源于函数式编程，指的是接受一个函数或者返回一个函数的函数叫做高阶函数。其实我们经常用到，只是不知道这么叫而已</p>
				<p>高阶组件的用法也与高阶函数的用法一样，它接收一个组件并返回一个组件。因为ES6写法不支持mixin，所以我们需要用高阶组件来完成</p>
				<p>很多时候，我们的组件可能会有一些共同的功能，我们可以封装一个方法让所有组件都能用。这就是高阶组件的作用。react-redux的connect就是一个高阶组件</p>
				<p>我们简单的来应用一个拖拽组件,<A target="12" value="高阶组件" /></p>
			</Article>
		)
	}
}