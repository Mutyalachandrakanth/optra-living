import { Box } from "@mui/material";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutCompany from "@/components/AboutCompany";
import OwnerCTA from "@/components/OwnerCTA";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <Box component="main">
      <Navbar />
      <Hero />
      <Services />
      <AboutCompany />
      <OwnerCTA />
      <ContactSection />
      <Footer />
    </Box>
  );
}
