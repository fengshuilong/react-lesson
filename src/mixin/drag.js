export function drag(Component){
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
	return <Component drag={ this.drag.bind(this) } />
}