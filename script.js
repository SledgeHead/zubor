document.addEventListener("DOMContentLoaded", function () {
    updateGreeting();
    updateAge();
    updateBirthdayCountdown();

    setInterval(updateGreeting, 60000);
});

function updateGreeting() {
    const hour = new Date().getHours();

    let greeting;

    if (hour >= 5 && hour < 12) {
        greeting = "Good Morning ☀️";
    } else if (hour >= 12 && hour < 18) {
        greeting = "Good Afternoon 🌤️";
    } else {
        greeting = "Good Evening 🌙";
    }

    document.getElementById("greeting").textContent = greeting;
}

function updateAge() {

    const birthDate = new Date(2025, 5, 16);
    const today = new Date();

    let totalMonths =
        (today.getFullYear() - birthDate.getFullYear()) * 12 +
        (today.getMonth() - birthDate.getMonth());

    if (today.getDate() < birthDate.getDate()) {
        totalMonths--;
    }

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    let ageText;

    if (years === 0) {
        ageText = `${months} month${months !== 1 ? "s" : ""} old`;
    } else if (months === 0) {
        ageText = `${years} year${years !== 1 ? "s" : ""} old`;
    } else {
        ageText = `${years} year${years !== 1 ? "s" : ""}, ${months} month${months !== 1 ? "s" : ""} old`;
    }

    document.getElementById("child-age").textContent =
        `Dalton is ${ageText}`;
}

function updateBirthdayCountdown() {

    const today = new Date();

    let nextBirthday = new Date(today.getFullYear(), 5, 16);

    if (today > nextBirthday) {
        nextBirthday = new Date(today.getFullYear() + 1, 5, 16);
    }

    const daysLeft = Math.ceil(
        (nextBirthday - today) / (1000 * 60 * 60 * 24)
    );

    if (daysLeft === 0) {
        document.getElementById("countdown").textContent =
            "🎂 Happy Birthday, Dalton!";
    } else {
        document.getElementById("countdown").textContent =
            `🎉 ${daysLeft} day${daysLeft !== 1 ? "s" : ""} until Dalton's birthday`;
    }
}
