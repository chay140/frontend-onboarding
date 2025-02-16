import { Link, useNavigate } from "react-router-dom";
import { userStore } from "../store/userStore";

const Menu = () => {
  const { isAuthenticated, clearUser } = userStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    clearUser();
  };

  return (
    <div className="space-x-4">
      {isAuthenticated ? (
        <>
          <Link className="link" to="/mypage">
            프로필
          </Link>
          <button onClick={handleLogout}>로그아웃</button>
        </>
      ) : (
        <button onClick={() => navigate("/login")}>로그인</button>
      )}
    </div>
  );
};

export default Menu;
