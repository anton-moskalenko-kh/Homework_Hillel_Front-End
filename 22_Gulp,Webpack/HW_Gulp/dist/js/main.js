"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function getDataWeather() {
  var weather = fetch('http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19', {
    method: "GET"
  });
  weather.then(function (response) {
    if (response.status === 200) {
      return response.json();
    } else {
      return new Error("Error");
    }
  }).then(function (data) {
    var city = document.querySelector('.js__city').innerHTML = data.name;
    var temp = document.querySelector('.js__temperature').innerHTML = "".concat(Math.round(data.main.temp), "\xBAC");
    var pressure = document.querySelector('.js__pressure').innerHTML = "Pressure: ".concat(data.main.pressure, " hPa");
    var humidity = document.querySelector('.js__humidity').innerHTML = "Humidity: ".concat(data.main.humidity, "%");
    var windSpeed = document.querySelector('.js__wind__speed').innerHTML = "Wind Speed: ".concat(data.wind.speed.toFixed(1), " m/s");
    var windDeg = document.querySelector('.js__wind__deg').innerHTML = "Wind Direction: ".concat(data.wind.deg, " deg");
    var description = document.querySelector('.js__description');
    var image = document.querySelector('.js__img__weather');

    var _iterator = _createForOfIteratorHelper(data.weather),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;
        description.innerHTML = item.description;
        image.src = "http://openweathermap.org/img/w/".concat(item.icon, ".png");
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  });
  var date = new Date().toLocaleDateString();
  var weekday = new Date().toDateString().slice(0, 3);
  document.querySelector('.js__date').innerHTML = "".concat(date, " - ").concat(weekday);
  var time = new Date().toLocaleTimeString().slice(0, -3);
  document.querySelector('.js__time').innerHTML = time;
}

getDataWeather();
document.querySelector('.js__btn__update').addEventListener('click', getDataWeather);