import React from 'react';
import '../css/LeftContent.css';

class LeftContent extends React.Component {
  render() {
    return (
      <div className="LeftContent">
        <h1>{ this.props.titleName }</h1>
      </div>
    )};
}

export default LeftContent;