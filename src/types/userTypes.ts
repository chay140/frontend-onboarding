export type User = {
  id: string;
  email: string | null;
  nickname: string | undefined;
};

// 로그인 회원가입
export type AuthForm = {
  email: string;
  password: string;
  nickname?: string;
};

export type AuthStoreState = {
  isAuthenticated: boolean;
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
};
