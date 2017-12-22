import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import { addReminder, deleteReminder, randomizeReminder } from './actions';


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

  randomizeReminder() {
    this.props.randomizeReminder();
  }


  deleteReminder(id) {
    //console.log('deleting in application', id);
    //console.log('this.props', this.props);
    this.props.deleteReminder(id);
  }


  renderRandomReminders() {
    const { reminders } = this.props;
    let rand = "nill";
    console.log(reminders.length);
    if (reminders.length > 0) {
      rand = reminders[Math.floor(Math.random() * reminders.length)];
    }
    //console.log("rand", rand);
    //console.log("reminders", reminders);
    return (
      <div className="list-item">{rand.text}</div>
    )
  }


  renderReminders() {
    const { reminders } = this.props;
    //console.log('reminders', reminders);
    return (
      <ul className="list-group col-sm-4" >
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

          <button type="button"
            className="btn btn-success"
            onClick={event => this.setState({ text: event.target.value })}
          >
            random
          </button>
          <button type="button"
            className="btn btn-success"
            onClick={() => this.randomizeReminder()}
          >
            randomizer
          </button>
          {this.renderReminders()}
          <br></br>
          {this.renderRandomReminders()}
        </div>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

/*function mapDispatchToProps(dispatch) {
  return bindActionCreators({addReminder}, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
*/

function mapStateToProps(state) {
  return {
    reminders: state
  }
}



export default connect(mapStateToProps, { addReminder, deleteReminder, randomizeReminder })(App);
