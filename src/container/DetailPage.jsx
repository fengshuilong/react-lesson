import React,{ Component } from 'react' 
import { UserCard } from '../component'
import { fetchUser } from '../actions/fetchUser.js'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
@connect((state)=>{
	return {
		user:state.user
	}
})
class DetailPage extends Component {
	componentDidMount() {
		let { id } = this.props.params
		this.props.dispatch(fetchUser(id))
	}
	render() {
		console.log(this.props.user)
		return (
			<div>
				<h4 onClick={ ()=>browserHistory.goBack() } >返回</h4>
				<UserCard user={ this.props.user }  />
			</div>
		)
	}
}

module.exports = DetailPage