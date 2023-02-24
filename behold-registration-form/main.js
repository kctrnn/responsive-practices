window.addEventListener('load', () => {
  const Images = ['flowerPlant.jpeg', 'fall.jpeg', 'leaf.jpeg'];
  const randomImage = Math.trunc(Math.random() * Images.length);

  document.body.style.backgroundImage = `url(img/${Images[randomImage]})`;
});
