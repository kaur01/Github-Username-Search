import React, { Component } from 'react';

import UsersList from './components/users-list';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import allReducers from './reducer/index.js';

const store = createStore(allReducers);

class App extends Component {

  render() {
    return (
      <Provider store={store}>
      <UsersList />
      </Provider>
    );
  }
}

export default App;
