import React,{ Component } from 'react'
import { Article } from '../Article.jsx'

export default class ErrorContent extends Component {
	render() {
		return (
			<Article title="无法找到该文章" >
				<p>您要寻找的文章已删除或者并不存在</p>
			</Article>
		)
	}
}