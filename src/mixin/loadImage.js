import React, { Component } from 'react'
let loadingImageSrc = require('../style/images/loading.gif')
export default function cachedImage(Ig) {
	return class extends Component {
		constructor(){
			super()
			this.state ={ src:loadingImageSrc }
		}
		shouldComponentUpdate(nextProps) {
			console.log(this.props.src)
			console.log(nextProps.src)
			if(this.props.src==nextProps.src)return false
			return true
		}
		componentDidUpdate() {
			let i = new Image(),
				src = this.props.src
			i.onload=()=>{
				this.setState({ src:src })
			}
			i.src = src
		}
		alert() {
			alert('ja')
		}
		render() {
			return <Ig data={ this.state.src } { ...this.props } alert={ this.alert } />
		}
	}
}