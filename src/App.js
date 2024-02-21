import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import ListScreen from './components/ListScreen';
import AddScreen from './components/AddScreen';
import EditScreen from './components/EditScreen';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/" exact component={ListScreen} />
          <Route path="/add" component={AddScreen} />
          <Route path="/edit/:id" component={EditScreen} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
