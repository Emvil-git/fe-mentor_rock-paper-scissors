import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: null,
    isModalShow: false,
    view: 'game',
}

export const gameSlice = createSlice({
    name: 'gameSlice',
    initialState,
    reducers: {
        setIsModalShow: (state, action) => {
            state.isModalShow = action.payload
        },
        setView: (state, action) => {
            state.view = action.payload
        }  
    },
})

export const { setView, setIsModalShow } = gameSlice.actions;

export const selectView = (state) => state.gameSlice.view;
export const selectIsModalShow = (state) => state.gameSlice.isModalShow;

export default gameSlice.reducer;

