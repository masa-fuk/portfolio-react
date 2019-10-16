import React from 'react';
import '../css/RightContent.css'
import { app } from './FirebaseSetting';

class BlogContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
    this.getFlamelinkOnceData = this.getFlamelinkOnceData.bind(this);
  }

  componentDidMount() {
    this.getFlamelinkOnceData();
  }

  async getFlamelinkOnceData() {
    const { item } = this.props.match.params;
    const downloadContent = await app.content.get({
      schemaKey: 'content',
      entryId: item
    });
    console.log(downloadContent);
    
    this.setState({
      content: downloadContent,
    });
  }

  render() {
    return (
      <div className='RightContent'>
        <div className='Content'>
          <div dangerouslySetInnerHTML={{__html: this.state.content.content}}>

          </div>
        </div>
      </div>
    )
  };
}

export default BlogContent;