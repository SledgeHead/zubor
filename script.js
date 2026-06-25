```javascript
/* ==========================================================
   Zubor.Us
   Global JavaScript
   Version 2.0
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
    updateGreeting();
    updateAge();
    updateBirthdayCountdown();

    // Refresh every minute so the greeting stays accurate
    setInterval(updateGreeting, 60000);
});

/* ----------------------------------------------------------
   Greeting
---------------------------------------------------------- */

function updateGreeting() {

    const hour = new Date().getHours();

    let greeting = "Good Evening 🌙";

    if (hour >= 5 && hour < 12) {
        greeting = "Good Morning ☀️";
    }
    else if (hour >= 12 && hour < 18) {
        greeting = "Good Afternoon 🌤️";
    }

    const greetingElement = document.getElementById("greeting");

    if (greetingElement) {
        greetingElement.textContent = greeting;
    }

}

/* ----------------------------------------------------------
   Dalton's Age
---------------------------------------------------------- */

function updateAge() {

    const birthDate = new Date(2025, 5, 16); // June 16, 2025
    const today = new Date();

    let totalMonths =
        (today.getFullYear() - birthDate.getFullYear()) * 12 +
        (today.getMonth() - birthDate.getMonth());

    if (today.getDate() < birthDate.getDate()) {
        totalMonths--;
    }

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    let ageText = "";

    if (years === 0) {

        ageText =
            `${months} month${months !== 1 ? "s" : ""} old`;

    }
    else if (months === 0) {

        ageText =
            `${years} year${years !== 1 ? "s" : ""} old`;

    }
    else {

        ageText =
            `${years} year${years !== 1 ? "s" : ""}, ` +
            `${months} month${months !== 1 ? "s" : ""} old`;

    }

    const ageElement = document.getElementById("child-age");

    if (ageElement) {
        ageElement.textContent = `Dalton is ${ageText}`;
    }

}

/* ----------------------------------------------------------
   Birthday Countdown
---------------------------------------------------------- */

function updateBirthdayCountdown() {

    const today = new Date();

    const currentYear = today.getFullYear();

    let nextBirthday = new Date(currentYear, 5, 16);

    if (today > nextBirthday) {

        nextBirthday = new Date(currentYear + 1, 5, 16);

    }

    const oneDay = 1000 * 60 * 60 * 24;

    const daysLeft =
        Math.ceil((nextBirthday - today) / oneDay);

    const countdownElement =
        document.getElementById("countdown");

    if (!countdownElement) return;

    if (daysLeft === 0) {

        countdownElement.textContent =
            "🎂 Happy Birthday, Dalton!";

    }
    else {

        countdownElement.textContent =
            `🎉 ${daysLeft} day${daysLeft !== 1 ? "s" : ""} until Dalton's birthday`;

    }

}

/* ----------------------------------------------------------
   Future Features
---------------------------------------------------------- */

// We'll eventually add:
//
// • Featured Book
// • Quote of the Day
// • Current Favorite
// • Holiday Themes
// • Seasonal Decorations
// • Random Family Photo
// • "On This Day" Memories
//
```
