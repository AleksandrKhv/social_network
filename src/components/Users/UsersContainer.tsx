import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import {RootStoreType} from '../../redax/redux_store';
import {ActionsTypes} from '../../redax/store';
import {followAC, setUsersAC, unfollowAC, usersType} from '../../redax/users_reducer';


const mapStateToProps = (state: RootStoreType) => {
    return {
        users: state.usersPage.user
    }
}


const mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<usersType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);

