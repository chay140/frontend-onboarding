import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../api/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (event: FormEvent) => {
    event.preventDefault();
    setError("");
    setSuccess(false);

    if (!email || !password || !nickname) {
      setError("모든 정보를 기입해주세요");
      return;
    }

    const result = await signup({ email, password, nickname });

    if (result.success) {
      setSuccess(true);
      setTimeout(() => navigate("/mypage"), 2000); // Redirect to login after 2s
    } else {
      setError(result.error);
    }
  };

  return (
    <form
      className="flex flex-col items-center w-full justify-center"
      onSubmit={handleSignup}
    >
      <h2 className="text-2xl font-bold mb-4">회원가입</h2>

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

      <input
        type="text"
        placeholder="닉네임"
        className="border p-2 w-80 rounded mt-2"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />

      {error && <p className="text-red-500 mt-2">{error}</p>}
      {success && (
        <p className="text-green-500 mt-2">
          회원가입에 성공했습니다! 마이페이지로 이동합니다...
        </p>
      )}

      <button className="bg-blue-500 text-black p-2 rounded w-80 mt-4">
        회원가입
      </button>
      <p className="mt-4">
        이미 계정이 있으신가요?{" "}
        <Link to="/login" className="text-darkblue hover:text-ogblue font-bold">
          로그인
        </Link>
      </p>
    </form>
  );
};

export default Signup;
