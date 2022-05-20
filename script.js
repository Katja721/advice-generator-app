"use strict";
const idEl = document.querySelector(".idElement");
const advice = document.querySelector(".advice");

const getJSON = async function () {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
const changeText = async function () {
  try {
    const data = await getJSON();
    idEl.textContent = `${data.slip.id}`;
    advice.textContent = `${data.slip.advice}`;
    console.log(data.slip.id);
  } catch (error) {
    console.error(error);
  }
};
console.log(changeText());
