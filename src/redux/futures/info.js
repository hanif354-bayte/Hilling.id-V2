import axios from 'axios'
import { createSlice } from '@reduxjs/toolkit'

const infoInit = {
    ip: "-",
}

export const info = createSlice({
    name: "info",
    initialState: {...infoInit},
    reducers: {
        setIP: (state, action) => {
            state.ip = action.payload
        }
    }
})

// Asynchronous action to get IP
export const getMyIP = () => async (dispatch) => {
    const url = 'https://ifconfig.me/all.json';
    try {
        const response = await axios.get(url)
        dispatch(setIP(response.data.ip_addr))
    } catch (error) {
        dispatch(setIP('-'))
    }
}

export const { setIP } = info.actions
export default info.reducer;