import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HomePage from "@/components/HomePage";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Questions from "@/components/Questions";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className=" min-h-screen overflow-hidden">
      <Navbar />
      <HomePage />
      <About />
      <Services />
      <Portfolio />
      <Team />
      <Pricing />
      <Testimonials />
      <Questions />
      <Contact />
      <Footer />
    </main>
  );
}
