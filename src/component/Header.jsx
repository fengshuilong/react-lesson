import React,{ Component } from 'react'
import { browserHistory } from 'react-router'

export default class Header extends Component {
	render(){
		return (
			<header className="header" style={{ position:'relative','zIndex':10 }} >
				<div className="container">
				<span className="logo" onClick={ ()=>browserHistory.push('/') } >DH</span>
				{ this.props.children }
				</div>
			</header>
		)
	}
}