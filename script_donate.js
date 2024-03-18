"use strict";

// donation

const donateButton1 = document.querySelector(".donate-btn1");
const donateButton2 = document.querySelector(".donate-btn2");
const donateButton3 = document.querySelector(".donate-btn3");
let donation = document.querySelector(".donated-number");

donateButton1.addEventListener("click", function () {
  donation.textContent = Number(donation.textContent) + 1;
});
donateButton2.addEventListener("click", function () {
  donation.textContent = Number(donation.textContent) + 2;
});
donateButton3.addEventListener("click", function () {
  donation.textContent = Number(donation.textContent) + 5;
});

// // prompt alert self made
// more info:
// https://www.youtube.com/watch?v=TARgUP4_UcE&ab_channel=Cukmekerb%27sCodingClass

function prompt_custom(text) {
  document.querySelector("#prompt-text").innerText = text;
  document.querySelector(".hidden").classList.remove("hidden");
  console.log(text);
  return new Promise((resolve, reject) => {
    document.querySelector("#prompt-button").onclick = () => {
      resolve(document.querySelector("#prompt-input").value);
      document.querySelector("#prompt_custom").classList.add("hidden");
    };
  });
}
