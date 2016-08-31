import React,{ Component,PropTypes } from 'react'
import { Item } from './Item.jsx'

export class ItemList extends Component {
	render() {
		let { lists,kind } = this.props
		return (
			<ul>
				{
					lists.filter((list)=>{
						switch(kind) {
							case 'all':
							return true
							case 'completed':
							return list.done ==true
							case 'active':
							return list.done !=true
						}
					}).map((item,index)=>{
						return <Item key={`todo-${index}`} index={ index } done={ item.done } value={ item.value } />
					})
				}
			</ul>
		)
	}
}