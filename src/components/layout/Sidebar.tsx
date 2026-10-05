import {
  LuPersonStanding,
  LuActivity,
  LuHouse,

  LuSun,
  LuUtensils,
  LuUserRound,
} from "react-icons/lu";

import { NavLink } from "react-router";

function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 flex h-screen w-64 flex-col border-r border-blue-400/20 bg-[#0f172b] px-5 py-6 text-white">

      
      <div className="mb-10 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00bc7d]
 text-white">
          <LuPersonStanding size={25} />
        </div>

        <span className="text-2xl font-bold">FitTrack</span>
      </div>

    
      <nav className="flex flex-col gap-2">

        <NavLink
          to="/home"
          className={({ isActive }) =>
            `flex items-center gap-4 rounded-lg border-l-4 px-4 py-3 transition ${
              isActive
                ? "border-green-400 bg-green-400/10 text-green-300"
                : "border-transparent text-white/80 hover:bg-green-400/10 hover:text-cyan-300"
            }`
          }
        >
          <LuHouse size={22} />
          <span className="font-medium">Home</span>
        </NavLink>

        <NavLink
          to="/food"
          className={({ isActive }) =>
            `flex items-center gap-4 rounded-lg border-l-4 px-4 py-3 transition ${
              isActive
                ? "border-green-400 bg-green-400/10 text-green-300"
                : "border-transparent text-white/80 hover:bg-green-400/10 hover:text-green-300"
            }`
          }
        >
          <LuUtensils size={22} />
          <span className="font-medium">Food</span>
        </NavLink>

        <NavLink
          to="/activity"
          className={({ isActive }) =>
            `flex items-center gap-4 rounded-lg border-l-4 px-4 py-3 transition ${
              isActive
                ? "border-green-400 bg-green-400/10 text-green-300"
                : "border-transparent text-white/80 hover:bg-green-400/10 hover:text-green-300"
            }`
          }
        >
          <LuActivity size={22} />
          <span className="font-medium">Activity</span>
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex items-center gap-4 rounded-lg border-l-4 px-4 py-3 transition ${
              isActive
                ? "border-green-400 bg-green-400/10 text-green-300"
                : "border-transparent text-white/80 hover:bg-green-400/10 hover:text-green-300"
            }`
          }
        >
          <LuUserRound size={22} />
          <span className="font-medium">Profile</span>
        </NavLink>

      </nav>

      
      <div className="mt-auto border-t border-blue-400/20 pt-5">
        <button
          type="button"
          className="flex w-full items-center gap-3 px-4 py-3 text-white/80 transition hover:text-green-300"
        >
          <LuSun size={20} />
          <span className="font-medium">Light Mode</span>
        </button>
      </div>

    </aside>
  );
}

export default Sidebar;