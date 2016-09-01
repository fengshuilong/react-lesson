import React,{ Component } from 'react'
import { autobind } from 'core-decorators'
export class SearchBox extends Component {
	static defaultProps = {
		activeClass:''
	}
	constructor() {
		super()
		this.state = { value:'' }
	}
	@autobind
	handleKeyDown(e) {
		if(e.nativeEvent.keyCode==13) {
			this.handleClick()
		}
	}
	@autobind
	handleClick(e) {
		let { value } = this.state
		if(!value)return
		this.props.onClick(value)
	}
	@autobind
	handleChange(e) {
		let node = e.target,
			value = node.value
		if(!value)return 
		this.setState({ value })
	}
	render() {
		let { placeholder,buttonValue,activeClass } = this.props
		let { value } = this.state
		return (
			<div className={ `search-box ${activeClass} `} >
				<input 
					type="text"
					value = { value } 
					placeholder = { placeholder }
					onChange={ this.handleChange }  
					onKeyDown={ this.handleKeyDown } 
				/>
				<button 
					type="button"
					onClick={ this.handleClick }
				>{ buttonValue }</button>
			</div>
		)
	}
}