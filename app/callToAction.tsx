import React from "react";
import "@google/model-viewer";

export function CallToAction() {
  return (
    <>
      <model-viewer
        src="../assets/chair.glb"
        ar
        environment-image="shared-assets/environments/moon_1k.hdr"
        poster="shared-assets/models/NeilArmstrong.webp"
        shadow-intensity="1"
        camera-controls
        touch-action="pan-y"
      ></model-viewer>
    </>
  );
}
