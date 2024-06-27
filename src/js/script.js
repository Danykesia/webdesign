// Language dropdown - Change language
let arrowMobileDown = document.querySelector('.btn-m-languages');
let arrowDesktopDown = document.querySelector('.btn-d-languages');
let hiddenMobileFlag = document.querySelector('.language-m-hidden');
let hiddenDesktopFlag = document.querySelector('.language-d-hidden');
let body = document.querySelector('body');

arrowDesktopDown.addEventListener('click', () => {
  hiddenDesktopFlag.classList.toggle('show');
});

window.onclick = function(e){
  if (!e.target.matches('.btn-d-languages') && hiddenDesktopFlag.classList.contains('show')) {
    hiddenDesktopFlag.classList.remove('show');
  }
}

const htmlTheme = document.querySelector('html');
const themeToggle = document.querySelector('.theme-toggle button');
const logo = document.querySelector('.logo');

window.onload = function() {
  if (htmlTheme.classList.contains('theme-dark')) {
    logo.src = '/img/logo-light.svg';
  }
  if (!htmlTheme.classList.contains('theme-dark')) {
    logo.src = '/img/logo-dark.svg';
  }
}

themeToggle.addEventListener('click', () => {
  if (logo.src.includes('/img/logo-dark.svg')) {
    logo.src = '/img/logo-light.svg';
  }
  else {
    logo.src = '/img/logo-dark.svg';
  }
});
