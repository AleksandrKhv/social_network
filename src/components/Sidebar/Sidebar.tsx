import React from 'react';
import st from './Sidebar.module.css'


const Sidebar = () => {
    /*let path = '/dialogs/' + props.id
    return (
    <div className={st.wrapper_sidebar}>
        <h1>FRIENDS</h1>
        <NavLink to={path}>
            <img className={st.ava_sidebar} src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1601435242.0864_EhY7Ym_n.jpg"
                 alt=""/>
            {props.name}
        </NavLink>
    </div>
*/
    return (
        <div
            className={st.wrapper_sidebar}>
            <h1>FRIENDS</h1>
            <div className={st.ava_sidebar}>
                <img src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1601435242.0864_EhY7Ym_n.jpg"
                     alt=""/>
                <span>Alex</span>
            </div>
            <div className={st.ava_sidebar}>
                <img src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1601435242.0864_EhY7Ym_n.jpg"
                     alt=""/>
                <span>Sveta</span>
            </div>
            <div className={st.ava_sidebar}>
                <img src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1601435242.0864_EhY7Ym_n.jpg"
                     alt=""/>
                <span>Nastassia</span>
            </div>
        </div>
    );
};

export default Sidebar;