import NewUsersChart from "@/components/newUsersChart";
import RecentRequests from "@/components/recentRequests";
import Tile from "@/components/tile";
import UserInflow from "@/components/userInflow";
import { analytics } from "@/lib/data";

export default function Home() {
  return (
    <div>
      <section className="grid tab:grid-cols-4 gap-8 grid-cols-1 sm:grid-cols-2">
        {analytics.map((data) => (
          <Tile {...data} key={data.title} />
        ))}
      </section>
      <section className="grid grid-cols-1 tab:grid-cols-4 gap-8 mt-10">
        <div className="col-span-full tab:col-span-3 bg-white rounded-lg py-4">
          <UserInflow />
        </div>
        <NewUsersChart />
      </section>
      <section className="grid grid-cols-1 tab:grid-cols-4 mt-10">
        <div className="col-span-full tab:col-span-3 bg-white rounded-lg">
          <RecentRequests />
        </div>
      </section>
    </div>
  );
}
