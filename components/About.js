/*
 * === /about
 *
 * About page component.
 */
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

class About extends React.Component {
  render() {
    return (
      <div>
        <h4>About Component</h4>
        <Link to="/"><em>Home</em></Link>
      </div>
    );
  }
}

export default connect((state) => ({state}))(About);
