import { slider } from "../components/slider.js";
import { appendTwitterData } from "./slides.js";

// Slider Container
let slider_con = document.querySelector(".slider-container");
slider_con.innerHTML = slider();

// get Data based on different Screen Size
let twitter_data = JSON.parse(localStorage.getItem("twitter_data"));
let mid_data = JSON.parse(localStorage.getItem("t_mid_data"));
let small_data = JSON.parse(localStorage.getItem("t_small_data"));
let screen_size = window.screen.width;
if (screen_size >= 1030) {
  appendTwitterData(twitter_data);
} else if (screen_size >= 770 && screen_size <= 1029) {
  appendTwitterData(mid_data);
} else if (screen_size <= 779) {
  appendTwitterData(small_data);
}

let slides = [...document.querySelectorAll(".slide")];
let i = 0;

let mleft = 0;
const prevItem = () => {
  if (i - 1 < 0) {
    // i = slides.length;
    for (let k = 0; k < slides.length - 1; k++) {
      nextItem();
    }
    return;
  }
  mleft = 0;
  slides[i - 1].style.marginLeft = mleft + "px";
  i--;
};

const nextItem = () => {
  if (i == slides.length - 1) {
    for (let k = 0; k < slides.length - 1; k++) {
      prevItem();
    }
    return;
  }
  let size = window.screen.width;
  if (size >= 1030 && size <= 1330) {
    mleft = -873;
  } else if (screen_size >= 770 && screen_size <= 1029) {
    mleft = -581;
  } else if (screen_size <= 779) {
    mleft = -267;
  } else {
    mleft = -1176;
  }
  i++;
  slides[i - 1].style.marginLeft = mleft + "px";
};

let prev = document.getElementById("prev");
let next = document.getElementById("next");

prev.addEventListener("click", prevItem);
next.addEventListener("click", nextItem);

let resizeTimeout;
window.addEventListener("resize", function (event) {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(function () {
    window.location.reload();
  }, 1500);
});