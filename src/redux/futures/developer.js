import { createSlice } from '@reduxjs/toolkit'

const developerInit = {
    name: "Hadi AR",
    nim: 120140150,
}

export const developer = createSlice({
    name: "developer",
    initialState: {...developerInit},
    reducers: {
        //
    }
})

export default developer.reducer;