import React, { Component } from 'react';
import { Provider } from "react-redux";
import { createStore } from 'redux'

// import { createBrowserHistory } from "history";
// const customHistory = createBrowserHistory({ basename: '' });


import { Layout, SideBar, ShowVersion } from './components'
import reducer from './store/reducer'

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Layout></Layout>
      </Provider>
    );
  }
}

export default App;
