import { LuPlus, LuDumbbell } from "react-icons/lu";

function Activity() {
  return (
    <div className="min-h-screen bg-[#06163D] text-white">

   
      <header className="border-b border-white/10 bg-[#102A5A] px-8 py-7">
        <div className="flex items-center justify-between">

          <div>
            <h1 className="text-[27px] font-bold leading-tight">
              Activity Log
            </h1>

            <p className="mt-1 text-[14px] font-medium text-white/80">
              Track your workouts
            </p>
          </div>

          <div className="text-right">
            <p className="text-[13px] font-semibold text-white/80">
              Active Today
            </p>

            <p className="mt-1 text-[21px] font-bold text-cyan-300">
              0 min
            </p>
          </div>

        </div>
      </header>


      <main className="px-8 py-7">
        <div className="grid grid-cols-2 gap-6">

         
          <div className="space-y-4">

    
            <section className="rounded-[17px] border border-white/20 bg-[#243D70] px-5 py-5">

              <h2 className="text-[17px] font-bold">
                Quick Add
              </h2>

              <div className="mt-4 flex flex-wrap gap-2">

                <button
                  type="button"
                  className="rounded-full bg-[#5478AC] px-4 py-2 text-[13px] font-semibold text-white"
                >
                  🚶 Walking
                </button>

                <button
                  type="button"
                  className="rounded-full bg-[#5478AC] px-4 py-2 text-[13px] font-semibold text-white"
                >
                  🏃 Running
                </button>

                <button
                  type="button"
                  className="rounded-full bg-[#5478AC] px-4 py-2 text-[13px] font-semibold text-white"
                >
                  🚴 Cycling
                </button>

                <button
                  type="button"
                  className="rounded-full bg-[#5478AC] px-4 py-2 text-[13px] font-semibold text-white"
                >
                  🏊 Swimming
                </button>

                <button
                  type="button"
                  className="rounded-full bg-[#5478AC] px-4 py-2 text-[13px] font-semibold text-white"
                >
                  🧘 Yoga
                </button>

                <button
                  type="button"
                  className="rounded-full bg-[#5478AC] px-4 py-2 text-[13px] font-semibold text-white"
                >
                  🏋️ Weight Training
                </button>

              </div>
            </section>


           
            <button
              type="button"
              className="flex h-[58px] w-full items-center justify-center gap-2 rounded-[13px] bg-[#20E58A] text-[16px] font-bold text-white"
            >
              <LuPlus size={22} />
              Add Custom Activity
            </button>

          </div>


          
          <section className="flex min-h-[274px] items-center justify-center rounded-[17px] border border-white/20 bg-[#172F60]">

            <div className="flex flex-col items-center text-center">

              <div className="flex h-[74px] w-[74px] items-center justify-center rounded-[14px] bg-[#7890B8]">
                <LuDumbbell
                  size={35}
                  className="text-white"
                />
              </div>

              <h2 className="mt-5 text-[16px] font-bold">
                No activities logged today
              </h2>

              <p className="mt-2 text-[13px] font-medium text-white/80">
                Start moving and track your progress
              </p>

            </div>

          </section>

        </div>
      </main>

    </div>
  );
}

export default Activity;