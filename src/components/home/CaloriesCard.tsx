import {
  TbBurger,
  TbFlame,
  TbActivity,
  TbBolt,
} from "react-icons/tb";

function CaloriesCard() {
  return (
    <div className="space-y-5">

      {/* Calories Card */}
      <div className="rounded-2xl border border-blue-300/20 bg-[#17366F] p-6 text-white shadow-lg">

        {/* Calories Consumed */}
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-orange-500">
              <TbBurger size={30} />
            </div>

            <div>
              <p className="text-lg font-medium">
                Calories Consumed
              </p>

              <p className="text-3xl font-bold">
                0
              </p>
            </div>

          </div>

          <div className="text-right">
            <p className="text-sm text-white/80">
              Limit
            </p>

            <p className="text-2xl font-bold">
              2000
            </p>
          </div>

        </div>

        {/* Progress Bar */}
        <div className="mt-5 h-3 w-full rounded-full bg-blue-300/40">
          <div className="h-3 w-0 rounded-full bg-cyan-400"></div>
        </div>

        <div className="mt-4 flex items-center justify-between">

          <span className="rounded-lg bg-cyan-400/20 px-3 py-2 font-semibold text-cyan-300">
            2000 kcal remaining
          </span>

          <span className="text-sm font-medium text-white/80">
            0%
          </span>

        </div>

        <div className="my-5 border-t border-blue-300/20"></div>

        {/* Calories Burned */}
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-orange-500">
              <TbFlame size={30} />
            </div>

            <div>
              <p className="text-lg font-medium">
                Calories Burned
              </p>

              <p className="text-3xl font-bold">
                0
              </p>
            </div>

          </div>

          <div className="text-right">

            <p className="text-sm text-white/80">
              Goal
            </p>

            <p className="text-2xl font-bold">
              400
            </p>

          </div>

        </div>

        {/* Progress Bar */}
        <div className="mt-5 h-3 w-full rounded-full bg-blue-300/40">
          <div className="h-3 w-0 rounded-full bg-cyan-400"></div>
        </div>

      </div>


      {/* Bottom Stats */}
      <div className="grid grid-cols-2 gap-5">

        {/* Active */}
        <div className="rounded-2xl border border-blue-300/20 bg-[#17366F] p-6 text-white shadow-lg">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-blue-500">
              <TbActivity size={30} />
            </div>

            <p className="text-lg font-medium">
              Active
            </p>

          </div>

          <p className="mt-3 text-3xl font-bold">
            0
          </p>

          <p className="font-medium">
            minutes today
          </p>

        </div>


        {/* Workouts */}
        <div className="rounded-2xl border border-blue-300/20 bg-[#17366F] p-6 text-white shadow-lg">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-purple-500">
              <TbBolt size={30} />
            </div>

            <p className="text-lg font-medium">
              Workouts
            </p>

          </div>

          <p className="mt-3 text-3xl font-bold">
            0
          </p>

          <p className="font-medium">
            activities logged
          </p>

        </div>

      </div>

    </div>
  );
}

export default CaloriesCard;