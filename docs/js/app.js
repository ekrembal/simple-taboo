/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("56d7");


/***/ }),

/***/ "0114":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_App_vue_vue_type_style_index_0_id_42bda932_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0a58");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_App_vue_vue_type_style_index_0_id_42bda932_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_App_vue_vue_type_style_index_0_id_42bda932_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "0376":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Card_vue_vue_type_style_index_0_id_45c9e92a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("95f9");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Card_vue_vue_type_style_index_0_id_45c9e92a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Card_vue_vue_type_style_index_0_id_45c9e92a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "0a58":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4b65":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bright_logo.png";

/***/ }),

/***/ "56d7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__("cca6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.finally.js
var es_promise_finally = __webpack_require__("a79d");

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm-bundler.js + 3 modules
var vue_runtime_esm_bundler = __webpack_require__("7a23");

// EXTERNAL MODULE: ./src/assets/bright_logo.png
var bright_logo = __webpack_require__("4b65");
var bright_logo_default = /*#__PURE__*/__webpack_require__.n(bright_logo);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/App.vue?vue&type=template&id=42bda932


var _hoisted_1 = {
  class: "container"
};
var _hoisted_2 = {
  class: "row justify-content-center",
  style: {
    "text-align": "center"
  }
};
var _hoisted_3 = {
  class: "progress"
};
var _hoisted_4 = {
  class: "row justify-content-center"
};
var _hoisted_5 = {
  class: "row justify-content-center",
  style: {
    "text-align": "center"
  }
};
var _hoisted_6 = {
  class: "col-md-auto"
};
var _hoisted_7 = {
  class: "row"
};
var _hoisted_8 = {
  class: "col"
};
var _hoisted_9 = {
  class: "col"
};
var _hoisted_10 = {
  class: "col"
};

var _hoisted_11 = /*#__PURE__*/Object(vue_runtime_esm_bundler["g" /* createElementVNode */])("img", {
  class: "footer",
  src: bright_logo_default.a,
  alt: ""
}, null, -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Card = Object(vue_runtime_esm_bundler["o" /* resolveComponent */])("Card");

  return Object(vue_runtime_esm_bundler["k" /* openBlock */])(), Object(vue_runtime_esm_bundler["f" /* createElementBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], null, [Object(vue_runtime_esm_bundler["g" /* createElementVNode */])("div", _hoisted_1, [Object(vue_runtime_esm_bundler["g" /* createElementVNode */])("div", _hoisted_2, [Object(vue_runtime_esm_bundler["g" /* createElementVNode */])("h2", null, "Team: " + Object(vue_runtime_esm_bundler["p" /* toDisplayString */])($data.curTeam + 1), 1), Object(vue_runtime_esm_bundler["g" /* createElementVNode */])("h2", null, " Points: " + Object(vue_runtime_esm_bundler["p" /* toDisplayString */])($data.points), 1)]), Object(vue_runtime_esm_bundler["g" /* createElementVNode */])("div", _hoisted_3, [Object(vue_runtime_esm_bundler["g" /* createElementVNode */])("div", {
    class: "progress-bar",
    role: "progressbar",
    style: Object(vue_runtime_esm_bundler["j" /* normalizeStyle */])({
      width: $options.progressBarPercentage
    }),
    "aria-valuenow": "25",
    "aria-valuemin": "0",
    "aria-valuemax": "100"
  }, null, 4)]), Object(vue_runtime_esm_bundler["g" /* createElementVNode */])("div", _hoisted_4, [Object(vue_runtime_esm_bundler["h" /* createVNode */])(vue_runtime_esm_bundler["b" /* Transition */], {
    name: "bounce"
  }, {
    default: Object(vue_runtime_esm_bundler["q" /* withCtx */])(function () {
      return [$data.isCardVisible ? (Object(vue_runtime_esm_bundler["k" /* openBlock */])(), Object(vue_runtime_esm_bundler["d" /* createBlock */])(_component_Card, {
        key: 0,
        word: $data.card.word,
        restrictedWords: $data.card.restrictedWords
      }, null, 8, ["word", "restrictedWords"])) : Object(vue_runtime_esm_bundler["e" /* createCommentVNode */])("", true)];
    }),
    _: 1
  })]), Object(vue_runtime_esm_bundler["g" /* createElementVNode */])("div", _hoisted_5, [Object(vue_runtime_esm_bundler["g" /* createElementVNode */])("div", _hoisted_6, [Object(vue_runtime_esm_bundler["g" /* createElementVNode */])("div", _hoisted_7, [Object(vue_runtime_esm_bundler["g" /* createElementVNode */])("div", _hoisted_8, [Object(vue_runtime_esm_bundler["g" /* createElementVNode */])("button", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $options.newCard(-1);
    }),
    type: "button",
    class: "btn btn-danger"
  }, "Taboo")]), Object(vue_runtime_esm_bundler["g" /* createElementVNode */])("div", _hoisted_9, [Object(vue_runtime_esm_bundler["g" /* createElementVNode */])("button", {
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.newCard(0);
    }),
    type: "button",
    class: Object(vue_runtime_esm_bundler["i" /* normalizeClass */])(["btn btn-primary", {
      disabled: $data.numSkips >= 3
    }])
  }, "Skip", 2)]), Object(vue_runtime_esm_bundler["g" /* createElementVNode */])("div", _hoisted_10, [Object(vue_runtime_esm_bundler["g" /* createElementVNode */])("button", {
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $options.newCard(1);
    }),
    type: "button",
    class: "btn btn-success"
  }, "Correct")])])])])]), _hoisted_11], 64);
}
// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=42bda932

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/Card.vue?vue&type=template&id=45c9e92a&scoped=true


