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