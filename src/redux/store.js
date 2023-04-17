import { configureStore } from '@reduxjs/toolkit'
import developerReduser from './futures/developer'
import ticketReducer from './futures/ticket'
import infoReducer from './futures/info'

export default configureStore({
    reducer: {
        developer: developerReduser,
        ticket: ticketReducer,
        info: infoReducer
    }
})