import React,{ Component } from 'react'
import { browserHistory } from 'react-router'

let arr = ['hello,React','状态管理','事件','表单组件','todoList','生命周期函数','组件间通信','redux','redux-thunk','react-router']

class Links extends Component {
	render() {
		return (
			<div>
				<ul>
				{
					arr.map((item,index)=>{
						return <li key={`link-${index}`}  style={{ marginBottom:'10px' }} ><a href={ `/lesson${index+1}.html` }>{ item }</a></li>
					})
				}
				<li onClick={ ()=>browserHistory.push('/search') }  style={{ color:'#b31',marginBottom:'10px' }} >这是一个比较完整的github demo</li>
				</ul>
				<p><span style={{ color:'#6cf' }} onClick={ ()=>browserHistory.push('/') } >点此返回首页</span></p>
			</div>
		)
	}
}

module.exports = Links