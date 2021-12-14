import React from 'react';
import st from '../Dialogs.module.css'


type PropsMessType = {
    message: string
}


const Message = (props: PropsMessType) => {
    return <div className={st.message}>{props.message}</div>
}

export default Message;