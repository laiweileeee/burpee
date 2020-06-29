import React, { Component } from 'react';
import SignIn from './components/SignIn';
import Register from './components/Register';
import Reminder from './components/Reminder';
import Milestone from './components/Milestone';
import moment from 'moment';
import { bake_cookie, read_cookie } from 'sfcookies';
import './App.css';

const initialState = {
  input: '',
  route: 'home',
  isSignedIn: false,
  count: read_cookie('countCookie'),
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
}

//storing the number of timely reminders completed
let count = read_cookie('countCookie');

class App extends Component {
  // eslint-disable-next-line
  constructor() {
    super();
    this.state = {
      input: '',
      route: 'milestone',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    }
  }
  
  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    })
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState);
    } else if (route === 'home' || route === 'milestone') {
      this.setState({ isSignedIn: true });
    } 
    this.setState({ route: route });
  }

  completeReminders = (reminder) => {
    let newCount = count++;
    if (moment() <= moment(new Date(reminder.dueDate))) {
        bake_cookie('countCookie', newCount);
        console.log(moment() <= moment(new Date(reminder.dueDate)));
    }
}

componentDidMount = () => {
  console.log('stateCount', this.state.count);
  console.log('countCookie', read_cookie('countCookie'));
}

  render() {
    return (
      <div>
        {this.state.route === 'home'
          ? <Reminder completeReminders={this.completeReminders} onRouteChange={this.onRouteChange} />
          : (
            this.state.route === 'signin'
              ? <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
              : (
                this.state.route === 'register'
                  ? <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
                  : <Milestone count={count} onRouteChange={this.onRouteChange} />
              )
          )
        }
      </div>
    );
  }
}

export default App;
