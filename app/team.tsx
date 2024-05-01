"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "Elijah Japheth Macatiag",
    designation: "Chief Executive Office",
    image: "/jap.png",
  },
  {
    id: 2,
    name: "Hernani Domingo",
    designation: "Chief Technical Officer",
    image: "/hernani.png",
  },
  {
    id: 3,
    name: "Ryan King Ballesteros",
    designation: "Chief Marketing Officer ",
    image: "/ry.png",
  },
  {
    id: 4,
    name: "Robeniel Geroche",
    designation: "Chief Financial Officer",
    image: "/rob.png",
  },
  {
    id: 5,
    name: "Joshua Reyes",
    designation: "Mentor",
    image: "/sirjosh.png",
  },
];

export function Team() {
  return (
    <>
      <section className="flex flex-col gap-10">
        <div className="max-w-screen-lg mx-auto mb-8 text-center lg:mb-16">
          <h2 className="mb-4 text-5xl font-extrabold tracking-tight text-green-500 dark:text-green">
            Meet the Team
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            We're a collective of talented individuals with a passion for
            pushing boundaries and crafting innovative solutions. We work
            together to translate audacious ideas into groundbreaking realities.
          </p>
        </div>
        <div className="flex flex-row items-center justify-center w-full mb-10">
          <AnimatedTooltip items={people} />
        </div>
      </section>
    </>
  );
}
