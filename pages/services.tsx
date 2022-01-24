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

const Services: NextPage = () => {
  const StrategyOverview = (
    <p>
      Our work begins at the inception of an idea. We solve problems, challenge
      values, and develop strategies to articulate a <b>better</b> point of view
      that helps your business{" "}
      <span className={styles["highlighted-text"]}>navigate the future</span>.
    </p>
  );
  const strategyServices: ServiceDetails[] = [
    {
      name: "Workshops",
      description:
        "Workshops accelerate the process of co-discovering problems with products that match it with the best possible solutions with tangible next steps.",
      offerings: [
        "Facilitation of multi-day sessions",
        "Ideation sessions",
        "Prototyping sessions",
      ],
    },
    {
      name: "Brand Strategy",
      description:
        "Building a strong brand means having a clear mission, communicating it well, and meeting customers where they are.",
      offerings: [
        "Vission & mission",
        "Competitive landscape analysis",
        "Values & positioning",
      ],
    },
    {
      name: "UX Strategy",
      description:
        "UX is the foundation for every solution, because developing a plan to understand your audience’s wants and needs is the true test of a brand and experience.",
      offerings: [
        "Wireframes and user flows",
        "Site optimization",
        "Persona development",
      ],
    },
    {
      name: "Strategy Stewardship",
      description:
        "We believe strategy is not just a phase, but a way of making deliberate decisions throught the life of a business. We apply this long-term perspective to help execute your vision.",
      offerings: ["Product management", "Brand or product oversight"],
    },
  ];

  const DesignOverview = (
    <p>
      We design digital products, brands, and services by building{" "}
      <span className={styles["highlighted-text"]}>with empathy</span>. We
      believe that a thoughtful user experience is what makes the difference
      between a great solution and a <b>better</b> solution.
    </p>
  );
  const designServices: ServiceDetails[] = [
    {
      name: "Design Audit",
      description:
        "A design audit is the perfect way to measure the usability of your product and identify potential adoption challenges for your audience and determines potential solutions to reduce friction for your users.",
      offerings: [
        "Evaluate against best practices",
        "Highlight themes",
        "Recommend next steps",
      ],
    },
    {
      name: "Design Systems",
      description:
        "Building a design system allows our clients to have and share a more consistent design language that promotes effective in-house interaction. Our goal is to support in creating and shaping that system as early as possible.",
      offerings: [
        "Vission & mission",
        "Competitive landscape analysis",
        "Values & positioning",
      ],
    },
    {
      name: "UX Design",
      description:
        "UX is baked into everything we do. We design the user experience from top to bottom to further support the best resulting experience for the end user.",
      offerings: [
        "Wireframes and user flows",
        "Site optimization",
        "Persona development",
      ],
    },
    {
      name: "Branding",
      description:
        "Branding fuels the growth of brands. Whether you are a startup or a well-established company, our collaborative process helps articulate the identity of your business. Our team will help you manifest this identity in the digital world.",
      offerings: ["Identity development", "Brand guidelines", "Naming"],
    },
  ];

  const DevelopmentOverview = (
    <p>
      We help transform great visions into <b>better</b> products. We expand
      your ideas into{" "}
      <span className={styles["highlighted-text"]}>
        fully functioning products,
      </span>{" "}
      that quickly obtain user feedback for focusing on developing the next
      steps for your business.
    </p>
  );
  const developmentServices: ServiceDetails[] = [
    {
      name: "Technical Audit",
      description:
        "Technology audits are a great way to have perspective on your company's product, and gain insight into ways to both improve current infrastructure and future approaches.",
      offerings: [
        "Vision and mission",
        "Infrustructure",
        "Recommend next steps",
      ],
    },
    {
      name: "Idea to MVP",
      description:
        "We believe that ideas are only worth the degree to which they can be realized. Our goal is to help business’ take the first step by transforming their ideas into  functioning prototypes.",
      offerings: [
        "Problem definition",
        "Product development",
        "Iteration Recommendations",
      ],
    },
    {
      name: "SaaS Development",
      description:
        "We develop software that has simple and intuitive experiences without sacrificing the efficiency of traditional Saas products. Our team will help you develop the right tool that end users will be excited to use.",
      offerings: ["Software development", "Analytics integrations"],
    },
  ];

  return (
    <ServicePageContextProvider>
      <div>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <div className={styles["container"]}>
            <div className={styles["inner-container"]}>
              <Subheading
                title="All Services"
                color={BetterSumColors.OffBlack}
                topOffset="40px"
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
