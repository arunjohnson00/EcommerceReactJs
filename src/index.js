import React from 'react';
import ReactDOM from 'react-dom';
import RoutesAll from './Routes/RoutesAll';
import {Provider} from 'react-redux';
import store from './Redux/Store';

ReactDOM.render(

  <React.StrictMode>
    
      <Provider store={store}>
   <RoutesAll/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

