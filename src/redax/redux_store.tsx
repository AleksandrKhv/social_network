import {createStore, combineReducers} from 'redux'
import profileReducer from './profile_reducer';
import dialogsReducer from './dialogs_reducer';
import sidebarReducer from './sidebar_reducer';
import usersReducer from './users_reducer';

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})

let store = createStore(rootReducer)

export type RootStoreType = ReturnType<typeof rootReducer>

export default store