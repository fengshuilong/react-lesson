import React,{ Component } from 'react'
import { fetchUsers } from '../actions/fetchUsers.js'
import { connect } from 'react-redux'

@connect((state)=>{
	return {
		users:state.users
	}
})
export class SearchUser extends Component {
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
				<input type="text"ref="in" />
				<button onClick={ this.handleClick.bind(this) } >搜索</button>
				<ol>
					{
						users.map((item,index)=>{
							return <li key={ `users-${index}` }><a href={ item.html_url } target="_blank">{item.login}</a></li>
						})
					}		
				</ol>
			</div>
		)
	}
}