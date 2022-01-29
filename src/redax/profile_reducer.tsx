import {ActionsTypes, PostsType, ProfilePageType} from './store';

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts: [
        {id: 1, message: 'HI, how are you?', like: 15},
        {id: 2, message: "It's my first project", like: 77},
        {id: 3, message: 'good day', like: 3},
    ],
    newPostText: ''
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case ADD_POST: {
            const newPost: PostsType = {
                id: new Date().getTime(),
                message: action.newPostText,
                like: 100
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
            /*copyState.posts = [...state.posts]
            copyState.posts.push(newPost)
            copyState.newPostText = ''*/
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
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