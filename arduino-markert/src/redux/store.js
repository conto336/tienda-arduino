import { createStore, combineReducers } from 'redux';

import token_login from './reducers/token_login';


const reducer = combineReducers({
  token_login,
});

const store = createStore(reducer);

export default store;