function TodaySummary() {
  return (
    <div className="w-1/2 rounded-2xl border border-blue-300/30 bg-[#17366F] p-6 text-white">

      <h2 className="text-xl font-bold">
        Today's Summary
      </h2>


      {/* Meals */}
      <div className="mt-8 flex items-center justify-between border-b border-blue-300/30 pb-5">

        <span className="text-lg font-medium">
          Meals logged
        </span>

        <span className="text-xl font-bold">
          0
        </span>

      </div>


      {/* Calories */}
      <div className="flex items-center justify-between border-b border-blue-300/30 py-5">

        <span className="text-lg font-medium">
          Total calories
        </span>

        <span className="text-xl font-bold">
          0 kcal
        </span>

      </div>


      {/* Active */}
      <div className="flex items-center justify-between pt-5">

        <span className="text-lg font-medium">
          Active time
        </span>

        <span className="text-xl font-bold">
          0 min
        </span>

      </div>

    </div>
  );
}

export default TodaySummary;