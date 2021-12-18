import {ActionsTypes, DialogsPageType} from './state';

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'

const dialogsReducer = (state:DialogsPageType, action:ActionsTypes) => {

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