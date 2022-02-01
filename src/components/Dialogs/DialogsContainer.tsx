import React from 'react';
import {sendNewMessageActionCreator, updateNewMessageBodyActionCreator} from '../../redax/dialogs_reducer';
import Dialogs from './Dialogs';
import {RootStoreType} from '../../redax/redux_store';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

/*type PropsType = {
    dialogsPage: DialogsPageType
    newMessageText: string
    dispatch: (action: ActionsTypes) => void
    store: RootStoreType
}*/

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

let mapStateToProps = (state: RootStoreType) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
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