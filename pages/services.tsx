import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ServiceSection } from "../components/pages/servicePage/ServiceSection";
import { Subheading } from "../components/shared/navbars/Subheading";
import { BetterSumColors } from "../types/BetterSumColors";
import {
  ServiceOptions,
  ServicePageContextProvider,
} from "../contexts/servicePageContext";
import { ServiceDetails } from "../types/ServiceDetails";
import { ContactForm } from "../components/shared/forms/ContactForm";
import styles from "../styles/Services.module.css";
import fontStyles from "styles/fontStyles.module.css";
import { motion, Variants } from "framer-motion";

const highlightedTextVariants: Variants = {
  hover: {
    color: "var(--bettersum-black)",
  },
};

const Services: NextPage = () => {
  const StrategyOverview = (
    <p>
      Our work begins at the inception of an idea. We solve problems, challenge
      values, and develop strategies to articulate a point of view that helps
      your business{" "}
      <motion.span
        variants={highlightedTextVariants}
        className={styles["highlighted-text"]}
      >
        navigate the future
      </motion.span>
      .
    </p>
  );
  const strategyServices: ServiceDetails[] = [
    {
      name: "Workshops",
      description:
        "Workshops accelerate the process of discovering problems and solving them. They provide opportunities to test-drive ideas, challenge assumptions, and arrive at tangible next steps. We will guide your stakeholders through these processes of ideation.",
      offerings: [
        "Facilitation of multi-day workshops",
        "Ideation sessions",
        "Prototyping sessions",
      ],
    },
    {
      name: "Brand Strategy",
      description:
        "Building a strong brand means having a clear mission, communicating it well, and meeting customers where they are. We will help craft a unified approach for your brand that delivers clear messaging to your targeted demographic.",
      offerings: [
        "Brainstorming vision & mission",
        "Competitive landscape analysis",
        "Aligning values & positioning",
      ],
    },
    {
      name: "UX Strategy",
      description:
        "You can’t build a successful user base without first understanding user experience. This is why UX is the foundation of everything we do. We will collaborate with your business to develop clear end-to-end user journeys for your digital products.",
      offerings: [
        "Wireframes and user journeys",
        "Site optimization",
        "Persona development",
      ],
    },
    {
      name: "Strategy Stewardship",
      description:
        "We believe strategy is not just a phase in the development of a product, but a way of making deliberate decisions throughout the life of a business. We apply this longevity-centric perspective to help execute and maintain your vision, drafting plans that address both short and long-term timeframes.",
      offerings: ["Product management", "Brand or product oversight"],
    },
  ];

  const DesignOverview = (
    <p>
      We design digital products, brands, and services by building{" "}
      <motion.span
        variants={highlightedTextVariants}
        className={styles["highlighted-text"]}
      >
        with empathy
      </motion.span>
      . We believe that thoughtfully considering user experience is what makes a
      difference when designing for real people.
    </p>
  );
  const designServices: ServiceDetails[] = [
    {
      name: "Design Audit",
      description:
        "A design audit is the perfect way to measure the usability of your product and identify adoption challenges for your audience. We will determine potential sources of friction for your users and work to reduce them.",
      offerings: [
        "Evaluate against best practices",
        "Highlight themes",
        "Recommend next steps",
      ],
    },
    {
      name: "Design Systems",
      description:
        "A design system is a consistent design language for a family of products and experiences. For a system to be successful, it must clearly define principles and themes while remaining flexible enough to solve unexpected problems. Our goal is to support in shaping this visual language as early as possible.",
      offerings: [
        "Establish design principles",
        "Create design guidelines",
        "Create UI library in Figma",
      ],
    },
    {
      name: "UX Design",
      description:
        "We implement UX strategies to build frictionless and polished digital products. We design from end-to-end with the goal of creating experiences that the users will not only intuitively understand, but enjoy using.",
      offerings: [
        "Defined user flows",
        "Implementation of UI elements",
        "High fidelity mockups",
      ],
    },
    {
      name: "Branding",
      description:
        "Branding fuels the growth of your business, whether you are a startup or a well-established company. Our collaborative process will aid in articulating the identity of your business and manifesting it across a variety of digital platforms.",
      offerings: [
        "Identity development",
        "Create brand guidelines",
        "Name ideation"
      ],
    },
  ];

  const DevelopmentOverview = (
    <p>
      We help transform great visions into concrete results. We expand your
      ideas into{" "}
      <motion.span
        variants={highlightedTextVariants}
        className={styles["highlighted-text"]}
      >
        fully functioning MVPs
      </motion.span>{" "}
      and work to obtain prompt user feedback that provides invaluable material
      for developing your business.
    </p>
  );
  const developmentServices: ServiceDetails[] = [
    {
      name: "Technical Audit",
      description:
        "Our technical audits offer an outsider’s perspective onto your company's digital infrastructure and stack-up. We will highlight problem areas and provide recommendations for both improving current infrastructure and future build-outs.",
      offerings: [
        "Infrastructure analysis",
        "Recommend next steps",
      ],
    },
    {
      name: "Idea to MVP",
      description:
        "We believe that ideas are only as good as the degree to which they can be realized. Our goal is to help businesses discover this sooner rather than later, by working with them to rapidly transform their ideas into functioning prototypes.",
      offerings: [
        "Problem definition",
        "Product development",
        "Iteration Recommendations",
      ],
    },
    {
      name: "SaaS Development",
      description:
        "Current Saas products tend to be outdated and needlessly complex. Our starting point is usability, creating software with simple and intuitive flows that ultimately maximize efficiency. Our team will help you develop the right tool for the problems your product hopes to solve.",
      offerings: [
        "Software development",
        "Analytics integrations"
      ],
    },
  ];

  return (
    <ServicePageContextProvider>
      <div>
        <Head>
          <title>BetterSum | Services</title>
          <meta
            property="og:url"
            content="https://www.bettersum.com/services"
          />
          <meta property="og:type" content="website" />
          {/* <meta property="fb:app_id" content="553417342511194" /> */}
          <meta property="og:title" content="BetterSum" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            property="og:description"
            content="A holisitc integrative digital studio."
          />
          <meta
            property="og:image"
            content="https://bettersum.com/RangrPreview.png"
          />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="4096" />
          <meta property="og:image:height" content="2141" />
        </Head>
        <main>
          <div className={styles["container"]}>
            <div className={styles["inner-container"]}>
              <Subheading
                title="All Services"
                color={BetterSumColors.OffBlack}
                topOffset="30px"
              />
              <h1
                className={`${fontStyles["category-header"]} ${styles["title-text"]}`}
              >
                Integrated capabilities across strategy, design and development.
              </h1>
              <div className={styles["services-container"]}>
                <ServiceSection
                  index={1}
                  type={ServiceOptions.strategy}
                  title="Strategy"
                  overview={StrategyOverview}
                  services={strategyServices}
                />
                <ServiceSection
                  index={2}
                  type={ServiceOptions.design}
                  title="Holistic Design"
                  overview={DesignOverview}
                  services={designServices}
                />
                <ServiceSection
                  index={3}
                  type={ServiceOptions.development}
                  title="Development"
                  overview={DevelopmentOverview}
                  services={developmentServices}
                />
              </div>
            </div>
          </div>
          <div id="services-contact-form">
            <ContactForm />
          </div>
        </main>
      </div>
    </ServicePageContextProvider>
  );
};

export default Services;
