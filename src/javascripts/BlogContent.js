import React from 'react';
import '../css/RightContent.css'
import { app } from './FirebaseSetting';

class BlogContent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			contents: ''
		};
		this.getFlamelinkOnceData = this.getFlamelinkOnceData.bind(this);
	}

	componentDidMount() {
		this.getFlamelinkOnceData();
	}

	async getFlamelinkOnceData() {
		const { item } = this.props.match.params;
		const content = await app.content.get({
			schemaKey: 'content',
			entryId: item
		});
		console.log(content);

		this.setState({
			contents: content
		});
	}

	render() {
		return (
			<div className='RightContent'>
				<div className='Content'>
					{ this.state.contents.content }
				</div>
			</div>
		)
	};
}

export default BlogContent;