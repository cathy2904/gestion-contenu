import { Flex } from "@chakra-ui/react";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { SlPeople } from "react-icons/sl";
import { IoSwapVertical } from "react-icons/io5";
import { ReferalCard } from "./ReferalCard";

const graphics = [
    {
        t: "1/3",
        icon: <FaCircleDollarToSlot />,
        title: "Recompense a verser",
        desc: "Lorem ipsum",
        number: "$ 12 364",
        percentage: "+10%",
        info: "Demander paiement",
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
        icon: <SlPeople  />,
        desc: "lorem ipsum",
        title: "Nombre d'abonnes",
        number: "234 098",
        percentage: "5%",
        info: "Plus d'information",
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
        title: "Nombre d'invites",
        desc: "lorem ipsum",
        number: "76 243",
        percentage: "3%",
        info: "Plus d'information",
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
        title: "Taux de conversion",
        number: "67%",
        desc: "lorem ipsum",
        percentage: "+34%",
        info: "Plus d'information",
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

export default function ReferalGraph() {
  return (
    <Flex flexDir={{base:"column", md:"row"}} overflow="auto" justifyContent="center"  gap={1}  px={2} whiteSpace="nowrap">
        {graphics.map((graphic, index)=>(
            <ReferalCard key={index} graphic={graphic} />
        ))}
    </Flex>
  )
}
