import React from 'react';
import st from './Users.module.css'
import {UsersPropsType} from './UsersContainer';

const Users = (props: UsersPropsType) => {

    if (props.users.length===0){
    props.setUsers([
        {
        id: 1,
        photoUrl: 'https://culture76.ru/upload/iblock/c5d/nevsky.png',
        followed: false,
        fullName: 'Alex',
        status: 'I am a student',
        location: {city: 'Orsha', country: 'Belarus'}
    },
        {
            id: 2,
            photoUrl: 'https://culture76.ru/upload/iblock/c5d/nevsky.png',
            followed: false,
            fullName: 'Ira',
            status: 'I am a student',
            location: {city: 'Praha', country: 'CZ'}
        },
        {
            id: 3,
            photoUrl: 'https://culture76.ru/upload/iblock/c5d/nevsky.png',
            followed: true,
            fullName: 'Manya',
            status: 'I am a student',
            location: {city: 'Moscow', country: 'Russia'}
        },])}

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={st.usersPhoto} src={u.photoUrl}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {
                                props.follow(u.id)
                            }}>unfollow</button>
                            : <button onClick={() => {
                                props.unfollow(u.id)
                            }}>follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
};

export default Users;