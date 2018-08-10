import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from  "react-router-dom"
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const DOM_ROOT = document.getElementById('root');

let render = () => {
	ReactDOM.render(
		<BrowserRouter>
			<App />
		</BrowserRouter>
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
