import { FormEvent, useState } from "react";
import { userStore } from "../store/userStore";
import { profileUpdate } from "../api/auth";

const Mypage = () => {
  const { user } = userStore();
  const [nickname, setNickname] = useState(user?.nickname || "");
  const [message, setMessage] = useState("");

  const handleUpdate = async (event: FormEvent) => {
    event.preventDefault();
    const result = await profileUpdate(nickname);
    if (result.success) {
      setMessage("성공적으로 업데이트 되었습니다!");
    } else {
      setMessage(result.error);
    }
  };

  return (
    <form
      onSubmit={handleUpdate}
      className="flex flex-col items-center w-full justify-center"
    >
      <h2 className="text-2xl font-bold mb-4">프로필</h2>
      <p>이메일: {user?.email}</p>
      <input
        type="text"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        className="border p-2 w-80 rounded mt-2"
      />
      <button className="bg-blue text-black p-2 rounded w-80 mt-4">
        정보 수정
      </button>
      {message && <p className="mt-4">{message}</p>}
    </form>
  );
};

export default Mypage;
