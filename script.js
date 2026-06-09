const contactForm = document.querySelector("#contact-form");
const formMessage = document.querySelector("#form-message");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#message").value.trim();

  formMessage.classList.remove("success", "error");

  formMessage.textContent = `Thank you, ${name}. Your message is ready to send.`;
  formMessage.classList.add("success");
  contactForm.reset();
});
