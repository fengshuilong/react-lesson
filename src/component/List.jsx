import React,{ Component } from 'react'


export class List extends Component {
	render() {
		let active = this.props.done?'on':''
		return (
			<li onClick={ this.props.handleDone } className={ active }  >
			{ this.props.value }
			<a href="javascript:;" onClick={ this.props.delete } >delete</a>
			</li>
		)
	}
}