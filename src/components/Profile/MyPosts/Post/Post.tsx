import React from 'react';
import st from './Post.module.css'

export type MessagesType = {
    message: string
    like: number | string
    id: number
}


const Post: React.FC<MessagesType> = (props) => {
    return (
        <div className={st.item}>
            <img src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1601435242.0864_EhY7Ym_n.jpg"
                 alt=""/>
            {props.message}
            <div>
                <span>like</span> {props.like}
            </div>
        </div>
    );
};

export default Post;