import {createStore, applyMiddleware } from "redux";
import rootReducer from "../Reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

export const configureStore = (initialState) =>{
	const middlewares = [];
	const middlewareEnhancer = applyMiddleware(...middlewares);
	const storeEnhancers = [middlewareEnhancer];
	const composedEnhancer = composeWithDevTools(...storeEnhancers);

	const store = createStore(rootReducer, initialState, composedEnhancer);
	
	// if(process.env.NODE_ENV !== "production"){
	// 	if(module.hot){
	// 		module.hot.accept("../Reducers/rootReducer", () =>{
	// 			const newRootReducer = require("../Reducers/rootReducer").default;
	// 			store.replaceReducer(newRootReducer);
	// 		})
	// 	}
	// }
	return store;
};