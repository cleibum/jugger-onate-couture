const iconLinks = document.querySelectorAll('.icon-nav a');

iconLinks.forEach(link => {
  link.addEventListener('mousemove', (e) => {
    const label = e.target.dataset.label;
    const tooltip = link.querySelector('span');
    tooltip.style.top = `${e.pageY - 30}px`;
    tooltip.style.left = `${e.pageX}px`;
  });
});
