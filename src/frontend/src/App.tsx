import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const BOOKING_URL = "https://book.usesession.com/t/Dls4xzCAi6";

interface Plan {
  id: string;
  name: string;
  price: string;
  keyCard: string;
  featured: boolean;
  badge?: string;
  perks: string[];
  idealFor: string;
  note?: string;
}

const plans: Plan[] = [
  {
    id: "flex",
    name: "STUDIO FLEX",
    price: "$250",
    keyCard: "+ $20 Key Card",
    featured: false,
    perks: [
      "All Hourly rental perks",
      "6 Studio Hours / month",
      "Priority Booking",
      "Building Access Key Card",
      "50% off Add-ons, Homebase Workshops & ticketed events",
      "Member Feature on Instagram",
    ],
    idealFor:
      "Creators who shoot consistently and want flexible access without a full production commitment.",
    note: "*No Rollover Hours",
  },
  {
    id: "plus",
    name: "STUDIO PLUS",
    price: "$325",
    keyCard: "+ $20 Key Card",
    featured: false,
    perks: [
      "All Hourly rental perks",
      "10 Studio Hours / month",
      "Priority Booking",
      "Building Access Key Card",
      "75% off Add-ons, Homebase Workshops & ticketed events",
      "Member Feature on Instagram",
    ],
    idealFor:
      "Active creatives running multiple sessions each month and scaling client work.",
  },
  {
    id: "pro",
    name: "STUDIO PRO",
    price: "$450",
    keyCard: "+ $20 Key Card",
    featured: true,
    badge: "BEST VALUE",
    perks: [
      "All Hourly rental perks",
      "16 Studio Hours / month",
      "Priority Booking",
      "Building Access Key Card",
      "Access to Gear Room (entire equipment inventory)",
      "Access to all Seamless paper",
      "Free Add-ons & Free Homebase Workshops and ticketed events",
      "Member Feature on Instagram",
    ],
    idealFor:
      "Full-time professionals and small teams producing content weekly.",
  },
];

const amenities = [
  {
    icon: "✦",
    title: "Hair & Makeup Area",
    description:
      "Full vanity station with professional lighting for flawless prep.",
  },
  {
    icon: "✦",
    title: "Green Room",
    description:
      "Private changing area with rolling clothing rack for your wardrobe.",
  },
  {
    icon: "✦",
    title: "Lounge Area",
    description:
      "Comfortable lounge with full amenities to relax between sets.",
  },
  {
    icon: "✦",
    title: "On-Site Support",
    description:
      "Dedicated team member available on-site for any questions or concerns.",
  },
];

