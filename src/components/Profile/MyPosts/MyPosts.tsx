import React from 'react';
import st from './MyPosts.module.css'
import Post from './Post/Post';

type PostsType = {
    id: number
    message: string
    like: number
}

type PostType = {
    posts: Array<PostsType>
    addPost: (newText: string) => void
    newPostText: string
    updateNewPostText: (newText: string) => void
    // dispatch: (action: ActionsTypes) => void
}

/*const addPostActionCreator = (newPostText:string):AddPostActionType=>{
    return{
        type: 'ADD-POST', newPostText: newPostText
    }
}

const updateNewPostTextActionCreator = (text:string):UpdateNewPostTextActionType=>{
    return{
    type: 'UPDATE-NEW-POST-TEXT', newText: text
    }
}*/


const MyPosts = (props: PostType) => {

    const postsElements = props.posts.map(p => <Post message={p.message} like={p.like} id={p.id}/>)


    const onClickHandlerAddPost = () => {
        props.addPost(props.newPostText)
        // props.dispatch(addPostActionCreator(props.newPostText))
    }

    const newTextChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewPostText(text)
        /*const action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};*/
        // props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text})
        // props.dispatch(updateNewPostTextActionCreator(text))
    }


    return (
        <div>
            My posts
            <div className={st.wrapper}>
                <textarea onChange={newTextChangeHandler} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={onClickHandlerAddPost}>Add post</button>
            </div>
            {postsElements}
        </div>
    );
};

export default MyPosts;