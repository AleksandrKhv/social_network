import React from 'react';
import {ActionsTypes, StateType} from '../../../redax/store';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redax/profile_reducer'
import MyPosts from './MyPosts';
import {RootStoreType} from '../../../redax/redux_store';
import {connect} from 'react-redux';

type PostType = {
    // posts: Array<PostsType>
    // addPost: () => void
    newPostText: string
    // updateNewPostText: () => void
    // dispatch: (action: ActionsTypes) => void
    store: RootStoreType
}


/*
const MyPostsContainer = (props: PostType) => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState()
                    const onClickHandlerAddPost = () => {
                        // props.addPost(props.newPostText)
                        store.dispatch(addPostActionCreator(props.newPostText))
                    }
                    const newTextChangeHandler = (text: string) => {
                        store.dispatch(updateNewPostTextActionCreator(text))
                    }

                    return <MyPosts addPost={onClickHandlerAddPost}
                                    updateNewPostText={newTextChangeHandler}
                                    posts={state.profilePage.posts}
                                    newPostText={state.profilePage.newPostText}
                    />
                }
            }
        </StoreContext.Consumer>
    )
};
*/

const mapStateToProps = (state: StateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
    return {
        updateNewPostText: (text: string) => {
            let action = updateNewPostTextActionCreator(text)
            dispatch(action)
        },
        addPost: (newPostText: string) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;