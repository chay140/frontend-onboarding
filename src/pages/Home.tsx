const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-20 text-center">
      <h1 className="text-3xl font-bold mb-4">🔐 간단한 인증 프로젝트</h1>
      <p className="text-lg text-gray-700">
        이 프로젝트에서는 다음을 할 수 있습니다:
      </p>
      <ul className="mt-2 text-gray-600">
        <li>✅ 회원가입 및 로그인</li>
        <li>✅ 프로필 정보 변경</li>
        <li>✅ 안전한 로그아웃</li>
      </ul>

    </div>
  );
};

export default Home;
