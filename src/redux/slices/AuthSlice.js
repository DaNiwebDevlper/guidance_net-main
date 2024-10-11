import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    isLoggedIn: true,
    jwtToken: null,
    role: null,
    user: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.isLoggedIn = true
            state.jwtToken = action.payload.jwtToken
            state.role = action.payload.role
            state.user = action.payload.user
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.jwtToken = null;
        }
    }
})

export const { loginSuccess, logout } = authSlice.actions
export default authSlice.reducer;