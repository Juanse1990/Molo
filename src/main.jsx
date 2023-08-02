import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import RouterProvider from './router/RouterProvider';
import store from './redux/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider />
		</Provider>
	</React.StrictMode>,
);
