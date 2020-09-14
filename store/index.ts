import { createStore, combineReducers } from 'redux';
import characterReducer from './reducers/character';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Characters } from '../src/types/characters';

const rootReducer = combineReducers({
  data: characterReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
