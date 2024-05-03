import Image from "next/image";
import { HeroParallaxDemo } from "./hero";
import { NavBar } from "./nav";
import { FeaturesSection } from "./features";
import CallToAction from "@/app/callToAction";
import { MoreInfo } from "./moreInfo";
import { Team } from "./team";
import { FooterSec } from "./footerSec";

export default function Home() {
  return (
    <section className="">
      <section className="fixed z-50 w-full px-3 py-3 bg-white lg:px-10">
        <NavBar></NavBar>
      </section>
      <section id="home" className="relative">
        <HeroParallaxDemo></HeroParallaxDemo>
      </section>
      <section className="h-screen mt-10 bg-green-50" id="ar">
        <CallToAction></CallToAction>
      </section>
      <section id="features">
        <FeaturesSection></FeaturesSection>
      </section>
      <section className="bg-green-50" id="info">
        <MoreInfo></MoreInfo>
      </section>
      <section className="px-3 py-32 h-4/5" id="team">
        <Team></Team>
      </section>
      <section id="contact">
        <FooterSec></FooterSec>
      </section>
    </section>
  );
}
