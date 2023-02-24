const navbarToggle = document.querySelector("#navbarToggle");
const navbarMenu = document.querySelector("#navbarMenu");

const dropdownToggle = document.querySelector("#dropdownToggle");
const dropdownMenu = document.querySelector("#dropdownMenu");

navbarToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
  dropdownMenu.classList.toggle("active");

  if (dropdownMenu.className.includes("active")) {
    dropdownToggle.textContent = "Merch";
  }
});

// CAROUSEL
const carousel = document.querySelector(".carousel-inner");
const carouselList = document.querySelectorAll(".carousel-item");

// get carousel item width
const carouselItemWidth = carouselList[0].getBoundingClientRect().width;

carouselList.forEach((carouselItem, index) => {
  carouselItem.style.left = carouselItemWidth * index + "px";
});

let count = 1;

setInterval(() => {
  carousel.style.transform = `translateX(-${carouselItemWidth * count}px)`;
  count++;

  if (count > carouselList.length) {
    carousel.style.transform = `translateX(0)`;
    count = 1;
  }
}, 3000);

// MODAL
const buyTicketBtnList = document.querySelectorAll(".btn.tour-buy-ticket");
const modalTicket = document.querySelector("#modalTicket");
const modalTicketClose = document.querySelector("#modalTicketClose");

buyTicketBtnList.forEach((btn) =>
  btn.addEventListener("click", () => {
    modalTicket.classList.add("active");
  })
);

modalTicketClose.addEventListener("click", () => {
  modalTicket.classList.remove("active");
});
