import React from 'react';
import st from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
import {ActionsTypes, ProfilePageType} from '../../redax/store';

type ProfileType = {
    profilePage: ProfilePageType
    /*addPost: (newText: string) => void*/
    newPostText: string
    /*updateNewPostText: (newText: string) => void*/
    dispatch:(action: ActionsTypes) => void
}

const Profile = (props: ProfileType) => {
    return (
        <div className={st.content}>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.newPostText}
                     dispatch={props.dispatch}
                     /*updateNewPostText={props.updateNewPostText}*/
             />
        </div>
    );
};

export default Profile;