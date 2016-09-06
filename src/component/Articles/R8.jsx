import React,{ Component } from 'react'
import { Article } from '../Article.jsx'



export default class R8 extends Component {
	render() {
		return (
			<Article title="react-router" >
				<p>react-router也是以组件的形式，最外层是一个Router，接收一个history</p>
				<p>Router的component 属性接收一个react组件，path匹配路径，我们可以通过:params的方式匹配动态的路由</p>
				<p>路由的各个属性可以在this.props上看到</p>
				<h3>异步加载</h3>
				<p>在面对一个单页面应用的时候，假如我们进入首页，我们其实是不需要加载首页之外的内容的，所以我们可以动态加载，进入某个页面再去加载相应的内容</p>
				<p>react提供了一个getComponents方法让我们异步加载，除此之外我们还需要配合webpack的代码分割,code splitting</p>
				<p>webpack的异步加载有两种方法,一种是require.ensure([],(require)=>require(''))</p>
				<p>还有一种是webpack的bundle-loader</p>
				<p>推荐使用bundle-loader</p>
			</Article>
		)
	}
}