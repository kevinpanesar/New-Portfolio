import { configureStore } from '@reduxjs/toolkit';
import vantaReducer from '../features/vanta/vantaSlice';

export const store = configureStore({
    reducer: {
        vanta: vantaReducer,
    },
});
