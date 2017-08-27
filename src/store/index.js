import { createStore } from 'redux'

import { reducer } from './reducers/index.js';

const Store = createStore(reducer)

export default Store;
