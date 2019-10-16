import React from 'react';
import '../css/RightContent.css';

class Contact extends React.Component {
  componentDidMount() {
    this.props.contentname('Contact');
  }

  render() {
    return (
      <div className='RightContent'>
        <div className='Content'>
          <h2>Mail</h2>
          <p>purizun7610@gmail.com</p>
        </div>
      </div>
    )
  };
}

export default Contact;