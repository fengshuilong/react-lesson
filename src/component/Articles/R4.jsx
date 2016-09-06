import React,{ Component } from 'react'
import { Article } from '../Article.jsx'

export default class R4 extends Component {
	render() {
		return (
			<Article title="表单组件" >
				<p>react的表单组件和原生组件有点区别，一般分为受控组件和非受控组件</p>
				<p>顾名思义，受控组件就是行为受到控制。在给表单组件例如Input设置了默认值value后，那么不管你再怎么输入，状态都不会再改变。要想改变状态，我们必须通过onChange事件通过修改state来改变</p>
				<p>非受控组件的value没有值或者为null，如果想给其赋上默认值，可以通过defalutValue，对于input[type='checkbox']则可以是defaultChecked</p>
				<p>另外，我们可以通过给元素指定ref 来通过this.refs 来找到所要获取的元素</p>
				<p>阮一峰的react入门教程，<a href="http://www.ruanyifeng.com/blog/2015/03/react.html">传送门</a></p>
			</Article>
		)
	}
}