import React,{ Component } from 'react'
export  class Drag extends Component {
	constructor() {
		super()
		this.state={ left:0,top:0,disX:0,disY:0,isMove:false }
	}
	handleMouseDown(e) {
		let disX = e.nativeEvent.clientX-e.target.offsetLeft,
			disY = e.nativeEvent.clientY-e.target.offsetTop
		this.setState({ disX,disY,isMove:true })
		document.onmousemove = (e)=>{
			if(!this.state.isMove)return
			let left = e.clientX-this.state.disX,
			top  = e.clientY-this.state.disY
			this.setState({ left,top }) 
		}
		document.onmouseup = ()=>{
			this.setState({ isMove:false })
			document.onmousemove = null
			document.onmouseup = null
		}
	}
	render() {
			let left = this.state.left+'px',
				top  = this.state.top+'px'
			return (
					<div>
						<h2>事件</h2>
						<div 
							style={{ width:'100px',height:'100px',background:'red',position:'absolute',left,top }} 
							onMouseDown = { this.handleMouseDown.bind(this) }
						>
						</div>
					</div>
				)
		}
	}