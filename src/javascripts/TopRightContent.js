import React from 'react';
import { Link } from 'react-router-dom';
import '../css/RightContent.css';

class TopRightContent extends React.Component {
  componentDidMount() {
    this.props.contentname('Masahiro OKAZAKI');
  }

  render() {
    return (
      <div className='RightContent'>
        <div className='Content Top'>
          <ul>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/works'>Works</Link></li>
            <li><Link to='/prize'>Prize</Link></li>
            <li><Link to='/blog/list'>Blog</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </div>
      </div>
    )};
}

export default TopRightContent;