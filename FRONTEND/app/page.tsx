import BarChart from "@/components/chart/Chart";
import Graph from "@/components/dashboard/Graph";
import Time from "@/components/dashboard/Time";
import Principal from "@/components/Principal";

export default function Home() {
  return (
    <Principal titre="Dashboard">
      {/* <h1 className="p-4 text-xl">Dashboard</h1> */}
      <Graph />
      <Time />
      <BarChart />
    </Principal>
  );
}

// import Posts from './post/page'
// export default function Home() {
//   return (
//         <Posts />
//   )
// }
