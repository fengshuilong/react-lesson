import React,{ Component } from 'react'
import { render } from 'react-dom'
import { InputBox } from '../container'

require('../style/pages/base.less')
require('../style/pages/lesson4.less')

class App extends Component {
	render() {
		return <InputBox />
	}
}

render(<App />,document.getElementById('app'))
module.hot.accept()