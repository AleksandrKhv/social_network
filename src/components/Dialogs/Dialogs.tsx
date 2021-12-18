import React from 'react';
import st from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import {DialogsPageType, StoreType,} from '../../redax/state';
import {sendNewMessageActionCreator, updateNewMessageBodyActionCreator} from '../../redax/dialogs_reducer';

type PropsType = {
    dialogsPage: DialogsPageType
    newMessageText: string
    store: StoreType
}

const Dialogs = (props: PropsType) => {

    let state = props.store.getState().dialogsPage

    let dialogElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElement = state.messages.map(m => <Message message={m.message}/>)
    let newMessageText = state.newMessageText

    const onSendMessageHandler = () => {
        props.store.dispatch(sendNewMessageActionCreator())
    }

    const onNewMessageChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.store.dispatch(updateNewMessageBodyActionCreator(body))
    }

    return (
        <div className={st.dialogs}>
            <div className={st.dialogs_items}>
                {dialogElements}
            </div>
            <div className={st.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div><textarea value={newMessageText}
                                   onChange={onNewMessageChangeHandler}
                                   placeholder={'Enter your message'}/></div>
                    <div>
                        <button onClick={onSendMessageHandler}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;