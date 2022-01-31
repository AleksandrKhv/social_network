

type DialogsType = {
    id: number
    name: string
}

type MessagesType = {
    id: number
    message: string
}


const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
    dialogs: [
        {id: 1, name: 'Dasha'},
        {id: 2, name: 'Masha'},
        {id: 3, name: 'Nastya'},
        {id: 4, name: 'Sveta'},
        {id: 5, name: 'Ira'},
        {id: 6, name: 'Ilariya'},
        {id: 7, name: 'Iolanta'},
    ] as Array<DialogsType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hi2all'},
        {id: 3, message: 'HiU2'},
        {id: 4, message: 'eeeeeeexxxyyyyyyy'},
        {id: 5, message: 'nice price'},
    ] as Array<MessagesType>,
    newMessageText: ''
}

export type InitialStateType = typeof initialState

export type AllACDialogsType = UpdateNewMessageBodyACType | SendNewMessageACType

export type UpdateNewMessageBodyACType ={
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    body: string
}

export type SendNewMessageACType = {
    type: 'SEND_MESSAGE',
}

const dialogsReducer = (state: InitialStateType = initialState, action: AllACDialogsType): InitialStateType => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state, newMessageText: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageText
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 6, message: body}]
            }
        default:
            return state
    }
};

export const updateNewMessageBodyActionCreator = (body: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT', body: body
    } as const
}

export const sendNewMessageActionCreator = () => {
    return {
        type: 'SEND_MESSAGE'
    } as const
}

export default dialogsReducer