import React,{ Component } from 'react'
import { Article } from '../Article.jsx'

export default class R1 extends Component {
	render() {
		return (
			<Article title="JSX语法" >
				<p>为了便于书写，react引入了一种新的叫jsx的语法，它可以让你把HTML写入到js中，而更有激进的人通过内联样式将css写到html中，这一来，便打破了传统的html，css，js三者分离的局面，前端似乎走了一圈又回到原点</p>
				<p>我们通过声明一个继承了React的Component方法的类。这个类就会有一个render方法，而且这个方法是必须的。所有的html结构就是在此书写</p>
				<p>在通过react-dom 中的render方法，我们就可以将html插入到页面中去了</p>
				<p>jsx语法对html的标签和原生没有太大的区别，但是有几点需要注意:</p>
				<ol>
					<li>所有标签必须闭合</li>
					<li>原生标签小写，自定义标签(组件)必须大写</li>
					<li>每一个render方法只能有一个顶级标签，其它所有标签都在这个顶级标签里面</li>
					<li>有些属性因为js保留关键字的原因，写法有改变，class=>className,for=>htmlFor</li>
					<li>接受变量需要用大括号括起来，行内样式style接受一个对象</li>
					<li>render方法必须返回的是react组件，null或者undefined</li>
					<li>我们可以在html中写入js，但它必须要被大括号括起来，js的返回值也必须是react组件，undefined或者null。也可以是一个数组，数组会自动被react展开，展开的内容也必须是上述所说的类型</li>
				</ol>
				<p>案例展示:<a href="/lesson1.html" target="_blank" >demo01</a></p>	
			</Article>
		)
	}
}