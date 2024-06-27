// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdGames,
  MdPrivacyTip,
} from "react-icons/md";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/dashboard",
    path: "dashboard",
    icon: <MdHome className="h-6 w-6" />,
  },
  // {
  //   name: "Main Game",
  //   layout: "/dashboard",
  //   path: "game",
  //   icon: <MdGames className="h-6 w-6" />,
  // },
  // {
  //   name: "Privacy Policy",
  //   layout: "/dashboard",
  //   path: "privacy-policy",
  //   icon: <MdPrivacyTip className="h-6 w-6" />,
  // }
  // {
  //   name: "NFT Marketplace",
  //   layout: "/dashboard",
  //   path: "nft-marketplace",
  //   icon: <MdOutlineShoppingCart className="h-6 w-6" />,
  //   secondary: true,
  // },
  // {
  //   name: "Data Tables",
  //   layout: "/dashboard",
  //   icon: <MdBarChart className="h-6 w-6" />,
  //   path: "data-tables",
  // },
  // {
  //   name: "Profile",
  //   layout: "/dashboard",
  //   path: "profile",
  //   icon: <MdPerson className="h-6 w-6" />,
  // },
  // {
  //   name: "RTL Admin",
  //   layout: "/rtl",
  //   path: "rtl",
  //   icon: <MdHome className="h-6 w-6" />,
  // },
];

export default routes;
