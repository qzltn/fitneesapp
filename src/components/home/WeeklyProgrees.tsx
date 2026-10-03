function WeeklyProgress() {
  return (
    <div className="rounded-2xl border border-blue-300/30 bg-[#17366F] p-6 text-white">

      <h2 className="text-xl font-bold">
        This Week's Progress
      </h2>


      {/* Chart */}
      <div className="mt-8">

        {/* 4 */}
        <div className="flex items-center gap-4">
          <span className="w-5 text-sm">4</span>
          <div className="flex-1 border-t border-dashed border-white/60" />
        </div>


        {/* 3 */}
        <div className="mt-10 flex items-center gap-4">
          <span className="w-5 text-sm">3</span>
          <div className="flex-1 border-t border-dashed border-white/60" />
        </div>


        {/* 2 */}
        <div className="mt-10 flex items-center gap-4">
          <span className="w-5 text-sm">2</span>
          <div className="flex-1 border-t border-dashed border-white/60" />
        </div>


        {/* 1 */}
        <div className="mt-10 flex items-center gap-4">
          <span className="w-5 text-sm">1</span>
          <div className="flex-1 border-t border-dashed border-white/60" />
        </div>


        {/* 0 */}
        <div className="mt-10 flex items-center gap-4">
          <span className="w-5 text-sm">0</span>
          <div className="flex-1 border-t border-dashed border-white/60" />
        </div>


        {/* Days */}
        <div className="ml-9 mt-2 flex justify-between text-sm font-medium">

          <span>Sun</span>
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>

        </div>

      </div>


      {/* Legend */}
      <div className="mt-8 flex justify-center gap-5 text-lg font-medium">

        <div className="flex items-center gap-2 text-orange-400">
          <span className="h-3 w-3 rounded-full bg-orange-400" />
          Burn
        </div>

        <div className="flex items-center gap-2 text-emerald-300">
          <span className="h-3 w-3 rounded-full bg-emerald-300" />
          Intake
        </div>

      </div>

    </div>
  );
}

export default WeeklyProgress;