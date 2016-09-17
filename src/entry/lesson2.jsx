import React,{ Component } from 'react'
import { render } from 'react-dom'

require('../style/base/base.less')


class Vue extends Component {
	render() {
		let { textAlign,value } = this.props
		return <p style={{ textAlign }} >{ value }</p>
	}
}
class Hello extends Component {
	render() {
		return (
			<div>
				<h2 className="text-center" >Hello React!</h2>
				{ this.props.children }
			</div>
		)
	}
}

class App extends Component {
	render() {
		return (
			<div>
				<Hello>
					<Vue textAlign="center" value="我是Vue,我不是React" />
				</Hello>
			</div>
		)
	}
}
render(<App />,document.getElementById('app'))
module.hot.accept()