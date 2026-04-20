import { Hero } from '../components/Hero';
import { MissionAndVission } from '../components/Mission';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Hero />
      <MissionAndVission />
      <Footer />
    </div>
  );
}
