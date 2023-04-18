import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {

                state.sort((a, b) => {
                    if (a.name > b.name) {
                        return 1;
                    } else  {
                        return -1;
                    }
                })
            }
            if (action.payload === 'down') {
                state.sort((a, b) => {
                    if (b.name > a.name) {
                        return 1;
                    } else {
                        return -1;
                    }
                })
            }
            return state
        }
        case 'check': {
            state.sort((a, b) => {
                if (a.name > b.name) {
                    return 1;
                } else  {
                    return -1;
                }
            })
            return state.filter(el => el.age >= action.payload)
        }
        default:
            return state
    }
}
