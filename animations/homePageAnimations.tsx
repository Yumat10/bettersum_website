import { Variants } from "framer-motion";

export const homePageLoadDuration = 1.5;
export const homePageAnimationDuration = 0.75;

export const enterFromTopContainer: Variants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: homePageLoadDuration,
      duration: homePageAnimationDuration,
    },
  },
};

export const enterFromBottomVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: homePageLoadDuration,
      duration: homePageAnimationDuration,
    },
  },
};
