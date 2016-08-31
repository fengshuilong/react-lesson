import React,{ Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore,combineReducers } from 'redux'
import * as reducers from '../reducers/shoppingListReducer.js'
import { ShoppingList } from '../container'

require('../style/pages/base.less')
var store = createStore(combineReducers({...reducers}))
let App = (
		<Provider store = { store }>
			<ShoppingList />
		</Provider>
	)
render(App,document.getElementById('app'))
module.hot.accept()