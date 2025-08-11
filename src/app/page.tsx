import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Logos />
      <Container>
        <Benefits />

        <Section
          id="pricing"
          title="Tarifs"
          description="Tarification simple et transparente. Aucune surprise."
        >
          <Pricing />
        </Section>

        <Section
          id="testimonials"
          title="Ce Que Disent Nos Clients"
          description="Découvrez les témoignages de ceux qui nous font confiance."
        >
          <Testimonials />
        </Section>

        <FAQ />

        <Stats />
        
        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
