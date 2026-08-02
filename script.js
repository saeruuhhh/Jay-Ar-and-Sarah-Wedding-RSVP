// ===============================
// COUNTDOWN
// ===============================

const weddingDate = new Date("August 18, 2026 14:00:00").getTime();
const countdown = document.getElementById("countdown");

function updateCountdown() {

    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance <= 0) {
        countdown.innerHTML = "💍 Today is our Wedding Day!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML =
        `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

}

updateCountdown();
setInterval(updateCountdown, 1000);


// ===============================
// RSVP
// ===============================

const form = document.getElementById("rsvpForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const submitButton = form.querySelector("button");

    submitButton.disabled = true;
    submitButton.innerHTML = "Submitting...";

    const name = document.getElementById("guestName").value;
    const attendance = document.getElementById("attendance").value;

    const formData = new FormData();

    formData.append("entry.1150856461", name);
    formData.append("entry.470752330", attendance);

    fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSdBFjb2PpbJFhG4VaxPXbV0eCI1V6n1YSOkQPgd9N0FARa9cw/formResponse",
        {
            method: "POST",
            mode: "no-cors",
            body: formData
        }
    )
    .then(() => {

        form.reset();

        successMessage.style.display = "block";

        submitButton.disabled = false;
        submitButton.innerHTML = "Submit RSVP";

        successMessage.scrollIntoView({
            behavior: "smooth"
        });

    })
    .catch(() => {

        alert("Something went wrong. Please try again.");

        submitButton.disabled = false;
        submitButton.innerHTML = "Submit RSVP";

    });

});
