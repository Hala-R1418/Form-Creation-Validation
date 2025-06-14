document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Retrieve input values and trim whitespace
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Initialize validation status and messages
        let isValid = true;
        const messages = [];

        // Username validation
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Email validation
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }

        // Password validation
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // Make the feedbackDiv visible
        feedbackDiv.style.display = "block";

        // Display success or error messages based on validation
        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";  // Green color for success
            feedbackDiv.style.backgroundColor = "#d4edda";  // Light green background
        } else {
            // Join error messages with line breaks and display in the feedback div
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#d8000c";  // Red color for errors
            feedbackDiv.style.backgroundColor = "#ffbaba";  // Light red background
        }
    });
});