import React,{ Component } from 'react'

class LifeCycleChild extends Component {
	static defaultProps = { value:-1 }
	constructor() {
		super()
		this.state= { value:0}
	}
	componentWillMount() {
	//在完成首次渲染之前调用，此时仍可以修改组件的state。
	}
	componentDidMout() {
	//此时可以操作DOM
	}
	componentWillReceiveProps(props) {
	//组件接收到新的props时调用，并将其作为参数nextProps使用，此时可以更改组件props及state。
		this.setState({ value:this.state.value+props.value })
	}
	shouldComponentUpdate(nextProps,nextState) {
	//组件是否应当渲染新的props或state，返回false表示跳过后续的生命周期方法。
	//通常不需要使用以避免出现bug。在出现应用的瓶颈时，可通过该方法进行适当的优化。
		return true
	}
	componentWillUpdate() {
	//接收到新的props或者state后，进行渲染之前调用，此时不允许更新props或state。

	}
	componentDidUpdate(){
	//完成渲染新的props或者state后调用，此时可以访问到新的DOM元素。

	}
	componentWillUnmount() {
	//组件被移除之前被调用，可以用于做一些清理工作。
	//在componentDidMount方法中添加的所有任务都需要在该方法中撤销，比如创建的定时器或添加的事件监听器。
	}
	handleAdd() {
	this.setState({ value:this.state.value+1 })
	}
	handleMinus() {
		this.setState({ value:this.state.value-1 })
	}
	render(){
		console.log('I\'m rendering')
		/*
		**只能通过this.props和this.state访问数据
		**可以返回null、false或任何React组件
		**只能出现一个顶级组件（不能返回数组）
		**不能改变组件的状态
		**不能修改DOM的输出
		*/
		return(
			<div >
				<p>props:{ this.props.value }</p>
				<p>state: { this.state.value }</p>
				<button onClick={ this.handleAdd.bind(this) } >add 1</button>
				<button onClick={ this.handleMinus.bind(this) }  >minus 1</button>
			</div>
		)
	}
}
// LifeCycleChild.defaultProps = {
// 	value:'defaultProps'
// }
export class LifeCycle extends Component {
	constructor() {
		super()
		this.state = { value:0 }
	}
	handleAdd() {
		this.setState({ value:this.state.value+1 })
	}
	handleMinus() {
		this.setState({ value:this.state.value-1 })
	}
	render() {
		return (
			<div>
				<h2>生命周期函数</h2>
				<button onClick={ this.handleAdd.bind(this) } >add 1</button>
				<button onClick={ this.handleMinus.bind(this) }  >minus 1</button>
				<LifeCycleChild value={ this.state.value } />
			</div>
		)
	}
}
