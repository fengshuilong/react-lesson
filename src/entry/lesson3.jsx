import React,{ Component } from 'react'
import { render } from 'react-dom'
import { Count } from '../container'

require('../style/base/base.less')

class App extends Component {
	handleClick(e) {
		console.log(this)
		console.log(e)
	}
	click(e){
		console.log(this)
		console.log(e)
	}
	render() {
		return (
			<div className="container" >
				<div 
					style={{ width:'100px',height:'100px','background':'red' }} 
					onClick={ this.handleClick.bind(this) }  
				></div>
				<div
					style={{ width:'100px',height:'100px','background':'blue' }} 
					onClick={ ::this.click }
				>
					
				</div>
			</div>
		)
	}
}

render(<App />,document.getElementById('app'))
module.hot.accept()