function useParallax(ratio = 0.4) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const el = ref.current;
      if (el) {
        el.style.transform = `scale(1.15) translateY(${window.scrollY * ratio}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ratio]);

  return ref;
}

export default function App() {
  const parallaxRef = useParallax(0.4);
  const [selectedPlan, setSelectedPlan] = useState<string>("pro");

  const scrollToPlans = () => {
    document.getElementById("plans")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* ── Sticky Nav ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12"
        style={{
          height: "72px",
          background: "oklch(0.12 0.01 260 / 0.96)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid oklch(0.72 0.12 65 / 0.2)",
        }}
        data-ocid="nav.panel"
      >
        <img
          src="/assets/generated/homebase-logo-transparent.dim_400x120.png"
          alt="Homebase Studios"
          style={{ height: "40px", width: "auto", objectFit: "contain" }}
          data-ocid="nav.link"
        />
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 text-xs font-semibold tracking-[0.15em] uppercase transition-all duration-200 hover:opacity-80"
          style={{
            background: "oklch(0.72 0.12 65)",
            color: "oklch(0.09 0 0)",
            borderRadius: "4px",
          }}
          data-ocid="nav.primary_button"
        >
          JOIN NOW
        </a>
      </header>

      {/* ── Hero Section ── */}
      <section
        className="relative overflow-hidden flex items-center justify-center"
        style={{ height: "100dvh", minHeight: "600px" }}
      >
        {/* Parallax background layer */}
        <div
          ref={parallaxRef}
          className="absolute"
          style={{
            top: "-10%",
            bottom: "-10%",
            left: 0,
            right: 0,
            transform: "scale(1.15)",
            transformOrigin: "center",
          }}
        >
          <img
            src="/assets/hb_studio_2-019d5fb8-6368-70ee-a057-9942fec077d8.jpg"
            alt="Homebase Studios"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          {/* Lightened overlay so photo shows through clearly */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, oklch(0.05 0 0 / 0.35) 0%, oklch(0.05 0 0 / 0.5) 100%)",
            }}
          />
        </div>

        {/* Grain texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
            opacity: 0.6,
            zIndex: 1,
          }}
        />

        {/* Horizontal lines decoration */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "oklch(0.72 0.12 65 / 0.15)", zIndex: 1 }}
        />

        {/* Hero content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xs font-semibold tracking-[0.35em] uppercase mb-6"
            style={{ color: "oklch(0.72 0.12 65)" }}
          >
            Creative Studio Membership
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="font-semibold uppercase leading-none mb-6"
            style={{
              fontSize: "clamp(2.8rem, 8vw, 7rem)",
              letterSpacing: "-0.01em",
              lineHeight: "0.92",
              color: "oklch(0.95 0 0)",
            }}
          >
            HOMEBASE{" "}
            <span style={{ color: "oklch(0.72 0.12 65)" }}>STUDIOS</span>
            <br />
            <span
              style={{
                fontSize: "clamp(1.2rem, 3vw, 2.8rem)",
                fontWeight: 400,
                letterSpacing: "0.25em",
                color: "oklch(0.72 0.12 65)",
              }}
            >
              MEMBERSHIPS
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed"
            style={{ color: "oklch(0.88 0 0)" }}
          >
            Become a member of Homebase Studios and enjoy exclusive perks
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            onClick={scrollToPlans}
            className="px-8 py-4 font-semibold tracking-[0.15em] text-sm uppercase transition-all duration-200 hover:opacity-85 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: "oklch(0.72 0.12 65)",
              color: "oklch(0.09 0 0)",
              borderRadius: "4px",
              boxShadow: "0 0 40px oklch(0.72 0.12 65 / 0.3)",
            }}
            data-ocid="hero.primary_button"
          >
            VIEW PLANS
          </motion.button>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ color: "oklch(0.80 0 0)", zIndex: 2 }}
        >
          <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <div
            className="w-px h-8"
            style={{
              background:
                "linear-gradient(to bottom, oklch(0.80 0 0), transparent)",
            }}
          />
        </motion.div>
      </section>

      {/* ── Plans Section ── */}
      <section
        id="plans"
        className="py-24 md:py-32 px-6 relative"
        style={{ background: "oklch(0.96 0.01 90)" }}
      >
        {/* Subtle studio photo background texture */}
        <img
          src="/assets/hb_studio_1-019d5fb8-6344-74ab-99c4-a4e40f2161f7.jpg"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.08,
            pointerEvents: "none",
          }}
        />
        <div className="max-w-6xl mx-auto relative" style={{ zIndex: 1 }}>
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
              style={{ color: "oklch(0.72 0.12 65)" }}
            >
              Membership Plans
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-semibold uppercase tracking-[0.08em] mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.1 }}
            >
              FIND YOUR PLAN
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base max-w-md mx-auto"
              style={{ color: "oklch(0.35 0 0)" }}
            >
              Select a membership that fits your creative journey
            </motion.p>
          </div>

          {/* Plan Cards */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
            data-ocid="plans.table"
          >
            {plans.map((plan, idx) => {
              const isSelected = selectedPlan === plan.id;
              const isActive = plan.featured || isSelected;
              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                  onClick={() => setSelectedPlan(plan.id)}
                  className="relative flex flex-col cursor-pointer transition-all duration-300"
                  style={{
                    borderRadius: "16px",
                    border: isActive
                      ? "1.5px solid oklch(0.72 0.12 65)"
                      : "1.5px solid oklch(0.85 0.01 90)",
                    background:
                      "linear-gradient(160deg, oklch(1 0 0), oklch(0.97 0.01 90))",
                    boxShadow: isActive
                      ? "0 0 30px oklch(0.72 0.12 65 / 0.2), 0 8px 32px rgba(0,0,0,0.08)"
                      : "0 4px 24px rgba(0,0,0,0.06)",
                    transform:
                      isActive && plan.featured ? "translateY(-4px)" : "none",
                  }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  data-ocid={`plans.item.${idx + 1}`}
                >
                  {/* Best Value Badge */}
                  {plan.badge && (
                    <div
                      className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 text-[10px] font-bold tracking-[0.2em] uppercase"
                      style={{
                        background: "oklch(0.72 0.12 65)",
                        color: "oklch(0.09 0 0)",
                        borderRadius: "99px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {plan.badge}
                    </div>
                  )}

                  <div className="flex flex-col flex-1 p-7 md:p-8">
                    {/* Plan Header */}
                    <div className="mb-6">
                      <p
                        className="text-xs font-bold tracking-[0.25em] uppercase mb-3"
                        style={{
                          color: isActive
                            ? "oklch(0.72 0.12 65)"
                            : "oklch(0.50 0 0)",
                        }}
                      >
                        {plan.name}
                      </p>
                      <div className="flex items-baseline gap-2 mb-1">
                        <span
                          className="font-bold"
                          style={{
                            fontSize: "clamp(2.2rem, 4vw, 3rem)",
                            lineHeight: 1,
                            color: "oklch(0.12 0 0)",
                          }}
                        >
                          {plan.price}
                        </span>
                        <span
                          className="text-sm"
                          style={{ color: "oklch(0.45 0 0)" }}
                        >
                          /mo
                        </span>
                      </div>
                      <p
                        className="text-xs"
                        style={{ color: "oklch(0.45 0 0)" }}
                      >
                        {plan.keyCard}
                      </p>
                    </div>

                    {/* Divider */}
                    <div
                      className="mb-6 h-px"
                      style={{
                        background: isActive
                          ? "oklch(0.72 0.12 65 / 0.25)"
                          : "oklch(0.85 0.01 90)",
                      }}
                    />

                    {/* Perks */}
                    <ul className="flex flex-col gap-3 mb-6 flex-1">
                      {plan.perks.map((perk) => (
                        <li
                          key={perk}
                          className="flex items-start gap-3 text-sm leading-relaxed"
                          style={{ color: "oklch(0.25 0 0)" }}
                        >
                          <span
                            className="mt-0.5 flex-shrink-0 font-bold"
                            style={{ color: "oklch(0.72 0.12 65)" }}
                          >
                            ✓
                          </span>
                          {perk}
                        </li>
                      ))}
                    </ul>

                    {/* Ideal For */}
                    <div
                      className="p-4 rounded-lg mb-6"
                      style={{ background: "oklch(0.93 0.01 90)" }}
                    >
                      <p
                        className="text-[10px] font-bold tracking-[0.2em] uppercase mb-2"
                        style={{ color: "oklch(0.72 0.12 65)" }}
                      >
                        Ideal for
                      </p>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "oklch(0.35 0 0)" }}
                      >
                        {plan.idealFor}
                      </p>
                      {plan.note && (
                        <p
                          className="text-xs mt-2 italic"
                          style={{ color: "oklch(0.45 0 0)" }}
                        >
                          {plan.note}
                        </p>
                      )}
                    </div>

                    {/* CTA Button */}
                    <a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center py-3.5 text-sm font-semibold tracking-[0.12em] uppercase transition-all duration-200 hover:opacity-80"
                      style={{
                        borderRadius: "8px",
                        ...(plan.featured
                          ? {
                              background: "oklch(0.72 0.12 65)",
                              color: "oklch(0.09 0 0)",
                              boxShadow: "0 4px 20px oklch(0.72 0.12 65 / 0.3)",
                            }
                          : {
                              background: "transparent",
                              color: "oklch(0.72 0.12 65)",
                              border: "1.5px solid oklch(0.72 0.12 65 / 0.6)",
                            }),
                      }}
                      data-ocid={`plans.primary_button.${idx + 1}`}
                    >
                      SELECT PLAN
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Studio Photo Break 1 (HB Studio 1) ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full overflow-hidden md:h-[520px] h-[320px]"
        data-ocid="studio1.panel"
      >
        <motion.img
          src="/assets/hb_studio_1-019d5fb8-6344-74ab-99c4-a4e40f2161f7.jpg"
          alt="Homebase Studios interior"
          className="w-full h-full"
          style={{ objectFit: "cover", objectPosition: "center" }}
          initial={{ scale: 1.0 }}
          whileInView={{ scale: 1.04 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        />
      </motion.div>

      {/* ── What's Included Section ── */}
      <section
        className="py-24 md:py-32 px-6 relative"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.96 0.01 90) 0%, oklch(0.94 0.01 90) 100%)",
        }}
      >
        {/* Subtle studio photo background texture */}
        <img
          src="/assets/hb_studio_3-019d5fb8-645f-7484-a012-8f2178a2f52f.jpg"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.08,
            pointerEvents: "none",
          }}
        />
        <div className="max-w-6xl mx-auto relative" style={{ zIndex: 1 }}>
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
              style={{ color: "oklch(0.72 0.12 65)" }}
            >
              Studio Amenities
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-semibold uppercase tracking-[0.08em] mb-5"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.1 }}
            >
              WHAT&apos;S INCLUDED
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base max-w-xl mx-auto leading-relaxed"
              style={{ color: "oklch(0.35 0 0)" }}
            >
              All hourly rentals of our 600sqft Creative Studio includes access
              to:
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {amenities.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex items-start gap-5 p-7"
                style={{
                  borderRadius: "16px",
                  background:
                    "linear-gradient(135deg, oklch(1 0 0), oklch(0.97 0.01 90))",
                  border: "1px solid oklch(0.85 0.01 90)",
                }}
                data-ocid={`amenities.item.${idx + 1}`}
              >
                <div
                  className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-lg text-sm font-bold"
                  style={{
                    background: "oklch(0.72 0.12 65 / 0.12)",
                    color: "oklch(0.72 0.12 65)",
                    border: "1px solid oklch(0.72 0.12 65 / 0.25)",
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <h3
                    className="font-semibold text-base mb-2 tracking-wide"
                    style={{ color: "oklch(0.12 0 0)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "oklch(0.35 0 0)" }}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Studio Photo Break 2 (HB Studio 3) ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full overflow-hidden md:h-[520px] h-[320px]"
        data-ocid="studio3.panel"
      >
        <motion.img
          src="/assets/hb_studio_3-019d5fb8-645f-7484-a012-8f2178a2f52f.jpg"
          alt="Homebase Studios space"
          className="w-full h-full"
          style={{ objectFit: "cover", objectPosition: "center" }}
          initial={{ scale: 1.0 }}
          whileInView={{ scale: 1.04 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        />
      </motion.div>

      {/* ── Final CTA Banner ── */}
      <section
        className="py-20 px-6 text-center"
        style={{
          background:
            "radial-gradient(ellipse 70% 100% at 50% 100%, oklch(0.9 0.05 65 / 0.2) 0%, oklch(0.96 0.01 90) 70%)",
          borderTop: "1px solid oklch(0.85 0.01 90)",
        }}
      >
        <div className="max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-semibold uppercase tracking-[0.06em] mb-5"
            style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)", lineHeight: 1.1 }}
          >
            READY TO CREATE?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-base mb-10"
            style={{ color: "oklch(0.35 0 0)" }}
          >
            Join Homebase Studios and unlock your creative potential today.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 font-semibold tracking-[0.15em] text-sm uppercase transition-all duration-200 hover:opacity-85 hover:scale-[1.02]"
            style={{
              background: "oklch(0.72 0.12 65)",
              color: "oklch(0.09 0 0)",
              borderRadius: "4px",
              boxShadow: "0 0 40px oklch(0.72 0.12 65 / 0.3)",
            }}
            data-ocid="cta.primary_button"
          >
            BECOME A MEMBER
          </motion.a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer
        className="py-10 px-6"
        style={{
          background: "oklch(0.93 0.01 90)",
          borderTop: "1px solid oklch(0.85 0.01 90)",
        }}
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <span className="text-xs tracking-[0.2em] uppercase font-semibold">
            <span style={{ color: "oklch(0.72 0.12 65)" }}>HOMEBASE</span>
            <span style={{ color: "oklch(0.35 0 0)" }}> STUDIOS</span>
          </span>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/homebasestudios_nc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs transition-opacity hover:opacity-70"
            style={{ color: "oklch(0.72 0.12 65)" }}
            data-ocid="footer.link"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-label="Instagram"
            >
              <title>Instagram</title>
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            @homebasestudios_nc
          </a>

          <div className="flex flex-col items-center sm:items-end gap-1">
            <p className="text-xs" style={{ color: "oklch(0.45 0 0)" }}>
              © {new Date().getFullYear()} HOMEBASE STUDIOS. ALL RIGHTS
              RESERVED.
            </p>
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs transition-opacity hover:opacity-70"
              style={{ color: "oklch(0.45 0 0)" }}
            >
              Built with ♥ using caffeine.ai
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
