import { create } from "zustand";

export interface User {
  userId: string;
  email: string;
  role: "client" | "provider" | "admin";
  isVerified: boolean;
}

interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
  accessToken: string | null;
  setAccessToken: (accessToken: string) => void;
  refreshToken: string | null;
  setRefreshToken: (refreshToken: string) => void;
  logout: () => void;
}

const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  accessToken: null,
  setAccessToken: (accessToken) => set({ accessToken }),
  refreshToken: null,
  setRefreshToken: (refreshToken) => set({ refreshToken }),
  logout: () => set({ user: null, accessToken: null, refreshToken: null }),
}));

export default useUserStore;
