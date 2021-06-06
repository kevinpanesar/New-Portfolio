import { createSlice } from '@reduxjs/toolkit'

const vantaSlice = createSlice({
    name: 'counter',
    initialState: {
        vantaBackgroundlight: '0xffffff',
        vantaBackgroundDark: '0x2c2c2c'
    },
    reducers: {},
})


export default vantaSlice.reducer