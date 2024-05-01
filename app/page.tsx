import Image from "next/image";
import { HeroParallaxDemo } from "./hero";
import { NavBar } from "./nav";
import { CallToAction } from "@/app/callToAction";

export default function Home() {
  return (
    <section className="px-8 py-5">
      <NavBar></NavBar>
      <HeroParallaxDemo></HeroParallaxDemo>
      <section className="h-screen">
        <CallToAction></CallToAction>
      </section>
    </section>
  );
}
