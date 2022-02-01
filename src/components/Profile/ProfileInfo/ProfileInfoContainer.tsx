import React from 'react';
import st from './ProfileInfo.module.css'
import {RootStoreType} from '../../../redux/redux_store';
import {Dispatch} from 'redux';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile_reducer';
import {connect} from 'react-redux';
import MyPosts from '../MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo';


/*
const ProfileInfo = () => {
    return (
        <div>
            <div className={st.pic}>
                <img
                    src="https://p4.wallpaperbetter.com/wallpaper/772/500/970/photography-japan-mount-fuji-wallpaper-preview.jpg"
                    alt=""/>
            </div>
            <div>
                <div className={st.avatar}>
                    <img src="https://avatarfiles.alphacoders.com/190/thumb-1920-190579.jpg" alt=""/>
                    +description
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;*/


const mapStateToProps = (state: RootStoreType) => {
    return {

    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {}
}

const MyProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo)

export default MyProfileInfoContainer;