import authReducer from '../src/slices/authSlice';
import accountsReducer from '../src/slices/accountsSlice';
import transactionsReducer from '../src/slices/transactionsSlice';
import dashboardReducer from '../src/slices/dashboardSlice';
import { configureStore } from '@reduxjs/toolkit/react';

export const store = configureStore({
    reducer: {
    auth: authReducer,
    accounts: accountsReducer,
    transactions: transactionsReducer,
    dashboard: dashboardReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;