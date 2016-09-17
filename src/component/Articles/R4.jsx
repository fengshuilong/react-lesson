import React,{ Component } from 'react'
import { Article } from '../Article.jsx'
import  A  from '../../component/A.jsx'

export default class R4 extends Component {
	render() {
		return (
			<Article title="state与props" >
				<p>在React中，我们将组件看成是一个状态机。所谓状态机就是组件的表现是有各种状态决定的，不同的状态，组件的表现也就不同</p>
				<p>组件的状态来源有两种方式，一种是props,外部状态,我们不能改变它。还有一种是state,属于内部状态,我们可以改变它</p>
				<p>但是我们不要直接改变state里的值，而是创建一个新的对象用setState来替换掉原来的state中的值。</p>
				<p>也就是说如果我们想改变state中的某个值，不要直接操作它，而是通过setState来替换。这样做的原因是因为我们要告诉react我们在改变state，它会监听状态的变化，然后自动触发渲染，需要注意的是这一步是一个异步操作，状态的改变不会马上执行</p>
				<p>案例展示: <A target="4"  value="计数器" /></p>
				<p>案例展示: <A target="5" value="拖拽" /></p>
			</Article>
		)
	}
}