type ScrollDownProps = {
  elementId: string;
  offset: number;
};

export const smoothScrollDown = ({
  elementId,
  offset,
}: ScrollDownProps): void => {
  const element = document.getElementById(elementId);
  if (element) {
    const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
    console.log(
      "y...",
      y,
      element.getBoundingClientRect().top,
      window.pageYOffset,
      offset,
      elementId
    );
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};
