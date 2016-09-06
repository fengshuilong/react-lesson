import React,{ Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore,combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { LandingPage } from './container'
import { MyIndex } from './component'
import * as reducers from './reducers/reducers'
import { Router,Route,browserHistory,Redirect,IndexRoute } from 'react-router'
import reactTapEventPlugin from 'react-tap-event-plugin'

reactTapEventPlugin()
require('./style/pages/index.less')

let store = createStore(combineReducers({...reducers}),applyMiddleware(thunk))
const loadComponentAsync = bundle=>(nextState,cb)=>bundle(component=>cb(null,component)) 

let route = (
	<Route>
		<Route path="/" component={ LandingPage } ></Route>
		<Route path="react"  getComponents={ (nextState,cb)=>require.ensure([],(require)=>cb(null,require('./container/ReactDemoPage.jsx'))) }>
			<IndexRoute getComponents={ loadComponentAsync(require('bundle?lazy!babel!./component/Lesson.jsx')) } ></IndexRoute>
			<Route path=":id"  getComponents={ loadComponentAsync(require('bundle?lazy!babel!./component/Lesson.jsx')) } ></Route>
		</Route>
		<Route path="search"     getComponents={ loadComponentAsync(require('bundle?lazy!babel!./container/SearchPage.jsx')) }></Route>
		<Route path="detail/:id" getComponents={ loadComponentAsync(require('bundle?lazy!babel!./container/DetailPage.jsx')) }></Route>
		<Route path="test"       getComponents={ loadComponentAsync(require('bundle?lazy!babel!./container/TestPage.jsx')) }></Route>
		<Redirect from="/index" to='/'  />
		<Route path="*" getComponents={ loadComponentAsync(require('bundle?lazy!babel!./container/ErrorPage.jsx')) }></Route>
	</Route>
)


let App = (
		<Provider store={ store } >
			<Router history={ browserHistory }  >
			{ route }
			</Router>
		</Provider>
	)
render(App,document.getElementById('app'))
