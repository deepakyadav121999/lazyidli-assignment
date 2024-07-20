import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import scoresReducer from './scoresReducer';
import uiReducer from './uiReducer';

const rootReducer = combineReducers({
  scores: scoresReducer,
  ui: uiReducer,
});

const store = createStore(rootReducer);

const AppProvider = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

export default AppProvider;
