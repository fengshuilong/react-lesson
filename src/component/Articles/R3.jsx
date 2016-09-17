import React,{ Component } from 'react'
import { Article } from '../Article.jsx'

export default class R3 extends Component {
	render() {
		return (
			<Article title="React事件" >
				<p>React自己把原生事件封装了一下，因此避免了一些兼容性问题,react的事件写法可以才用驼峰写法,onclick => onClick,事件需要绑定在html元素上，如果你放在React组件上就变成了属性传递了</p>
				<p>由于ES6的写法没有自动绑定this,所以我们需要用bind方法手动绑定this,<a href="/lesson3.html" target="_blank" >demo3</a></p>
				<p>绑定this的方法是有多种的,一般我们可以使用bind，decorators，箭头函数 还有::</p>
				<p>我们可以通过e.nativeEvent访问事件的详细信息</p>
				<p>我们也可以通过e.target获取当前目标元素</p>
				<p className="tips" >react事件列表，<a href="http://reactjs.cn/react/docs/events.html">传送门</a></p>
			</Article>
		)
	}
}