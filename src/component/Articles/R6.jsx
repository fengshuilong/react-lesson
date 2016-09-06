import React,{ Component } from 'react'
import { Article } from '../Article.jsx'

export default class R6 extends Component {
	render() {
		return (
			<Article title="组件间通信" >
				<p>父组件=>子组件,子组件=>父组件,兄弟组件=>兄弟组件</p>
				<p>子组件=>父组件，兄弟组件=>兄弟组件 一般通过回调的方式来进行通信</p>
				<p>还可以通过EventEmitter或者context</p>
			</Article>
		)
	}
}