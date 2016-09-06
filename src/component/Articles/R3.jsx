import React,{ Component } from 'react'
import { Article } from '../Article.jsx'

export default class R3 extends Component {
	render() {
		return (
			<Article title="React事件" >
				<p>react自己把原生事件封装了一下，因此避免了一些兼容性问题</p>
				<p>我们可以通过e.nativeEvent访问原生事件</p>
				<p>我们也可以通过e.target获取当前目标元素</p>
				<p>react事件列表，<a href="http://reactjs.cn/react/docs/events.html">传送门</a></p>
			</Article>
		)
	}
}