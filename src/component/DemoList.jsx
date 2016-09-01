import React,{ Component } from 'react'
import { browserHistory } from 'react-router'
import { StaggeredMotion,spring } from 'react-motion'
import { range } from 'lodash'


let arr = ['hello,React','状态管理','事件','表单组件','todoList','生命周期函数','组件间通信','redux','redux-thunk','react-router']
let springConfig = { stiffness:300,damping:26 }

class DemoList extends Component {
	render() {
		return (
			<div className="container demo-list " >
				<StaggeredMotion
					defaultStyles={ range(arr.length).map(()=>{
						return { opacity:0,x:30,y:30,rotate:-30 }
					}) }
					styles={
						prevStyles=>prevStyles.map((_,i)=>{
							return i===0
								?{ opacity:spring(1,springConfig),x:spring(0,springConfig),y:spring(0,springConfig),rotate:spring(0,springConfig) }
								:{ 
									opacity:spring(prevStyles[i-1].opacity),
									x:spring(prevStyles[i-1].x),
									y:spring(prevStyles[i-1].y),
									rotate:spring(prevStyles[i-1].rotate)
								 }
						})
					}
				>
					{
						interpolatingStyles=>(
							<ul>
								{
									interpolatingStyles.map((style,i)=>{
										let { opacity,x,y,rotate } = style
										return <li 
											key={ `list-${i}` }
											style={{ 
												opacity:opacity,
												transform:`translate3d(${x}px,${y}px,0) rotateZ(${rotate}deg)`
											 }}
											>
											<a href={`/lesson${i+1}.html` } target="_blank" >{ arr[i] }</a>
											</li>
									})
								}
							</ul>
						)
					}
				</StaggeredMotion>
			</div>
		)
	}
}

module.exports = DemoList