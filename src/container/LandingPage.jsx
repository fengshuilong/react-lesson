import React,{ Component } from 'react'
import { Header,SearchBox } from '../component'
import { browserHistory } from 'react-router'
import { autobind } from 'core-decorators'

export class LandingPage extends Component {
	constructor() {
		super()
		this.state={ value:'' }
	} 
	handleSearch(keyword) {
		browserHistory.push(`/search?q=${keyword}`)
	}
	render() {
		return(
			<div className='landing-page' >
				<Header>
					<SearchBox
						activeClass="pull-right"
						placeholder="查找github账号" 
						buttonValue="搜索"
						onClick = { this.handleSearch }
					 />
				</Header>
				{ this.props.children }
			</div>
		)
	}
}
