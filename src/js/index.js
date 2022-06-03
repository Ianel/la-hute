const yearTag = document.querySelector("#year");
const yearValue = new Date().getFullYear();

window.onload = () => {
  yearTag.innerHTML = yearValue;
};
