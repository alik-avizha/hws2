const initState = {
    themeId: 1,
}
export type InitStateType = {
    themeId: number
}

export const themeReducer = (state = initState, action: ActionType):InitStateType  => {
    switch (action.type) {
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}
        default:
            return state
    }
}

type ActionType = ReturnType<typeof changeThemeId>
export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id } as const)