var Cardvue_type_template_id_45c9e92a_scoped_true_withScopeId = function _withScopeId(n) {
  return Object(vue_runtime_esm_bundler["m" /* pushScopeId */])("data-v-45c9e92a"), n = n(), Object(vue_runtime_esm_bundler["l" /* popScopeId */])(), n;
};

var Cardvue_type_template_id_45c9e92a_scoped_true_hoisted_1 = {
  style: {
    "min-height": "300px"
  },
  class: "col-md-auto"
};
var Cardvue_type_template_id_45c9e92a_scoped_true_hoisted_2 = {
  class: "card"
};
var Cardvue_type_template_id_45c9e92a_scoped_true_hoisted_3 = {
  class: "card-header"
};
var Cardvue_type_template_id_45c9e92a_scoped_true_hoisted_4 = {
  class: "card-body"
};
var Cardvue_type_template_id_45c9e92a_scoped_true_hoisted_5 = {
  class: "list-group list-group-flush"
};
function Cardvue_type_template_id_45c9e92a_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue_runtime_esm_bundler["k" /* openBlock */])(), Object(vue_runtime_esm_bundler["f" /* createElementBlock */])("div", Cardvue_type_template_id_45c9e92a_scoped_true_hoisted_1, [Object(vue_runtime_esm_bundler["g" /* createElementVNode */])("div", Cardvue_type_template_id_45c9e92a_scoped_true_hoisted_2, [Object(vue_runtime_esm_bundler["g" /* createElementVNode */])("div", Cardvue_type_template_id_45c9e92a_scoped_true_hoisted_3, [Object(vue_runtime_esm_bundler["g" /* createElementVNode */])("b", null, Object(vue_runtime_esm_bundler["p" /* toDisplayString */])($props.word), 1)]), Object(vue_runtime_esm_bundler["g" /* createElementVNode */])("div", Cardvue_type_template_id_45c9e92a_scoped_true_hoisted_4, [Object(vue_runtime_esm_bundler["g" /* createElementVNode */])("ul", Cardvue_type_template_id_45c9e92a_scoped_true_hoisted_5, [(Object(vue_runtime_esm_bundler["k" /* openBlock */])(true), Object(vue_runtime_esm_bundler["f" /* createElementBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], null, Object(vue_runtime_esm_bundler["n" /* renderList */])($props.restrictedWords, function (restrictedWord) {
    return Object(vue_runtime_esm_bundler["k" /* openBlock */])(), Object(vue_runtime_esm_bundler["f" /* createElementBlock */])("li", {
      key: restrictedWord,
      class: "list-group-item"
    }, Object(vue_runtime_esm_bundler["p" /* toDisplayString */])(restrictedWord), 1);
  }), 128))])])])]);
}
// CONCATENATED MODULE: ./src/components/Card.vue?vue&type=template&id=45c9e92a&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/Card.vue?vue&type=script&lang=js
/* harmony default export */ var Cardvue_type_script_lang_js = ({
  name: 'Card',
  props: {
    word: String,
    restrictedWords: Array
  }
});
// CONCATENATED MODULE: ./src/components/Card.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/Card.vue?vue&type=style&index=0&id=45c9e92a&scoped=true&lang=css
var Cardvue_type_style_index_0_id_45c9e92a_scoped_true_lang_css = __webpack_require__("0376");

