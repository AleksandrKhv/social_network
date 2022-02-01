
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

export type AllUsersReducerType = followACType | unfollowACType | setUsersACType


export type followACType = {
    type: 'FOLLOW',
    userId: number
}

export type unfollowACType = {
    type: 'UNFOLLOW',
    userId: number
}

export type setUsersACType = {
    type: 'SET_USERS'
    users: Array<userType>
}

export type userType = {
    id: number,
    photoUrl: string,
    followed: boolean,
    fullName: string,
    status: string,
    location: locationType
}

export type locationType = {
    city: string,
    country: string
}

let initialState = {
    users: [
        /*{
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
        },*/
    ]
}

export type InitialStateType = {
    users: Array<userType>
}

const usersReducer = (state: InitialStateType = initialState, action: AllUsersReducerType): InitialStateType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }

        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
}

export const followAC = (userId: number) => {
    return {
        type: FOLLOW, userId
    } as const
}

export const unfollowAC = (userId: number) => {
    return {
        type: UNFOLLOW, userId
    } as const
}

export const setUsersAC = (users: Array<userType>) => {
    return {
        type: SET_USERS, users
    } as const
}

export default usersReducer