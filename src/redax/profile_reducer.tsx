import {ActionsTypes, PostsType, ProfilePageType} from './state';

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state:ProfilePageType, action:ActionsTypes) => {

    switch (action.type) {
        case ADD_POST:
            const newPost: PostsType = {
                id: new Date().getTime(),
                message: action.newPostText,
                like: 100
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }

    /*if (action.type === ADD_POST) {
        const newPost: PostsType = {
            id: new Date().getTime(),
            message: action.newPostText,
            like: 100
        }
        state.posts.push(newPost)
        state.newPostText = ''
    }
    if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText
    }*/

};

export const addPostActionCreator = (newPostText: string) => {
    return {
        type: ADD_POST, newPostText: newPostText
    } as const
}

export const updateNewPostTextActionCreator = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    } as const
}


export default profileReducer