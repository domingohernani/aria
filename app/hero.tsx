"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Product",
    link: "#",
    thumbnail: "/Product.svg",
  },

  {
    title: "Augmented Reality Showroom",
    link: "#",
    thumbnail: "/AR.jpg",
  },
  {
    title: "Payment",
    link: "#",
    thumbnail: "/Payment.svg",
  },
  {
    title: "Space",
    link: "#",
    thumbnail: "/Space.svg",
  },
  {
    title: "Shipping",
    link: "#",
    thumbnail: "Shipping.svg",
  },

  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Cart",
    link: "#",
    thumbnail: "/Cart.svg",
  },
  {
    title: "Space",
    link: "#",
    thumbnail: "/Space.svg",
  },
  {
    title: "Address",
    link: "#",
    thumbnail: "/Address.svg",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Elegance",
    link: "#",
    thumbnail: "/Elegance.png",
  },
  {
    title: "Space",
    link: "#",
    thumbnail: "/Space.svg",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];
