import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': {

            let newState: UserType[] = []
            if (action.payload === 'up') {
                newState = state.sort((a, b) => {
                    if (a.name > b.name) {
                        return 1;
                    } else  {
                        return -1;
                    }
                })
            }
            if (action.payload === 'down') {
                newState = state.sort((a, b) => {
                    if (b.name > a.name) {
                        return 1;
                    } else {
                        return -1;
                    }
                })
            }
            return newState
        }
        case 'check': {
            let newState: UserType[] = []
            newState = state.sort((a, b) => {
                if (a.name > b.name) {
                    return 1;
                } else  {
                    return -1;
                }
            })
            return newState.filter(el => el.age >= action.payload)
        }
        default:
            return state
    }
}
