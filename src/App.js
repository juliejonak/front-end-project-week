import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SideBar from './SideBar';
import CreateNote from './CreateNote';
import FullNote from './FullNote';
import Notes from './Notes';
import UpdateNote from './UpdateNote';

class App extends Component {
  render() {
    return (
      <div className="App">
      <SideBar />

      <Route path="/create" component={CreateNote} />
      <Route exact path="/notes" component={Notes} />
      <Route path="/notes/:id" render={ props => <FullNote {...props} /> } />
      <Route path="/notes/edit/:id" render={ props => <UpdateNote {...props} /> } />
      </div>
    );
  }
}

export default withRouter(connect( ()=>({}) )(App));
