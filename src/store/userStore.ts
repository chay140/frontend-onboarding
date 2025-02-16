import { create } from "zustand";
import { persist } from "zustand/middleware";
import { AuthStoreState, User } from "../types/userTypes";

// Zustand Store
export const userStore = create<AuthStoreState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,

      setUser: (user: User) => set({ isAuthenticated: true, user }),

      clearUser: () => set({ isAuthenticated: false, user: null }),
    }),
    {
      name: "auth-store",
      partialize: (state) => ({
        isAuthenticated: state.isAuthenticated,
        user: {
          id: state.user?.id,
          email: state.user?.email,
          nickname: state.user?.nickname,
        },
      }),
    }
  )
);
