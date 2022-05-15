"use strict";
const root = document.querySelector(".root");

function div(...classes) {
  const elem = document.querySelector("div");
  classes.forEach((classItem) => {
    elem.classList.add(classItem);
  });
  root.append(elem);
}
div("width", "height", "bg");
//
//
//
//
//
// // rest operator massivdagi malumotni itemga chiqarib beradi
// function mySkills(lang, cms, ...rest) {
//   console.log(lang, cms, rest);
//   rest.forEach((item, i) => {
//     console.log([0]);
//     console.log(`extraskils  ${item}`);
//   });
// }
// // rest operatoridagi rest element console.logda massiv ichida chiqadi
// mySkills("Javascript", "word", "python, php, c++");

// // default operatori

// function calc(a, b = 2) {
//   console.log(a + b);
// }
// calc(1);
