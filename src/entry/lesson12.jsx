import React,{ Component } from 'react'
import { render } from 'react-dom'
import drag from '../mixin/drag.js'
require('../style/base/base.less')

@drag
 class App extends Component {
	render() {
			let { left,top } = this.props 
			return (
					<div 
						style={{ width:'100px',height:'100px',background:'red',position:'absolute',left,top }} 
						onMouseDown = { (e)=>this.props.drag(e) }
					>
					</div>
				)
		}
	}


render(<App />,document.getElementById('app'))
module.hot.accept()