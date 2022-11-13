'use strict'
// 1行目に記載している 'use strict' は削除しないでください

function test(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
      console.log("Yay! Test PASSED.");
    } else {
      console.error("Test FAILED. Keep trying!");
      console.log("    actual: ", actual);
      console.log("  expected: ", expected);
      console.trace();
    }
  }

function selectButton() {
  let loc = window.location.pathname;
  let dir = loc.substring(0, loc.lastIndexOf('/'));
  window.open(dir + "/ex1/ex1.html");
}

let target = document.getElementById("ex1");
target.addEventListener("click", selectButton);


function selectButton2() {
  let loc = window.location.pathname;
  let dir = loc.substring(0, loc.lastIndexOf('/'));
  window.open(dir + "/ex2/ex2.html");
}

let target2 = document.getElementById("ex2");
target2.addEventListener("click", selectButton2);