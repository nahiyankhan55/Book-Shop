// ====== NAVBAR MENU TOGGLE ======
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Create a close button dynamically for mobile menu
const closeBtn = document.createElement("div");
closeBtn.classList.add("close-btn");
closeBtn.textContent = "✕";
navLinks.appendChild(closeBtn);

menuToggle.addEventListener("click", () => {
  navLinks.classList.add("active");
  document.body.style.overflow = "hidden"; // Prevent background scroll
});

closeBtn.addEventListener("click", () => {
  navLinks.classList.remove("active");
  document.body.style.overflow = "auto";
});

// ====== CART FUNCTIONALITY ======
let cartCount = 0;
const cartCountElement = document.getElementById("cart-count");
const addCartButtons = document.querySelectorAll(".btn-add-cart");

addCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    cartCount++;
    cartCountElement.textContent = cartCount;

    // Small bump animation
    cartCountElement.classList.add("bump");
    setTimeout(() => cartCountElement.classList.remove("bump"), 300);
  });
});

// ====== NEWSLETTER SUBSCRIPTION ======
const formContainer = document.querySelector(".form-container");
if (formContainer) {
  const emailInput = formContainer.querySelector("input[type='email']");
  const subscribeBtn = formContainer.querySelector("button");

  subscribeBtn.addEventListener("click", () => {
    if (emailInput.value.trim() === "") {
      alert("Please enter a valid email address!");
    } else {
      alert(`Thank you for subscribing, ${emailInput.value}!`);
      emailInput.value = "";
    }
  });
}

// ====== CONTACT FORM HANDLER ======
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = contactForm.querySelector(
      "input[placeholder='Your Name']"
    ).value;
    const email = contactForm.querySelector(
      "input[placeholder='Your Email']"
    ).value;
    const message = contactForm.querySelector("textarea").value;

    if (name && email && message) {
      alert(`Thank you, ${name}! Your message has been sent successfully.`);
      contactForm.reset();
    } else {
      alert("Please fill in all fields before submitting.");
    }
  });
}

// ====== SMOOTH SCROLL FOR NAV LINKS ======
document.querySelectorAll('.nav-links a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    navLinks.classList.remove("active");
    document.body.style.overflow = "auto";
  });
});
