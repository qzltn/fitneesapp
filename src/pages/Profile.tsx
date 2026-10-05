import {
  LuUserRound,
  LuCalendarDays,
  LuScale,
  LuUser,
  LuTarget,
  LuLogOut,
} from "react-icons/lu";

function Profile() {
  return (
    <div className="min-h-screen bg-[#06163D] text-white">

      <header className="border-b border-white/10 bg-[#102A5A] px-8 py-7">
        <h1 className="text-[27px] font-bold">
          Profile
        </h1>

        <p className="mt-1 text-[14px] font-medium text-white/80">
          Manage your settings
        </p>
      </header>

      <main className="px-8 py-7">
        <div className="grid grid-cols-[1.1fr_0.9fr] gap-6">

          <section className="rounded-[17px] border border-white/20 bg-[#243D70] px-5 py-5">

            <div className="flex items-center gap-4">

              <div className="flex h-[62px] w-[62px] items-center justify-center rounded-[14px] bg-[#20E58A]">
                <LuUserRound size={32} />
              </div>

              <div>
                <h2 className="text-[18px] font-bold">
                  Your Profile
                </h2>

                <p className="mt-1 text-[13px] font-medium text-white/80">
                  Member since 9/29/2026
                </p>
              </div>

            </div>

            <div className="mt-6 space-y-3">

              <div className="flex items-center gap-4 rounded-[11px] bg-[#5A85BA] px-4 py-3">
                <div className="flex h-[43px] w-[43px] items-center justify-center rounded-[10px] bg-[#3C9BEF]/40">
                  <LuCalendarDays size={22} />
                </div>

                <div>
                  <p className="text-[14px] text-white/80">
                    Age
                  </p>

                  <p className="text-[16px] font-bold">
                    21 years
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-[11px] bg-[#5A85BA] px-4 py-3">
                <div className="flex h-[43px] w-[43px] items-center justify-center rounded-[10px] bg-purple-500/40">
                  <LuScale size={22} />
                </div>

                <div>
                  <p className="text-[14px] text-white/80">
                    Weight
                  </p>

                  <p className="text-[16px] font-bold">
                    48 kg
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-[11px] bg-[#5A85BA] px-4 py-3">
                <div className="flex h-[43px] w-[43px] items-center justify-center rounded-[10px] bg-emerald-500/40">
                  <LuUser size={22} />
                </div>

                <div>
                  <p className="text-[14px] text-white/80">
                    Height
                  </p>

                  <p className="text-[16px] font-bold">
                    159 cm
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-[11px] bg-[#5A85BA] px-4 py-3">
                <div className="flex h-[43px] w-[43px] items-center justify-center rounded-[10px] bg-orange-500/40">
                  <LuTarget size={22} />
                </div>

                <div>
                  <p className="text-[14px] text-white/80">
                    Goal
                  </p>

                  <p className="text-[16px] font-bold">
                    Maintain Weight
                  </p>
                </div>
              </div>
              <button
                type="button"
                className="h-[48px] w-full rounded-[11px] bg-[#5A85BA] text-[15px] font-bold"
              >
                Edit Profile
              </button>

            </div>

          </section>

          <div className="space-y-4">

            <section className="rounded-[17px] border border-white/20 bg-[#172F60] px-5 py-5">

              <h2 className="text-[17px] font-bold">
                Your Stats
              </h2>

              <div className="mt-7 grid grid-cols-2">

                <div className="text-center">
                  <p className="text-[26px] font-bold text-[#20E58A]">
                    0
                  </p>

                  <p className="mt-1 text-[14px] text-white/85">
                    Food entries
                  </p>
                </div>

                <div className="text-center">
                  <p className="text-[26px] font-bold text-cyan-300">
                    0
                  </p>

                  <p className="mt-1 text-[14px] text-white/85">
                    Activities
                  </p>
                </div>

              </div>

            </section>

            <button
              type="button"
              className="flex h-[55px] w-full items-center justify-center gap-2 rounded-[13px] border border-red-300/70 text-[15px] font-bold text-red-300"
            >
              <LuLogOut size={20} />
              Logout
            </button>

          </div>

        </div>
      </main>

    </div>
  );
}

export default Profile;