import React from 'react';
import st from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import {InitialStateType} from '../../redux/dialogs_reducer';

type PropsType = {
    dialogsPage: InitialStateType
    newMessageText: string
    //dispatch: (action: ActionsTypes) => void
    sendNewMessage: () => void
    updateNewMessageBody: (body: string) => void
}

const Dialogs = (props: PropsType) => {

    let dialogElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElement = props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message}/>)
    let newMessageTextValue = props.newMessageText

    const onSendMessageHandler = () => {
        props.sendNewMessage()
        // props.dispatch(sendNewMessageActionCreator())
    }

    const onNewMessageChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
        // props.dispatch(updateNewMessageBodyActionCreator(body))
    }

    return (
        <div className={st.dialogs}>
            <div className={st.dialogs_items}>
                {dialogElements}
            </div>
            <div className={st.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div><textarea value={newMessageTextValue}
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