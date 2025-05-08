// 1. Game Actions
document.getElementById("magicButton").addEventListener("click", () => {
    alert("GOOOAAALLL! 🎉⚽");
});

document.getElementById("secretButton").addEventListener("click", () => {
    alert("Secret move unlocked! ⚡🔥");
});

const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseover", () => {
    hoverBox.textContent = "The crowd goes wild! 🎉🏟️";
});
hoverBox.addEventListener("mouseout", () => {
    hoverBox.textContent = "Hover here to feel the stadium roar 🏟️";
});

const keyInput = document.getElementById("keyInput");
const keyOutput = document.getElementById("keyOutput");
keyInput.addEventListener("input", (event) => {
    keyOutput.textContent = `Fan chant: ${event.target.value}`;
});

// 2. Image Gallery
const galleryImage = document.getElementById("galleryImage");
const images = [
    "https://via.placeholder.com/300/FF0000",
    "https://via.placeholder.com/300/00FF00",
    "https://via.placeholder.com/300/0000FF",
];
let currentImageIndex = 0;

document.getElementById("prevBtn").addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    galleryImage.src = images[currentImageIndex];
});

document.getElementById("nextBtn").addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    galleryImage.src = images[currentImageIndex];
});

// 3. Tabs for Team Info
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const targetTab = tab.getAttribute("data-tab");

        tabContents.forEach((content) => {
            content.classList.remove("active");
        });
        document.getElementById(`tab-${targetTab}`).classList.add("active");

        tabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
    });
});

// 4. Fan Signup Form
const signupForm = document.getElementById("signupForm");
const formMessage = document.getElementById("formMessage");

signupForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (!name || !email || password.length < 8) {
        formMessage.textContent = "Please fill out all fields correctly.";
        formMessage.style.color = "red";
    } else {
        formMessage.textContent = "Welcome to the fan club! 🎉";
        formMessage.style.color = "green";
        signupForm.reset();
    }
});