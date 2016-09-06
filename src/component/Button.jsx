import React,{ Component } from 'react'
import { autobind } from 'core-decorators'
import { TransitionMotion,spring } from 'react-motion'

export default class Button extends Component {
	static defaultProps= {
		value:'',
		className:''
	}
	constructor(){
		super()
		this.state = { mouse:[],now:'t'+0 }
	}
	@autobind
	handleClick(e) {
		// let { offsetX,offsetY } = e.nativeEvent
		// console.log(e.target)
		// console.log(offsetX,offsetY)
		// this.setState({
		// 	mouse:[ offsetX,offsetY ],
		// 	now:'t'+Date.now() 
		//  })
		this.props.onClick(e)
	}
	// @autobind
	// willLeave() {
	// 	return {
	// 		opacity:spring(0),
	// 		scale:spring(1)
	// 	}
	// }
	render() {
		let { value,className,onClick,style } = this.props
		return (
			<button className={ `btn ${className}`}  onClick={ this.handleClick } style={{ ...style }} >
			{ value }
			</button>
		)
		/*return (
			<TransitionMotion willLeave={ this.willLeave } styles={ styles }  >
				{
					circles=>
					<button className={ `btn ${className}`}  onClick={ this.handleClick } style={{ ...style }} >
					{ value }
					{
						circles.map(({ key,style:{ opacity,scale,left,top }})=>
							<div className="ball" key={ key } style={{ opacity,transform:`translate(${left}px,${top}px) scale(${scale})` }} ></div>
						)
					}
					</button>
				}	
			</TransitionMotion>
		)*/
	}
}