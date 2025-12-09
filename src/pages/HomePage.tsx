import { HeroSection } from '../components/HeroSection';
import { HowItWorks } from '../components/HowItWorks';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { DashboardSection } from '../components/DashboardSection';
import { FAQ } from '../components/FAQ';
import { Newsletter } from '../components/Newsletter';

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <FeaturedProjects />
      <TestimonialsSection />
      <DashboardSection />
      <FAQ />
      <Newsletter />
    </>
  );
};
