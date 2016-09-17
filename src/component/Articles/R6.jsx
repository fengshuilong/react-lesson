import React,{ Component } from 'react'
import { Article } from '../Article.jsx'
import { A } from '../../component'

export default class R6 extends Component {
	render() {
		return (
			<Article title="组件间通信" >
				<p>很多时候组件并不是孤立的，它需要和其它组件有交流。</p>
				<p>一般情况下，交流分为这么几种，父组件=>子组件,子组件=>父组件,兄弟组件=>兄弟组件</p>
				<p>父组件与子组件的交流只能通过props传递值，但是由于props无法改变，所有就造成了单方面的只能父组件改变子组件的值</p>
				<p>要想让子组件改变父组件的值，我们可以巧妙的给子组件传递一个回调函数，在这个回调函数中我们来改变父组件的值</p>
				<p>除此之外，我们还可以通过EventEmitter或者context。<A target="7" value="组件间通信" /></p>
				<p>案例展示:<A target="8" value="todoList" /></p>
			</Article>
		)
	}
}