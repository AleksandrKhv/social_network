import React from 'react';
import st from './ProfileInfo.module.css'


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

export default ProfileInfo;