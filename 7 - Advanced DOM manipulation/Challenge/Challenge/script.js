document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');
    const formFeedback = document.getElementById('formFeedback');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Task: Validate each field here
        // - Check if the name, email, and password are not empty.
        // - Validate the email format.
        // - Check the password length and complexity.
        // - Display messages or indicators for each input's validation.
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!name || !email || !password) {
            formFeedback.textContent = 'Please fill in all the fields.';
            return;
        }

        if (nameInput.value.length < 2) {
            formFeedback.textContent = 'Name must be at least 2 characters long.';
        }

        if (!/^[A-Za-zА-Яа-яІіЇїЄє\s-]+$/.test(name)) {
            formFeedback.textContent = 'Name can only contain letters, spaces, or hyphens.';
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            formFeedback.textContent = 'Please enter a valid email address.';
            return;
        }

        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        if (!passwordRegex.test(password)) {
            formFeedback.textContent = 
                'Password must be at least 8 characters long, include 1 uppercase letter, 1 number, and 1 special character.';
            return;
        }

        formFeedback.textContent = `Thank you for registering, ${name}.`
    });
});
