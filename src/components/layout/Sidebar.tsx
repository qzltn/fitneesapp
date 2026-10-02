import {
  LuAccessibility,
  LuActivity,
  LuHouse,
  LuMoon,
  LuUtensils,
  LuUserRound,
} from "react-icons/lu";

function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 flex h-screen w-64 flex-col border-r border-blue-400/20 bg-[#071B4D] px-5 py-6 text-white">
      <div className="mb-10 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 text-[#071B4D]">
          <LuAccessibility size={25} />
        </div>

        <span className="text-2xl font-bold">FitTrack</span>
      </div>

      <nav className="flex flex-col gap-2">
        <a
          href="/home"
          className="flex items-center gap-4 rounded-lg border-l-4 border-cyan-400 bg-cyan-400/10 px-4 py-3 text-cyan-300"
        >
          <LuHouse size={22} />
          <span className="font-medium">Home</span>
        </a>

        <a
          href="/food"
          className="flex items-center gap-4 rounded-lg border-l-4 border-transparent px-4 py-3 text-white/80"
        >
          <LuUtensils size={22} />
          <span className="font-medium">Food</span>
        </a>

        <a
          href="/activity"
          className="flex items-center gap-4 rounded-lg border-l-4 border-transparent px-4 py-3 text-white/80"
        >
          <LuActivity size={22} />
          <span className="font-medium">Activity</span>
        </a>

        <a
          href="/profile"
          className="flex items-center gap-4 rounded-lg border-l-4 border-transparent px-4 py-3 text-white/80"
        >
          <LuUserRound size={22} />
          <span className="font-medium">Profile</span>
        </a>
      </nav>

      <div className="mt-auto border-t border-blue-400/20 pt-5">
        <button className="flex w-full items-center gap-3 px-4 py-3 text-white/80">
          <LuMoon size={20} />
          <span className="font-medium">Light Mode</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;