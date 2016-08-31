import React,{ Component } from 'react'
import { render } from 'react-dom'
import { IndexPage,MainPage,OtherPage } from '../component'
import { Router,Route,browserHistory,IndexRoute } from 'react-router'

require('../style/pages/base.less')
let App = (
			<Router history={ browserHistory }>
				<Route path="/lesson10.html" component={ IndexPage } >
					<IndexRoute component={ MainPage } />
					<Route path="other" component = { OtherPage }></Route>
				</Route>
			</Router>
	)
render(App,document.getElementById('app'))
module.hot.accept()