import {  Card, Flex, VStack } from "@chakra-ui/react"
// import { Avatar } from "@/components/ui/avatar"
// import { IoIosMail } from "react-icons/io";
import { Button } from "@/components/ui/button"
import LineChart, { GraphType } from "./chart/Line";

type GraphicType = {
  t?: string,
  icon: React.ReactNode,
  title: string,
  percentage: string,
  number: string,
  graph: GraphType
}
export const DashCard = ({graphic}:{graphic: GraphicType }) => {
  return (
    <Card.Root justifyContent="center" bg="#121212" width="230px" height="300px" rounded="md" borderWidth="1px" borderColor="#232424" flexShrink={0}>
      <Card.Body gap="2">
        <Flex  color="white" spaceX="2">
          <Button p="-1" bg="#2c2c2c">{graphic.icon} </Button>
          <VStack spaceY="-1">
            <span>{graphic.title} </span>
            <span className="text-white text-xs">Derniere mise a jour</span>
          </VStack>
        </Flex>
        {/* <Card.Title mt="2">Nue Camp</Card.Title> */}
        <div>
          <LineChart graph={graphic.graph} />
          
        </div>
        <div className="flex -mt-20 justify-around">
            <Button variant="ghost" color="white" fontWeight="bold">{graphic.number} </Button>
            <Button p={-2} w="16" bg="#172e0e" color="#48d80b" fontWeight="bold" borderRadius="2xl">{graphic.percentage} </Button>
        </div>
      </Card.Body>
      {/* <Card.Footer justifyContent="flex-end">
        <Button variant="outline">View</Button>
        <Button>Join</Button>
      </Card.Footer> */}
    </Card.Root>
  )
}
