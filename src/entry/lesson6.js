import React,{ Component } from 'react'
import { render } from 'react-dom'
import { LifeCycle } from '../container'

require('../style/base/base.less')
class App extends Component {
	render() {
		return <LifeCycle />
	}
}

render(<App />,document.getElementById('app'))
module.hot.accept()