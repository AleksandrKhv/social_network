import React from 'react';
import st from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
import {ActionsTypes, ProfilePageType, StoreType} from '../../redax/store';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {RootStoreType} from '../../redax/redux_store';

type ProfileType = {
    // profilePage: ProfilePageType
    // addPost: (newText: string) => void
    // newPostText: string
    // updateNewPostText: (newText: string) => void
    // dispatch: (action: ActionsTypes) => void
    store: RootStoreType
}

const Profile = (props: ProfileType) => {
    return (
        <div className={st.content}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;