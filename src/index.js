import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/layout/App';
import registerServiceWorker from './registerServiceWorker';

const DOM_ROOT = document.getElementById('root');

let render = () => {
	ReactDOM.render(<App />, DOM_ROOT);
}

if(module.hot){
	module.hot.accept("./app/layout/App", () =>{
		setTimeout(render);
	})
}

render();

registerServiceWorker();
