import React,{ Component } from 'react'

// export class UserCard extends Component {
// 	render() {
// 		let { avatar_url,login,html_url,email,bio,public_repos,followers,following,created_at } = this.props.user
// 		return (
// 			<div>
// 				<img src={ avatar_url } />
// 				<h5>姓名:{ login }</h5>
// 				<p>github地址:<a href={ html_url }>{html_url}</a></p>
// 				<p>邮箱:{ email }</p>
// 				<p>签名:{ bio } </p>
// 				<p>公开的仓库数量:{ public_repos }</p>
// 				<p>粉丝:{ followers }</p>
// 				<p>关注:{ following }</p>
// 				<p>创建时间:{ created_at }</p>
// 			</div>
// 		)
// 	}
// } 
export const UserCard = ({ user })=>(
	<div>
		<img src={ user.avatar_url } />
		<h5>姓名:{ user.login }</h5>
		<p>github地址:<a href={ user.html_url }>{user.html_url}</a></p>
		<p>邮箱:{ user.email }</p>
		<p>签名:{ user.bio } </p>
		<p>公开的仓库数量:{ user.public_repos }</p>
		<p>粉丝:{ user.followers }</p>
		<p>关注:{ user.following }</p>
		<p>创建时间:{ user.created_at }</p>
	</div>
)