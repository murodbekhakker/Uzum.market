(() => {
  var e = function (t) {
    var i;
    window.origin === t.origin &&
      "inject_vercel_feedback_script" === t.data &&
      "2" ===
        (null ===
          (i = document.cookie.split("; ").find(function (e) {
            return e.startsWith("".concat("__vercel_toolbar", "="));
          })) || void 0 === i
          ? void 0
          : i.split("=")[1]) &&
      ((function () {
        if (
          !document.querySelector(
            'script[src$="/_next-live/feedback/feedback.js"]'
          )
        ) {
          var e = document.createElement("script");
          (e.src = "https://vercel.live/_next-live/feedback/feedback.js"),
            (e.async = !0),
            e.setAttribute("data-explicit-opt-in", "true"),
            e.setAttribute("data-cookie-opt-in", "true"),
            document.head.appendChild(e);
        }
      })(),
      window.removeEventListener("message", e));
  };
  window.addEventListener("message", e);
})();
