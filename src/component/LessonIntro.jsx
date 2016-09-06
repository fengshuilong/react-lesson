import React,{ Component } from 'react'

class LessonIntro extends Component {
	render() {
		return (
			<div>
				<p className="bottom-in" >React是Facebook推出的一款不同于以往的前端框架，有很多公司都在尝试它</p>
				<p className="bottom-in" >但是React的上手难度没有想象的那么低，熟练使用还需要掌握很多知识点。</p>
				<p className="bottom-in" >ES6,webpack，react，react-router，reudx以及一些函数式编程的思想</p>
				<p className="bottom-in" >除此之外React处理动画还不是很容易，很多东西大家都在尝试，想寻找一个最佳实践</p>
				<p className="bottom-in" >这个教程也只能带大家初步了解React，更多的东西只能靠大家自己不断地学习</p>
				<p className="bottom-in" >如果以后有机会，希望给大家再分享一个react的高级一点的内容</p>
			</div>
		)
	}
}
module.exports = LessonIntro