const redux = require('redux');
const createStore = redux.createStore;

// Action
const ORDER_CAKE = 'ORDER_CAKE';
const RSTORE_CAKE='RESTORE_CAKE'

function orderCake() {
  return {
    type: ORDER_CAKE,
    quantity: 1,
  };
}


// Reducer
const initialState = {
  numOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.quantity,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

console.log('initialState', store.getState());
const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()));

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

unsubscribe();