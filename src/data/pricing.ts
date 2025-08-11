import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Essentiel',
        price: 49,
        features: [
            '3 agents IA inclus',
            'Jusqu\'à 5 utilisateurs',
            '1000 tâches/mois',
            'Support par email',
            'Intégrations de base',
        ],
    },
    {
        name: 'Professionnel',
        price: 149,
        features: [
            '10 agents IA inclus',
            'Jusqu\'à 25 utilisateurs',
            '10 000 tâches/mois',
            'Support prioritaire 24/7',
            'Intégrations avancées',
            'Analytics détaillés',
            'API personnalisée',
        ],
    },
    {
        name: 'Enterprise',
        price: 'Sur mesure',
        features: [
            'Agents IA illimités',
            'Utilisateurs illimités',
            'Tâches illimitées',
            'Support dédié 24/7',
            'Solutions sur mesure',
            'Formation sur site',
            'SLA garantis',
            'Déploiement on-premise',
        ],
    },
]