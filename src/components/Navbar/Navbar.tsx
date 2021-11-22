import React from 'react';
import st from './Navbar.module.css'
import {NavLink} from 'react-router-dom';

type NavbarType = {}

const setActive = ({isActive}: { isActive: boolean }) => isActive ? st.active_link : ''

// const setActive = (props:{isActive: boolean}) => {
//     console.log(props.isActive)
//     return ""
// }

const Navbar: React.FC<NavbarType> = (props) => {
    return (
        <nav className={st.nav}>
            <div className={st.item}>
                <NavLink to={'/profile'} className={setActive}>Profile</NavLink>
            </div>
            <div className={st.item}>
                <NavLink to={'/dialogs'} className={setActive}>Messages</NavLink>
            </div>
            <div className={st.item}>
                <NavLink to={'/news'} className={setActive}>News</NavLink>
            </div>
            <div className={st.item}>
                <NavLink to={'/music'} className={setActive}>Music</NavLink>
            </div>
            <div className={st.item}>
                <NavLink to={'/settings'} className={setActive}>Settings</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;