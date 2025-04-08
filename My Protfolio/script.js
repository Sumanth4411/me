// script.js 
// ===== Smooth Scroll Navigation =====
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// ===== Typing Animation Effect =====
const typingText = "Hi, I'm Syrigapu Sumanth Kumar";
let i = 0;

function typeEffect() {
    const heading = document.querySelector("#about h1");
    if (i < typingText.length) {
        heading.textContent += typingText.charAt(i);
        i++;
        setTimeout(typeEffect, 100);
    }
}

window.addEventListener("load", () => {
    document.querySelector("#about h1").textContent = "";
    typeEffect();
});

// ===== Fade-in Sections on Scroll =====
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
        }
    });
}, {
    threshold: 0.1
});

sections.forEach(section => observer.observe(section));

// ===== Animated Background Gradient =====
let bgColors = ["#ff7e5f", "#feb47b", "#86fde8", "#acb6e5"];
let bgIndex = 0;

setInterval(() => {
    document.body.style.background = `linear-gradient(135deg, ${bgColors[bgIndex]}, ${bgColors[(bgIndex + 1) % bgColors.length]})`;
    bgIndex = (bgIndex + 1) % bgColors.length;
}, 4000);


document.addEventListener("DOMContentLoaded", () => {
    const hireForm = document.getElementById("hire-form");

    hireForm.addEventListener("submit", (e) => {
        e.preventDefault(); // prevent form from reloading the page

        // Capture input values
        const name = hireForm.querySelector('input[placeholder="Your Name"]').value.trim();
        const email = hireForm.querySelector('input[placeholder="Your Email"]').value.trim();
        const phone = hireForm.querySelector('input[placeholder="Your Phone Number"]').value.trim();
        const details = hireForm.querySelector('textarea').value.trim();

        // Simple validation (already handled by HTML5, but this adds another layer)
        if (!name || !email || !phone || !details) {
            alert("Please fill in all the fields.");
            return;
        }

        // Simulate submission
        alert(`Thank you, ${name}! Your request has been received. We'll get back to you at ${email}.`);

        // Reset the form
        hireForm.reset();
    });
});
