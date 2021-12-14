import React from 'react';
import st from '../Dialogs.module.css'
import {NavLink} from 'react-router-dom';


type PropsType = {
    id: number
    name: string
}

const DialogItem = (props: PropsType) => {
    let path = '/dialogs/' + props.id
    return <div className={`${st.dialog} ${st.activeD}`}>
        <NavLink to={path}>
            <img className={st.ava_dialogsItem} src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1601435242.0864_EhY7Ym_n.jpg"
                 alt=""/>
            {props.name}
        </NavLink>
    </div>
}


export default DialogItem;