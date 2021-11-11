import { configureStore } from '@reduxjs/toolkit';
import { cryptoApi } from '../services/cryptoApis';

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
    }
})