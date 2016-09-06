import React,{ Component } from 'react'
import { StaggeredMotion } from 'react-motion'

let timer = null
export default class Carousel extends Component {
	componentWillUnMount() {
		clearInterval(timer)
	}
	render() {
		return (
			<div className="carousel" >

			</div>
		)
	}
}