export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type ProfilePageType = {
    posts: Array<PostsType>
}

export type PostsType = {
    id: number
    message: string
    like: number | string
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

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'HI, how are you?', like: 15},
            {id: 2, message: "It's my first project", like: 77},
            {id: 3, message: 'good day', like: 3},
        ],
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
}

export default state;