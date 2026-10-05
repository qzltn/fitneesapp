import {
  LuPlus,
  LuSparkles,
  LuUtensilsCrossed,
} from "react-icons/lu";

function Food() {
  return (
    <div className="min-h-screen bg-[#06163D] text-white">

      <header className="border-b border-white/10 bg-[#0B1F49] px-8 py-7">

        <div className="flex items-center justify-between">

          <div>
            <h1 className="text-[25px] font-bold">
              Food Log
            </h1>

            <p className="mt-1 text-[14px] text-white/75">
              Track your daily intake
            </p>
          </div>

          <div className="text-right">
            <p className="text-[12px] font-medium text-white/80">
              Today's Total
            </p>

            <p className="mt-1 text-[19px] font-bold text-[#42E29A]">
              0 kcal
            </p>
          </div>

        </div>

      </header>


      <main className="px-8 py-7">

        <div className="grid grid-cols-2 gap-5">

          <div className="space-y-4">

            <section className="rounded-[17px] border border-white/15 bg-[#172B58] px-5 py-5">

              <h2 className="text-[17px] font-bold">
                Quick Add
              </h2>

              <div className="mt-4 flex gap-2">

                <button
                  type="button"
                  className="rounded-full bg-[#5276A9] px-4 py-[7px] text-[13px] font-semibold text-white"
                >
                  🥑 breakfast
                </button>

                <button
                  type="button"
                  className="rounded-full bg-[#5276A9] px-4 py-[7px] text-[13px] font-semibold text-white"
                >
                  🍱 lunch
                </button>

                <button
                  type="button"
                  className="rounded-full bg-[#5276A9] px-4 py-[7px] text-[13px] font-semibold text-white"
                >
                  🌙 dinner
                </button>

                <button
                  type="button"
                  className="rounded-full bg-[#5276A9] px-4 py-[7px] text-[13px] font-semibold text-white"
                >
                  🍪 snack
                </button>

              </div>

            </section>


            <button
              type="button"
              className="flex h-[54px] w-full items-center justify-center gap-2 rounded-[13px] bg-[#20E58A] text-[16px] font-bold text-white"
            >
              <LuPlus size={21} />
              Add Food Entry
            </button>


            <button
              type="button"
              className="flex h-[54px] w-full items-center justify-center gap-2 rounded-[13px] bg-[#20E58A] text-[16px] font-bold text-white"
            >
              <LuSparkles size={21} />
              AI Food Snap
            </button>

          </div>


          <section className="flex min-h-[290px] items-center justify-center rounded-[17px] border border-white/15 bg-[#172B58]">

            <div className="flex flex-col items-center text-center">

              <div className="flex h-[62px] w-[62px] items-center justify-center rounded-[13px] bg-[#657DA6]">
                <LuUtensilsCrossed
                  size={31}
                  className="text-white"
                />
              </div>

              <h2 className="mt-5 text-[16px] font-bold">
                No food logged today
              </h2>

              <p className="mt-2 text-[13px] font-medium text-white/75">
                Start tracking your meals to stay on target
              </p>

            </div>

          </section>

        </div>

      </main>

    </div>
  );
}

export default Food;