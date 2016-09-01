import React,{ Component } from 'react'
import { browserHistory } from 'react-router'

export class Header extends Component {
	render(){
		return (
			<header className="header" >
				<div className="container">
				<span className="logo" onClick={ ()=>browserHistory.push('/') } >DH</span>
				<ul className="list-inline menu pull-right " >
					<li>demo</li>
					<li>test</li>
				</ul>
				{ this.props.children }
				</div>
			</header>
		)
	}
}