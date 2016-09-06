import React,{ Component } from 'react'

export class Article extends Component {
	static defaultProps = {
		title:''
	}
	render() {
		let { title,children } = this.props
		return (
			<div className='article'>
				<h3 className="article-title">{ title }</h3>
				<div className="article-content" >
					{ children }
				</div>
			</div>
		)
	}
} 