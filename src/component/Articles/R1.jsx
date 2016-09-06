import React,{ Component } from 'react'
import { Article } from '../Article.jsx'

export default class R1 extends Component {
	render() {
		return (
			<Article title="JSX语法" >
				<p>在render方法中我们可以返回一个HTML结构或者react组件，但是它必须只能有一个顶层标签</p>
				<p>利用 JSX 编写 DOM 结构，可以用原生的 HTML 标签，也可以直接像普通标签一样引用 React 组件。这两者约定通过大小写来区分，小写的字符串是 HTML 标签，大写开头的变量是 React 组件</p>
				<p>HTML 里的 class 在 JSX 里要写成 className，因为 class 在 JS 里是保留关键字。同理某些属性比如 for 要写成 htmlFor。</p>
				<p>jsx允许在标签中使用js，但你需要用一个大括号包起来。JSX 允许直接在模板插入 JavaScript 变量。如果这个变量是一个数组，则会展开这个数组的所有成员基本上。但是最终返回的值必须是react组件，null或者undefined</p>
				<p>我们可以在组件上传递值，这个值可以是任何js数据类型。但是，除了字符串(模板字符串除外)，你都需要使用大括号包裹起来</p>
				<p>我们也可以在一个react组件中嵌套另一个react组件</p>
			</Article>
		)
	}
}