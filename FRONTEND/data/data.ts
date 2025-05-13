import { MenuType } from "./type";


export const menunav: MenuType[] = [
    {
        title: "Dashboard",
        menu: [
            {
                titre: "login",
                link: "/",
                value: "new-txt"
            },
            {
                titre: "Mon abonnement",
                link: "/",
                value: "new-file"
            },
            {
                titre: "Voir les offres",
                link: "/",
                value: "new-win"
            },
            {
                titre: "Se deconnecter",
                link: "/",
                value: "open-file"
            },
        ]
    } 
]
export const contents: MenuType[] = [
    {
        title: "Contents",
        menu: [
            {
                titre: "Generer",
                link: "/content",
                value: "new-txt"
            },
            {
                titre: "Content2",
                link: "/",
                value: "new-file"
            }
        ]
    } 
]
export const markets: MenuType[] = [
    {
        title: "Marketing",
        menu: [
            {
                titre: "Sell",
                link: "/marketing",
                value: "new-txt"
            },
            {
                titre: "Expenses",
                link: "/",
                value: "new-file"
            }
        ]
    } 
]

