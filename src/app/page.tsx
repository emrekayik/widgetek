import { Navbar } from "@/components/global/navbar";
import { Hero } from "@/components/global/hero";
import { Footer } from "@/components/global/footer";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-5xl gap-16 scroll-smooth p-8 font-[family-name:var(--font-geist-sans)] sm:p-12">
      <Navbar />
      <Hero className="min-h-96" />
      <section id="widgets">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          dignissimos magnam modi nemo rem similique sit voluptatibus! A
          adipisci delectus dolores eveniet, ex illo ipsam, necessitatibus
          numquam officiis quia, sint!
        </div>
        <div>
          Animi aut cumque cupiditate dignissimos dolor dolorem ea earum est
          excepturi expedita facere fugit id ipsa magni molestias nam neque
          nihil praesentium quam quibusdam quo reprehenderit saepe soluta vel,
          voluptatem?
        </div>
        <div>
          A accusamus alias animi aperiam at cupiditate ea eos excepturi fuga
          illo inventore ipsam ipsum iure, magnam nesciunt nobis nostrum odio
          officiis, provident quam quia quis repellendus repudiandae voluptates
          voluptatum?
        </div>
        <div>
          Consequatur cumque fuga mollitia temporibus veritatis! Accusamus
          aliquid illo minus officiis quaerat unde. Aliquid aut consectetur
          consequuntur, cumque earum, eveniet excepturi expedita officiis
          possimus, repellat reprehenderit soluta temporibus veritatis
          voluptatum.
        </div>
      </section>
      <Footer />
    </div>
  );
}
