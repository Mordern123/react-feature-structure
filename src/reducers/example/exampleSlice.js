import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    profile: {
        username: "",
        age: 0,
        email: "",
        login: false,
    }
}

const exampleSlice = createSlice({
    name: "example",
    initialState: initialState,
    reducers: {
        setLogin: (state, action) => {
            const {username, age, email} = action.payload;
            state.profile = {
                username,
                age,
                email,
                login: true,
            };
        },
        setLogout: (state) => {
            state.profile = {...initialState};
        }
    }
})

//Actions
export const { setLogin, setLogout } = exampleSlice.actions;

//Selectors

export default exampleSlice.reducer;