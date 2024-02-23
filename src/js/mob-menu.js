document.getElementById('mob-menu-btn').addEventListener('click', function () {
  document.getElementById('mob-menu').classList.add('is-open');
});
document
  .getElementById('mob-menu-close')
  .addEventListener('click', function () {
    document.getElementById('mob-menu').classList.remove('is-open');
  });

document.getElementById('mob-nav').addEventListener('click', function () {
  document.getElementById('mob-menu').classList.remove('is-open');
});
