
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

export type InitialStateType = typeof initialState

export type AllProfileActionType = AddPostACType | updateNewPostTextACType

export type AddPostACType = {
    type: 'ADD-POST',
    newPostText: string
}

export type updateNewPostTextACType = {
    type : 'UPDATE-NEW-POST-TEXT',
    text: string
}


const profileReducer = (state: InitialStateType = initialState, action: AllProfileActionType):InitialStateType => {

    switch (action.type) {
        case ADD_POST: {
            const newPost = {
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
                newPostText: action.text
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