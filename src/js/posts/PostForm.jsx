import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from './duck/actions';

class PostForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			body: ''
		};

		this._onChange = this._onChange.bind(this);
		this._onSubmit = this._onSubmit.bind(this);
	}

	_onChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	_onSubmit(event) {
		event.preventDefault();

		const post = {
			title: this.state.title,
			body: this.state.body
		}

		this.props.createPost(post);
	}

	render() {
		return (
			<form onSubmit={this._onSubmit}>
				<div>
					<label htmlFor="">Title:</label><br/>
					<input type="text" name="title" onChange={this._onChange}/>
				</div>
				<br/>
				<div>
					<label htmlFor="">Body:</label><br/>
					<textarea name="body" onChange={this._onChange} />
				</div>
				<br/>
				<div>
					<button name="Submit">Submit</button>
				</div>
			</form>
		);
	}
}

export default connect(null, { createPost })(PostForm);
