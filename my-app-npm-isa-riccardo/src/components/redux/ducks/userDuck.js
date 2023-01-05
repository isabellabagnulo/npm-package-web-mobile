import { createSlice } from "@reduxjs/toolkit";

export const setUser = (user) => dispatch => {
    try {
        return dispatch(setUserAction(user))
    } catch (e) {
        return console.error(e.message)
    }
}

export const initUser = () => dispatch => {
    try {
        return dispatch(initUserAction())
    } catch (e) {
        return console.error(e.message)
    }
}

const userDuck = createSlice(
    {
        name: 'userDuck',
        initialState: {
            user: {},
        },
        reducers: {
            setUserAction: (state, action) => {
                state.user = action.payload.user
            },
            initUserAction: (state, action) => {
                state.user = {}
            },
        },
    }
)

export default userDuck.reducer

const { setUserAction, initUserAction } = userDuck.actions