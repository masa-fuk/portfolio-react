import React from 'react';
import '../css/RightContent.css';
import { firebaseApp } from './FirebaseSetting'
import flamelink from 'flamelink/app';
import 'flamelink/content';
import 'flamelink/storage';
import { Route, Switch } from 'react-router-dom';
import BlogList from './BlogList';
import BlogContent from './BlogContent';

class Blog extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			app: flamelink({
				firebaseApp,
      	env: 'production',
      	locale: 'en-US',
      	dbType: 'cf'
			}),
			contents: ''
		};
	}

	componentDidMount() {
		this.props.contentname('Blog');
		this.getFlamelinkData();
	}

	async getFlamelinkData() {
		const content = await this.state.app.content.get({
			schemaKey: 'content',
			fields: ['title', 'date']
		});
		console.log(content);
	
		this.setState({
			contents: content
		})
	}

	render() {
		return(
			<div className='RightContent'>
				<div className='Content'>
					<Switch>
						<Route
							path='/blog/list'
							render={()=> <BlogList contents={ this.state.contents }/>}
						/>
						<Route
							path='/blog/content'
							render={()=> <BlogContent contentname={ this.props.contentname } />}
						/>
					</Switch>
				</div>
			</div>
		)
	};
}

export default Blog;