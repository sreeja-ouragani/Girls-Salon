// app.js
function showContent(sectionId) {
    // Hide all content sections
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.style.display = 'none');

    // Show the selected content section
    const selectedContent = document.getElementById(sectionId);
    if (selectedContent) {
        selectedContent.style.display = 'block'; // Display the selected section
    }

    // Change the background color when a button is clicked
    document.body.style.backgroundImage = 'none'; // Remove the background image
    document.body.style.backgroundColor = '#f0f0f0'; // Change to a solid color
}

// Do not show any content by default when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // No content is displayed by default
});
