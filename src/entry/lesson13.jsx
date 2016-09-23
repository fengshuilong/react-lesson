import React,{ Component } from 'react'
import { render } from 'react-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import ReactTransitionGroup from 'react-addons-transition-group'
import { Motion,StaggeredMotion,TransitionMotion,spring } from 'react-motion'

require('../style/base/base.less')
require('../style/pages/lesson13.less')
class List extends Component {
	constructor() {
		super()
		this.state = { list:[{key: 'a', size: 20,value:'1111'}, {key: 'b', size: 20,value:'222'}, {key: 'c', size: 20,value:'333'}],value:'' }
		this.remove = this.remove.bind(this)
		this.handleClick = this.handleClick.bind(this)
		this.handleKeyDown = this.handleKeyDown.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(e) {
		this.setState({ value:e.target.value })
	}
	handleKeyDown(e) {
		if(e.nativeEvent.keyCode==13) {
			this.handleClick()
		}
	}
	handleClick() {
		let node = this.refs.in,
			value = node.value
		if(value){
			this.setState({ list:[...this.state.list,{ key:'a'+Math.random(),value,size:spring(20) }],value:'' })
		}
	}
	remove(index) {
		console.log(index)
		this.setState({ list:[...this.state.list.slice(0,index),...this.state.list.slice(index+1)] })
	}
	willEnter() {
		return { height:0 }
	}
	willLeave() {
	   // triggered when c's gone. Keeping c until its width/height reach 0.
	   return { height: spring(0)};
	}
	render() {
		let { list,value } = this.state
		return (
			<div className="container" >
				<Motion defaultStyle={{ opacity:0,x:100 }} style={{ opacity:spring(1),x:spring(0) }} >
					{
						insertStyle =><h2 style={{ opacity:insertStyle.opacity,transform:`translate(${insertStyle.x}px,${insertStyle.x}px)` }} >react-motion</h2>
					}
				</Motion>
				<StaggeredMotion
				  defaultStyles={[{h: 0}, {h: 0}, {h: 0}]}
				  styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
				    return i === 0
				      ? {h: spring(40)}
				      : {h: spring(prevInterpolatedStyles[i - 1].h)}
				  })}>
				  {interpolatingStyles =>
				    <div>
				      {interpolatingStyles.map((style, i) =>
				        <div key={i} style={{border: '1px solid', height: style.h}} />)
				      }
				    </div>
				  }
				</StaggeredMotion>
				<div>
					<input value={ value } onChange={ this.handleChange } ref="in" type="text" onKeyDown={ this.handleKeyDown } />
					<button onClick={ this.handleClick } >add</button>
				</div>
				<TransitionMotion
					willEnter = { this.willEnter }
				    willLeave = {this.willLeave}
				    styles = {this.state.list.map(item => ({
				         key: item.key,
				         style: { height: item.size},
				         data:item.value
				       }))}>
				       {interpolatedStyles =>
				         // first render: a, b, c. Second: still a, b, c! Only last one's a, b.
				         <div>
				           {interpolatedStyles.map( (config,index) => {
				             return <div key={config.key} style={{...config.style, border: '1px solid',overflow:'hidden',marginTop:'20px'}} onClick={ ()=>this.remove(index) } >{ config.data }</div>
				           })}
				         </div>
				       }
				</TransitionMotion>
			</div>
		)
	}
}


render(<List />,document.getElementById('app'))
module.hot.accept()