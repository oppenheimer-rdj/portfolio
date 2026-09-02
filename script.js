const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const links = [...document.querySelectorAll(".nav-links a")];
const sections = links
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const onScroll = () => {
  const y = window.scrollY + 160;
  let active = sections[0];
  sections.forEach((section) => {
    if (section.offsetTop <= y) active = section;
  });
  links.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === "#" + active.id);
  });
};

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
