import { Categories, Featured, Hero, Testimonials } from "@/components";


export default function HomePage() {
  return (
    <main className="mt-20">
      <Hero />
      <Featured />
      <Categories />
      <Testimonials />
    </main>
  );
}
