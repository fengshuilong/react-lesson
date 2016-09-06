import React,{ Component } from 'react'
import { fetchUsers } from '../actions/fetchUsers.js'
import { connect } from 'react-redux'
import { autobind } from 'core-decorators'
import { browserHistory,replaceState } from 'react-router'
import Header from '../component/Header.jsx'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Table from 'material-ui/Table'
import TableRow from 'material-ui/Table/TableRow'
import TableRowColumn from 'material-ui/Table/TableRowColumn'
import TableHeader from 'material-ui/Table/TableHeader'
import TableHeaderColumn from 'material-ui/Table/TableHeaderColumn'
import TableBody from 'material-ui/Table/TableBody'
import TableFooter from 'material-ui/Table/TableFooter'
import * as sss from 'react-router'
console.log(sss)
@connect((state)=>{
	return {
		users:state.users
	}
})
 class SearchPage extends Component {
 	componentDidMount() {
 		let { q } = this.props.location.query
 		if(q) {
			this.props.dispatch(fetchUsers(q))
 		}
 	}	
 	@autobind
	handleClickSearch(){
		let node = this.refs.in,
			value = node.value.trim()
		if(!value)return
		location.assign(`/search?q=${value}`)
	}
	@autobind
	handleClickMore(rowNumber,columnKey) {
		if(columnKey==3) {
			browserHistory.push(`/detail/${this.props.users[rowNumber].login}`)
		}
	}
	@autobind
	handleHoverRow(row) {

	}	
	@autobind
	handleHoverRowExit(row) {

	}						
	render() {
		let users = this.props.users
		console.log(users)
		return (
			<div className="search-page">
				<Header />
				<div className="container">
					<h2>查询github账号</h2>
					<p><span onClick={ ()=>browserHistory.goBack() }>返回</span></p>
					<div style={{ marginBottom:'20px' }} >
						<input type="text"ref="in" />
						<button onClick={ this.handleClickSearch } >搜索</button>
					</div>
					<MuiThemeProvider>
						<Table>
							<TableHeader displaySelectAll={ false } adjustForCheckbox={ false } enableSelectAll={ false } >
								<TableRow>
									<TableHeaderColumn colSpan={ 3 } style={{ textAlign:'center' }} >Github 用户列表</TableHeaderColumn>
								</TableRow>
								<TableRow >
									<TableHeaderColumn>id</TableHeaderColumn>
									<TableHeaderColumn>name</TableHeaderColumn>
									<TableHeaderColumn>detail</TableHeaderColumn>
								</TableRow>
							</TableHeader>
						</Table>
					</MuiThemeProvider>
					<MuiThemeProvider>
						<Table 
							onCellClick= { this.handleClickMore }
							onRowHover = { this.handleHoverRow } 
							onRowHoverExit = { this.handleHoverRowExit }
						>
							<TableBody stripedRows={ true } displayRowCheckbox= { false }  >
							{
								users.map((item,index)=>{
									return (<TableRow key={ `users-${index}` }   >
												<TableRowColumn>{ index+1 }</TableRowColumn>
												<TableRowColumn>{ item.login }</TableRowColumn>
												<TableRowColumn  ><div className="table-more" >详细</div></TableRowColumn>
											</TableRow>
										)
								})
							}		
							</TableBody>
						</Table>
					</MuiThemeProvider>
				</div>
			</div>
		)
	}	
}
module.exports = SearchPage
/*<TableBody>
	{
	users.map((item,index)=>{
		console.log(item.login)
		return (<TableRow key={ `users-${index}` } >
					<TableRowColumn>{ index+1 }</TableRowColumn>
					<TableRowColumn>{ item.login }</TableRowColumn>
					<TableRowColumn>详细</TableRowColumn>
				</TableRow>
			)
	})
}		
</TableBody>*/
