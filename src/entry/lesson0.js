import React,{ Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore,combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { LandingPage } from '../container'
import { MyIndex } from '../component'
import * as reducers from '../reducers/usersReducer.js'
import { Router,Route,browserHistory,Redirect,IndexRoute } from 'react-router'

require('../style/pages/base.less')
let store = createStore(combineReducers({...reducers}),applyMiddleware(thunk))

module.hot.accept()

const loadComponentAsync = bundle=>(nextState,cb)=>bundle(component=>cb(null,component)) 

let App = (
		<Router history={ browserHistory } >
			<Route path="/" component={ LandingPage } >
				<IndexRoute component={ MyIndex }  />
				<Route path="lesson"  getComponents={ (nextState,cb)=>require.ensure([],(require)=>cb(null,require('../component/Links.jsx'))) }></Route>
			</Route>
			<Redirect from="/index" to='/'  />
			<Route path="*" getComponents={ loadComponentAsync(require('bundle?lazy!babel!../container/ErrorPage.jsx')) }></Route>
		</Router>
	)
render(App,document.getElementById('app'))
