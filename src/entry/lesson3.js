import React,{ Component } from 'react'
import { render } from 'react-dom'
import { Drag } from '../container'

require('../style/pages/base.less')
class App extends Component {
	render() {
		return <Drag />
	}
}

render(<App />,document.getElementById('app'))
module.hot.accept()