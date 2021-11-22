import React from 'react';
import st from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import {DialogsPageType} from '../../redax/state';

type DialogType = {
    state: DialogsPageType
}

const Dialogs = (props: DialogType) => {

    let dialogElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElement = props.state.messages.map(m => <Message message={m.message} id={m.id}/>)

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