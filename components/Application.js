/**
 * Simple application's HOC
 */
import React from 'react';
import {connect} from 'react-redux';

class Application extends React.Component  {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

Application.propTypes = {
  children : React.PropTypes.element.isRequired
}; 


export {Application};
export default connect((state) => ({state}))(Application);
