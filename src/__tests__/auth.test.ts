import { login, logout, signup, profileUpdate } from "../api/auth";

jest.mock("../api/supabaseClient", () => ({
  supabase: {},
}));

test("signup 함수가 존재해야 한다", () => {
  expect(typeof signup).toBe("function");
});

test("login 함수가 존재해야 한다", () => {
  expect(typeof login).toBe("function");
});

test("logout 함수가 존재해야 한다", () => {
  expect(typeof logout).toBe("function");
});

test("profileUpdate 함수가 존재해야 한다", () => {
  expect(typeof profileUpdate).toBe("function");
});
