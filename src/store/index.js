import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducers";
import { logger } from "./middleware";
import ReduxThunk from 'redux-thunk'

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const store = createStore(reducer, composeEnhancers(applyMiddleware(ReduxThunk,logger)));

export default store;