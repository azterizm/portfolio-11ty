function setupTooltips() {
  const tooltipContainer = document.createElement('div');
  tooltipContainer.className = 'tooltip';
  document.body.appendChild(tooltipContainer);

  const showTooltip = (event) => {
    const element = event.currentTarget;
    const tooltipText = element.getAttribute('data-tooltip-text');
    if (!tooltipText) return;

    tooltipContainer.textContent = tooltipText;
    tooltipContainer.classList.add('visible');

    const rect = element.getBoundingClientRect();
    
    // Recalculate tooltip dimensions after content is set
    const tooltipRect = tooltipContainer.getBoundingClientRect();

    // Default position: above the element
    let top = rect.top - tooltipRect.height - 10; // 10px offset
    let left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);

    // If it goes off the top of the viewport, position it below
    if (top < 0) {
      top = rect.bottom + 10;
    }

    // Handle horizontal overflow
    if (left < 0) {
      left = 5;
    } else if (left + tooltipRect.width > window.innerWidth) {
      left = window.innerWidth - tooltipRect.width - 5;
    }

    tooltipContainer.style.top = `${top + window.scrollY}px`;
    tooltipContainer.style.left = `${left + window.scrollX}px`;
  };

  const hideTooltip = () => {
    tooltipContainer.classList.remove('visible');
  };

  document.querySelectorAll('.has-tooltip').forEach(element => {
    element.addEventListener('mouseenter', showTooltip);
    element.addEventListener('mouseleave', hideTooltip);
  });
}

// Make sure to run after the DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupTooltips);
} else {
  setupTooltips();
}
