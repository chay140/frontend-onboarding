import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="h-full flex flex-col">
      <Header />
      <main className="container mx-auto pt-10 flex">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
