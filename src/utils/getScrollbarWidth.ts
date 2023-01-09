export const getScrollbarWidth = () => {
  if (typeof document === "undefined") {
    return 0;
  }

  const outer = document.createElement("div");
  const inner = document.createElement("div");

  outer.style.visibility = "hidden";
  outer.style.overflow = "scroll";

  document.body.appendChild(outer);
  outer.appendChild(inner);

  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

  outer.parentNode?.removeChild(outer);

  return scrollbarWidth;
};
