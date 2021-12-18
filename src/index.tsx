import store, {StateType} from './redax/state';
import ReactDOM from 'react-dom';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import App from './App';

const rerenderEntireTree = (_state: StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App store={store}
                     state={store.getState()}
                     dispatch={store.dispatch.bind(store)}
                     /*updateNewPostText={store.updateNewPostText.bind(store)}*/
                     newPostText={store.getState().profilePage.newPostText}
                 newMessageText={store.getState().dialogsPage.newMessageText}/>
            </BrowserRouter>,
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

