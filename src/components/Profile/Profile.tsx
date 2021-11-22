import React from 'react';
import st from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
import {ProfilePageType} from '../../redax/state';

type ProfileType = {
    state:ProfilePageType
}

const Profile = (props: ProfileType) => {
    return (
        <div className={st.content}>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}/>
        </div>
    );
};

export default Profile;