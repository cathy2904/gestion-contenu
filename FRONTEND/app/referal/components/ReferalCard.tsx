import {  Card, Flex, VStack } from "@chakra-ui/react"
// import { Avatar } from "@/components/ui/avatar"
// import { IoIosMail } from "react-icons/io";
import { Button } from "@/components/ui/button"
import LineChart, { GraphType } from "@/components/chart/Line"
import Link from "next/link"

type GraphicType = {
  t?: string,
  icon: React.ReactNode,
  title: string,
  desc: string,
  number: string,
  percentage: string,
  graph: GraphType,
  info: string
}
export const ReferalCard = ({graphic}:{graphic: GraphicType }) => {
  return (
    <Card.Root justifyContent="center" bg="#121212" width="235px" height="300px" rounded="md" borderWidth="1px" borderColor="#232424" flexShrink={0}>
      <Card.Body gap="2">
        <Flex  color="white" spaceX="2">
          <Button p="-1" bg="#2c2c2c">{graphic.icon} </Button>
          <VStack spaceY="-1">
            <span>{graphic.title} </span>
            <span className="text-white text-xs">{graphic.desc} </span>
          </VStack>
        </Flex>
        <div className="flex justify-center">
            <Button p={-2} w="16" bg="#172e0e" color="#48d80b" fontWeight="bold" borderRadius="2xl">{graphic.percentage}</Button>
        </div>
        <div>
          <LineChart graph={graphic.graph} />
          
        </div>
        <div className=" -mt-24 flex flex-col">
            <Button variant="ghost" color="white" fontWeight="bold">{graphic.number} </Button>
            <Link href="/" className="flex justify-center">
                <Button p={2} bg="#172e0e" color="#48d80b" fontWeight="bold" borderRadius="2xl">{graphic.info}</Button>
            </Link>
        </div>
      </Card.Body>
      
    </Card.Root>
  )
}
