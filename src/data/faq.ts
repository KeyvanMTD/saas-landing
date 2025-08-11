import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `${siteDetails.siteName} est-il sécurisé ?`,
        answer: 'Absolument. Nous utilisons un chiffrement de niveau bancaire pour protéger vos données et respectons strictement le RGPD. Vos informations sensibles ne quittent jamais votre environnement sécurisé.',
    },
    {
        question: `Puis-je utiliser ${siteDetails.siteName} sur plusieurs appareils ?`,
        answer: 'Bien sûr ! Votre compte se synchronise parfaitement sur tous vos appareils - ordinateur, tablette et smartphone. Vos agents IA sont accessibles partout.',
    },
    {
        question: 'Puis-je intégrer mes outils existants ?',
        answer: `Oui ! ${siteDetails.siteName} s'intègre avec plus de 500 applications métier : CRM, ERP, outils de communication, bases de données, et bien plus encore.`
    },
    {
        question: 'Faut-il des compétences techniques pour créer des agents ?',
        answer: 'Pas du tout ! Notre interface intuitive permet à chacun de créer des agents IA puissants sans aucune programmation. Nos templates prêts à l\'emploi vous font gagner du temps.',
    },
    {
        question: 'Que faire si j\'ai besoin d\'aide ?',
        answer: 'Notre équipe support dédiée est disponible 24/7 par chat ou email. Nous proposons aussi des formations personnalisées et une base de connaissances complète.'
    }
];