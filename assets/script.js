document.addEventListener("DOMContentLoaded", function () {
  // Update the year in the footer
  let yearSpans = document.querySelectorAll(".current-year");
  let currentYear = new Date().getFullYear();

  yearSpans.forEach(function (span) {
    span.textContent = currentYear;
  });

  // Goal planner
  let planner = document.querySelector("[data-goal-planner]");

  if (planner) {
    let buttons = planner.querySelectorAll("button[data-goal]");
    let outputTitle = planner.querySelector("[data-output-title]");
    let outputBody = planner.querySelector("[data-output-body]");
    let outputLink = planner.querySelector("[data-output-link]");

    function showGoal(goal) {
      // Change button styles
      buttons.forEach(function (button) {
        if (button.dataset.goal === goal) {
          button.classList.add("active");
          button.setAttribute("aria-pressed", "true");
        } else {
          button.classList.remove("active");
          button.setAttribute("aria-pressed", "false");
        }
      });

      // Change the text and link
      if (goal === "resume") {
        outputTitle.textContent = "Polish your resume first";
        outputBody.textContent = "Start with the UMSI resume guide, then review your bullets for action verbs, tools, and measurable impact before asking for feedback.";
        outputLink.textContent = "Go to Resume Support";
        outputLink.href = "resume.html";
      } else if (goal === "networking") {
        outputTitle.textContent = "Build one useful connection this week";
        outputBody.textContent = "Use the networking page to draft a short outreach message, prepare two thoughtful questions, and follow up within 48 hours.";
        outputLink.textContent = "Go to Networking & Connections";
        outputLink.href = "networking.html";
      } else if (goal === "portfolio") {
        outputTitle.textContent = "Turn projects into evidence";
        outputBody.textContent = "Visit the portfolio page to choose your strongest class or internship work and shape it into a concise case study with context, process, and reflection.";
        outputLink.textContent = "Go to Portfolio Planning";
        outputLink.href = "portfolio.html";
      } else if (goal === "coaching") {
        outputTitle.textContent = "Get direct CDO support";
        outputBody.textContent = "If you are feeling stuck, book time with a career coach and bring one specific question so the appointment feels focused and productive.";
        outputLink.textContent = "Book a coaching resource";
        outputLink.href = "https://umich.instructure.com/courses/137916/pages/talk-to-a-career-coach";
      }
    }

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        showGoal(button.dataset.goal);
      });
    });

    // Default option
    showGoal("resume");
  }
});
