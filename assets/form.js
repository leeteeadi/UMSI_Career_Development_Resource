document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#feedback-form");
  const status = document.querySelector("#form-status");

  if (!form || !status) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    if (!name || !email || !message) {
      status.textContent = "Please complete all fields before submitting.";
      return;
    }

    if (!email.includes("@")) {
      status.textContent = "Please enter a valid email address.";
      return;
    }

    status.textContent = "Thanks! Your feedback form is ready for future backend connection.";
    form.reset();
  });
});
