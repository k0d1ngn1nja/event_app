import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from  "react-router-dom"
import './index.css';
import App from './components/App';
import { Provider } from "react-redux";
import { configureStore } from "./Store/StoreConfig";
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
const DOM_ROOT = document.getElementById('root');

let render = () => {
	ReactDOM.render(
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
		, DOM_ROOT
	);
}

if(module.hot){
	module.hot.accept("./components/App", () =>{
		setTimeout(render);
	})
}

render();

registerServiceWorker();
