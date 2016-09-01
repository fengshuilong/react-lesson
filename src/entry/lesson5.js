import React,{ Component } from 'react'
import { render } from 'react-dom'
import { TodoList } from '../container'

require('../style/base/base.less')
require('../style/pages/lesson5.less')
class App extends Component {
	render() {
		return <TodoList />
	}
}

render(<App />,document.getElementById('app'))
module.hot.accept()