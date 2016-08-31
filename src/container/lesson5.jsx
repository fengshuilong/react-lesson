import React,{ Component } from 'react'
import { List } from '../component'



export class TodoList extends Component {
	constructor() {
		super()
		this.state = { listValues:[],value:'',type:'',index:0 }
	}
	handleTypeChange(e) {
		this.setState({ type:e.target.value })
	}
	handleChange() {
		this.setState({ value:this.refs.in.value })
	}
	handleKeyDown(e) {
		let target = this.refs.in,
			value = target.value
		if(!value)return
		if(e.nativeEvent.keyCode==13) {
			this.setState({ 
				listValues:[...this.state.listValues,{ value,done:false,index:this.state.index }],
				value:'',
				index:this.state.index+1
			 })
		}
	}
	handleDelete(index,e) {
		let count = 0;
		console.log(index)
		for(let i=0;i<this.state.listValues.length;i++) {
			if(this.state.listValues[i].index==index)break
			count++
		}
		this.setState({ 
			listValues:[...this.state.listValues.slice(0,count),...this.state.listValues.slice(count+1)] })
		e.stopPropagation()
	}
	handleDone(index) {
		let done=this.state.listValues[index].done?false:true
		this.setState({
			listValues:[
			...this.state.listValues.slice(0,index),
			Object.assign({},this.state.listValues[index],{ done }),
			...this.state.listValues.slice(index+1)
			]
		})
	}
	selectList(state,type) {
		switch(type) {
			case 'done':
				return state.filter(item=>item.done==true)
			case 'todo':
				return state.filter(item=>item.done==false)
			default:
				return state 
		}
	}
	render() {
		let type  = this.state.type,
			list  = this.selectList(this.state.listValues,type),
			total = this.state.listValues.length,
			todo  = this.selectList(this.state.listValues,'todo').length,
			done  = total - todo,
			checkBox = null,
			footer = null
		if(total>0) {
			checkBox = (
				<div>
					<input 
						type     = "radio" 
						name     = "type" 
						ref      = "all" 
						value    = "all" 
						defaultChecked={ true }
						onChange  = { this.handleTypeChange.bind(this) }  
						id="all" 
					/>
					<label htmlFor="all">全部事项</label>
					<input 
						type ="radio" 
						name ="type" 
						id   ="todo"  
						ref  ="todo" 
						value = "todo"
						onChange={ this.handleTypeChange.bind(this) }
					 />
					<label htmlFor="todo" >待办事项</label>
					<input 
						type = "radio" 
						name = "type" 
						id   = "done" 
						ref  = "done" 
						value = "done"  
						onChange  = { this.handleTypeChange.bind(this) }
					/>
					<label htmlFor="done" >已完成事项</label>
				</div>
			)
			footer = (
				<footer>
					<span>总计:{ total }</span>
					<span>已完成:{ done }</span>
					<span>待完成:{ todo }</span>
				</footer>
			)
		}
		return (
			<div>
				<h2>TodoList</h2>
				<input 
					value       = { this.state.value }
					ref         = 'in'
					placeholder = "输入要完成的任务"
					onChange    = { this.handleChange.bind(this) }
					onKeyDown   = { this.handleKeyDown.bind(this) }
				/>
				{
					checkBox
				}
				<ol>
					{
						list.map((item)=>{
							return <List 
								value  = { item.value }
								done   = { item.done }
								key    = { `list-${item.index}` }
								index  = { item.index }
								delete = { this.handleDelete.bind(this,item.index) }
								handleDone  = { this.handleDone.bind(this,item.index) }
							 />
						})
					}
				</ol>
				{
					footer
				}
			</div>
		)
	}
}