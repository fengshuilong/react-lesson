import React,{ Component } from 'react'
import { Article } from '../Article.jsx'

export default class R2 extends Component {
	render() {
		return (
			<Article title="组件" >
				<p>React应用构建在组件之上。每一个组件就是一个功能模块，这样当构建应用的时候，我们就可以像拼积木一样打造我们的应用</p>
				<p>每一个组件本质上其实是一个函数，所以它也能接受外部参数。这个参数可以是任意类型的值，但是除字符串外你需要用大括号包裹。甚至可以是另一个react组件，只是它写起来更像是标签嵌套，所有的参数通过this.props接收，而子组件是放在this.props.children中</p>
				<p>案例展示<a href="/lesson2.html" target="_blank" >demo2</a></p>
				<p>除了能从外部接收属性之外,组件内部还有一个数据状态,state。它与props不同在于props的数据是不可更改的，但是state的数据是可以更改，而且更改还比较特殊，需要使用setState来更改。</p>
				<p>除此之外，组件还有生命周期函数，生命周期函数定义了组件从载入前到挂载，更新，卸载的整个过程，每个阶段的周期函数都有不同作用</p>
				<p className="tips" >阮一峰的react入门教程，<a href="http://www.ruanyifeng.com/blog/2015/03/react.html" target="_blank" >传送门</a></p>
			</Article>
		)
	}
}