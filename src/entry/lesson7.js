import React,{ Component } from 'react'
import { render } from 'react-dom'
import { SuperClass } from '../container'

require('../style/pages/base.less')
class App extends Component {
	render() {
		return <SuperClass />
	}
}

render(<App />,document.getElementById('app'))
module.hot.accept()