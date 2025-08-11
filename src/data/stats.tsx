import { BsRobot, BsFillStarFill } from "react-icons/bs";
import { PiLightningFill } from "react-icons/pi";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "50K+",
        icon: <BsRobot size={34} className="text-blue-500" />,
        description: "Agents IA déployés qui automatisent des milliers de tâches chaque jour."
    },
    {
        title: "5.0",
        icon: <BsFillStarFill size={34} className="text-yellow-500" />,
        description: "Note moyenne de nos clients, qui témoigne de la qualité de nos agents IA."
    },
    {
        title: "95%",
        icon: <PiLightningFill size={34} className="text-green-600" />,
        description: "De gain de temps rapporté par nos utilisateurs grâce à l'automatisation IA."
    }
];