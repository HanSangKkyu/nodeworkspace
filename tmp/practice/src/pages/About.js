import React, { Component } from 'react';
import queryString from 'query-string';
import axios from 'axios'

class About extends Component{
	constructor(props){
		super(props)
		this.state = {
			data : 1,
			data1 : 2,
			query : queryString.parse(this.props.location.search)
		}

		// console.log(this.state.data)
		// console.log(this.state.data1)
		// console.log(this.props.match.params.name)
		console.log(this.props.location)

		this.clicked = this.clicked.bind(this)
	}

	componentWillMount(){
		// state, props들이 마운트되는 과정
		// 여기서 AJAX 통신하는 것이 좋겠죠?
		axios.get('https://api.github.com/users/hansangkkyu').then( response => {
			// console.log(response)
			const res = response
			const listItem = res.data.map((item) =>
			    <li>{item}</li>
			);


			this.setState({
				data : response.data.bio,
				listItem : listItem
			})
			this.state.data = response.data.bio
		})
	}

	render(){
	    return (
	        <div>
	            <h2>About</h2>
	            <p>
	            	{this.props.match.params.name}
	            </p>
	            <p>
	            	{this.state.query.detail}
	            </p>
	            <p>
	            	{this.state.data}
	            </p>
	            <p>
	            	{this.state.data1}
	            </p>
	            <input type='button' value='click' onClick={this.clicked}/>
	            <div>{this.state.listItem}</div>
	        </div>
	    );		
	}

	componentDidMount(){
		// state, props들이 마운트 완료됨
	}


	clicked(){
		this.setState({
			data1 : this.state.data1 + 1
		})
	}
}

export default About;