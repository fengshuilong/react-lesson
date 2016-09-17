import React,{ Component } from 'react'
import { browserHistory } from 'react-router'
import { range } from 'lodash'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import { Header } from '../component'

let arr = ['引言','JSX语法','React组件','React事件','状态管理','生命周期函数','组件间通信','redux','react-router','高阶组件','react动画','性能优化']
let springConfig = { stiffness:300,damping:26 }

console.log(React)
class ReactDemoList extends Component {
	render() {
		return (
				<MuiThemeProvider>
					<div className="react-demo-page" >
						<Header />
						<div className="content">
							<div className="container">
								<div className="row">
									<div className="col-md-2 ">
										<Menu style={{ width:'100%' }} listStyle={{ boxShadow:'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px',paddingTop:'0',paddingRight:'0',paddingBottom:'0',display:'block' }} >
											{
												arr.map((item,index)=>{
													let url = `/react/${index}`
													if(index==0)url='/react'
													return <MenuItem 
													innerDivStyle={{ fontFamily:'pf',fontSize:'14px',lineHeight:'40px',paddingRight:0 }} 
													key={ `item-${index}` } 
													onClick={ ()=>browserHistory.push(url) }
													>{ item }</MenuItem>
												})
											}
										</Menu>
									</div>
									<div className="col-md-9 col-md-offset-1">
										{ React.cloneElement(this.props.children,{ key:Math.random() }) }
									</div>
								</div>
							</div>
						</div>
					</div>
				</MuiThemeProvider>
		)
	}
}

module.exports = ReactDemoList