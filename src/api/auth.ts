import { userStore } from "../store/userStore";
import { AuthForm, User } from "../types/userTypes";
import { supabase } from "./supabaseClient";

export const login = async ({ email, password }: AuthForm) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;

    const { data: userData } = await supabase
      .from("users")
      .select("id, email, nickname")
      .eq("id", data.user?.id)
      .maybeSingle();

    userStore.getState().setUser(userData as User);

    return { success: true, userData };
  } catch (error: any) {
    console.log("로그인 실패!:", error);
    alert("로그인이 실패했습니다.");
    return { success: false, error: error.message };
  }
};

export const logout = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;

    userStore.getState().clearUser();
  } catch (error: any) {
    console.error(error.message);
    alert("로그아웃 중 오류가 발생했습니다.");
  }
};

export const signup = async ({ email, password, nickname }: AuthForm) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) throw error;

    // 새로운 유저 확인
    if (!data.user) throw new Error("유저 정보 등록 실패");

    const newUser: User = {
      id: data.user.id,
      email,
      nickname,
    };

    await supabase.from("users").insert(newUser);

    const { error: sessionError } =
      await supabase.auth.getSession();
    if (sessionError) throw sessionError;

    userStore.getState().setUser(newUser);

    return { success: true, data };
  } catch (error: any) {
    console.log("회원가입 실패!:", error);
    alert("회원가입 실패, 정보가 일치하는지 확인 부탁드립니다.");
    return { success: false, error: error.message };
  }
};

export const profileUpdate = async (nickname: string) => {
  try {
    const userId = userStore.getState().user?.id;
    if (!userId) throw new Error("유저 정보가 존재하지 않습니다.");

    const { data, error } = await supabase
      .from("users")
      .update({ nickname })
      .eq("id", userId);

    if (error) throw error;

    userStore.getState().setUser({
      ...userStore.getState().user!,
      nickname,
    });

    return { success: true, data };
  } catch (error: any) {
    console.error("프로필 업데이트 실패!:", error.message);
    alert("프로필 업데이트 실패, 다시 시도 부탁드립니다.");
    return { success: false, error: error.message };
  }
};
