const dropdownList = document.querySelector('.dropdown-list');
const dropdownItems = Array.from(dropdownList.children);
const dropdownSelect = document.querySelector('.dropdown-select');
const dropdownSelectText = dropdownSelect.querySelector('input');

function handleSelectDropdown(e) {
  const { country } = e.target.dataset;
  dropdownSelectText.value = country;
  dropdownList.classList.remove('show');
}

dropdownSelect.addEventListener('click', () => {
  dropdownList.classList.toggle('show');
});

dropdownItems.forEach((el) => {
  el.addEventListener('click', handleSelectDropdown);
});
