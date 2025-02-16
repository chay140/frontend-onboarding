import { userStore } from "../store/userStore";
import { User } from "../types/userTypes";

test("setUser는 사용자를 상태에 저장해야 한다", () => {
  const user: User = { id: "123", email: "test@example.com", nickname: "tester" };
  userStore.getState().setUser(user);
  expect(userStore.getState().user).toEqual(user);
});

test("clearUser는 사용자를 초기화해야 한다", () => {
  userStore.getState().clearUser();
  expect(userStore.getState().user).toBeNull();
  expect(userStore.getState().isAuthenticated).toBe(false);
});
