"use strict";

const main1 = document.querySelector(".main__1");
const main2 = document.querySelector(".main__2");
const main3 = document.querySelector(".main__3");
const mySlider = document.querySelector(".my-slider");
const template = document.querySelector(".template").content;
const API_KEY = "b1566df1";
let search = "hulk";
let page = 1;
const img = [];
let slider = tns({
  container: ".my-slider",
  items: 1,
  slideBy: "page",
  autoplay: true,
  mouseDrag: true,
  swipeAngle: false,
  speed: 400,
  controls: false,
  nav: false,
  autoplayButtonOutput: false,
});

const newSlide = function (datas) {
  //const newLi = document.createElement("img");
  const movieFragment = document.createDocumentFragment();
  datas.Search.forEach((data) => {
    const tempClone = template.cloneNode(true);
    
    tempClone.querySelector(".img").src = `${data.Poster}`
   
    movieFragment.appendChild(tempClone)
  });
  mySlider.appendChild(movieFragment)
};

const getMovies = async function () {
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&page=${page}`
  );

  const datas = await response.json();
  newSlide(datas);
};
getMovies();
