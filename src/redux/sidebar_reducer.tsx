import {ActionsTypes, SidebarType} from './store';
import {RootStoreType} from './redux_store';


let initialState = [
    {id: 1, name: 'Alex'},
    {id: 2, name: 'Sveta'},
    {id: 3, name: 'Nastassia'},
]

const sidebarReducer = (state: Array<SidebarType> = initialState, action: any): Array<SidebarType> => {
    return state
};

export default sidebarReducer