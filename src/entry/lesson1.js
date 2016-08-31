import React,{ Component } from 'react'
import { render } from 'react-dom'
import { Start } from '../container'

require('../style/pages/base.less')
class App extends Component {
	render() {
		return <Start value="Hello,React" />
	}
}
render(<App />,document.getElementById('app'))
module.hot.accept()