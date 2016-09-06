import React,{ Component } from 'react'
import { autobind } from 'core-decorators'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import Button from '../component/Button.jsx'

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
		this.setState({ value })
	}
	render() {
		let { placeholder,buttonValue,activeClass } = this.props
		let { value } = this.state
		return (
			<MuiThemeProvider>
				<div className={ `search-box ${activeClass} `} >
					<TextField 
					style={{ height:'40px' }}
					inputStyle={{ fontSize:'12px',fontFamily:'pf',lineHeight:'20px' }}
					hintText={ placeholder }
					hintStyle={{ fontSize:'12px',fontFamily:'pf',bottom:'10px',left:'4px' }}
					onKeyDown = { this.handleKeyDown }
					onChange={ this.handleChange }
					value={ value }
					/>
					<Button
						className="btn btn-ghost" 
						onClick={ this.handleClick }
						value={ buttonValue }
						style={{ padding:'6px 16px',transform:'translateY(-3px)' }}
					/>
				</div>
			</MuiThemeProvider>
		)
	}
}