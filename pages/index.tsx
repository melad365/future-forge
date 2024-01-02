import Hero from "@/components/Hero";
import Product from "@/components/Product";
import Welcome from "@/components/Welcome";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Certificate from "@/components/Certificate";
import Footer from "@/components/Footer";
import Word from "@/components/Word";

export default function Home() {
  return (
    <main>
      <Hero />
      <Welcome />
      <Word />
      <Product />
      <Stats />
      <Services />
      {/* <Certificate /> */}
    </main>
  );
}
