import { Hero } from "@/components/global/hero";

export default function Home() {
  return (
    <div className="min-h-screen gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <Hero className="max-h-96" />
    </div>
  );
}
