function HomeHeader() {
  return (
    <header className="rounded-b-[28px] bg-gradient-to-r from-emerald-400 to-green-400 px-8 py-8 text-white">

      <p className="text-lg font-medium">
        Welcome back
      </p>

      <h1 className="mt-1 text-3xl font-bold">
        Hi there! 👋 qzltnn
      </h1>

      <div className="mt-8 flex items-center gap-4 rounded-2xl bg-white/15 px-5 py-5 backdrop-blur-sm">
        <span className="text-3xl">
          💪
        </span>

        <p className="text-lg font-semibold">
          Ready to crush today? Start logging!
        </p>
      </div>

    </header>
  );
}

export default HomeHeader;