import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { store } from '../ReduxToolkit/redux/storeindex'
import UserList from './UserList';

function App() {

  return (
    <Provider store={store}>
      <UserList />
    </Provider>
  );
}

export default App;
