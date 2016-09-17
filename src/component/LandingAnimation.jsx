import React,{ Component } from 'react'

let timer = null,
	handleMove = null
export default class LandingAnimation extends Component {
	constructor() {
		super()
		this.state = { dots:[{ isMouse:true,vx:0,vy:0,x:0,y:0,r:3 }] }
	}
	componentDidMount() {
		let canvas  = this.refs.canvas,
			context = canvas.getContext('2d'),
			width = document.documentElement.clientWidth,
			height = document.documentElement.clientHeight,
			config = {
				color:'rgba(210,210,210,0.3)'
			},
			that = this
		canvas.width = width
		canvas.height = height

		for(var i =0;i<50;i++) {
			this.state.dots.push({
				x:Math.floor(random(0,width)),
				y:Math.floor(random(0,height)),
				r:Math.floor(random(1,5)),
				vx:Math.floor(random(-3,3))/5,
				vy:Math.floor(random(-3,3))/5
			})
		}		
		// timer = setInterval(()=>{
		// 	dragDots(dots,context,config)
		// },30)
		drawDots(this.state.dots,context,config)
		handleMove = function(e) {
			if(e.clientY>60) {
				that.state.dots[0].x = e.clientX
				that.state.dots[0].y = e.clientY
			}
		}
		document.addEventListener('mousemove',handleMove,false)
		function drawLine(dotA,dotB,context,config) {
			if((dotA.x-dotB.x<200)&&(dotA.y-dotB.y<200)){
				var distance = getDistance(dotA,dotB)
				if(distance<40000) {
					let ratio = distance/40000
					context.strokeStyle = `rgba(224,224,224,${0.7-ratio*0.7})`
					context.lineWidth = (1-ratio)*2
					context.beginPath()
					context.moveTo(dotA.x,dotA.y)
					context.lineTo(dotB.x,dotB.y)
					context.closePath()
					context.stroke()
				}
			}
		}
		function drawDots(dots,context,config) {
			context.clearRect(0,0,width,height)
			context.fillStyle = config.color
			dots.forEach((dot)=>{
				context.beginPath()
				context.arc(
					dot.x,
					dot.y,
					dot.r,
					0,
					Math.PI*2
				)
				dot.x+=dot.vx
				dot.y+=dot.vy
				if(!dot.isMouse) {
					if(dot.x<dot.r/2){
						dot.x = dot.r/2
						dot.vx *= -1
					}
					if(dot.y<(dot.r/2+60)){
						dot.y = dot.r/2+60
						dot.vy *= -1
					}
					if(dot.x>(width-dot.r/2)){
						dot.x = width-dot.r/2
						dot.vx *= -1
					}
					if(dot.y>(height-dot.r/2)){
						dot.y = height-dot.r/2
						dot.vy *= -1
					}
				}
				context.closePath()
				context.fill()
			})
			for(let i=0;i<dots.length;i++) {
				for(let j=i+1;j<dots.length;j++){
					drawLine(dots[i],dots[j],context,config)
				}
			}
			timer = requestAnimationFrame(()=>{
				drawDots(dots,context,config)
			})
		}
		function random(x,y) {
			return Math.random()*(y-x)+x
		}
		function getDistance(A,B) {
			let x = A.x-B.x,
				y = A.y-B.y
			return x*x+y*y
		}
	}
	componentWillUnmount() {
		cancelAnimationFrame(timer)
		document.removeEventListener('mousemove',handleMove)
		handleMove = null
		timer = null
	}
	render() {
		return <canvas ref="canvas" style={{ position:'absolute',left:0,top:0,zIndex:-1 }} ></canvas>
	}
}