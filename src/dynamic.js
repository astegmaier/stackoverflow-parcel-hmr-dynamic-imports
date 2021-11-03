export function init() {
  document.getElementById("test2").innerText = "Init function run!";
}

document.getElementById("test3").innerText = "Dynamic.js side-effect!";

if (module.hot) {
  module.hot.dispose(function (data) {
    // module is about to be replaced.
    // You can save data that should be accessible to the new asset in `data`
    data.updated = Date.now();
    console.log("module.hot.dispose callback invoked! from dynamic.js");
  });

  module.hot.accept(function (getParents) {
    // module or one of its dependencies was just updated.
    // data stored in `dispose` is available in `module.hot.data`
    let { updated } = module.hot.data;
    console.log("module.hot.accept callback invoked! from dynamic.js");
  });
}
