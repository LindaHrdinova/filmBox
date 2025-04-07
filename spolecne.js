const hamburgerMenuElm = document.querySelector('#menu-tlacitko');
const menuPolozkyElm = document.querySelector('#menu-polozky');
const hamburgerIconElm = document.querySelector('i.fas');

//	<i class="fas fa-bars"></i>

hamburgerMenuElm.addEventListener('click', () => {
  menuPolozkyElm.classList.toggle('show');
  hamburgerIconElm.classList.toggle('fa-bars');
  hamburgerIconElm.classList.toggle('fa-xmark');
});
