import React,{ Component } from 'react'
import { render } from 'react-dom'

require('../style/base/base.less')

 class Drag extends Component {
	constructor() {
		super()
		this.state={ left:null,top:null,disX:0,disY:0 }
	}
	handleMouseDown(e) {
		let disX = e.nativeEvent.clientX-e.target.offsetLeft,
			disY = e.nativeEvent.clientY-e.target.offsetTop
		this.setState({ disX,disY })
		document.onmousemove = (e)=>{
			let left = e.clientX-this.state.disX,
			top  = e.clientY-this.state.disY
			this.setState({ left,top }) 
		}
		document.onmouseup = ()=>{
			document.onmousemove = null
			document.onmouseup = null
		}
	}
	render() {
			let left = this.state.left+'px',
				top  = this.state.top+'px'
			return (
					<div 
						style={{ width:'100px',height:'100px',background:'red',position:'absolute',left,top }} 
						onMouseDown = { this.handleMouseDown.bind(this) }
					>
					</div>
				)
		}
	}


render(<Drag />,document.getElementById('app'))
module.hot.accept()