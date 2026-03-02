
const btn = document.querySelector(".nav-toggle");
const nav = document.querySelector("[data-nav]");

btn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  btn.setAttribute("aria-expanded", open ? "true" : "false");
});


document.getElementById("year").textContent = new Date().getFullYear();
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = contactForm.querySelector('input[type="text"]').value.trim();
  const email = contactForm.querySelector('input[type="email"]').value.trim();
  const details = contactForm.querySelector("textarea").value.trim();

  if (!name || !email || !details) {
    alert("Please fill in all fields 🙂");
    return;
  }

  alert("Message sent successfully! ✅ (demo)");
  contactForm.reset();
});