/*
 * === /
 *
 *  Home Component that handle "counter" of the default state.
 */
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';


import {ACTIONS} from '../shared/store';

class Home extends React.Component  {
  constructor() {
    super();
    this.incrementCounter = this._incrementCounter.bind(this);
    this.decrementCounter = this._decrementCounter.bind(this);
  }

  _incrementCounter() {
    this.props.dispatch(ACTIONS.INCREMENT_COUNTER());
  }

  _decrementCounter() {
    this.props.dispatch(ACTIONS.DECREMENT_COUNTER());
  }

  render() {
    return (
      <div>
        <h4>Home Component</h4>

        <strong>Counter: {this.props.state.counter}</strong>
        <p>
          <button onClick={this.incrementCounter}>+</button>
          <button onClick={this.decrementCounter}>-</button>
        </p>

        <Link to="about"><em>About</em></Link>
      </div>
    );
  }
}

Home.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  state : React.PropTypes.shape({
    counter : React.PropTypes.number.isRequired
  })
};

export default connect((state) => ({state}))(Home);
