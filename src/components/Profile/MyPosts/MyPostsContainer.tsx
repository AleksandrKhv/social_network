import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile_reducer'
import MyPosts from './MyPosts';
import {RootStoreType} from '../../../redux/redux_store';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

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

const mapStateToProps = (state: RootStoreType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
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