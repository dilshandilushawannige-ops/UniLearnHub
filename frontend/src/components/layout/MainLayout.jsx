import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 via-slate-50 to-white">
      <Navbar />
      <main className="py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
