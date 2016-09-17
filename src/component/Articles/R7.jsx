import React,{ Component } from 'react'
import { Article } from '../Article.jsx'
import { A } from '../../component'

let flux   = require('../../style/images/flux.jpeg'),
	mvc    = require('../../style/images/mvc.jpeg'),
	fluxLg = require('../../style/images/fluxLarge.jpeg')

export default class R7 extends Component {
	render() {
		return (
			<Article title="Redux" >
				<p>facebook提出了一种新的有别于MVC的架构思想，flux。并基于此，推出了一个flux库。有很多人也基于flux思想推出了自己的库。而redux就是一个使用广泛的库。</p>
				<figure>
					<img src={ flux } />
					<figcaption>Flux基本思想</figcaption>
				</figure>
				<figure>
					<img src={ mvc } />
					<figcaption>复杂的MVC实例</figcaption>
				</figure>
				<figure>
					<img src={ fluxLg }  />
					<figcaption>复杂的FLUX实例</figcaption>
				</figure>
				<p>Redux与传统flux区别在于，它只有一个store，所有的数据都存在一个大的store中</p>
				<p>在redux中，action和reducer都必须是纯函数。所谓纯函数即对于同样的输入必定有同样的输出。</p>
				<p>Redux包含如下方法，createStore、combineReducers、bindActionCreators、compose、applyMiddleware</p>
				<p>现在我们来构建一个简单的redux应用<A target="9" value="redux demo" /></p>
				<h4>redux与react-redux</h4>
				<p>Redux其实是一个独立的库，它可以和react结合用，也可以和别的框架组合。与react结合使用的时候我们需要引入一个react-redux。它有两个方法，provider和connect</p>
				<p>再来结合react构建一个redux应用<A target="10" value="react-redux demo" /></p>
				<h4>redux-thunk</h4>
				<p>redux要求reducer必须是一个纯函数，但是我们在与服务器交互时，这是一个异步的过程，这样就不能保证reducer是一个纯函数</p>
				<p>此时我们需要引入一个中间件，redux-thunk</p>
				<p>结合redux-thunk，来构建一个异步案例,<A target='11' value="redux-thunk demo" /></p>
			</Article>
		)
	}
}