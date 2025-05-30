const langItems = document.querySelectorAll('.dropdown-menu .dropdown-item');
  langItems.forEach(item => {
    item.addEventListener('click', function (e) {
      document.querySelector('#langDropdown').textContent = this.textContent;
    });
  });