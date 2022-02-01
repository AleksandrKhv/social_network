import React from 'react';
import st from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ActionsTypes, ProfilePageType} from '../../redax/store';
import {RootStoreType} from '../../redax/redux_store';

/*type PropsType = {
    profilePage: ProfilePageType
    addPost: (newText: string) => void
    newPostText: string
    updateNewPostText: (newText: string) => void
    dispatch: (action: ActionsTypes) => void
    store: RootStoreType
}*/

const Profile = () => {
    return (
        <div className={st.content}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;