import { Outlet } from "react-router";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <div className="min-h-screen bg-[#020618]">
      <Sidebar />

      <main className="ml-64 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;