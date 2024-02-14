"use client";
import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";
import { Slider } from "./Slider";

export function WavyBackgroundDemo() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
      What they say about us
      </h2>
      <Slider />      
    </WavyBackground>
  );
}
