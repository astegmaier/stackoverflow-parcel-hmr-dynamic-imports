document.getElementById("test1").innerText = "main.js loaded!";

import("./dynamic.js")
  .then(function (stuff) {
    console.log("Dynamic import from main.js SUCCEEDED. Here's the stuff: ", stuff);
    stuff.init();
  })
  .catch((e) => console.log("Dynamic import from main.js FAILED with this error: ", e));

if (module.hot) {
  module.hot.dispose(function (data) {
    // module is about to be replaced.
    // You can save data that should be accessible to the new asset in `data`
    data.updated = Date.now();
    console.log("module.hot.dispose callback invoked! from main.js");
  });

  module.hot.accept(function (getParents) {
    // module or one of its dependencies was just updated.
    // data stored in `dispose` is available in `module.hot.data`
    let { updated } = module.hot.data;
    console.log("module.hot.accept callback invoked! from main.js");
  });
}
