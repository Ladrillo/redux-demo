import React, { Component } from 'react';
import { connect } from 'react-redux';


class Todos extends Component {
  onNewTodo(e) {
    this.props.dispatch({ type: 'ADD_TODO', payload: this.refs.newTodo.value })
  }

  render() {
    return (
      <div>
        <h2>Todos:</h2>
        {
          this.props.todos.map((todo, i) => <div key={i}><em>{todo}</em></div>)
        }

        <br /><input ref='newTodo' placeholder='type new todo' type="text" />
        <button onClick={this.onNewTodo.bind(this)}>enter new todo</button>
      </div>
    );
  }
}

export default connect(state => state)(Todos);
