import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Clients } from "@/components/Clients";
import { AccredianEdge } from "@/components/AccredianEdge";
import { DomainExpertise } from "@/components/DomainExpertise";
import { CourseSegmentation } from "@/components/CourseSegmentation";
import { WhoShouldJoin } from "@/components/WhoShouldJoin";
import { CatFramework } from "@/components/CatFramework";
import { DeliveryProcess } from "@/components/DeliveryProcess";
import { Faq } from "@/components/Faq";
import { Testimonials } from "@/components/Testimonials";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Clients />
        <AccredianEdge />
        <DomainExpertise />
        <CourseSegmentation />
        <WhoShouldJoin />
        <CatFramework />
        <DeliveryProcess />
        <Faq />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
