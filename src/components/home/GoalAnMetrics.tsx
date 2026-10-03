import {
  TbScale,
  TbRulerMeasure,
  TbTrendingUp,
} from "react-icons/tb";

function GoalAndMetrics() {
  return (
    <div className="grid grid-cols-2 gap-5">

      {/* Your Goal */}
      <div className="min-h-[365px] rounded-2xl border border-blue-300/30 bg-[#17366F] p-6 text-white">

        <div className="flex items-center gap-4">

          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-emerald-300/20 text-emerald-300">
            <TbTrendingUp size={32} />
          </div>

          <div>
            <p className="text-xl font-bold">
              Your Goal
            </p>

            <p className="mt-1 text-lg">
              ⚖️ Maintain Weight
            </p>
          </div>

        </div>

      </div>


      {/* Body Metrics */}
      <div className="rounded-2xl border border-blue-300/30 bg-[#17366F] p-6 text-white">

        <div className="flex items-center gap-4">

          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white text-indigo-500">
            <TbScale size={32} />
          </div>

          <div>
            <p className="text-xl font-bold">
              Body Metrics
            </p>

            <p className="text-lg text-white/80">
              Your stats
            </p>
          </div>

        </div>


        {/* Weight */}
        <div className="mt-8 flex items-center justify-between">

          <div className="flex items-center gap-4">

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-300/20">
              <TbScale size={22} />
            </div>

            <span className="text-lg font-medium">
              Weight
            </span>

          </div>

          <span className="text-lg font-bold">
            48 kg
          </span>

        </div>


        {/* Height */}
        <div className="mt-5 flex items-center justify-between">

          <div className="flex items-center gap-4">

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-300/20">
              <TbRulerMeasure size={22} />
            </div>

            <span className="text-lg font-medium">
              Height
            </span>

          </div>

          <span className="text-lg font-bold">
            159 cm
          </span>

        </div>


        <div className="my-5 border-t border-blue-300/30" />


        {/* BMI */}
        <div className="flex items-center justify-between">

          <span className="text-lg font-bold">
            BMI
          </span>

          <span className="text-2xl font-bold text-emerald-300">
            19.0
          </span>

        </div>


        {/* BMI Bar */}
        <div className="mt-4">

          <div className="flex h-3 overflow-hidden rounded-full">
            <div className="w-1/3 bg-sky-300" />
            <div className="w-1/3 bg-emerald-300" />
            <div className="w-1/3 bg-rose-300" />
          </div>

          <div className="mt-2 flex justify-between text-sm font-medium">
            <span>18.5</span>
            <span>25</span>
            <span>30</span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default GoalAndMetrics;