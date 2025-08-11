import { FiBrain, FiCpu, FiZap, FiLock, FiUsers, FiShield, FiTarget, FiTrendingUp, FiSettings } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Agents IA Spécialisés",
        description: "Créez des agents IA experts dans votre domaine. Chaque agent comprend votre contexte métier et s'adapte à vos besoins spécifiques.",
        bullets: [
            {
                title: "IA Contextuelle",
                description: "Agents qui comprennent votre secteur et vos processus métier.",
                icon: <FiBrain size={26} />
            },
            {
                title: "Objectifs Personnalisés",
                description: "Configurez des missions et KPIs adaptés à vos besoins.",
                icon: <FiTarget size={26} />
            },
            {
                title: "Apprentissage Continu",
                description: "Vos agents s'améliorent automatiquement avec chaque interaction.",
                icon: <FiTrendingUp size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
    {
        title: "Automatisation Intelligente",
        description: "Automatisez vos tâches complexes sans programmation. Nos agents IA s'occupent du travail répétitif pour vous.",
        bullets: [
            {
                title: "Déploiement Rapide",
                description: "Lancez vos agents en quelques minutes, sans code requis.",
                icon: <FiZap size={26} />
            },
            {
                title: "Workflows Intelligents",
                description: "Créez des processus automatisés qui s'adaptent aux situations.",
                icon: <FiCpu size={26} />
            },
            {
                title: "Collaboration d'Équipe",
                description: "Partagez vos agents avec votre équipe et travaillez ensemble.",
                icon: <FiUsers size={26} />
            }
        ],
        imageSrc: "/images/mockup-2.webp"
    },
    {
        title: "Sécurité Entreprise",
        description: "Vos données et processus sont protégés par une sécurité de niveau entreprise. Conformité RGPD garantie.",
        bullets: [
            {
                title: "Chiffrement Avancé",
                description: "Toutes vos données sont chiffrées avec les standards les plus élevés.",
                icon: <FiLock size={26} />
            },
            {
                title: "Contrôles d'Accès",
                description: "Gérez finement qui peut accéder à quels agents et données.",
                icon: <FiSettings size={26} />
            },
            {
                title: "Conformité RGPD",
                description: "Respect total des réglementations européennes sur la protection des données.",
                icon: <FiShield size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
]