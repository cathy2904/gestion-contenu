"use client";
import dynamic from 'next/dynamic';
import 'chart.js/auto';

const Line = dynamic(() => import('react-chartjs-2').then((mod) => mod.Line), {
  ssr: false,
});

// const data = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June'],
//   datasets: [
//     {
//       label: '',
//       data: [10, 15, 12, 20, 17, 30],
//       fill: true,
//       borderColor: 'rgba(102,189,152,255)',
//       backgroundColor: 'rgba(22,28,26,255)',
//       tension: 0.1,
//       pointRadius: 0,
//     },
//   ],
// };

// const options = {
//   scales: {
//     x: {
//         grid: {
//             display: false, // Masquer la grille de l'axe X
//           },
//       ticks: {
//         display: false, // Masquer les labels de l'axe X
//       },
//     },
//     y: {
//         grid: {
//             display: false, // Masquer la grille de l'axe X
//           },
//       ticks: {
//         display: false, // Masquer les labels de l'axe Y
//       },
//     },
//   },
//   plugins: {
//     legend: {
//       display: false, // Désactiver la légende
//     },
//   },
// };
export type GraphType = {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor?: string;
    }[];
  };
  options?: object;
};
const LineChart = ({graph}: {graph: GraphType}) => {
  return (
    <div className='-ml-3' style={{ width: '200px', height: '200px' }}>
      <Line data={graph.data} options={graph.options} />
    </div>
  );
};

export default LineChart;
