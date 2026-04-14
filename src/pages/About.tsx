import { AboutHero } from '../components/about/AboutHero';
import { VisionMission } from '../components/about/VisionMission';
import { AboutMission } from '../components/about/AboutMission';
import { AboutImpact } from '../components/about/AboutImpact';
import { Footer } from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <AboutHero />
      <VisionMission />
      <AboutMission />
      <AboutImpact />
      <Footer />
    </div>
  );
}