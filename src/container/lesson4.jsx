import React,{ Component } from 'react'


export class InputBox extends Component {
	constructor() {
		super()
		this.state={ value:'',className:'' }
	}
	handleFocus() {
		this.setState({ className:'active' })
	}
	handleChange() {
		this.setState({ value:this.refs.in.value })
	}
	handleBlur() {
		this.setState({ className:'' })
	}
	handleKeyDown(e) {
		console.log(e.nativeEvent)
		if(e.nativeEvent.keyCode==13){
			this.refs.in.value=''
			this.setState({ value:'' })
		}
	}
	render() {
		return (
			<div>
				<h2>表单组件</h2>
				<input 
					className   = { this.state.className }
					placeholder = "在此输入"
					ref         = "in"
					onFocus     = { this.handleFocus.bind(this) } 
					value       = { this.state.value }
					onChange    = { this.handleChange.bind(this) }
					onBlur      = { this.handleBlur.bind(this) }
					onKeyDown   = { this.handleKeyDown.bind(this) }
				/>
				<p>{ this.state.value }</p>
			</div>
		)
	}
}