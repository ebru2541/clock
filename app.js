let saniye = document.querySelector(".saniye");
let yelkovan = document.querySelector(".yelkovan");
let akrep = document.querySelector(".akrep");

setInterval(() => {
  let saat = new Date().getHours();
  let dakika = new Date().getMinutes();
  let sny = new Date().getSeconds();

  saniye.style.transform = `rotate(${sny * 6}deg)`;
  yelkovan.style.transform = `rotate(${dakika * 6}deg)`;
  akrep.style.transform = `rotate(${saat * 30 + dakika * 0.5}deg)`;
}, 1000);
