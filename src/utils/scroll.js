export const scrollToElementSmoothly = (id, delay = 0) => {
  const elem = document.getElementById(id);
  if (!elem) return;

  let startTime = 0;

  const easing = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

  const getTargetPos = () => Math.max(0, elem.offsetTop);

  const startPos = window.scrollY;
  const duration = Math.max(500, Math.abs(getTargetPos() - startPos) / 10);

  const scrolling = (currentTime, duration) => {
    const distance = getTargetPos() - startPos;
    if (!startTime) startTime = currentTime;
    const progress = currentTime - startTime;
    const newPos =
      easing(Math.min(progress / duration, 1)) * distance + startPos;

    window.scrollTo(0, newPos);

    if (progress < duration) {
      requestAnimationFrame((time) => scrolling(time, duration));
    }
  };

  setTimeout(() => requestAnimationFrame((time) => scrolling(time, duration)), delay);
};
