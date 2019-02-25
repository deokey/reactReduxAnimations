import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/* se importa cheetjs y se llama su funcion para que podamos trabajar con su funcionalidad desde todo el
marco del proyecto */
import cheet from 'cheet.js';

// Para implementar redux
// 1. importamos el provider que servira para encapsular a nuestra app para que lleve la data a todo su content
import { Provider } from 'react-redux';

// 2. importamos el store ya que nuestro componente provider necesita un store para almacenar su data.
import { createStore } from 'redux';

// 4. creamos un initialState
const initialState = {};

// 5. creamos un reducer
// es una funcion que se usa para hacer cambios al estado
// reducer(state,action)

// function reducer(state, action) {
//   switch (action.type) {
//     case 'UPDATE_PROPS': {
//       const newProps = action.payload.props;
//       console.log(state, action, newProps);
//       return {
//         ...state,
//         ...newProps
//       };
//     }
//     default:
//       return state;
//   }
// }

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_PROPS': {
      const newProps = action.payload.props;
      console.log(state, action, newProps);
      return {
        ...state,
        ...newProps
      };
    }
    case 'GREW': {
      const newProps = action.payload.props;
      console.log(state, action, newProps);
      return {
        ...state,
        ...newProps
      };
    }
    default:
      return state;
  }
};

// 3. instanciamos el store y lo agregamos al Provider como atributo
// createStore(reducer, initialState)
const store = createStore(reducer, initialState);

cheet('a s d', () => {
  // 6. impelementamos un cambio en el state llamando al metodo dispatch del store.
  // dispatch recibe un objeto, ese objeto debe poseer el tipo de action ya establecida en el reducer
  // y un cambio en el estado
  store.dispatch({
    type: 'UPDATE_PROPS',
    payload: {
      props: { token: Math.random() }
    }
  });
});

cheet('a a a', () => {
  store.dispatch({
    type: 'GREW',
    payload: {
      props: { grow: true }
    }
  });
});

cheet('s s s', () => {
  store.dispatch({
    type: 'GREW',
    payload: {
      props: { grow: false }
    }
  });
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
