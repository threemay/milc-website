/* eslint-disable unicorn/prefer-module */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './redux/store'
import App from './App'
import './index.scss'

if (module && module.hot) {
	module.hot.accept()
}

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	</React.StrictMode>,
	document.querySelector('#root')
)
