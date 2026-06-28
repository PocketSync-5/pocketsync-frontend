import axios from 'axios';


export interface User {
    id: string;
    name: string;
    email: string;
    token: string;
}

export interface Account {
    id: string;
    bankName: string;
    accountType: string;
    balance: number;
}

export interface Transaction {
    id: string;
    date: string;
    description: string;
    amount: number;
    accountId: string;
}

export interface DashboardSummary {
    totalBalance: number;
    connectedAccounts: number;
    recentTransactions: Transaction[];
}

export interface AnalyticsData {
    spendingByMonth: { month: string; amount: number }[];
    incomeByMonth: { month: string; amount: number }[];
    monthlySummary: { month: string; income: number; spending: number }[];
}


const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
});


api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
// --- Auth Functions ---

export const loginUser = async (
    email: string,
    password: string
): Promise<User> => {
    const response = await api.post<User>('/login', { email, password });
    return response.data;
};

export const registerUser = async (
    name: string,
    email: string,
    password: string
): Promise<User> => {
    const response = await api.post<User>('/register', { name, email, password });
    return response.data;
};

// --- Account Functions ---

export const getAccounts = async (): Promise<Account[]> => {
    const response = await api.get<Account[]>('/accounts');
    return response.data;
};

// --- Transaction Functions ---

export const getTransactions = async (): Promise<Transaction[]> => {
    const response = await api.get<Transaction[]>('/transactions');
    return response.data;
};

// --- Dashboard Functions ---

export const getDashboardSummary = async (): Promise<DashboardSummary> => {
    const response = await api.get<DashboardSummary>('/dashboard-summary');
    return response.data;
};

// --- Analytics Functions ---

export const getAnalytics = async (): Promise<AnalyticsData> => {
    const response = await api.get<AnalyticsData>('/analytics');
    return response.data;
};