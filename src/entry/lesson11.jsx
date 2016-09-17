import React,{ Component } from 'react'
import { render } from 'react-dom'
import { Provider,connect } from 'react-redux'
import { createStore,combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { fetchUsers } from '../actions/fetchUsers.js'
import * as reducers from '../reducers/usersReducer.js'

require('../style/base/base.less')
let store = createStore(combineReducers({...reducers}),applyMiddleware(thunk))


@connect((state)=>{
	return {
		users:state.users
	}
})
class SearchUser extends Component {
	handleClick(){
		let node = this.refs.in,
			value = node.value.trim()
		if(!value)return
		this.props.dispatch(fetchUsers(value))
	}
	render() {
		let users = this.props.users
		return (
			<div className="container">
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



let App = (
		<Provider store = { store }>
			<SearchUser />
		</Provider>
	)
render(App,document.getElementById('app'))
module.hot.accept()