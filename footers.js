document.addEventListener("DOMContentLoaded", () => {
  const footContent = document.querySelector('.footer-content');
  const toggleBtn = document.getElementById('footerToggle');
  const toggleImg = toggleBtn.querySelector('img');
  let footerVisible = false;

  toggleBtn.addEventListener('click', () => {
    if(!footerVisible) {
      footContent.style.bottom = '0';
      toggleBtn.style.bottom = '215px';
      toggleImg.classList.add('rotate');
    } else {
      footContent.style.bottom = '-200px';
      toggleBtn.style.bottom = '10px';
      toggleImg.classList.remove('rotate');
    }
    footerVisible = !footerVisible
  });
});