// EXTERNAL MODULE: ./node_modules/vue-loader-v16/dist/exportHelper.js
var exportHelper = __webpack_require__("6b0d");
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/components/Card.vue







const __exports__ = /*#__PURE__*/exportHelper_default()(Cardvue_type_script_lang_js, [['render',Cardvue_type_template_id_45c9e92a_scoped_true_render],['__scopeId',"data-v-45c9e92a"]])

/* harmony default export */ var Card = (__exports__);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/App.vue?vue&type=script&lang=js

/* harmony default export */ var Appvue_type_script_lang_js = ({
  name: 'App',
  components: {
    Card: Card
  },
  data: function data() {
    return {
      points: -1,
      card: null,
      gameCards: [{
        "word": "Accredited Investor",
        "restrictedWords": ["Money", "Wealthy", "Business", "Investor", "Bank"]
      }, {
        "word": "B-to-B",
        "restrictedWords": ["Business", "Digital Marketing", "Small Business", "Email", "Sales"]
      }, {
        "word": "B-to-C",
        "restrictedWords": ["Business to Consumer", "Company", "Selling", "Advertising"]
      }, {
        "word": "Burn Rate",
        "restrictedWords": ["Fire", "Blaze", "Forest", "Rate", "Smoke"]
      }, {
        "word": "Churn Rate",
        "restrictedWords": ["Credit", "Bank", "Mortgage", "Income", "Interest"]
      }, {
        "word": "Disruptive İnnovation",
        "restrictedWords": ["Breakthrough", "Think", "Change", "Product", "Phone"]
      }, {
        "word": "Exit Strategy",
        "restrictedWords": ["Business", "Business Plan", "Strategy", "Exit", "Company"]
      }, {
        "word": "First Mover Advantage",
        "restrictedWords": ["Business", "Company", "Start", "Entrepreneur", "Product"]
      }, {
        "word": "Intellectual Property",
        "restrictedWords": ["Copyright", "Patent", "Trademark", "Intellectual", "Lawyer"]
      }, {
        "word": "Launch",
        "restrictedWords": ["Rocket", "Shuttle", "Blast", "Lift-Off", "Airplane"]
      }, {
        "word": "Lean Startup",
        "restrictedWords": ["Business", "Concept", "Idea", "Building", "Startup"]
      }, {
        "word": "Leverage",
        "restrictedWords": ["Cog", "Machine", "Gear", "Force", "Power"]
      }, {
        "word": "Market Penetration",
        "restrictedWords": ["Strategy", "Business", "Product", "Sales", "Statistics"]
      }, {
        "word": "Monetize Model",
        "restrictedWords": ["Business", "Marketing", "Branding", "Strategy", "Analytics"]
      }, {
        "word": "Minimum Viable Product",
        "restrictedWords": ["Business", "Product", "Idea", "Beta", "Test"]
      }, {
        "word": "Ramen Profitable",
        "restrictedWords": ["Dish", "Noodles", "Microwave", "Packet", "Instant"]
      }, {
        "word": "Responsive Design",
        "restrictedWords": ["Website", "Code", "Responsive", "Mobile", "Open"]
      }, {
        "word": "Return On Investment (ROI)",
        "restrictedWords": ["Profit", "Company", "Profit Margin", "Dollar", "Return"]
      }, {
        "word": "SaaS",
        "restrictedWords": ["Cloud", "Software", "Internet", "Technology", "Program"]
      }, {
        "word": "Traction",
        "restrictedWords": ["Snow", "Ice", "Car", "Slippery", "Skid"]
      }, {
        "word": "Business Valuation",
        "restrictedWords": ["Accountant", "Company", "Defined", "Value", "Stock"]
      }, {
        "word": "Value Proposition",
        "restrictedWords": ["Marketing", "Advertising", "Business", "Customer", "Offer"]
      }, {
        "word": "Crowdfunding",
        "restrictedWords": ["Kickstarter", "GoFundMe", "Pledging", "Donations", "Financial"]
      }, {
        "word": "Term Sheet",
        "restrictedWords": ["Contract", "Financial", "Investing", "Borrowing", "Equity"]
      }, {
        "word": "Break Even Point",
        "restrictedWords": ["Accounting", "Income", "Profit", "Loss", "Expenses"]
      }, {
        "word": "Preferred Stock",
        "restrictedWords": ["Investment", "Company", "Business", "Stockholder", "Shareholder"]
      }, {
        "word": "Dilution",
        "restrictedWords": ["Water", "Solution", "Thin", "Concentration", "Reduce"]
      }, {
        "word": "Acquisitions",
        "restrictedWords": ["Book", "Buy", "Sell", "Trade", "Shopping", "Library"]
      }, {
        "word": "Due Diligence",
        "restrictedWords": ["Law", "Attorney", "Research", "Case", "Case Study"]
      }, {
        "word": "Initial Public Offering (IPO)",
        "restrictedWords": ["Stock", "Stock Market", "Company", "Raise", "Increase"]
      }, {
        "word": "Joint Venture",
        "restrictedWords": ["Partnership", "Business", "Employees", "Company", "Goals"]
      }, {
        "word": "Merger",
        "restrictedWords": ["Company", "Acquire", "Business", "Corporate", "Partnership"]
      }, {
        "word": "Series A-B-C",
        "restrictedWords": ["Smallest-Largest", "Numbers", "Alphabet", "A to Z"]
      }, {
        "word": "Seed Capital",
        "restrictedWords": ["Investment", "Venture", "Money", "Fund", "Business"]
      }, {
        "word": "Venture Capital",
        "restrictedWords": ["Investment", "Business", "Start-Up", "Company", "Venture"]
      }, {
        "word": "Private Equity",
        "restrictedWords": ["Money", "Company", "Investment", "Bank", "Wall Street"]
      }, {
        "word": "Angel investment",
        "restrictedWords": ["Business", "Startup", "Rich", "Rich People", "Sponsor"]
      }],
      curCard: -1,
      isCardVisible: true,
      numSkips: 0,
      countDown: 60,
      maxSeconds: 60,
      curTeam: 0
    };
  },
  methods: {
    getRandomCard: function getRandomCard() {
      this.curCard++;
      return this.gameCards[this.curCard % this.gameCards.length];
    },
    newCard: function newCard(increment) {
      var _this = this;

      // alert(this.progressBarPercentage);
      if (increment == 0) {
        if (this.numSkips >= 3) {
          return;
        }

        this.numSkips++;
      }

      this.points += increment; // alert('newVard');

      this.isCardVisible = false;
      this.card = this.getRandomCard(); // alert(this.card);

      setTimeout(function () {
        _this.isCardVisible = true;
      }, 0);
    },
    countDownTimer: function countDownTimer() {
      var _this2 = this;

      if (this.countDown > 0) {
        setTimeout(function () {
          _this2.countDown -= 1;

          _this2.countDownTimer();
        }, 1000);
      } else {
        this.gameOver();
      }
    },
    gameOver: function gameOver() {
      alert('Next turn, pass to the newx team');
      this.points = -1;
      this.curCard = -1;
      this.numSkips = 0;
      this.countDown = this.maxSeconds;
      this.curTeam = 1 - this.curTeam;
      this.countDownTimer();
      this.newCard(1);
    }
  },
  created: function created() {
    // alert('mounted');
    this.countDown = this.maxSeconds;
    this.countDownTimer();
    this.newCard(1);
  },
  computed: {
    progressBarPercentage: function progressBarPercentage() {
      return this.countDown / this.maxSeconds * 100 + "%";
    }
  }
});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/App.vue?vue&type=style&index=0&id=42bda932&lang=css
var Appvue_type_style_index_0_id_42bda932_lang_css = __webpack_require__("0114");

// CONCATENATED MODULE: ./src/App.vue







const App_exports_ = /*#__PURE__*/exportHelper_default()(Appvue_type_script_lang_js, [['render',render]])

/* harmony default export */ var App = (App_exports_);
// CONCATENATED MODULE: ./src/main.js






Object(vue_runtime_esm_bundler["c" /* createApp */])(App).mount('#app');

/***/ }),

/***/ "95f9":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=app.js.map