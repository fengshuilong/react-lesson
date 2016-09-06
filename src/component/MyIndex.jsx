import React,{ Component } from 'react'
import { browserHistory } from 'react-router'
import { Motion,spring } from 'react-motion'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


export class MyIndex extends Component {
	render() {
		return (
				<MuiThemeProvider>
					<div className="content">
						<div className="container">
							<h1 className='rotate-translate-scale-in' >React Lesson</h1>
							<div className="overview row">
								<div className="col-md-6 col-md-offset-3" >
									<p className="left-in-delay-500ms" >React,新一代前端UI框架</p>
									<p className="right-in-delay-500ms" >从此愉快的构建web项目</p>
								</div>
							</div>
							<div className="text-center main-button-container scale-in-delay-500ms ">
								<RaisedButton 
									style={{ width:'120px' }} 
									onClick={ ()=>browserHistory.push('/react') } 
									><span style={{ fontFamily:'pf' }} >Start Learning</span></RaisedButton>
							</div>
						</div>
						<canvas ref="canvas" ></canvas>
					</div>
				</MuiThemeProvider>
		)
	}
}

// <p>React是Facebook推出的一款不同于以往的前端框架，有很多公司都在尝试它</p>
// <p>但是React的上手难度没有想象的那么低，熟练使用还需要掌握很多知识点。</p>
// <p>ES6,webpack，react，react-router，reudx以及一些函数式编程的思想</p>
// <p>除此之外React处理动画还不是很容易，很多东西大家都在尝试，想寻找一个最佳实践</p>
// <p>这个教程也只能带大家初步了解React，更多的东西只能靠大家自己不断地学习</p>
// <p>如果以后有机会，希望给大家再分享一个react的高级一点的内容</p>

