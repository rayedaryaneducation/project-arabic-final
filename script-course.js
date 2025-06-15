document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signup-form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message");
        const success = document.getElementById("success");

        message.textContent = "";
        success.textContent = "";

        

        const userData = {
            username,
            email,
            watchedVideos: []
        };

        localStorage.setItem("userData", JSON.stringify(userData));
        success.textContent = `Sign up successful! Welcome, ${username}.`;

        form.reset();

        // Redirect to LMS page after 1.5 seconds
        setTimeout(() => {
            window.location.href = "course-main.html"; // change to your actual LMS filename
        }, 1500);
    });
});
