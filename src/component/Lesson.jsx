import React,{ Component } from 'react'
import { autobind } from 'core-decorators'
import { connect } from 'react-redux'
import { fetchLesson } from '../actions/fetchLesson.js'
import { Motion,spring } from 'react-motion'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper'

var config = {
	stiffness:360,
	damping:25
}

@connect((state)=>{
	return {
		Content:state.lesson
	}
})
class Lesson extends Component {
	componentDidMount() {
		let { id } = this.props.params
		if(!id)id=0
		this.props.dispatch(fetchLesson(id))
	}	
	componentDidUpdate() {
		let { id } = this.props.params
		if(!id)id=0
		this.props.dispatch(fetchLesson(id))
	}
	render() {
		let { Content } = this.props
		return (
			<MuiThemeProvider>
				<Motion defaultStyle={{ opacity:0,scale:0.9 }} style={{ opacity:spring(1,config),scale:spring(1,config) }} >
					{ style=>{
						return <Paper zDepth={ 3 } style={{ minHeight:'500px',padding:'20px 30px',marginBottom:'50px',opacity:style.opacity,transform:`scale(${style.scale})` }} >
									<Content />
								</Paper>
					} }
				</Motion>

			</MuiThemeProvider>
		)
	}
}

module.exports = Lesson