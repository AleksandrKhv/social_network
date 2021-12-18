import profileReducer, {addPostActionCreator, updateNewPostTextActionCreator} from './profile_reducer';
import dialogsReducer, {sendNewMessageActionCreator, updateNewMessageBodyActionCreator} from './dialogs_reducer';
import sidebarReducer from './sidebar_reducer';

const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'HI, how are you?', like: 15},
                {id: 2, message: "It's my first project", like: 77},
                {id: 3, message: 'good day', like: 3},
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dasha'},
                {id: 2, name: 'Masha'},
                {id: 3, name: 'Nastya'},
                {id: 4, name: 'Sveta'},
                {id: 5, name: 'Ira'},
                {id: 6, name: 'Ilariya'},
                {id: 7, name: 'Iolanta'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hi2all'},
                {id: 3, message: 'HiU2'},
                {id: 4, message: 'eeeeeeexxxyyyyyyy'},
                {id: 5, message: 'nice price'},
            ],
            newMessageText: ''
        },
        sidebar: [
            {id: 1, name: 'Alex'},
            {id: 2, name: 'Sveta'},
            {id: 3, name: 'Nastassia'},
        ]
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    /*addPost() {
        const newPost: PostsType = {
            id: new Date().getTime(),
            message: this._state.profilePage.newPostText,
            like: 100
        }
        this._state.profilePage.posts.push(newPost)
        this._callSubscriber(this._state)
        this._state.profilePage.newPostText = ''
    },*/
    /*updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },*/

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)

        /*if (action.type === ADD_POST) {
            const newPost: PostsType = {
                id: new Date().getTime(),
                // message: this._state.profilePage.newPostText,
                message: action.newPostText,
                like: 100
            }
            this._state.profilePage.posts.push(newPost)
            this._callSubscriber(this._state)
            this._state.profilePage.newPostText = ''
        }
        if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
        if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.body
            this._callSubscriber(this._state)
        }
        if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageText
            this._state.dialogsPage.newMessageText = ''
            this._state.dialogsPage.messages.push({id: 6, message: body})
            this._callSubscriber(this._state)
        }*/
    }
}

/*const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'*/

/*export const addPostActionCreator = (newPostText: string) => {
    return {
        type: ADD_POST, newPostText: newPostText
    } as const
}

export const updateNewPostTextActionCreator = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    } as const
}

export const updateNewMessageBodyActionCreator = (body: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT', body: body
    } as const
}

export const sendNewMessageActionCreator = () => {
    return {
        type: 'SEND_MESSAGE'
    } as const
}*/

export type ActionsTypes = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof updateNewMessageBodyActionCreator>
    | ReturnType<typeof sendNewMessageActionCreator>

export type StoreType = {
    _state: StateType
    /*updateNewPostText: (newText: string) => void
    addPost: () => void*/
    _callSubscriber: (state: StateType) => void
    subscribe: (observer: (state: StateType) => void) => void
    getState: () => StateType
    dispatch: (action: ActionsTypes) => void
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: Array<SidebarType>
}

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}

export type PostsType = {
    id: number
    message: string
    like: number
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
}

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

export type SidebarType = {
    id: number
    name: string
}

export type newPostTextType = {
    newPostText: string
}

export default store;
// window.store = store