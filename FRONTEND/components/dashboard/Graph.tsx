import { Flex } from "@chakra-ui/react";
import { IoIosMail } from "react-icons/io";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { SlPeople } from "react-icons/sl";
import { IoSwapVertical } from "react-icons/io5";
import { DashCard } from "../DashCard";


const graphics = [
    {
        t: "1/3",
        icon: <IoIosMail />,
        title: "Email Envoye",
        number: "12 364",
        percentage: "5%",
        graph: {
            data : {
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [
                  {
                    label: '',
                    data: [10, 15, 12, 20, 17, 30],
                    fill: true,
                    borderColor: 'rgba(102,189,152,255)',
                    backgroundColor: 'rgba(22,28,26,255)',
                    tension: 0.1,
                    pointRadius: 0,
                  },
                ],
              },
              
               options : {
                scales: {
                  x: {
                      grid: {
                          display: false, // Masquer la grille de l'axe X
                        },
                    ticks: {
                      display: false, // Masquer les labels de l'axe X
                    },
                  },
                  y: {
                      grid: {
                          display: false, // Masquer la grille de l'axe X
                        },
                    ticks: {
                      display: false, // Masquer les labels de l'axe Y
                    },
                  },
                },
                plugins: {
                  legend: {
                    display: false, // Désactiver la légende
                  },
                },
              }
        }
    },
    {
        t: "1/3",
        icon: <FaCircleDollarToSlot  />,
        title: "Ventes obtenues",
        number: "98 637",
        percentage: "5%",
        graph: {
            data : {
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [
                  {
                    label: '',
                    data: [10, 7, 20, 21, 10, 30],
                    fill: true,
                    borderColor: 'rgba(102,189,152,255)',
                    backgroundColor: 'rgba(22,28,26,255)',
                    tension: 0.1,
                    pointRadius: 0,
                  },
                ],
              },
              
               options : {
                scales: {
                  x: {
                      grid: {
                          display: false, // Masquer la grille de l'axe X
                        },
                    ticks: {
                      display: false, // Masquer les labels de l'axe X
                    },
                  },
                  y: {
                      grid: {
                          display: false, // Masquer la grille de l'axe X
                        },
                    ticks: {
                      display: false, // Masquer les labels de l'axe Y
                    },
                  },
                },
                plugins: {
                  legend: {
                    display: false, // Désactiver la légende
                  },
                },
              }
        }
    },
    {
        t: "1/3",
        icon: <SlPeople />,
        title: "Nouveaux clients",
        number: "32 908",
        percentage: "5%",
        graph: {
            data : {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', "juillet"],
                datasets: [
                  {
                    label: '',
                    data: [30, 10, 15, 10, 25, 20, 29],
                    fill: true,
                    borderColor: 'rgba(102,189,152,255)',
                    backgroundColor: 'rgba(22,28,26,255)',
                    tension: 0.1,
                    pointRadius: 0,
                  },
                ],
              },
              
               options : {
                scales: {
                  x: {
                      grid: {
                          display: false, // Masquer la grille de l'axe X
                        },
                    ticks: {
                      display: false, // Masquer les labels de l'axe X
                    },
                  },
                  y: {
                      grid: {
                          display: false, // Masquer la grille de l'axe X
                        },
                    ticks: {
                      display: false, // Masquer les labels de l'axe Y
                    },
                  },
                },
                plugins: {
                  legend: {
                    display: false, // Désactiver la légende
                  },
                },
              }
        }
    },
    {
        t: "",
        icon: <IoSwapVertical />,
        title: "Trafic",
        number: "1M",
        percentage: "5%",
        graph: {
            data : {
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [
                  {
                    label: '',
                    data: [12, 10, 30, 20, 25, 20],
                    fill: true,
                    borderColor: 'rgba(102,189,152,255)',
                    backgroundColor: 'rgba(22,28,26,255)',
                    tension: 0.1,
                    pointRadius: 0,
                  },
                ],
              },
              
               options : {
                scales: {
                  x: {
                      grid: {
                          display: false, // Masquer la grille de l'axe X
                        },
                    ticks: {
                      display: false, // Masquer les labels de l'axe X
                    },
                  },
                  y: {
                      grid: {
                          display: false, // Masquer la grille de l'axe X
                        },
                    ticks: {
                      display: false, // Masquer les labels de l'axe Y
                    },
                  },
                },
                plugins: {
                  legend: {
                    display: false, // Désactiver la légende
                  },
                },
              }
        }
    },
]

export default function Graph() {
  return (
    <Flex gap="2" overflowX="auto" pl={1} whiteSpace="nowrap" justifyContent={{base:"start", md: "center"}} >
        {graphics.map((graphic, index)=>(
            <DashCard key={index} graphic={graphic} />
        ))}
    </Flex>
  )
}
