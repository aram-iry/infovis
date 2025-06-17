function enforceLightMode() {
  const switchButton = document.querySelector('.theme-switch-button');
  if (typeof switchButton !== 'undefined') {
    switchButton.remove();
  }

  if (document.querySelector('html').getAttribute('data-theme') !== 'light') {
    document.querySelector('html').setAttribute('data-theme', 'light')

    localStorage.setItem('mode', 'light');
    localStorage.setItem('theme', 'light');

  }
}

window.addEventListener('load', enforceLightMode);
