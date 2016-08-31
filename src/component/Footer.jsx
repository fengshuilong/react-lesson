import React,{ Component } from 'react'

export class Footer extends Component {
	handleClick(e){
		switch(e.target.getAttribute('data-type')){
			case 'all':
				return this.props.handleSelect('all')
			case 'completed':
				return this.props.handleSelect('completed')
			case 'active':
				return this.props.handleSelect('active')
		}
	}
	render() {
		return (
			<div>
				<button type="button" onClick={ this.handleClick.bind(this) } data-type="all"  >all</button>
				<button type="button" onClick={ this.handleClick.bind(this) } data-type="completed"  >completed</button>
				<button type="button" onClick={ this.handleClick.bind(this) } data-type="active"  >active</button>
			</div>
		)
	}
}