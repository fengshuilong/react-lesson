import React,{ Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore,combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { SearchUser } from '../container'
import * as reducers from '../reducers/usersReducer.js'

require('../style/pages/base.less')
let store = createStore(combineReducers({...reducers}),applyMiddleware(thunk))
let App = (
		<Provider store = { store }>
			<SearchUser />
		</Provider>
	)
render(App,document.getElementById('app'))
module.hot.accept()