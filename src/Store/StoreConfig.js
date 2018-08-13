import {createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

export const configureStore = (initialState) =>{
	const middlewares = [];
	const middlewareEnhancer = applyMiddleware(...middlewares);
	const storeEnhancers = [middlewareEnhancer];
	const composedEnhancer = composeWithDevTools(...storeEnhancers);

	const store = createStore(rootReducer, initialState, composedEnhancer);
	
	return store;
};