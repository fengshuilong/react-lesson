import React,{ Component } from 'react'
import { Header,SearchBox } from '../component'
import { browserHistory } from 'react-router'
import { autobind } from 'core-decorators'
import { Motion,spring } from 'react-motion'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LandingPageAnimation from '../component/LandingAnimation.jsx'

let timer = null;

export class LandingPage extends Component {
	constructor() {
		super()
		this.state={ value:'' }
	} 
	componentWillMout() {
		clearInterval(timer)
	}
	componentDidMount() {

	}
	componentWillUnmount() {
		clearInterval(timer)
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
									primary = { true }
									style={{ width:'140px' }}
									onClick={ ()=>browserHistory.push('/react') } 
									><span style={{ fontFamily:'pf',color:'#fff' }} >Start Learning</span></RaisedButton>
							</div>
						</div>
					</div>
				</MuiThemeProvider>
				<LandingPageAnimation />
			</div>
		)
	}
}
