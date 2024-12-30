import { axiosInstance } from '@/lib/axios';
import {create} from 'zustand'

export interface AuthStore {
    isAdmin: boolean,
    isLoading: boolean,
    error: string| null,
    checkAdminStatus: () => Promise<void>;
}
export const useAuthStore = create<AuthStore>((set) => ({
    isAdmin: false,
    isLoading: false,
    error: null,
    checkAdminStatus: async () => {
        set({ isLoading: true, error: null });
        try {
            const response = await axiosInstance.get("/admin/check");
            set({ isAdmin: response.data });
        } catch (error:any) {
            set({isAdmin: false, error: error.message});
        }finally{
            set({ isLoading: false });
        }
    },
    reset : () => {
        set({ isAdmin: false, isLoading: false, error: null });
    }
}));