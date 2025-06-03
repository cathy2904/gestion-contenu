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
import { useAuth } from "@/app/contexts/authProvider";

export const MenuNav = ({menus}: {menus:MenuType[]}) => {
  const { user, logout } = useAuth();
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
             {/* {user && (
        <div className="flex items-center gap-4">
          <span>Bienvenue, {user.username} !</span>
          <button
            onClick={logout}
            className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
          >
            Déconnexion
          </button>
        </div>
      )} */}
          {/* <MenuItem value="new-file">Mon abonnement</MenuItem>
          <MenuItem value="new-win">Voir les offres</MenuItem>
          <MenuItem value="open-file">Se deconnecter</MenuItem> */}
        </MenuContent>
      </MenuRoot>
    ))}
    
    </>)
}
