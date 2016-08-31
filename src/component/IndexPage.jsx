import React,{ Component } from 'react'
import { Header } from './Header.jsx'

export class IndexPage extends Component {
	render(){
		return (
			<div>
				<Header value="我是Header，我没变" />
				{ this.props.children }
			</div>
		)
	}
}