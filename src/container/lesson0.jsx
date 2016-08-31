import React,{ Component } from 'react'
import { Header,Links } from '../component'


export class LandingPage extends Component {
	render() {
		return(
			<div className='center' >
				<Header value="这里是freeeeaker的react demo!!!" />
				{ this.props.children }
			</div>
		)
	}
}
