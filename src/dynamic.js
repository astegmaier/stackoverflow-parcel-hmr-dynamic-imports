// The init function won't get re-run with parcel HMR unless we include the module.hot code below.
export function init() {
  document.getElementById("test2").innerText = "Init function run!";
}

// This side-effect should run each time dynamic.js changes in development mode.
document.getElementById("test3").innerText = "dynamic.js side-effect!";

// "module.hot" is injected by parcel in development mode.
// This check will ensure that this code _only_ runs in this context
// (e.g. it won't affect production)
if (module.hot) {
  // The callback provided to "module.hot.accept" will be run whenever
  // parcel sends a new version of `faqs.js` to the browser in development.
  module.hot.accept(() => {
    // Actually run the new version of your init function.
    init();
  });
}
