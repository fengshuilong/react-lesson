import React,{ Component } from 'react'

export default function drag(Unit){
	return class extends Component {
		constructor() {
			super()
			this.state={ left:null,top:null }
		}
		drag(e) {
			let disX = e.nativeEvent.clientX-e.target.offsetLeft,
				disY = e.nativeEvent.clientY-e.target.offsetTop
			document.onmousemove = (e)=>{
				let left = e.clientX-disX,
				top  = e.clientY-disY
				this.setState({ left,top }) 
			}
			document.onmouseup = ()=>{
				document.onmousemove = null
				document.onmouseup = null
			}
		}
		render() {
			return <Unit drag={ this.drag.bind(this) } { ...this.state } />
		}
	}
}