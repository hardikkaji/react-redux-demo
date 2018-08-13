import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from './duck/actions';

import PostForm from './PostForm';

class Posts extends Component {

	componentWillMount() {
		this.props.fetchPosts();
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.newPost) {
			this.props.posts.unshift(nextProps.newPost);
		}
	}

	render() {
		const postItems = this.props.posts.map(post => (
			<div key={post.id}>
				<h3>{post.title}</h3>
				<div>{post.body}</div>
			</div>
		));
		return (
			<div>
				<h1>Posts</h1>
				<PostForm />
				<hr/>
				{postItems}
			</div>
		);
	}
}

const mapStatesToProps = state => ({
	posts: state.post.posts,
	newPost: state.post.post
});

export default connect(mapStatesToProps, { fetchPosts })(Posts);
