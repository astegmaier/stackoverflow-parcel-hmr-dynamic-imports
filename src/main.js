document.getElementById("test1").innerText = "main.js loaded!";

import("./dynamic.js").then(function (stuff) {
  stuff.init();
});
