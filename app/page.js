import { Categories, Featured, Hero, Newsletter, Testimonials } from "@/components";


export default function HomePage() {
  return (
    <main className="mt-20">
      <Hero />
      <Featured />
      <Categories />
      <Testimonials />
      <Newsletter />
    </main>
  );
}
