const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'HI, how are you?', like: 15},
                {id: 2, message: "It's my first project", like: 77},
                {id: 3, message: 'good day', like: 3},
            ],
            newPostText: 'test'
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
        if (action.type === 'ADD-POST') {
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
        if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    }
}

type AddPostActionType = {
    type: 'ADD-POST',
    newPostText: string
}
export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: string
}

export type ActionsTypes = AddPostActionType | UpdateNewPostTextActionType

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