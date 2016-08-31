import React,{ Component } from 'react'
import { fetchUsers } from '../actions/fetchUsers.js'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
@connect((state)=>{
	return {
		users:state.users
	}
})
 class SearchPage extends Component {
 	componentDidMount() {
 		let { q } = this.props.location.query
 		console.log(this.props)
 		if(q) {
 			this.props.dispatch(fetchUsers(q))
 		}
 	}	
	handleClick(){
		let node = this.refs.in,
			value = node.value.trim()
		if(!value)return
		this.props.dispatch(fetchUsers(value))
	}
	render() {
		let users = this.props.users
		return (
			<div>
				<h2>查询github账号</h2>
				<p><span onClick={ ()=>browserHistory.goBack() }>返回</span></p>
				<div style={{ marginBottom:'20px' }} >
					<input type="text"ref="in" />
					<button onClick={ this.handleClick.bind(this) } >搜索</button>
				</div>
				<ol>
					{
						users.map((item,index)=>{
							return <li key={ `users-${index}` } onClick={ ()=>browserHistory.push(`/detail/${item.login}`) } ><a href="javascript:;">{item.login}</a></li>
						})
					}		
				</ol>
			</div>
		)
	}	
}
module.exports = SearchPage