import React from 'react';
import st from '../Dialogs.module.css'
import {MessagesType} from '../../../redax/state';


const Message = (props: MessagesType) => {
    return <div className={st.message}>{props.message}</div>
}

export default Message;