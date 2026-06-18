"use client";
import { useEffect, useRef, useState } from "react";
import BeefCutsHero from "../components/ui/BeefCutsHero";
import BeefCutsHeroCentered from "../components/ui/BeefCutsHeroCentered";
import VanishText from "../components/ui/VanishText";

function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const targets = root.querySelectorAll<HTMLElement>(".reveal, .genie");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);
  return ref;
}

export default function Home() {
  const ref = useReveal();

  return (
    <div ref={ref} className="min-h-screen bg-[#fcfaf6] font-[var(--font-sans)] text-[#2c2623] overflow-x-hidden">
      <Navbar />
      


      {/* ========================================= */}
      {/* PRESENTATION BANNER FOR OPTION 1          */}
      {/* ========================================= */}
      {/* <div className="w-full bg-[#2c2623] text-[#fcfaf6] text-center py-2 text-[10px] tracking-[0.3em] uppercase font-bold relative z-20">
        Presentation: Hero Option 1 (Split Layout)
      </div> */}

      {/* <BeefCutsHero /> */}

      {/* ========================================= */}
      {/* PRESENTATION BANNER FOR OPTION 2          */}
      {/* ========================================= */}
      {/* <div className="w-full bg-[#e52d27] text-white text-center py-2 text-[10px] tracking-[0.3em] uppercase font-bold relative z-20">
        Presentation: Hero Option 2 (Centered Layout)
      </div> */}

      <BeefCutsHeroCentered />

      {/* ========================================= */}
      {/* ORIGINAL HOMEPAGE CONTENT                 */}
      {/* ========================================= */}

      {/* ABOUT · PHILOSOPHY CTA — quote banner with overhanging cleaver */}
      <section id="philosophy" className="mx-auto max-w-5xl px-6 pt-16 pb-12 relative z-10 scroll-mt-24">
        <div className="reveal relative">
          {/* dark banner */}
          <div className="relative overflow-hidden rounded-xl bg-[#2c2623] text-[#fcfaf6] px-8 py-12 sm:px-14 sm:py-14 shadow-[0_24px_50px_-24px_rgba(28,26,25,0.5)] ring-1 ring-white/[0.06]">
            {/* warm red glow for depth */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: "radial-gradient(circle at 0% 50%, rgba(229,45,39,0.12), transparent 60%)" }}
            />
            <div className="relative max-w-lg">
              {/* eyebrow */}
              <span className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-[#e52d27]">
                <span className="h-px w-6 bg-[#e52d27]/60" />
                The ACC Philosophy
              </span>
              {/* italic serif quote — the website's actual philosophy copy */}
              <p className="mt-5 font-[var(--font-serif)] italic text-xl leading-relaxed text-[#fcfaf6]/85 sm:text-2xl">
                It&apos;s a lifestyle — never content with merely good; it demands{" "}
                <span className="text-[#fcfaf6]">only the very best.</span>
              </p>
              {/* supporting copy */}
              <p className="mt-6 max-w-md text-[14px] leading-relaxed text-[#fcfaf6]/70">
                Every animal is raised on Australian pasture and finished with patience,
                because flavour can&apos;t be rushed. Our butchers hand-select and trim each
                cut to a single uncompromising standard. From paddock to plate, we control
                every step so what reaches your table is nothing short of exceptional.
              </p>
            </div>
          </div>

          {/* hand-drawn knife straddling the top edge — gently floats up and down */}
          <img
            src="/images/cleaver.png"
            alt="Hand-drawn knife"
            loading="lazy"
            className="knife-bob pointer-events-none absolute -top-32 right-2 w-64 select-none drop-shadow-[0_16px_22px_rgba(0,0,0,0.4)] sm:-top-40 sm:right-8 sm:w-80 lg:-top-44 lg:w-[22rem]"
          />
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-y border-gray-200 bg-white py-4 relative z-10">
        <div className="marquee-track flex w-max gap-12 whitespace-nowrap font-[var(--font-display)] text-sm uppercase tracking-[0.4em] text-gray-400">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-12">
              {["Black Angus", "★", "Choice + Prime", "★", "Corn Finished", "★", "Pasture Raised", "★", "Hand Cut", "★"].map((w, i) => (
                <span key={i}>{w}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT THE COMPANY */}
      <section id="about" className="relative mx-auto max-w-6xl px-6 py-20 z-10 scroll-mt-24">
        <div className="absolute left-0 top-4 font-[var(--font-display)] text-[240px] sm:text-[300px] leading-none font-bold text-gray-100 pointer-events-none select-none">
          A
        </div>
        <div className="relative grid items-center gap-10 md:grid-cols-[1fr_1.3fr] lg:gap-16">
          {/* LEFT — about copy */}
          <div className="reveal">
            <span className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-[#e52d27]">
              <span className="h-px w-6 bg-[#e52d27]/60" />
              Who We Are
            </span>
            <h3 className="font-[var(--font-display)] text-3xl md:text-4xl font-bold uppercase tracking-wide leading-[1.1] mb-6">
              <VanishText>
                A Fully <span className="text-[#e52d27]">Integrated</span> Beef Business
              </VanishText>
            </h3>
            <div className="max-w-xl space-y-4 font-[var(--font-serif)] text-[14px] leading-relaxed text-gray-600">
              <p>
                <span className="font-semibold text-[#2c2623]">Australian Country Choice</span> is dedicated to the best-practice supply of high-quality meat products to domestic and export markets.
              </p>
              <p>
                Our operations encompass everything from cattle breeding and lot feeding to primary processing, value adding and distribution — every step held to a single standard.
              </p>
            </div>

            {/* paddock-to-plate capability chain */}
            <div className="mt-8 flex flex-nowrap items-center gap-x-2">
              {["Breeding", "Lot Feeding", "Processing", "Distribution"].map((step, i) => (
                <div key={step} className="flex shrink-0 items-center gap-2">
                  {i > 0 && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e52d27" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
                      <path d="M9 6l6 6-6 6" />
                    </svg>
                  )}
                  <span className="whitespace-nowrap rounded-full border border-gray-300/80 bg-white px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#2c2623]">
                    {step}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="group relative mt-9 inline-flex items-center overflow-hidden border border-[#e52d27] px-7 py-3 text-[11px] font-bold uppercase tracking-widest text-[#e52d27] transition-colors hover:text-white"
            >
              <span className="absolute inset-0 -translate-x-full bg-[#e52d27] transition-transform duration-500 group-hover:translate-x-0" />
              <span className="relative">Get in touch</span>
            </a>
          </div>

          {/* RIGHT — bull, grounded on a layered backdrop */}
          <div className="relative flex items-center justify-center py-6">
            {/* soft radial backdrop + thin ring for depth */}
            <div
              className="absolute left-1/2 top-1/2 aspect-square w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{ background: "radial-gradient(circle, #f4efe6 0%, #f4efe6 55%, transparent 72%)" }}
            />
            <div className="absolute left-1/2 top-1/2 aspect-square w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#2c2623]/[0.06]" />

            {/* oversized brand wordmark behind the bull — the engraving imprints over it */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 z-0 flex -translate-y-24 select-none flex-col items-center justify-center font-[var(--font-display)] text-6xl font-bold uppercase leading-[0.92] tracking-tight text-[#e52d27] sm:-translate-y-28 lg:-translate-y-32 sm:text-7xl lg:text-8xl"
            >
              <span>Black</span>
              <span className="pl-6 sm:pl-10">Angus</span>
            </span>

            <img
              src="/images/angus-bull.png"
              alt="Australian Country Choice Black Angus cattle"
              loading="lazy"
              className="genie relative z-10 w-full object-contain mix-blend-multiply"
            />

            {/* grounding shadow for realism */}
            <div className="absolute bottom-8 left-1/2 h-4 w-[58%] -translate-x-1/2 rounded-[100%] bg-[#2c2623]/15 blur-md" />
          </div>
        </div>
        <Divider />
      </section>

      {/* MARBLING DARK BAND */}
      <section id="marbling" className="relative overflow-hidden bg-[#2c2623] text-white py-24 z-10 scroll-mt-0">
        {/* subtle red glow + faint brand watermark for depth */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(circle at 80% 30%, rgba(229,45,39,0.14), transparent 55%)" }}
        />
        <span className="pointer-events-none absolute -left-10 bottom-0 select-none font-[var(--font-display)] text-[200px] font-bold leading-none tracking-tighter text-white/[0.025]">
          ACC
        </span>

        <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-[1fr_1.1fr] lg:gap-20">
          {/* LEFT — tall image, auto shine, animated marble-score gauge */}
          <div className="genie relative mx-auto w-full max-w-sm">
            <div className="relative overflow-hidden rounded-[20px] shadow-2xl ring-1 ring-white/10">
              <img
                src="/images/steak-board.jpg"
                alt="Marbled steak sliced on a wooden board"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              {/* depth + readability gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              {/* auto diagonal shine */}
              <span className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-transparent via-white/20 to-transparent shine-sweep" />
              {/* corner accents */}
              <span className="pointer-events-none absolute left-4 top-4 h-8 w-8 rounded-tl-lg border-l-2 border-t-2 border-white/40" />
              <span className="pointer-events-none absolute right-4 top-4 h-8 w-8 rounded-tr-lg border-r-2 border-t-2 border-white/40" />
              {/* caption */}
              <span className="absolute bottom-5 left-5 font-[var(--font-serif)] text-[12px] italic text-white/80">
                Choice+ / Prime marbling
              </span>
            </div>

            {/* circular marble-score gauge — overlaps the corner */}
            <div className="absolute -right-5 -top-6 flex flex-col items-center sm:-right-8">
              <div className="relative grid h-24 w-24 place-items-center rounded-full bg-[#2c2623] shadow-2xl ring-1 ring-white/10">
                <svg viewBox="0 0 100 100" className="h-24 w-24 -rotate-90">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="8" />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#e52d27"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray="251"
                    className="gauge-ring"
                  />
                </svg>
                <div className="absolute inset-0 grid place-items-center">
                  <span className="font-[var(--font-display)] text-2xl font-bold leading-none text-white">9+</span>
                </div>
              </div>
              <span className="mt-2 rounded-full bg-[#e52d27] px-3 py-1 text-[8px] font-bold uppercase tracking-[0.18em] text-white shadow-lg">
                Marble Score
              </span>
            </div>
          </div>

          {/* RIGHT — copy + sliding grade meter + count-up stats */}
          <div className="reveal">
            <span className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-[#e52d27]">
              <span className="h-px w-6 bg-[#e52d27]/60" />
              Quality &amp; Grading
            </span>

            <h3 className="font-[var(--font-display)] text-3xl md:text-4xl font-bold uppercase leading-[1.1] tracking-wide">
              <VanishText>
                Marbling of Grade
                <span className="mt-1 block text-[#e52d27]">Choice+ / Prime</span>
              </VanishText>
            </h3>

            <p className="mt-6 max-w-xl font-[var(--font-serif)] text-[14px] leading-relaxed text-gray-300/90">
              Marbling — the even distribution of fat within the muscle — is the principal indicator of beef quality and the key to its flavour and aroma. On the USDA scale, Prime sits at the very top, followed by Choice. ACC consistently grades within the highest tiers: <span className="font-semibold text-white">Choice+ and Prime</span>.
            </p>

            {/* sliding grade meter */}
            <div className="mt-9 max-w-md">
              <div className="relative h-2.5 rounded-full bg-white/10">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/15 via-[#e52d27]/45 to-[#e52d27]" />
                <div className="grade-marker absolute top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="block h-6 w-6 rounded-full border-[3px] border-white bg-[#e52d27] shadow-[0_0_18px_rgba(229,45,39,0.8)]" />
                </div>
              </div>
              <div className="mt-3 flex justify-between text-[10px] font-bold uppercase tracking-widest">
                <span className="text-gray-500">Select</span>
                <span className="text-gray-500">Choice</span>
                <span className="text-white">Choice+</span>
                <span className="text-[#e52d27]">Prime</span>
              </div>
            </div>

            {/* count-up stats */}
            <div className="mt-10 grid max-w-md grid-cols-3 gap-4">
              {[
                { node: <CountUp to={9} suffix="+" />, label: "Marble Score" },
                { node: <CountUp to={200} />, label: "Days Grain-Fed" },
                { node: <CountUp to={100} suffix="%" />, label: "Black Angus" },
              ].map((s, i) => (
                <div key={i} className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-5 text-center">
                  <div className="font-[var(--font-display)] text-3xl font-bold leading-none text-[#e52d27]">{s.node}</div>
                  <div className="mt-2 text-[9px] font-bold uppercase tracking-[0.16em] text-gray-400">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEED & FINISHING */}
      <section className="relative mx-auto max-w-6xl px-6 py-20 z-10">
        <div className="grid items-center gap-10 md:grid-cols-[1.2fr_1fr] lg:gap-16">
          {/* LEFT — corn anchored on a soft circle */}
          <div className="relative flex items-center justify-center">
            <div className="absolute left-1/2 top-1/2 aspect-square w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f2eee6]" />
            <img
              src="/images/corn.png"
              alt="Corn cobs"
              loading="lazy"
              className="genie relative w-full object-contain mix-blend-multiply"
            />
          </div>

          {/* RIGHT — copy */}
          <div className="reveal">
            <span className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-[#e52d27]">
              <span className="h-px w-6 bg-[#e52d27]/60" />
              Feed &amp; Finishing
            </span>
            <h3 className="font-[var(--font-display)] text-3xl md:text-4xl font-bold uppercase tracking-wide leading-[1.1] mb-6">
              <VanishText>
                Pasture Raised, <span className="text-[#e52d27]">Corn Finished</span>
              </VanishText>
            </h3>
            <div className="max-w-xl space-y-4 font-[var(--font-serif)] text-[14px] leading-relaxed text-gray-600">
              <p>
                From birth until six months of age, our Angus cattle graze freely on open meadows. Lush grass and clean, remote pastures lay the foundation for the premium quality of ACC.
              </p>
              <p>
                Once the animals reach 400–450 kg, they are moved to specially prepared feedlots, where for 200 days their diet consists primarily of corn. Corn finishing is one of the key conditions for producing premium beef of the highest grade. It is precisely this stage that allows the natural marbling to develop within the meat, giving the cooked steak its remarkable juiciness, aroma and flavor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RECIPES */}
      <section id="recipes" className="relative z-10 mx-auto max-w-6xl px-6 py-20 scroll-mt-24">
        {/* heading */}
        <div className="reveal mx-auto mb-14 max-w-2xl text-center">
          <span className="flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-[#e52d27]">
            <span className="h-px w-6 bg-[#e52d27]/60" />
            From the Kitchen
            <span className="h-px w-6 bg-[#e52d27]/60" />
          </span>
          <h2 className="mt-6 font-[var(--font-display)] text-3xl font-bold uppercase leading-[1.1] tracking-wide sm:text-4xl">
            <VanishText>
              Signature <span className="text-[#e52d27]">Recipes</span>
            </VanishText>
          </h2>
          <p className="mt-5 font-[var(--font-serif)] text-[14px] italic leading-relaxed text-gray-600">
            Better to taste it once than to talk about it a hundred times. A handful of our favourite ways to let ACC marbling speak for itself.
          </p>
        </div>

        {/* featured recipe */}
        <div className="reveal mb-16 grid items-center gap-8 md:grid-cols-2 lg:gap-14">
          {/* image */}
          <div className="relative">
            <div className="absolute -inset-3 -z-10 rounded-2xl bg-[#f2eee6]" />
            <img
              src="/images/ribeye.jpg"
              alt="Grilled ribeye with red wine jus"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-xl object-cover shadow-2xl ring-1 ring-black/5"
            />
            {/* video badge */}
            <a
              href="#recipes"
              className="group absolute -bottom-5 right-5 flex items-center gap-3 rounded-full bg-[#2c2623] py-2 pl-2 pr-5 text-[#fcfaf6] shadow-xl transition-transform hover:scale-105"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[#e52d27]">
                <PlayIcon />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Video Recipe</span>
            </a>
          </div>

          {/* content */}
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#e52d27]">Featured Recipe</span>
            <h3 className="mt-3 font-[var(--font-display)] text-2xl font-bold uppercase leading-[1.15] tracking-wide sm:text-[28px]">
              Grilled Ribeye with Brussels Sprouts &amp; Red Wine Jus
            </h3>

            {/* stats */}
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-4">
              {[
                { icon: <ClockIcon />, label: "Cook Time", value: "50 min" },
                { icon: <PlateIcon />, label: "Serves", value: "4 people" },
                { icon: <FlameIcon />, label: "Energy", value: "500 kcal" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-3">
                  <span className="text-[#e52d27]">{s.icon}</span>
                  <div>
                    <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">{s.label}</div>
                    <div className="font-[var(--font-display)] text-sm font-bold tracking-wide text-[#2c2623]">{s.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* ingredients */}
            <div className="mt-7">
              <div className="mb-3 font-[var(--font-display)] text-[11px] font-bold uppercase tracking-[0.25em] text-[#2c2623]">Ingredients</div>
              <ul className="grid grid-cols-1 gap-x-6 gap-y-2 font-[var(--font-serif)] text-[13px] text-gray-600 sm:grid-cols-2">
                {[
                  "600 g ACC ribeye",
                  "2 tbsp ground cumin",
                  "2 tbsp coriander seeds",
                  "3 tbsp grapeseed oil",
                  "2 tbsp apple cider vinegar",
                  "1 tbsp coarse kosher salt",
                  "1 tsp freshly ground pepper",
                ].map((ing) => (
                  <li key={ing} className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rotate-45 bg-[#e52d27]" />
                    {ing}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#recipes"
              className="group relative mt-8 inline-flex items-center overflow-hidden border border-[#e52d27] px-7 py-3 text-[11px] font-bold uppercase tracking-widest text-[#e52d27] transition-colors hover:text-white"
            >
              <span className="absolute inset-0 -translate-x-full bg-[#e52d27] transition-transform duration-500 group-hover:translate-x-0" />
              <span className="relative">View Full Recipe</span>
            </a>
          </div>
        </div>

        {/* divider label */}
        <div className="reveal mb-10 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-gray-200" />
          <span className="font-[var(--font-display)] text-[11px] font-bold uppercase tracking-[0.3em] text-gray-400">More to Cook</span>
          <span className="h-px w-12 bg-gray-200" />
        </div>

        {/* recipe cards */}
        <div className="reveal grid gap-6 sm:grid-cols-3">
          {[
            { title: "Pan-Seared Sirloin & Garden Salad", img: "/images/steak-board.jpg", time: "35 min", level: "Easy" },
            { title: "Slow-Braised Beef Short Ribs", img: "/images/steak-small.jpg", time: "3 hrs", level: "Medium" },
            { title: "Reverse-Seared Tomahawk", img: "/images/steak-sliced.jpg", time: "1 hr", level: "Advanced" },
          ].map((r) => (
            <a key={r.title} href="#recipes" className="group flex flex-col">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={r.img}
                  alt={r.title}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-[#2c2623]/85 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-[#fcfaf6] backdrop-blur-sm">
                  {r.level}
                </span>
              </div>
              <h4 className="mt-4 font-[var(--font-display)] text-base font-bold uppercase leading-snug tracking-wide text-[#2c2623] transition-colors group-hover:text-[#e52d27]">
                {r.title}
              </h4>
              <div className="mt-2 flex items-center gap-2 text-[11px] text-gray-400">
                <span className="text-[#e52d27]"><ClockIcon /></span>
                <span className="font-[var(--font-serif)] italic">{r.time} · {r.level}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contact" className="relative z-10 overflow-hidden bg-[#2c2623] text-[#fcfaf6] scroll-mt-0">
        {/* subtle red glow for depth */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(circle at 85% 10%, rgba(229,45,39,0.12), transparent 55%)" }}
        />
        <div className="relative mx-auto grid max-w-6xl items-start gap-14 px-6 py-20 sm:py-24 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          {/* LEFT — intro + details + socials */}
          <div className="reveal">
            <span className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-[#e52d27]">
              <span className="h-px w-6 bg-[#e52d27]/60" />
              Get in Touch
            </span>
            <h3 className="font-[var(--font-display)] text-3xl md:text-4xl font-bold uppercase leading-[1.1] tracking-wide">
              <VanishText>
                Let&apos;s Work <span className="text-[#e52d27]">Together</span>
              </VanishText>
            </h3>
            <p className="mt-5 max-w-md font-[var(--font-serif)] text-[14px] leading-relaxed text-[#fcfaf6]/65">
              Whether you&apos;re a retail partner, food-service buyer, export client or member of the press, our team would be glad to hear from you. Reach us directly, or send a message and we&apos;ll get back within one business day.
            </p>

            {/* contact detail cards */}
            <div className="mt-8 space-y-3">
              {[
                { label: "Head Office", value: "Cannon Hill, Brisbane\nQueensland 4170, Australia", icon: <MapPinIcon /> },
                { label: "Phone", value: "+61 7 3115 0100", href: "tel:+61731150100", icon: <PhoneIcon /> },
                { label: "Email", value: "enquiries@acc.com.au", href: "mailto:enquiries@acc.com.au", icon: <MailIcon /> },
                { label: "Business Hours", value: "Mon–Fri · 8:00–17:00 AEST", icon: <ClockIcon /> },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 transition-colors hover:border-[#e52d27]/40">
                  <span className="mt-0.5 shrink-0 text-[#e52d27]">{c.icon}</span>
                  <div className="min-w-0">
                    <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#fcfaf6]/45">{c.label}</div>
                    {c.href ? (
                      <a href={c.href} className="mt-1 block whitespace-pre-line font-[var(--font-display)] text-base leading-snug text-[#fcfaf6] transition-colors hover:text-[#e52d27]">
                        {c.value}
                      </a>
                    ) : (
                      <div className="mt-1 whitespace-pre-line font-[var(--font-display)] text-base leading-snug text-[#fcfaf6]">
                        {c.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* socials */}
            <div className="mt-8 flex items-center gap-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#fcfaf6]/45">Follow</span>
              <div className="flex items-center gap-3">
                {[
                  { label: "Instagram", href: "#", path: <><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></> },
                  { label: "Facebook", href: "#", path: <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v6h3v-6h2.5l.5-3H14V9.5c0-.3.2-.5.5-.5Z" /> },
                  { label: "LinkedIn", href: "#", path: <><rect x="2" y="2" width="20" height="20" rx="3" /><path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 17v-7" /></> },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-[#fcfaf6]/70 transition-colors hover:border-[#e52d27] hover:bg-[#e52d27] hover:text-white"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      {s.path}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — contact form */}
          <div className="reveal">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 bg-[#1c1a19] text-[#fcfaf6]/70">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            {/* Logo */}
            <a href="#" className="flex flex-col items-center leading-none md:items-start">
              <span className="pl-[0.4em] font-[var(--font-display)] text-xl font-bold tracking-[0.4em] text-[#fcfaf6]">A C C</span>
              <span className="mt-1 font-[var(--font-serif)] text-[10px] italic tracking-wide text-[#fcfaf6]/40">· Australian Country Choice ·</span>
            </a>

            {/* Footer nav */}
            <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] font-bold uppercase tracking-[0.18em]">
              <a href="#cuts" className="transition-colors hover:text-[#e52d27]">The Cuts</a>
              <a href="#about" className="transition-colors hover:text-[#e52d27]">About</a>
              <a href="#marbling" className="transition-colors hover:text-[#e52d27]">Marbling &amp; Feed</a>
              <a href="#recipes" className="transition-colors hover:text-[#e52d27]">Recipes</a>
              <a href="#contact" className="transition-colors hover:text-[#e52d27]">Contact</a>
            </nav>
          </div>

          <div className="mt-8 flex flex-col items-center gap-3 border-t border-white/10 pt-6 text-[11px] text-[#fcfaf6]/40 md:flex-row md:justify-between">
            <span className="font-[var(--font-serif)] italic">© Australian Country Choice, 2026</span>
            <span className="font-[var(--font-serif)] italic">A fully integrated beef business</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Divider() {
  return (
    <div className="mx-auto mt-12 flex max-w-md items-center gap-3 text-[#e52d27]/70 reveal">
      <div className="flex-1 h-px bg-gray-200" />
      <svg width="40" height="10" viewBox="0 0 40 10" fill="none" className="text-[#e52d27]">
        <path d="M0 5 Q5 0 10 5 T20 5 T30 5 T40 5" stroke="currentColor" fill="none" />
      </svg>
      <div className="flex-1 h-px bg-gray-200" />
    </div>
  );
}

function MapPinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}

function CountUp({ to, suffix = "", duration = 1500 }: { to: number; suffix?: string; duration?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setVal(Math.round(eased * to));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "");
    const email = String(f.get("email") || "");
    const company = String(f.get("company") || "");
    const type = String(f.get("type") || "General Enquiry");
    const message = String(f.get("message") || "");
    const subject = `${type} — ${name || "Website Enquiry"}`;
    const body = `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nEnquiry: ${type}\n\n${message}`;
    window.location.href = `mailto:enquiries@acc.com.au?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const field =
    "w-full rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-[#fcfaf6] placeholder:text-[#fcfaf6]/35 outline-none transition focus:border-[#e52d27]/60 focus:ring-2 focus:ring-[#e52d27]/20";
  const label = "mb-1.5 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#fcfaf6]/45";

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm sm:p-8">
      <h4 className="font-[var(--font-display)] text-xl font-bold uppercase tracking-wide text-[#fcfaf6]">Send us a message</h4>
      <p className="mt-1.5 font-[var(--font-serif)] text-[13px] italic text-[#fcfaf6]/55">
        We typically reply within one business day.
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <label className={label} htmlFor="cf-name">Full Name</label>
          <input id="cf-name" name="name" required placeholder="Jane Smith" className={field} />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={label} htmlFor="cf-email">Email</label>
            <input id="cf-email" name="email" type="email" required placeholder="jane@company.com" className={field} />
          </div>
          <div>
            <label className={label} htmlFor="cf-company">Company <span className="text-[#fcfaf6]/25">(optional)</span></label>
            <input id="cf-company" name="company" placeholder="Company name" className={field} />
          </div>
        </div>
        <div>
          <label className={label} htmlFor="cf-type">Enquiry Type</label>
          <select id="cf-type" name="type" className={field + " appearance-none"} defaultValue="General Enquiry">
            <option className="bg-[#2c2623]">General Enquiry</option>
            <option className="bg-[#2c2623]">Retail Partnership</option>
            <option className="bg-[#2c2623]">Food-Service Supply</option>
            <option className="bg-[#2c2623]">Export &amp; Wholesale</option>
            <option className="bg-[#2c2623]">Media &amp; Press</option>
          </select>
        </div>
        <div>
          <label className={label} htmlFor="cf-message">Message</label>
          <textarea id="cf-message" name="message" required rows={4} placeholder="Tell us how we can help…" className={field + " resize-none"} />
        </div>
      </div>

      <button
        type="submit"
        className="group relative mt-6 inline-flex w-full items-center justify-center overflow-hidden rounded-md bg-[#e52d27] px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-95"
      >
        <span className="relative flex items-center gap-2">
          Send Message
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </button>

      {sent && (
        <p className="mt-4 text-center text-[12px] font-medium text-[#fcfaf6]/70">
          Thanks — your email draft is ready to send. We&apos;ll be in touch shortly.
        </p>
      )}
    </form>
  );
}

function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-white">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function PlateIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function FlameIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2c1 3 4 4.5 4 8a4 4 0 0 1-8 0c0-1.2.4-2 1-3 .2 1 .8 1.6 1.5 1.8C10 7 11 4.5 12 2Z" />
      <path d="M7 14a5 5 0 0 0 10 0c0-1-.3-2-1-3" opacity="0.5" />
    </svg>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  // Links split around the centered logo, matching the reference layout.
  // Each maps to an actual section anchor on the page.
  const leftLinks = [
    { href: "#cuts", label: "The Cuts" },
    { href: "#about", label: "About" },
    { href: "#marbling", label: "Marbling & Feed" },
  ];
  const rightLinks = [
    { href: "#recipes", label: "Recipes" },
    { href: "#contact", label: "Contact" },
  ];
  const allLinks = [...leftLinks, ...rightLinks, { href: "mailto:enquiries@acc.com.au", label: "Enquire" }];
  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 " +
        (scrolled
          ? "bg-[#fcfaf6]/90 backdrop-blur-md"
          : "bg-transparent")
      }
    >
      <div className="mx-auto grid grid-cols-[1fr_auto_1fr] items-center px-6 h-24 max-w-7xl gap-4">
        {/* LEFT NAV */}
        <nav className="hidden md:flex items-center justify-end gap-8 text-[11px] uppercase tracking-[0.22em] text-[#2c2623] font-bold border-b border-gray-200/80 pb-2">
          {leftLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-[#e52d27] transition-colors whitespace-nowrap">
              {l.label}
            </a>
          ))}
        </nav>

        {/* CENTER LOGO */}
        <a href="#" className="group flex items-center justify-center md:px-6">
          <img
            src="/images/acc-logo.svg"
            alt="Australian Country Choice"
            className="h-16 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* RIGHT NAV */}
        <nav className="hidden md:flex items-center justify-start gap-8 text-[11px] uppercase tracking-[0.22em] text-[#2c2623] font-bold border-b border-gray-200/80 pb-2">
          {rightLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-[#e52d27] transition-colors whitespace-nowrap">
              {l.label}
            </a>
          ))}
          <a
            href="mailto:enquiries@acc.com.au"
            className="bg-[#e52d27] text-white px-2.5 py-1 tracking-[0.18em] transition-opacity hover:opacity-85 whitespace-nowrap"
          >
            Enquire
          </a>
        </nav>

        {/* MOBILE TOGGLE (sits in right column on small screens) */}
        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden justify-self-end grid place-items-center h-9 w-9 border border-gray-200 bg-white"
        >
          <span className="sr-only">Toggle menu</span>
          <div className="flex flex-col gap-1.5">
            <span className={"h-0.5 w-5 bg-[#2c2623] transition-transform " + (open ? "translate-y-2 rotate-45" : "")} />
            <span className={"h-0.5 w-5 bg-[#2c2623] transition-opacity " + (open ? "opacity-0" : "")} />
            <span className={"h-0.5 w-5 bg-[#2c2623] transition-transform " + (open ? "-translate-y-2 -rotate-45" : "")} />
          </div>
        </button>
      </div>

      <div
        className={
          "md:hidden overflow-hidden border-t border-gray-200 bg-white backdrop-blur transition-[max-height,opacity] duration-500 " +
          (open ? "max-h-96 opacity-100" : "max-h-0 opacity-0")
        }
      >
        <nav className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-3 text-[12px] uppercase tracking-[0.22em] font-bold text-[#2c2623]">
          {allLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 hover:text-[#e52d27] transition-colors border-b border-gray-50">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
