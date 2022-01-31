import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import {Route, Routes} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';


/*type PropsType = {
    //store: RootStoreType
    // state: StateType
    /!*addPost: (newText: string) => void
    updateNewPostText: (newText: string) => void*!/
    // newPostText: string
    //dispatch: (action: ActionsTypes) => void
    // newMessageText: string
}*/

function App() {

    return (
        <div className="app_wrapper">
            <Header/>
            <Navbar/>
            <div className="app_wrapper_content">
                <Routes>
                    <Route path={'/'} element={<Profile/>}/>
                    <Route path={'/dialogs'} element={<DialogsContainer/>}/>
                    <Route path={'/users'} element={<UsersContainer/>}/>
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
