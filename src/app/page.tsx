import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/stats/Stats';
import Partnerships from '@/components/partnerships/Partnerships';
import AccredianEdge from '@/components/accredian-edge/AccredianEdge';
import DomainExpertise from '@/components/domain/DomainExpertise';
import CourseSegmentation from '@/components/segmentation/CourseSegmentation';
import StrategicSkillEnhancement from '@/components/strategic/StrategicSkillEnhancement';
import CATFramework from '@/components/cat/CATFramework';
import DeliveryProcess from '@/components/process/DeliveryProcess';
import FAQ from '@/components/faq/FAQ';
import Testimonials from '@/components/testimonials/Testimonials';
import CTASection from '@/components/cta/CTASection';
import Footer from '@/components/footer/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Stats />
      <Partnerships />
      <AccredianEdge />
      <DomainExpertise />
      <CourseSegmentation />
      <StrategicSkillEnhancement />
      <CATFramework />
      <DeliveryProcess />
      <FAQ />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}
