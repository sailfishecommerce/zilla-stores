function _typeof(e) {
  return (_typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            "function" == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        })(e);
}
/**
 * Bandicoot | Bootstrap E-Commerce Template
 * Copyright 2021 Bandicoot Studio
 * Theme core scripts
 *
 * @author Bandicoot Studio
 * @version 2.3.0
 */
!(function () {
  "use strict";
  var t, r, a, n, o, l, e;
  null != (r = document.querySelector(".navbar-sticky")) &&
    (r.classList,
    (t = r.offsetHeight),
    window.addEventListener("scroll", function (e) {
      500 < e.currentTarget.pageYOffset
        ? ((document.body.style.paddingTop = t + "px"),
          r.classList.add("navbar-stuck"))
        : ((document.body.style.paddingTop = ""),
          r.classList.remove("navbar-stuck"));
    })),
    (e = document.querySelector(".navbar-stuck-toggler")),
    (a = document.querySelector(".navbar-stuck-menu")),
    null != e &&
      e.addEventListener("click", function (e) {
        a.classList.toggle("show"), e.preventDefault();
      }),
    (function () {
      var e,
        t = document.querySelectorAll(".masonry-grid");
      if (null !== t)
        for (var r = 0; r < t.length; r++)
          (e = new Shuffle(t[r], {
            itemSelector: ".masonry-grid-item",
            sizer: ".masonry-grid-item",
          })),
            imagesLoaded(t[r]).on("progress", function () {
              e.layout();
            });
    })(),
    (function () {
      for (
        var r = document.querySelectorAll(".password-toggle"), e = 0;
        e < r.length;
        e++
      )
        !(function (e) {
          var t = r[e].querySelector(".form-control");
          r[e].querySelector(".password-toggle-btn").addEventListener(
            "click",
            function (e) {
              "checkbox" === e.target.type &&
                (e.target.checked ? (t.type = "text") : (t.type = "password"));
            },
            !1
          );
        })(e);
    })(),
    (function () {
      for (
        var t = document.querySelectorAll(".file-drop-area"), e = 0;
        e < t.length;
        e++
      )
        !(function (e) {
          var a = t[e].querySelector(".file-drop-input"),
            n = t[e].querySelector(".file-drop-message"),
            o = t[e].querySelector(".file-drop-icon");
          t[e]
            .querySelector(".file-drop-btn")
            .addEventListener("click", function () {
              a.click();
            }),
            a.addEventListener("change", function () {
              var e;
              a.files &&
                a.files[0] &&
                (((e = new FileReader()).onload = function (e) {
                  var t,
                    e = e.target.result,
                    r = a.files[0].name;
                  (n.innerHTML = r),
                    e.startsWith("data:image")
                      ? (((t = new Image()).src = e),
                        (t.onload = function () {
                          (o.className =
                            "file-drop-preview img-thumbnail rounded"),
                            (o.innerHTML =
                              '<img src="' + t.src + '" alt="' + r + '">');
                        }))
                      : e.startsWith("data:video")
                      ? ((o.innerHTML = ""),
                        (o.className = ""),
                        (o.className = "file-drop-icon ci-video"))
                      : ((o.innerHTML = ""),
                        (o.className = ""),
                        (o.className = "file-drop-icon ci-document"));
                }),
                e.readAsDataURL(a.files[0]));
            });
        })(e);
    })(),
    window.addEventListener(
      "load",
      function () {
        var e = document.getElementsByClassName("needs-validation");
        Array.prototype.filter.call(e, function (t) {
          t.addEventListener(
            "submit",
            function (e) {
              !1 === t.checkValidity() &&
                (e.preventDefault(), e.stopPropagation()),
                t.classList.add("was-validated");
            },
            !1
          );
        });
      },
      !1
    ),
    new SmoothScroll("[data-scroll]", {
      speed: 800,
      speedAsDuration: !0,
      offset: 40,
      header: "[data-scroll-header]",
      updateURL: !1,
    }),
    null != (o = document.querySelector(".btn-scroll-top")) &&
      ((n = parseInt(600, 10)),
      window.addEventListener("scroll", function (e) {
        e.currentTarget.pageYOffset > n
          ? o.classList.add("show")
          : o.classList.remove("show");
      })),
    [].slice
      .call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
      .map(function (e) {
        return new bootstrap.Tooltip(e, { trigger: "hover" });
      }),
    [].slice
      .call(document.querySelectorAll('[data-bs-toggle="popover"]'))
      .map(function (e) {
        return new bootstrap.Popover(e);
      }),
    [].slice.call(document.querySelectorAll(".toast")).map(function (e) {
      return new bootstrap.Toast(e);
    }),
    (function () {
      for (
        var e = document.querySelectorAll(".disable-autohide .form-select"),
          t = 0;
        t < e.length;
        t++
      )
        e[t].addEventListener("click", function (e) {
          e.stopPropagation();
        });
    })(),
    (function (e, t, r) {
      for (var a = 0; a < e.length; a++) t.call(r, a, e[a]);
    })(
      document.querySelectorAll(".tns-carousel .tns-carousel-inner"),
      function (e, t) {
        var r = {
          container: t,
          controlsText: [
            '<i className="ci-arrow-left"></i>',
            '<i className="ci-arrow-right"></i>',
          ],
          navPosition: "bottom",
          mouseDrag: !0,
          speed: 500,
          autoplayHoverPause: !0,
          autoplayButtonOutput: !1,
        };
        null != t.dataset.carouselOptions &&
          (a = JSON.parse(t.dataset.carouselOptions));
        var a = Object.assign({}, r, a);
        tns(a);
      }
    ),
    (function () {
      var e = document.querySelectorAll(".gallery");
      if (e.length)
        for (var t = 0; t < e.length; t++)
          lightGallery(e[t], {
            selector: ".gallery-item",
            download: !1,
            videojs: !0,
            youtubePlayerParams: {
              modestbranding: 1,
              showinfo: 0,
              rel: 0,
            },
            vimeoPlayerParams: {
              byline: 0,
              portrait: 0,
              color: "fe696a",
            },
          });
    })(),
    (function () {
      var s = document.querySelectorAll(".product-gallery");
      if (s.length)
        for (var e = 0; e < s.length; e++)
          !(function (r) {
            for (
              var a = s[r].querySelectorAll(
                  ".product-gallery-thumblist-item:not(.video-item)"
                ),
                n = s[r].querySelectorAll(".product-gallery-preview-item"),
                e = s[r].querySelectorAll(
                  ".product-gallery-thumblist-item.video-item"
                ),
                t = 0;
              t < a.length;
              t++
            )
              a[t].addEventListener("click", o);
            function o(e) {
              e.preventDefault();
              for (var t = 0; t < a.length; t++)
                n[t].classList.remove("active"),
                  a[t].classList.remove("active");
              this.classList.add("active"),
                s[r]
                  .querySelector(this.getAttribute("href"))
                  .classList.add("active");
            }
            for (var l = 0; l < e.length; l++)
              lightGallery(e[l], {
                selector: "this",
                download: !1,
                videojs: !0,
                youtubePlayerParams: {
                  modestbranding: 1,
                  showinfo: 0,
                  rel: 0,
                  controls: 0,
                },
                vimeoPlayerParams: {
                  byline: 0,
                  portrait: 0,
                  color: "fe696a",
                },
              });
          })(e);
    })(),
    (function () {
      for (
        var e = document.querySelectorAll(".image-zoom"), t = 0;
        t < e.length;
        t++
      )
        new Drift(e[t], {
          paneContainer: e[t].parentElement.querySelector(".image-zoom-pane"),
        });
    })(),
    (function () {
      var d = document.querySelectorAll(".countdown");
      if (null != d)
        for (var e = 0; e < d.length; e++) {
          var t = (function (e) {
            var t,
              r,
              a,
              n,
              o = d[e].dataset.countdown,
              l = d[e].querySelector(".countdown-days .countdown-value"),
              s = d[e].querySelector(".countdown-hours .countdown-value"),
              c = d[e].querySelector(".countdown-minutes .countdown-value"),
              i = d[e].querySelector(".countdown-seconds .countdown-value"),
              o = new Date(o).getTime();
            if (isNaN(o)) return { v: void 0 };
            setInterval(function () {
              var e = new Date().getTime(),
                e = parseInt((o - e) / 1e3);
              0 <= e &&
                ((t = parseInt(e / 86400)),
                (e %= 86400),
                (r = parseInt(e / 3600)),
                (e %= 3600),
                (a = parseInt(e / 60)),
                (e %= 60),
                (n = parseInt(e)),
                null != l && (l.innerHTML = parseInt(t, 10)),
                null != s && (s.innerHTML = r < 10 ? "0" + r : r),
                null != c && (c.innerHTML = a < 10 ? "0" + a : a),
                null != i && (i.innerHTML = n < 10 ? "0" + n : n));
            }, 1e3);
          })(e);
          if ("object" === _typeof(t)) return t.v;
        }
    })(),
    (function () {
      function o(e, t) {
        return e + t;
      }
      var e = document.querySelectorAll("[data-line-chart]"),
        t = document.querySelectorAll("[data-bar-chart]"),
        l = document.querySelectorAll("[data-pie-chart]");
      if (0 !== e.length || 0 !== t.length || 0 !== l.length) {
        var s,
          r = document.head || document.getElementsByTagName("head")[0],
          c = document.createElement("style");
        r.appendChild(c);
        for (var a = 0; a < e.length; a++) {
          var n,
            i = JSON.parse(e[a].dataset.lineChart),
            d =
              null != e[a].dataset.options
                ? JSON.parse(e[a].dataset.options)
                : "",
            u = e[a].dataset.seriesColor;
          if ((e[a].classList.add("line-chart-" + a), null != u)) {
            n = JSON.parse(u);
            for (var f = 0; f < n.colors.length; f++)
              (s = "\n          .line-chart-"
                .concat(a, " .ct-series:nth-child(")
                .concat(f + 1, ") .ct-line,\n          .line-chart-")
                .concat(a, " .ct-series:nth-child(")
                .concat(f + 1, ") .ct-point {\n            stroke: ")
                .concat(n.colors[f], " !important;\n          }\n        ")),
                c.appendChild(document.createTextNode(s));
          }
          new Chartist.Line(e[a], i, d);
        }
        for (var m = 0; m < t.length; m++) {
          var v,
            p = JSON.parse(t[m].dataset.barChart),
            g =
              null != t[m].dataset.options
                ? JSON.parse(t[m].dataset.options)
                : "",
            h = t[m].dataset.seriesColor;
          if ((t[m].classList.add("bar-chart-" + m), null != h)) {
            v = JSON.parse(h);
            for (var y = 0; y < v.colors.length; y++)
              (s = "\n        .bar-chart-"
                .concat(m, " .ct-series:nth-child(")
                .concat(y + 1, ") .ct-bar {\n            stroke: ")
                .concat(v.colors[y], " !important;\n          }\n        ")),
                c.appendChild(document.createTextNode(s));
          }
          new Chartist.Bar(t[m], p, g);
        }
        for (var S = 0; S < l.length; S++)
          !(function (e) {
            var t,
              r = JSON.parse(l[e].dataset.pieChart),
              a = l[e].dataset.seriesColor;
            if ((l[e].classList.add("cz-pie-chart-" + e), null != a)) {
              t = JSON.parse(a);
              for (var n = 0; n < t.colors.length; n++)
                (s = "\n        .cz-pie-chart-"
                  .concat(e, " .ct-series:nth-child(")
                  .concat(n + 1, ") .ct-slice-pie {\n            fill: ")
                  .concat(t.colors[n], " !important;\n          }\n        ")),
                  c.appendChild(document.createTextNode(s));
            }
            new Chartist.Pie(l[e], r, {
              labelInterpolationFnc: function (e) {
                return Math.round((e / r.series.reduce(o)) * 100) + "%";
              },
            });
          })(S);
      }
    })(),
    (function () {
      var e = document.querySelectorAll('[data-bs-toggle="video"]');
      if (e.length)
        for (var t = 0; t < e.length; t++)
          lightGallery(e[t], {
            selector: "this",
            download: !1,
            videojs: !0,
            youtubePlayerParams: {
              modestbranding: 1,
              showinfo: 0,
              rel: 0,
            },
            vimeoPlayerParams: {
              byline: 0,
              portrait: 0,
              color: "fe696a",
            },
          });
    })(),
    (function () {
      var l = document.querySelectorAll(".subscription-form");
      if (null !== l) {
        for (var e = 0; e < l.length; e++)
          !(function (e) {
            var t = l[e].querySelector('button[type="submit"]'),
              r = t.innerHTML,
              a = l[e].querySelector(".form-control"),
              n = l[e].querySelector(".subscription-form-antispam"),
              o = l[e].querySelector(".subscription-status");
            l[e].addEventListener("submit", function (e) {
              e && e.preventDefault(), "" === n.value && s(this, t, a, r, o);
            });
          })(e);
        var s = function (e, t, r, a, n) {
          t.innerHTML = "Sending...";
          var o = e.action.replace("/post?", "/post-json?"),
            e = "&" + r.name + "=" + encodeURIComponent(r.value),
            l = document.createElement("script");
          (l.src = o + "&c=callback" + e), document.body.appendChild(l);
          var s = "callback";
          window[s] = function (e) {
            delete window[s],
              document.body.removeChild(l),
              (t.innerHTML = a),
              "success" == e.result
                ? (r.classList.remove("is-invalid"),
                  r.classList.add("is-valid"),
                  n.classList.remove("status-error"),
                  n.classList.add("status-success"),
                  (n.innerHTML = e.msg),
                  setTimeout(function () {
                    r.classList.remove("is-valid"),
                      (n.innerHTML = ""),
                      n.classList.remove("status-success");
                  }, 6e3))
                : (r.classList.remove("is-valid"),
                  r.classList.add("is-invalid"),
                  n.classList.remove("status-success"),
                  n.classList.add("status-error"),
                  (n.innerHTML = e.msg.substring(4)),
                  setTimeout(function () {
                    r.classList.remove("is-invalid"),
                      (n.innerHTML = ""),
                      n.classList.remove("status-error");
                  }, 6e3));
          };
        };
      }
    })(),
    (function () {
      for (
        var n = document.querySelectorAll(".range-slider"), e = 0;
        e < n.length;
        e++
      )
        !(function (e) {
          var t = n[e].querySelector(".range-slider-ui"),
            r = n[e].querySelector(".range-slider-value-min"),
            a = n[e].querySelector(".range-slider-value-max"),
            e = {
              dataStartMin: parseInt(n[e].dataset.startMin, 10),
              dataStartMax: parseInt(n[e].dataset.startMax, 10),
              dataMin: parseInt(n[e].dataset.min, 10),
              dataMax: parseInt(n[e].dataset.max, 10),
              dataStep: parseInt(n[e].dataset.step, 10),
            };
          noUiSlider.create(t, {
            start: [e.dataStartMin, e.dataStartMax],
            connect: !0,
            step: e.dataStep,
            pips: { mode: "count", values: 5 },
            tooltips: !0,
            range: { min: e.dataMin, max: e.dataMax },
            format: {
              to: function (e) {
                return "$" + parseInt(e, 10);
              },
              from: function (e) {
                return Number(e);
              },
            },
          }),
            t.noUiSlider.on("update", function (e, t) {
              e = (e = e[t]).replace(/\D/g, "");
              t ? (a.value = Math.round(e)) : (r.value = Math.round(e));
            }),
            r.addEventListener("change", function () {
              t.noUiSlider.set([this.value, null]);
            }),
            a.addEventListener("change", function () {
              t.noUiSlider.set([null, this.value]);
            });
        })(e);
    })(),
    (function () {
      for (
        var t = document.querySelectorAll(".widget-filter"), e = 0;
        e < t.length;
        e++
      )
        (function (e) {
          var r = t[e].querySelector(".widget-filter-search"),
            a = t[e]
              .querySelector(".widget-filter-list")
              .querySelectorAll(".widget-filter-item");
          if (!r) return;
          r.addEventListener("keyup", function () {
            for (var e = r.value.toLowerCase(), t = 0; t < a.length; t++)
              -1 <
              a[t]
                .querySelector(".widget-filter-item-text")
                .innerHTML.toLowerCase()
                .indexOf(e)
                ? a[t].classList.remove("d-none")
                : a[t].classList.add("d-none");
          });
        })(e);
    })(),
    (e = document.querySelector("[data-filter-trigger]")),
    (l = document.querySelectorAll("[data-filter-target]")),
    null !== e &&
      e.addEventListener("change", function () {
        var e = this.options[this.selectedIndex].value.toLowerCase();
        if ("all" === e)
          for (var t = 0; t < l.length; t++) l[t].classList.remove("d-none");
        else {
          for (var r = 0; r < l.length; r++) l[r].classList.add("d-none");
          document.querySelector("#" + e).classList.remove("d-none");
        }
      }),
    (function () {
      for (
        var e = document.querySelectorAll("[data-bs-label]"), t = 0;
        t < e.length;
        t++
      )
        e[t].addEventListener("change", function () {
          var e = this.dataset.bsLabel;
          try {
            document.getElementById(e).textContent = this.value;
          } catch (e) {
            (e.message = "Cannot set property 'textContent' of null"),
              console.error(
                "Make sure the [data-label] matches with the id of the target element you want to change text of!"
              );
          }
        });
    })(),
    (function () {
      for (
        var e = document.querySelectorAll('[data-bs-toggle="radioTab"]'), t = 0;
        t < e.length;
        t++
      )
        e[t].addEventListener("click", function () {
          var e = this.dataset.bsTarget;
          document
            .querySelector(this.dataset.bsParent)
            .querySelectorAll(".radio-tab-pane")
            .forEach(function (e) {
              e.classList.remove("active");
            }),
            document.querySelector(e).classList.add("active");
        });
    })(),
    null !== (e = document.querySelector(".credit-card-form")) &&
      new Card({ form: e, container: ".credit-card-wrapper" }),
    (function () {
      var e = document.querySelectorAll("[data-master-checkbox-for]");
      if (0 !== e.length)
        for (var t = 0; t < e.length; t++)
          e[t].addEventListener("change", function () {
            var e = document
              .querySelector(this.dataset.masterCheckboxFor)
              .querySelectorAll('input[type="checkbox"]');
            if (this.checked)
              for (var t = 0; t < e.length; t++)
                (e[t].checked = !0),
                  e[t].dataset.checkboxToggleClass &&
                    document
                      .querySelector(e[t].dataset.target)
                      .classList.add(e[t].dataset.checkboxToggleClass);
            else
              for (var r = 0; r < e.length; r++)
                (e[r].checked = !1),
                  e[r].dataset.checkboxToggleClass &&
                    document
                      .querySelector(e[r].dataset.target)
                      .classList.remove(e[r].dataset.checkboxToggleClass);
          });
    })();
})();
