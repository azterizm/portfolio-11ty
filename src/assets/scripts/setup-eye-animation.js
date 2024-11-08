document.addEventListener('DOMContentLoaded', () => {
  const eyeBall = document.getElementById('eye-ball');
  const eye = eyeBall.parentElement;
  document.addEventListener('mousemove', (e) => {
    const eyeRect = eye.getBoundingClientRect();

    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;

    const deltaX = e.clientX - eyeCenterX;
    const deltaY = e.clientY - eyeCenterY;

    const angle = Math.atan2(deltaY, deltaX);

    const distance = Math.min(
      Math.hypot(deltaX, deltaY),
      Math.min(eyeRect.width, eyeRect.height) / 3
    );

    let moveX = Math.cos(angle) * distance * 0.4;
    let moveY = Math.sin(angle) * distance * 0.4;

    eyeBall.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });

  eye.addEventListener('mouseenter', () => {
    eyeBall.style.transform = 'translate(0, 0)';
  });
});
