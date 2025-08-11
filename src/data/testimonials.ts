import { ITestimonial } from "@/types";
import { siteDetails } from "./siteDetails";

export const testimonials: ITestimonial[] = [
    {
        name: 'Marie Dubois',
        role: 'Directrice Marketing chez TechCorp',
        message: `${siteDetails.siteName} a révolutionné notre productivité. Nos agents IA gèrent maintenant 80% de nos tâches répétitives, nous permettant de nous concentrer sur la stratégie.`,
        avatar: '/images/testimonial-1.webp',
    },
    {
        name: 'Pierre Martin',
        role: 'CTO chez InnovateLab',
        message: `En tant que CTO, je suis impressionné par la robustesse de ${siteDetails.siteName}. L'intégration avec nos systèmes existants s'est faite sans accroc.`,
        avatar: '/images/testimonial-2.webp',
    },
    {
        name: 'Sophie Leroy',
        role: 'Responsable Opérations',
        message: `${siteDetails.siteName} transforme notre façon de travailler. Les agents IA comprennent parfaitement nos processus métier et s'améliorent chaque jour.`,
        avatar: '/images/testimonial-3.webp',
    },
];