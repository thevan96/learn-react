import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'

import * as serviceWorker from './serviceWorker';
import Counter from './components/Counter';
import Reducer from './reducers/index';

const store = createStore(Reducer);

const render = () => ReactDOM.render(
  <React.StrictMode>
    <Counter
      value={store.getState().value}
      onIncrement={() => store.dispatch({
        type: 'INCREMENT'
      })}
      onDecrement={() => store.dispatch({
        type: 'DECREMENT'
      })}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

render();

store.subscribe(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
