
// Function to copy code to clipboard
function copyToClipboard(button) {
    // Find the code block
    const codeBlock = button.closest('.question-box').querySelector('pre code');
    
    // Create a temporary input element to copy the code text
    const textArea = document.createElement('textarea');
    textArea.value = codeBlock.textContent; // Get the code text
    document.body.appendChild(textArea);
    
    // Select and copy the code text
    textArea.select();
    document.execCommand('copy');
    
    // Remove the temporary input element
    document.body.removeChild(textArea);
    
    // Change the button to show the copied status
    const originalIcon = button.querySelector('i');
    originalIcon.classList.remove('fa-copy');
    originalIcon.classList.add('fa-check');
    button.textContent = 'Copied! ';

    // Reset the button after 2 seconds
    setTimeout(() => {
        originalIcon.classList.remove('fa-check');
        originalIcon.classList.add('fa-copy');
        button.textContent = 'Copy Code ';
    }, 2000);
}

// Attach the copy function to all copy buttons
document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', function() {
        copyToClipboard(button);
    });
});
