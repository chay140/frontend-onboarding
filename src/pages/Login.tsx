import { FormEvent, useState } from "react";
import { login } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();
    if (!email || !password) {
      setError("모든 정보를 기입해주세요.");
      return;
    }
    const result = await login({ email, password });
    if (!result.success) {
      setError(`로그인 정보가 맞는지 확인해주세요`);
    } else {
      navigate("/mypage");
    }
  };

  return (
    <form
      className="flex flex-col items-center w-full justify-center"
      onSubmit={handleLogin}
    >
      <h2 className="text-2xl font-bold mb-4">로그인</h2>
      <input
        type="email"
        placeholder="이메일"
        className="border p-2 w-80 rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호"
        className="border p-2 w-80 rounded mt-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <button className="bg-blue text-black p-2 rounded w-80 mt-4">
        로그인
      </button>
      <p className="mt-4">
        아직 계정이 없으신가요?{" "}
        <Link
          to="/signup"
          className="text-darkblue hover:text-ogblue font-bold"
        >
          회원가입
        </Link>
      </p>
    </form>
  );
};

export default Login;
