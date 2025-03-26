"use client";
import dynamic from "next/dynamic";
import "chart.js/auto";

const Bar = dynamic(() => import("react-chartjs-2").then((mod) => mod.Bar), {
  ssr: false,
});

const data = {
  labels: ['j', 'f', 'm', 'a'],
  datasets: [
    {
      label: "",
      data: [45, 55, 75, 85,],
      backgroundColor: [
        "rgba(19,46,34,255)",
        "rgba(19,46,34,255)",
        "rgba(19,46,34,255)",
        "rgba(19,46,34,255)",
        
      ],
      borderColor: [
        "rgba(19,46,34,255)",
        "rgba(19,46,34,255)",
        "rgba(19,46,34,255)",
        "rgba(19,46,34,255)",
       
      ],
      borderWidth: 1,
    },
    {
        label: "",
        data: [80, 75, 85, 85,],
        backgroundColor: [
          "rgba(30,72,54,255)",
          "rgba(30,72,54,255)",
          "rgba(30,72,54,255)",
          "rgba(30,72,54,255)",
         
        ],
        borderColor: [
          "rgba(30,72,54,255)",
          "rgba(30,72,54,255)",
          "rgba(30,72,54,255)",
          "rgba(30,72,54,255)",

        ],
        borderWidth: 1,
      },
      {
        label: "",
        data: [55, 95, 40, 45],
        backgroundColor: [
          "rgba(40,97,73,255)",
          "rgba(40,97,73,255)",
          "rgba(40,97,73,255)",
          "rgba(40,97,73,255)",
          
        ],
        borderColor: [
          "rgba(40,97,73,255)",
          "rgba(40,97,73,255)",
          "rgba(40,97,73,255)",
          "rgba(40,97,73,255)",
         
        ],
        borderWidth: 1,
      },
      {
          label: "",
          data: [85, 35, 55, 100],
          backgroundColor: [
            "rgba(56,133,101,255)",
            "rgba(56,133,101,255)",
            "rgba(56,133,101,255)",
            "rgba(56,133,101,255)",
           
          ],
          borderColor: [
            "rgba(56,133,101,255)",
            "rgba(56,133,101,255)",
            "rgba(56,133,101,255)",
            "rgba(56,133,101,255)",
  
          ],
          borderWidth: 1,
        },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: "Ventes",
    },
  },
  scales: {
    x: {
      barPercentage: 1.0, // Remplissage complet
      categoryPercentage: 1.0, // Suppression de l’espace entre les catégories
      title: {
        display: false,
        text: "Categories",
      },
      grid: {
                display: true,
                // color: 'rgba(53,53,53,255)',
            },
      ticks: {
            display: true,
        },
    },
    y: {
      beginAtZero: true,
      title: {
        display: false,
        text: "Values",
      },
      grid: {
        display: true,
        color: 'rgba(53,53,53,255)',
    },
    ticks: {
        display: true,
    },
    },
  },
};

const BarChart = () => {
  return (
    <div className="flex w-[350px] h-[350px] md:w-[700px] md:h-[700px]" >
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
