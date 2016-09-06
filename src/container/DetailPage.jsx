import React,{ Component } from 'react' 
import { UserCard,Header } from '../component'
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
		return (
			<div className="detail-page" >
				<Header></Header>
				<div className="container clearfix" >
					<UserCard user={ this.props.user }  />
				</div>
			</div>
		)
	}
}

module.exports = DetailPage