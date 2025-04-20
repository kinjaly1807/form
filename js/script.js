// Get references to form elements
const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const submitButton = document.getElementById('submitBtn');

// Function to validate name
function validateName() {
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required.";
        return false;
    } else {
        nameError.textContent = "";
        return true;
    }
}

// Function to validate email
function validateEmail() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailInput.value.trim() === "") {
        emailError.textContent = "Email is required.";
        return false;
    } else if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = "Please enter a valid email address.";
        return false;
    } else {
        emailError.textContent = "";
        return true;
    }
}

// Form submit event handler
form.addEventListener('submit', (e) => {
    // Prevent the form from submitting if validation fails
    e.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();

    if (isNameValid && isEmailValid) {
        alert("Form submitted successfully!");
    }
});

// Add input event listeners for real-time validation
nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
