import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from './reducers'
import rootSaga from './sagas'
// import { composeWithDevTools } from 'redux-devtools-extension'

const persistConfig = {
	key: 'root',
	storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware()

const store: any = createStore(
	persistedReducer,
	applyMiddleware(sagaMiddleware)
	// composeWithDevTools()
)

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

export default store
