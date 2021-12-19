import store, {RootStoreType} from './redax/redux_store';
import ReactDOM from 'react-dom';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import App from './App';


const rerenderEntireTree = (_state: RootStoreType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App store={store.getState()}
                     // state={store.getState()}
                     dispatch={store.dispatch.bind(store)}
                     /*updateNewPostText={store.updateNewPostText.bind(store)}*/
                     newPostText={store.getState().profileReducer.newPostText}
                 newMessageText={store.getState().dialogsReducer.newMessageText}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscribe(()=>{
    let state = store.getState()
    rerenderEntireTree(state)
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

