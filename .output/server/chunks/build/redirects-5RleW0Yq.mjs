var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var require_redirects_00g = __commonJS({
  "_nuxt/redirects-5RleW0Yq.js"(exports, module) {
    const redirects = [
      { from: "/ki-discus-testing", to: "/ki-discus-operator-protection-test" }
    ];
    module.exports = function(req, res, next) {
      const url = req.url.split("?")[0];
      let urlParams = null;
      if (req.url.includes("?")) {
        urlParams = "?" + req.url.split("?")[1];
      }
      const redirect = redirects.find((r) => r.from === url);
      if (redirect) {
        let newLocation;
        if (urlParams) {
          newLocation = redirect.to + urlParams;
        } else {
          newLocation = redirect.to;
        }
        res.writeHead(301, {
          Location: newLocation
        });
        res.end();
      } else {
        next();
      }
    };
  }
});
const redirects5RleW0Yq = require_redirects_00g();

export { redirects5RleW0Yq as default };
//# sourceMappingURL=redirects-5RleW0Yq.mjs.map
