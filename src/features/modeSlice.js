import { createSlice } from "@reduxjs/toolkit"

const mode1 = {
    darkMode: true,
    color1: '#293132',
    color2: '#474044',
    color3: '#4F5165',
    color4: '#547AA5',
    color5: '#50D8D7',
    photo: 'https://spaces-wp.imgix.net/2016/06/coding-in-the-classroom.png?auto=compress,format&q=50'
}

const mode2 = {
    darkMode: false,
    color1: '#6E44FF',
    color2: '#B892FF',
    color3: '#FFC2E2',
    color4: '#FF90B3',
    color5: '#EF7A85',
    photo: 'https://images.theconversation.com/files/479421/original/file-20220816-10908-uvh62x.jpg?ixlib=rb-1.1.0&rect=4%2C5%2C994%2C497&q=45&auto=format&w=668&h=324&fit=crop'
}
    

const initialState = mode2

export const modeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        lightMode: () => {
            return mode2
        },
        darkMode: () => {
            return mode1
        }
    }
})

export const { lightMode, darkMode } = modeSlice.actions

export default modeSlice.reducer