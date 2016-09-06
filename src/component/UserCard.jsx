import React,{ Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper'
import cachedImage from '../mixin/loadImage.js'

class Img extends Component {
	componentDidMount() {
		alert(2)
	}
	render() {
		console.log(this.props.alert())
		return <img src={ this.props.data } onClick={ this.props.alert } />
	}
}
let CachedImage = cachedImage(Img)

export const UserCard = ({ user })=>{
	let img = <CachedImage src={ user.avatar_url } />
	return (<MuiThemeProvider>
		<Paper>
			<div className="user-card clearfix" >
				<figure>
					{ img }
				</figure>
				<div className="user-info pull-left" >
					<p>姓名:{ user.login }</p>
					<p>github地址:<a href={ user.html_url }>{user.html_url}</a></p>
					<p>邮箱:{ user.email }</p>
					<p>签名:{ user.bio } </p>
					<p>公开的仓库数量:{ user.public_repos }</p>
					<p>粉丝:{ user.followers }</p>
					<p>关注:{ user.following }</p>
					<p>创建时间:{ user.created_at }</p>
				</div>
			</div>
		</Paper>
	</MuiThemeProvider>)
}
