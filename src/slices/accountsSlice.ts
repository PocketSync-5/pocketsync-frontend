import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Account {
    id: string;
    bankName: string;
    accountType: string;
    balance: number;
}

interface AccountsState {
    accounts: Account[];
}

const initialState: AccountsState = {
    accounts: [],
};

const accountsSlice = createSlice({
    name: 'accounts',
    initialState,
    reducers: {
    setAccounts(state, action: PayloadAction<Account[]>) {
        state.accounts = action.payload;
        },
    },
});

export const { setAccounts } = accountsSlice.actions;
export default accountsSlice.reducer;