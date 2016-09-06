import React,{ Component } from 'react'
import { Article } from '../Article.jsx'

export default class R2 extends Component {
	render() {
		return (
			<Article title="state与props" >
				<p>React 的一大创新，就是将组件看成是一个状态机，一开始有一个初始状态，然后用户互动，导致状态变化，从而触发重新渲染 UI</p>
				<p>组件获取数据有两种方式，一种是props，来自于外面传递，不可改变,还有一种是state，我们可以改变它</p>
				<p>但是我们不要直接改变state，而是创建一个新的state来替换掉原来的state</p>
				<p>也就是如果我们想改变state中的某个值，不要直接操作它，而是通过setState来替换。替换自后react会自动重新渲染。要注意的是这一步是一个异步操作。</p>
			</Article>
		)
	}
}