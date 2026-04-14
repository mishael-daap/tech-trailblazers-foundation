import { Hero } from '../components/Hero';
import { Mission } from '../components/Mission';
import { Vision } from '../components/Vision';
import { WhyUs } from '../components/WhyUs';
import { Impact } from '../components/Impact';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Hero />
      <Mission />
      <Vision />
      <WhyUs />
      <Impact />
      <Footer />
    </div>
  );
}
