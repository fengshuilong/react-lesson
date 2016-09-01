import React,{ Component } from 'react'
import { render } from 'react-dom'
import { Count } from '../container'

require('../style/base/base.less')
class App extends Component {
	render() {
		return <Count />
	}
}

render(<App />,document.getElementById('app'))
module.hot.accept()