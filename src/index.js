import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Para implementar redux
// 1. importamos el provider que servira para encapsular a nuestra app para que lleve la data a todo su content
import { Provider } from 'react-redux';

// 2. importamos el store ya que nuestro componente provider necesita un store para almacenar su data.
import { createStore } from 'redux';

/* se importa cheetjs y se llama su funcion para que podamos trabajar con su funcionalidad desde todo el
marco del proyecto */
import cheet from 'cheet.js';
cheet('a s d', () => {
  alert('yes baby');
});

// 4. creamos un initialState
const initialState = {};

// 5. creamos un reducer
// es una funcion que se usa para hacer cambios al estado
// reducer(state,action)
function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_PROPS': {
      const newProps = action.payload.props;
      return {
        ...state,
        ...newProps
      };
    }
    default:
      return state;
  }
}

// 3. instanciamos el store y lo agregamos al provider como atributo
// createStore(reducer, initialState)
const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
