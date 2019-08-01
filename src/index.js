import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { configureStore } from './store/configure'
import { PersistGate } from 'redux-persist/es/integration/react';

const { store, persistor } = configureStore()

const app = (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

