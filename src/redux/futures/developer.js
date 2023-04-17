import { createSlice } from '@reduxjs/toolkit'

const developerInit = {
    name: "Hanif",
    nim: 120140120,
}

export const developer = createSlice({
    name: "developer",
    initialState: {...developerInit},
    reducers: {
        //
    }
})

export default developer.reducer;