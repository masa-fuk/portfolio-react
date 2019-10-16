import React from 'react';
import '../css/RightContent.css';
import { app } from './FirebaseSetting'
import { Route, Switch } from 'react-router-dom';
import BlogList from './BlogList';
import BlogContent from './BlogContent';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: ''
    };
    this.getFlamelinkData = this.getFlamelinkData.bind(this);
  }

  componentDidMount() {
    this.props.contentname('Blog');
    this.getFlamelinkData();
  }

  async getFlamelinkData() {
    const content = await app.content.get({
      schemaKey: 'content',
      fields: ['title', 'date']
    });
    console.log(content);
  
    this.setState({
      contents: content
    });
  }

  render() {
    return(
      <Switch>
        <Route
          path='/blog/list'
          render={()=> <BlogList
            contents={ this.state.contents }
          />}
        />
        <Route
          path='/blog/content/:item'
          component={BlogContent}
        />
      </Switch>
    )
  };
}

export default Blog;