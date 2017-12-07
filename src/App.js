import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import { addReminder, deleteReminder } from './actions';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  addReminder() {
    this.props.addReminder(this.state.text);
  }

  deleteReminder(id) {
    //console.log('deleting in application', id);
    //console.log('this.props', this.props);
    this.props.deleteReminder(id);
  }


  renderReminders() {
    const { reminders } = this.props;
    //console.log('reminders', reminders);
    return (
      <ul className="list-group col-sm-4">
        {
          reminders.map(reminder => {
            return (
              <li key={reminder.id} className="list-group-item">
                <div className="list-item">{reminder.text}</div>
                <div
                  className="list-item delete-button"
                  onClick={() => this.deleteReminder(reminder.id)}
                >
                  &#x2715;
                </div>
              </li>
            )
          }
          )
        }
      </ul>
    )
  }

  render() {
    //console.log('this.props', this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="title">
          Reminder
        </div>

        <div className="form-inline">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="sarasa"
              onChange={event => this.setState({ text: event.target.value })}
            />
          </div>

          <button type="button"
            className="btn btn-success"
            onClick={() => this.addReminder()}
          >
            Add Reminder
          </button>
          {this.renderReminders()}
        </div>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

/*function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addReminder }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
*/

function mapStateToProps(state) {
  return {
    reminders: state
  }
}



export default connect(mapStateToProps, { addReminder, deleteReminder })(App);
