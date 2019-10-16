import React from 'react';
import '../css/RightContent.css'
import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


class BlogList extends React.Component {
  render() {
    return (
      <div className='RightContent'>
        <div className='Content'>
          { Object.keys(this.props.contents).map((item) =>
            <div key={item}>
              <Card>
                <CardContent>
                  <Typography>
                    { this.props.contents[item].date }
                  </Typography>
                  <Typography>
                    { this.props.contents[item].title }
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size='small'>
                    <Link to={ `/blog/content/${item}` }>詳細</Link>
                  </Button>
                </CardActions>
              </Card>
            </div>
          ) }
        </div>
      </div>
    )
  };
}

export default BlogList;