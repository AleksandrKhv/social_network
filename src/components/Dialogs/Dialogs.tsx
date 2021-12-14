import React from 'react';
import st from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import {DialogsPageType} from '../../redax/state';

type PropsType = {
    dialogsPage: DialogsPageType
}

const Dialogs = (props: PropsType) => {

    let dialogElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElement = props.dialogsPage.messages.map(m => <Message message={m.message}/>)

    return (
        <div className={st.dialogs}>
            <div className={st.dialogs_items}>
                {dialogElements}
            </div>
            <div className={st.messages}>
                {messagesElement}
            </div>
        </div>
    );
};

export default Dialogs;