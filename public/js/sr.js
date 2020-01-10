// My default settings for scroll reveal
const defaultProps = {
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  distance: "15px",
  duration: 1000,
  desktop: true,
  mobile: true
};

// =========== Banner area ============

ScrollReveal().reveal("#left-button", {
  ...defaultProps,
  delay: 600,
  origin: "left"
});

ScrollReveal().reveal("#right-button", {
  ...defaultProps,
  delay: 600,
  origin: "right"
});

ScrollReveal().reveal(".profile-btn", {
  ...defaultProps,
  delay: 700,
  origin: "bottom"
});

// =========== End banner area ============
