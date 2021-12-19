import {ActionsTypes, DialogsPageType} from './store';

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
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hi2all'},
        {id: 3, message: 'HiU2'},
        {id: 4, message: 'eeeeeeexxxyyyyyyy'},
        {id: 5, message: 'nice price'},
    ],
    newMessageText: ''
}

const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.body
            return state
        case SEND_MESSAGE:
            let body = state.newMessageText
            state.newMessageText = ''
            state.messages.push({id: 6, message: body})
            return state
        default:
            return state
    }

    /* if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
         _state.newMessageText = action.body
     }
     if (action.type === SEND_MESSAGE) {
         let body = _state.newMessageText
         _state.newMessageText = ''
         _state.messages.push({id: 6, message: body})

     }*/

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