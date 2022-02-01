import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import {RootStoreType} from '../../redax/redux_store';
import {followAC, InitialStateType, setUsersAC, unfollowAC, userType} from '../../redax/users_reducer';
import {Dispatch} from 'redux';

type MapStatePropsType = {
    usersPage: Array<userType>
}

type MapDispatchToPropsType = {
    //users: Array<userType>,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUsers: (users: Array<userType>) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootStoreType): MapStatePropsType => {
    return {
        usersPage: state.usersPage.users
    }
}


const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<userType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);

