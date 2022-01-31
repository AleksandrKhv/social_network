import React from 'react';
import st from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

type PropsType = {
    // profilePage: ProfilePageType
    // addPost: (newText: string) => void
    // newPostText: string
    // updateNewPostText: (newText: string) => void
    // dispatch: (action: ActionsTypes) => void
    //store: RootStoreType
}

const Profile = (props: PropsType) => {
    return (
        <div className={st.content}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;