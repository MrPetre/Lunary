// My default settings for scroll reveal
const defaultProps = {
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  distance: "15px",
  duration: 1000,
  desktop: true,
  mobile: true
};

// =========== Login area ============

ScrollReveal().reveal(".avatar", {
  ...defaultProps,
  delay: 600,
  origin: "top"
});

ScrollReveal().reveal(".img", {
  ...defaultProps,
  delay: 400,
  origin: "left"
});

// =========== Login area ============
