"use client"
import { Button } from "@/components/ui/button"
import { GoChevronDown } from "react-icons/go";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu"
import { MenuType } from "@/data/type";
import Link from "next/link";

export const MenuNav = ({menus}: {menus:MenuType[]}) => {
  
  return (<>
    {menus.map((men, index)=>(
        <MenuRoot key={index}>
        <MenuTrigger asChild>
          <Button variant="outline" size="sm">
            {men.title} <GoChevronDown />
          </Button>
        </MenuTrigger>
        <MenuContent>
            {men.menu.map((part, key)=>(
                <MenuItem key={key} value={part.value}><Link href={part.link}>{part.titre} </Link></MenuItem>

            ))}
          {/* <MenuItem value="new-file">Mon abonnement</MenuItem>
          <MenuItem value="new-win">Voir les offres</MenuItem>
          <MenuItem value="open-file">Se deconnecter</MenuItem> */}
        </MenuContent>
      </MenuRoot>
    ))}
    
    </>)
}
