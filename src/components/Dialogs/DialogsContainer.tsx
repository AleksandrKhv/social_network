import React from 'react';
import st from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import {ActionsTypes, DialogsPageType, StateType, StoreType,} from '../../redax/store';
import {sendNewMessageActionCreator, updateNewMessageBodyActionCreator} from '../../redax/dialogs_reducer';
import Dialogs from './Dialogs';
import {RootStoreType} from '../../redax/redux_store';
import {connect} from 'react-redux';

type PropsType = {
    dialogsPage: DialogsPageType
    newMessageText: string
    dispatch: (action: ActionsTypes) => void
    store: RootStoreType
}

/*const DialogsContainer = (props:PropsType) => {

    return <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState().dialogsPage
                const onSendMessageHandler = () => {
                    store.dispatch(sendNewMessageActionCreator())
                }
                const onNewMessageChangeHandler = (body: string) => {
                    store.dispatch(updateNewMessageBodyActionCreator(body))
                }

                return <Dialogs dialogsPage={state}
                                sendNewMessage={onSendMessageHandler}
                                updateNewMessageBody={onNewMessageChangeHandler}/>
            }
        }
    </StoreContext.Consumer>
}*/

let mapStateToProps = (state: StateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyActionCreator(body))
        },
        sendNewMessage: () => {
            dispatch(sendNewMessageActionCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer;