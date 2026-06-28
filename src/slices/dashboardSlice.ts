import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface DashboardSummary {
    totalBalance: number;
    connectedAccounts: number;
    recentTransactions: number;
}

interface DashboardState {
    summary: DashboardSummary | null;
}

const initialState: DashboardState = {
    summary: null,
};

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
    setSummary(state, action: PayloadAction<DashboardSummary>) {
        state.summary = action.payload;
        },
    },
});

export const { setSummary } = dashboardSlice.actions;
export default dashboardSlice.reducer;