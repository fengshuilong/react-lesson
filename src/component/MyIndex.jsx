import React,{ Component } from 'react'
import { browserHistory } from 'react-router'
import { Motion,spring } from 'react-motion'

export class MyIndex extends Component {
	render() {
		return (
			<Motion 
				defaultStyle={{ 
					translateY:100,
					opacity:0 
				}}
				style={{ 
					translateY:spring(0),
					opacity:spring(1)
				}} 
			>
				{ ({ translateY,opacity })=>(
					<div className="container" style={{
						transform:`translateY(${translateY}px)`,
						opacity
					}}  >
						<h3>这是我第一个React教程</h3>
						<p>自我感觉，React的上手难度还是比较高的，知识结构要求的比较多。需要掌握ES6,webpack，react，react-router，reudx</p>
						<p>除此之外React处理动画还不是很容易</p>
						<p>这个教程也只能带大家初步了解React，更多的东西只能靠大家自己体验</p>
						<p>如果以后有机会，希望给大家再分享一个react的高级一点的内容</p>
						<p><a href="javascript:;" onClick={ ()=>browserHistory.push('/lesson') } >点此进入demo列表</a></p>
						<p style={{ color:'#ff5722' }} >另外，demo列表中的都是各个知识点的小demo，而最为完整的demo就是这个网站了！！</p>
					</div>
				) }
			</Motion>
		)
	}
}