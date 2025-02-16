export const userStore = jest.fn(() => ({
  isAuthenticated: false,
  user: null,
  setUser: jest.fn(),
  clearUser: jest.fn(),
}));
