import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from '../common/store/configureStore'; // 设置了store，并且引入reducers
import { App, Reverse } from "../common/containers";
const store = configureStore({counter: 10, reverse: {reverseText: "reverseText", inputText: "inputText"}}); // 设置store的初始值
render (
    <Provider store={store}>
        <div>
            <App/>
            <Reverse/>
        </div>
    </Provider>,
    document.getElementById('app')
);





