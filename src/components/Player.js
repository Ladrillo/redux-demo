import React, { Component } from 'react';
import { connect } from 'react-redux';


class Player extends Component {
  onNewPlayer(e) {
    this.props.dispatch({ type: 'NEW_PLAYER', payload: this.refs.newPlayer.value })
  }

  render() {
    return (
      <div>
        <h2>Current player: {this.props.currentPlayer}</h2>
        <input ref='newPlayer' placeholder='type new player' type="text" />
        <button onClick={this.onNewPlayer.bind(this)}>enter new player</button>
      </div>
    );
  }
}

export default connect(state => state)(Player);
