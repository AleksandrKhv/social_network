import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Dialogs from './components/Dialogs/Dialogs';
import {Route, Routes} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {ActionsTypes, StateType, StoreType} from './redax/state';


type PropsType = {
    store: StoreType
    state: StateType
    /*addPost: (newText: string) => void
    updateNewPostText: (newText: string) => void*/
    newPostText: string
    dispatch:(action: ActionsTypes) => void
    newMessageText: string
}

function App(props: PropsType) {

    return (
        <div className="app_wrapper">
            <Header/>
            <Navbar/>
            <div className="app_wrapper_content">
                <Routes>
                    <Route path={'/profile'} element={<Profile profilePage={props.state.profilePage}
                                                               dispatch={props.store.dispatch.bind(props.store)}
                                                               /*updateNewPostText={props.store.updateNewPostText.bind(props.store)}*/
                                                               newPostText={props.state.profilePage.newPostText}/>}/>
                    <Route path={'/dialogs'} element={<Dialogs store={props.store}
                                                               dialogsPage={props.state.dialogsPage}
                                                               newMessageText={props.state.dialogsPage.newMessageText}/>}/>
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={'/music'} element={<Music/>}/>
                    <Route path={'/settings'} element={<Settings/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
