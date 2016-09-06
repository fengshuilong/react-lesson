import React,{ Component } from 'react'
import { Article } from '../Article.jsx'

let flux   = require('../../style/images/flux.jpeg'),
	mvc    = require('../../style/images/mvc.jpeg'),
	fluxLg = require('../../style/images/fluxLarge.jpeg')

export default class R7 extends Component {
	render() {
		return (
			<Article title="Redux" >
				<p>facebook提出了一种新的有别于MVC的架构思想，flux。并基于此，推出了一个flux库。但是这个库并不是很完善，因此有很多人也基于flux思想推出了自己的库。而redux就是一个使用广泛的库。</p>
				<img src={ flux } />
				<img src={ mvc } />
				<img src={ fluxLg }  />
				<h4>redux与react-redux</h4>
				<p>Redux包含如下方法，createStore、combineReducers、bindActionCreators、compose、applyMiddleware</p>
				<p>Redux其实是一个独立的库，它可以和react结合用，也可以和别的框架组合。与react结合使用的时候我们需要引入一个react-redux。它有两个方法，provider和connect</p>
				<h4>redux-thunk</h4>
				<p>redux要求reducer必须是一个纯函数，但是我们在与服务器交互时，这是一个异步的过程，这样就不能保证reducer是一个纯函数</p>
				<p>此时我们需要引入一个中间价，redux-thunk</p>
			</Article>
		)
	}
}