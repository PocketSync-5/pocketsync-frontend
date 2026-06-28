import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Transaction {
    id: string;
    date: string;
    description: string;
    amount: number;
    accountId: string;
}

interface TransactionsState {
    transactions: Transaction[];
}

const initialState: TransactionsState = {
    transactions: [],
};

const transactionsSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        setTransactions(state, action: PayloadAction<Transaction[]>) {
        state.transactions = action.payload;
        },
    },
});

export const { setTransactions } = transactionsSlice.actions;
export default transactionsSlice.reducer;