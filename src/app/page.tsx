import HomePage from "@/components/HomePage";
import Hero from "@/components/ui/Hero";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="w-full h-auto flex flex-col gap-5 md:gap-10">
      <Suspense fallback={<p>Loading hero...</p>}>
        <Hero />
      </Suspense>
      <HomePage />
    </div >
  );
}
