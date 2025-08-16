document.addEventListener('DOMContentLoaded', () => {
  const newsletterForm = document.getElementById('newsletter-form');
  const newsletterEmailInput = document.getElementById('newsletter-email');
  const newsletterSubmitBtn = document.getElementById('newsletter-submit-btn');
  const newsletterSuccessMessage = document.getElementById('newsletter-success-message');
  const newsletterResetBtn = document.getElementById('newsletter-reset-btn');

  // Check if all required elements exist before proceeding
  if (!newsletterForm || !newsletterEmailInput || !newsletterSubmitBtn || !newsletterSuccessMessage || !newsletterResetBtn) {
    console.warn('One or more newsletter elements not found. Skipping newsletter setup.');
    return;
  }

  newsletterForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent default form submission

    const email = newsletterEmailInput.value;
    if (!email) {
      alert('Please enter your email address.');
      return;
    }

    newsletterSubmitBtn.disabled = true; // Disable button during submission
    newsletterSubmitBtn.textContent = 'Submitting...'; // Change button text

    try {
      const response = await fetch('https://formspree.io/f/xnnzrery', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json' // Important for Formspree to return JSON
        },
        body: JSON.stringify({ email: email })
      });

      if (response.ok) {
        // Submission successful
        newsletterForm.classList.add('hidden'); // Hide the form
        newsletterSuccessMessage.classList.remove('hidden'); // Show the success message
        newsletterEmailInput.value = ''; // Clear the input field
      } else {
        // Submission failed
        const data = await response.json();
        alert(`Error: ${data.error || 'Something went wrong. Please try again.'}`);
      }
    } catch (error) {
      console.error('Newsletter submission error:', error);
      alert('An error occurred. Please check your internet connection and try again.');
    } finally {
      newsletterSubmitBtn.disabled = false; // Re-enable button
      newsletterSubmitBtn.textContent = 'Submit'; // Restore button text
    }
  });

  newsletterResetBtn.addEventListener('click', () => {
    newsletterSuccessMessage.classList.add('hidden'); // Hide success message
    newsletterForm.classList.remove('hidden'); // Show the form again
  });
});
