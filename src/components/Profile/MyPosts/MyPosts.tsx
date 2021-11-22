import React from 'react';
import st from './MyPosts.module.css'
import Post from './Post/Post';
import {ProfilePageType} from '../../../redax/state';

const MyPosts: React.FC<ProfilePageType> = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} like={p.like} id={p.id}/>)

    return (
        <div>
            My posts
            <div className={st.wrapper}>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            {postsElements}
        </div>
    );
};

export default MyPosts;