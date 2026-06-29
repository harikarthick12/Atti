import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import HowWeWork from "@/components/sections/HowWeWork";
import Services from "@/components/sections/Services";
import Founders from "@/components/sections/Founders";
import Community from "@/components/sections/Community";
import Portfolio from "@/components/sections/Portfolio";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <HowWeWork />
      <Services />
      <Founders />
      <Community />
      <Portfolio />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
