

import Principal from "@/components/Principal";
import { Stack, Text, Heading, HStack } from "@chakra-ui/react";
import Image from "next/image";
import Copy from "./components/Copy";
import ReferalGraph from "./components/ReferalGraph";

 
export default function ReferalPage() {
  return (
    <Principal titre="Referal">
      {/* <h1>Referal </h1> */}
      <div className="space-y-6 overflow-hidden">
        <HStack>
          <Image width={32} height={32} src="/money.svg" alt="svg" />
          <Stack>
            <Heading fontSize="2xl" size="sm" letterSpacing="wider" fontWeight="bold">
                Gagnez <span className="text-[#44d00c]">40%</span> de nos revenus a <span className="text-[#44d00c]">vie</span> 
            </Heading>
            <Text fontSize="md" color="fg.muted">
              Invite des amis et gagne 40% de nos revenus chaque mois
            </Text>
          </Stack>
        </HStack>
        <Stack fontSize="xl" spaceY="4">
          <Heading>Votre lien de parrainage</Heading>
          <Copy />
        </Stack>
        
        <ReferalGraph />
      </div>

    </Principal>
  )
}