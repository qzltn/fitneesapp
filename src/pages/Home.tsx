import HomeHeader from "../components/home/HomeHeader";
import CaloriesCard from "../components/home/CaloriesCard";
import GoalAndMetrics from "../components/home/GoalAnMetrics";
import TodaySummary from "../components/home/TodaySummary";
import WeeklyProgress from "../components/home/WeeklyProgrees";

function Home() {
  return (
    <div className="min-h-screen bg-[#06163D]">

      <HomeHeader />

      <main className="mx-auto -mt-12 max-w-5xl space-y-5 px-8 pb-10">

        <CaloriesCard />


     
        <GoalAndMetrics />


        
        <TodaySummary />


        
        <WeeklyProgress />

      </main>

    </div>
  );
}

export default Home;