"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import React, { useState } from "react";
import { useEffect } from "react";

const CallToAction = () => {
  useEffect(() => {
    import("@google/model-viewer").catch(console.error);
  }, []);

  const [showParagraph, setShowParagraph] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowParagraph(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const words = `We want to develop a web app that transforms furniture shopping in the Philippines with Augmented Reality.`;

  return (
    <>
      <section className="relative callToActionContainer">
        <section className="flex flex-col items-start gap-3 arHeaderContainer">
          <TextGenerateEffect words={words} />
          {showParagraph && (
            <>
              <p className="text-base text-gray-400 lg:text-lg">
                Ready to immerse yourself in the world of augmented reality?{" "}
                <br />
                Explore our Augmented Reality Placement feature - exclusive for
                mobile users!
              </p>
              <p>
                <b className="text-base font-medium text-gray-500 lg:text-lg ">
                  For mobile devices, click
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                    width={25}
                    height={25}
                    className="inline mx-2"
                  >
                    <path d="m20.484,4.84l-6.5-3.715c-1.225-.699-2.745-.699-3.968,0h0l-6.5,3.715c-1.243.71-2.016,2.041-2.016,3.473v7.375c0,1.432.772,2.763,2.016,3.473l6.5,3.715c.612.35,1.298.524,1.984.524s1.372-.175,1.984-.524l6.5-3.715c1.243-.711,2.016-2.041,2.016-3.473v-7.375c0-1.432-.772-2.762-2.016-3.473Zm-9.477-1.979c.613-.349,1.374-.349,1.984,0l6.492,3.71-2.556,1.461c-.139-.118-.274-.241-.434-.333l-3.001-1.723c-.922-.529-2.064-.529-2.987,0l-3,1.723c-.161.092-.296.215-.435.333l-2.556-1.461,6.492-3.71Zm-3.008,8.005l3,1.714v3.424l-2.496-1.426c-.311-.178-.504-.511-.504-.868v-2.844Zm4-.017l-2.988-1.708,2.49-1.43c.153-.088.326-.132.498-.132s.344.044.498.132l2.491,1.43-2.988,1.708Zm1,1.732l3-1.714v2.844c0,.357-.193.69-.504.868l-2.496,1.426v-3.424Zm-8.492,4.844c-.622-.355-1.008-1.021-1.008-1.736v-7.375c0-.006.002-.011.002-.016l2.57,1.468c-.033.177-.072.353-.072.537v3.409c0,1.073.579,2.071,1.512,2.604l3,1.714c.155.089.323.141.489.199v2.906l-6.492-3.71Zm15.992-1.736c0,.716-.386,1.381-1.008,1.736l-6.492,3.711v-2.907c.165-.059.333-.111.488-.199l3.001-1.714c.932-.533,1.511-1.531,1.511-2.604v-3.409c0-.183-.039-.359-.072-.537l2.57-1.468c0,.006.002.011.002.016v7.375Z" />
                  </svg>
                  to start exploring!
                </b>
              </p>
            </>
          )}
        </section>
        <model-viewer
          id="chair"
          ar
          ar-scale="fixed"
          loading="eager"
          camera-controls
          touch-action="pan-y"
          auto-rotate
          src="/chair.glb"
          shadow-intensity="1"
          // poster="/chair.png"
          alt="A 3D model of a shishkebab"
        ></model-viewer>
      </section>
    </>
  );
};

export default CallToAction;
