document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Fetch input values and trim any leading or trailing spaces
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    // Regular Expressions for validation
    const emailPattern = /^[a-zA-Z]+@[a-zA-Z]{3,}\.[a-zA-Z]{2,3}$/; // Pattern for valid email address
    const phonePattern = /^\d{10}$/; // Pattern for valid 10-digit phone number
    const invalidPhonePattern = /^(0{10})$/; // Pattern to check for 10 consecutive zeros
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$&])[A-Za-z\d@#$&]{7,}$/; // Pattern for password validation

    // Clear previous error messages
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => element.remove());

    // Validation status
    let isValid = true;

    // Username validation
    if (!username) {
        displayError('username', 'Username cannot be empty.');
        isValid = false;
    }

    // Email validation
    if (!email || !emailPattern.test(email)) {
        displayError('email', 'Please enter a valid email address.');
        isValid = false;
    }

    // Phone number validation
    if (!phone || !phonePattern.test(phone)) {
        displayError('phone', 'Please enter a valid 10-digit phone number.');
        isValid = false;
    } else if (invalidPhonePattern.test(phone)) {
        displayError('phone', 'Phone number cannot contain 10 consecutive zeros.');
        isValid = false;
    }

    // Password validation
    if (!password || !passwordPattern.test(password)) {
        displayError('password', 'Password must be at least 7 characters long and contain at least one capital letter, one digit, and one special character from the set (&,$,#,@).');
        isValid = false;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
        displayError('confirmPassword', 'Passwords do not match.');
        isValid = false;
    }

    // If the form is valid, proceed with form submission logic
    if (isValid) {
        displaySuccessNotification('Registration successful!');
        // Optionally, reset the form fields
        document.getElementById('registrationForm').reset();
    }
});

// Function to display error messages
function displayError(inputId, message) {
    const inputElement = document.getElementById(inputId); // Get the input field by ID
    const errorElement = document.createElement('div'); // Create a new div element for the error message
    errorElement.className = 'error-message text-danger'; // Add Bootstrap text-danger class for red color
    errorElement.textContent = message; // Set the error message text
    inputElement.parentElement.appendChild(errorElement); // Append the error message below the input field
}

// Function to display success notification
function displaySuccessNotification(message) {
    const notificationElement = document.createElement('div'); // Create a new div element for the notification
    notificationElement.className = 'alert alert-success alert-dismissible fade show mt-4'; // Bootstrap alert classes
    notificationElement.role = 'alert'; // ARIA role for alerts
    notificationElement.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    document.getElementById('registration').appendChild(notificationElement); // Append the alert to the registration section

    // Automatically remove the notification after 5 seconds
    setTimeout(() => {
        notificationElement.remove();
    }, 5000);
}
