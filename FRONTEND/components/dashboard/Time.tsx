import { Box, Button, HStack, List } from "@chakra-ui/react";
import { FaCircle } from "react-icons/fa";

export default function Time() {
  return (
    <div className="p-6 space-y-4">
        <Box spaceX={4} w={{base: "full", md:"450px"}} p="1" rounded="2xl" borderWidth="2px" borderColor="#232424">
            <Button w="24" bg="#172e0e" color="#48d80b" rounded="2xl" >Jan. - Avr</Button>
            <Button w="24" variant="ghost" color="#48d80b" _hover={{bg:"#172e0e", rounded: "2xl"}}>Mai. - Aou. </Button>
            <Button w="24" variant="ghost" color="#48d80b" _hover={{bg:"#172e0e", rounded: "2xl"}}>  Sept. - Dec.</Button>
        </Box>
        <Box>
            <HStack spaceX={4}>
                <List.Root spaceY={3}>
                    <List.Item>
                        <List.Indicator asChild color="#388565">
                            <FaCircle />
                        </List.Indicator>
                        Email
                    </List.Item>
                    <List.Item>
                        <List.Indicator asChild color="#286149">
                            <FaCircle />
                        </List.Indicator>
                        Nouveaux clients
                    </List.Item>
                </List.Root>
                <List.Root spaceY={3}>
                    <List.Item>
                        <List.Indicator asChild color="#1e4836">
                            <FaCircle />
                        </List.Indicator>
                        Ventes
                    </List.Item>
                    <List.Item>
                        <List.Indicator asChild color="#132e22">
                            <FaCircle />
                        </List.Indicator>
                        Trafic
                    </List.Item>
                </List.Root>
            </HStack>
        </Box>
    </div>
  )
}