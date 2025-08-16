document.addEventListener('DOMContentLoaded', () => {
  // Select all newsletter components
  const newsletterComponents = document.querySelectorAll('.newsletter-component');

  newsletterComponents.forEach(component => {
    // Elements specific to the blog page's "click to reveal" component
    const subscribeButton = component.querySelector('#blog-subscribe-button');
    const formContainer = component.querySelector('#blog-newsletter-form-container');

    // Elements common to all newsletter forms (selected using data attributes)
    const newsletterForm = component.querySelector('[data-newsletter-form]');
    const newsletterEmailInput = component.querySelector('[data-newsletter-email]');
    const newsletterSubmitBtn = component.querySelector('[data-newsletter-submit-btn]');
    const newsletterSuccessMessage = component.querySelector('[data-newsletter-success-message]');
    const newsletterResetBtn = component.querySelector('[data-newsletter-reset-btn]');

    // --- Logic for the "click to reveal" button (specific to blog.njk) ---
    if (subscribeButton && formContainer) {
      subscribeButton.addEventListener('click', () => {
        subscribeButton.classList.add('hidden'); // Hide the subscribe button
        formContainer.classList.remove('hidden'); // Show the form container
      });
    }

    // --- Common form submission and reset logic for all newsletter components ---
    // Check if all required elements for the form exist within this component
    if (!newsletterForm || !newsletterEmailInput || !newsletterSubmitBtn || !newsletterSuccessMessage || !newsletterResetBtn) {
      console.warn('One or more newsletter elements not found within a component. Skipping setup for this component.', component);
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
      
      // If this is the blog page component, reset it to the initial button state
      if (subscribeButton && formContainer) {
        subscribeButton.classList.remove('hidden');
        formContainer.classList.add('hidden');
      }
    });
  });
});
