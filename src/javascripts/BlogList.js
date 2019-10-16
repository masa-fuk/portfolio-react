import React from 'react';
import '../css/RightContent.css'
import { Card, CardContent, Typography} from '@material-ui/core';
import { Link } from 'react-router-dom';


class BlogList extends React.Component {
  render() {
    return (
      <div className='RightContent'>
        <div className='Content'>
          { Object.keys(this.props.contents).map((item) =>
            <div key={item}>
              <Link to={ `/blog/content/${item}` }>
              <Card>
                <CardContent>
                  <Typography>
                    { this.props.contents[item].date }
                  </Typography>
                  <Typography variant='h4'>
                    { this.props.contents[item].title }
                  </Typography>
                </CardContent>
              </Card>
              </Link>
            </div>
          ) }
        </div>
      </div>
    )
  };
}

export default BlogList;