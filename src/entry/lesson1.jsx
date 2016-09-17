import React,{ Component } from 'react'
import { render } from 'react-dom'

require('../style/base/base.less')

class Hello extends Component {
	render() {
		return (
			<h2 className="text-center" >Hello React!</h2>
		)
	}
}

render(<Hello />,document.getElementById('app'))
module.hot.accept()