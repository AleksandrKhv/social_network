import React from 'react';
import st from '../Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import {DialogsType} from '../../../redax/state';

const DialogItem = (props: DialogsType) => {
    let path = '/dialogs/1' + props.id
    return <div className={st.dialog + ' ' + st.activeD}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}


export default DialogItem;