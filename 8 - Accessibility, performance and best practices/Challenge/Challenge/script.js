// Instructions:
// 1. Evaluate the page for basic accessibility features.
// 2. Identify areas for improvement.
// 3. Implement changes to enhance accessibility.
// 4. Test the updated page using tools like screen readers or accessibility checkers.

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('button');
    button.addEventListener('click', () => {
        alert('Button Clicked!');
    });
});
