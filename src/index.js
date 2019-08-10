import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from './reducers';

const initialState = {
    tableData: [
        ["Year", "Make", "Model"],
        ["1997", "Ford", "E350"],
        ["2000", "Mercury", "Cougar"]
    ],
    rowNum: 0,
    rowByTen: 0
}
const store = createStore(
    reducer, 
    initialState
);
const ReduxApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
);
ReactDOM.render(<ReduxApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
