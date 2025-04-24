// store/index.js
import { createStore } from 'vuex';
import header from './modules/header';

export default createStore({
  modules: {
    header,
  },
});
