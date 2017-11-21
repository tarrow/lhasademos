webpackJsonp([1],{

/***/ "6V9n":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "8DN6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/WikidataDisease.vue
var WikidataDisease = __webpack_require__("AIwh");
var WikidataDisease_default = /*#__PURE__*/__webpack_require__.n(WikidataDisease);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6fa5df20","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/WikidataDisease.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.disease),expression:"disease"}],attrs:{"id":"Wikidata"}},[_vm._v("\n  Disease "+_vm._s(_vm.disease)+" causes "+_vm._s(_vm.numberofdeaths)+" deaths each year\n")])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_WikidataDisease = (esExports);
// CONCATENATED MODULE: ./src/components/WikidataDisease.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  WikidataDisease_default.a,
  components_WikidataDisease,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_WikidataDisease = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "9rLS":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ABj6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Table.vue
var Table = __webpack_require__("sYoA");
var Table_default = /*#__PURE__*/__webpack_require__.n(Table);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-03abcacc","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Table.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"datatable"}},[_c('h1',[_vm._v("ContentMine DataTables")]),_vm._v(" "),_c('v-client-table',{attrs:{"data":_vm.tableData,"columns":_vm.columns,"options":_vm.options}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_Table = (esExports);
// CONCATENATED MODULE: ./src/components/Table.vue
function injectStyle (ssrContext) {
  __webpack_require__("NlLq")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-03abcacc"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  Table_default.a,
  components_Table,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_Table = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "AIwh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wikidataSdk = __webpack_require__("wztF");

var _wikidataSdk2 = _interopRequireDefault(_wikidataSdk);

var _axios = __webpack_require__("mtWM");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {
      disease: '',
      numberofdeaths: ''
    };
  },

  props: ['data', 'index'],
  mounted: function mounted() {
    this.getContentFromWD(this.data.Disease);
  },

  methods: {
    getContentFromWD: function getContentFromWD(wid) {
      var me = this;
      var url = _wikidataSdk2.default.getEntities(wid);
      _axios2.default.get(url).then(function (resp) {
        console.log(resp);
        me.disease = resp.data.entities[wid].labels.en.value;
        console.log(resp.data.entities[wid].claims.P1120[0].mainsnak.datavalue.value);
        me.numberofdeaths = parseInt(resp.data.entities[wid].claims.P1120[0].mainsnak.datavalue.value.amount);
      });
    }
  }
};

/***/ }),

/***/ "BBVn":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _values = __webpack_require__("gRE1");

var _values2 = _interopRequireDefault(_values);

var _keys = __webpack_require__("fZjL");

var _keys2 = _interopRequireDefault(_keys);

var _vueChartjs = __webpack_require__("UlOv");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  extends: _vueChartjs.HorizontalBar,
  mounted: function mounted() {
    // Overwriting base render method with actual data.
    var dataToRender = this.data['Species Binomial'];
    this.renderChart({
      labels: (0, _keys2.default)(dataToRender),
      datasets: [{
        backgroundColor: '#f87979',
        data: (0, _values2.default)(dataToRender)
      }]
    }, {
      scales: {
        xAxes: [{
          display: false,
          ticks: {
            beginAtZero: true
          }
        }]
      },
      legend: {
        display: false
      },
      maintainAspectRatio: false,
      responsive: false
    });
  },

  props: ['data', 'index', 'height', 'width']
}; //

/***/ }),

/***/ "ETqE":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "J9Go":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__("fZjL");

var _keys2 = _interopRequireDefault(_keys);

var _vueWordcloud = __webpack_require__("6zY2");

var _vueWordcloud2 = _interopRequireDefault(_vueWordcloud);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'wordfreqcloud',
  components: {
    wordcloud: _vueWordcloud2.default
  },
  data: function data() {
    return {
      Words: []
    };
  },
  mounted: function mounted() {
    console.log(this.data);
    this.Words = this.BuildWords();
  },

  methods: {
    BuildWords: function BuildWords() {
      var me = this;
      return (0, _keys2.default)(me.data['Word Frequencies']).map(function (key) {
        return { name: key, value: me.data['Word Frequencies'][key] };
      });
    }
  },
  props: ['data', 'index']
}; //
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ "Jmt5":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "M93x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/App.vue
var App = __webpack_require__("xJD8");
var App_default = /*#__PURE__*/__webpack_require__.n(App);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-09928f92","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/App.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_App = (esExports);
// CONCATENATED MODULE: ./src/App.vue
function injectStyle (ssrContext) {
  __webpack_require__("9rLS")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  App_default.a,
  selectortype_template_index_0_src_App,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_App = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "NHnr":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__("7+uW");

var _vue2 = _interopRequireDefault(_vue);

var _App = __webpack_require__("M93x");

var _App2 = _interopRequireDefault(_App);

var _router = __webpack_require__("YaEn");

var _router2 = _interopRequireDefault(_router);

var _vueTables = __webpack_require__("e9ss");

var _vueChartjs = __webpack_require__("UlOv");

var _vueChartjs2 = _interopRequireDefault(_vueChartjs);

var _bootstrapVue = __webpack_require__("sCSS");

var _bootstrapVue2 = _interopRequireDefault(_bootstrapVue);

__webpack_require__("Jmt5");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueTables.ClientTable); // The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

_vue2.default.use(_bootstrapVue2.default);
_vue2.default.use(_vueChartjs2.default);

_vue2.default.config.productionTip = false;

/* eslint-disable no-new */
new _vue2.default({
  el: '#app',
  router: _router2.default,
  template: '<App/>',
  components: { App: _App2.default }
});

/***/ }),

/***/ "NlLq":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "TYdW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/WordCloud.vue
var WordCloud = __webpack_require__("J9Go");
var WordCloud_default = /*#__PURE__*/__webpack_require__.n(WordCloud);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1bffba6a","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/WordCloud.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"wordfreqcloud"}},[_c('wordcloud',{attrs:{"data":_vm.Words,"nameKey":"name","valueKey":"value"}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_WordCloud = (esExports);
// CONCATENATED MODULE: ./src/components/WordCloud.vue
function injectStyle (ssrContext) {
  __webpack_require__("ETqE")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1bffba6a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  WordCloud_default.a,
  components_WordCloud,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_WordCloud = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "YaEn":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__("7+uW");

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = __webpack_require__("/ocq");

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _Table = __webpack_require__("ABj6");

var _Table2 = _interopRequireDefault(_Table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

exports.default = new _vueRouter2.default({
  routes: [{
    path: '/',
    name: 'Table',
    component: _Table2.default
  }]
});

/***/ }),

/***/ "ll94":
/***/ (function(module, exports) {

module.exports = {"_from":"vue-chartjs","_id":"vue-chartjs@3.0.2","_inBundle":false,"_integrity":"sha512-m6ItjL8o3ff4JpbF083RzZ4KPiNBFsqMKmWCcAtlisOdm1vvB/9mUDJePmxYKJkvl2AcpvLPiH1cUrhq46r8vA==","_location":"/vue-chartjs","_phantomChildren":{},"_requested":{"type":"tag","registry":true,"raw":"vue-chartjs","name":"vue-chartjs","escapedName":"vue-chartjs","rawSpec":"","saveSpec":null,"fetchSpec":"latest"},"_requiredBy":["#USER","/"],"_resolved":"https://registry.npmjs.org/vue-chartjs/-/vue-chartjs-3.0.2.tgz","_shasum":"960d0ba9c2f3720b85ff02417707adc02f953de9","_spec":"vue-chartjs","_where":"/home/tom/src/contentmine/lhasademos/newdt","author":{"name":"Jakub Juszczak","email":"jakub@posteo.de"},"browserify":{"transform":["babelify"]},"bugs":{"url":"https://github.com/apertureless/vue-chartjs/issues"},"bundleDependencies":false,"contributors":[{"name":"Thorsten Lünborg","url":"https://github.com/LinusBorg"},{"name":"Juan Carlos Alonso","url":"https://github.com/jcalonso"}],"dependencies":{"lodash.merge":"^4.6.0"},"deprecated":false,"description":"Vue.js wrapper for chart.js for creating beautiful charts.","devDependencies":{"@babel/cli":"^7.0.0-beta.31","@babel/core":"^7.0.0-beta.31","@babel/preset-env":"^7.0.0-beta.31","@babel/preset-stage-2":"^7.0.0-beta.31","babel-loader":"8.0.0-beta.0","chai":"^3.5.0","chart.js":"2.7.0","chromedriver":"^2.28.0","connect-history-api-fallback":"^1.1.0","cross-env":"^3.2.4","cross-spawn":"^5.1.0","css-loader":"^0.28.0","eslint":"^3.19.0","eslint-config-standard":"^10.2.1","eslint-friendly-formatter":"^2.0.7","eslint-loader":"^1.7.1","eslint-plugin-html":"^2.0.1","eslint-plugin-import":"^2.2.0","eslint-plugin-node":"^4.2.2","eslint-plugin-promise":"^3.5.0","eslint-plugin-standard":"^3.0.1","eventsource-polyfill":"^0.9.6","express":"^4.15.2","extract-text-webpack-plugin":"^3.0.1","file-loader":"^0.10.1","friendly-errors-webpack-plugin":"^1.6.1","function-bind":"^1.0.2","html-webpack-plugin":"^2.28.0","http-proxy-middleware":"^0.17.4","inject-loader":"^3.0.0","isparta":"^4.0.0","jasmine-core":"^2.5.2","json-loader":"^0.5.4","karma":"^1.5.0","karma-coverage":"^1.1.1","karma-jasmine":"^1.0.2","karma-mocha":"^1.2.0","karma-phantomjs-launcher":"^1.0.4","karma-phantomjs-shim":"^1.4.0","karma-sinon-chai":"^1.2.0","karma-sourcemap-loader":"^0.3.7","karma-spec-reporter":"0.0.30","karma-webpack":"2","lolex":"^1.6.0","mocha":"^3.1.0","nightwatch":"^0.9.14","opn":"^5.1.0","ora":"^1.2.0","phantomjs-prebuilt":"^2.1.13","portfinder":"^1.0.13","selenium-server":"^3.3.1","shelljs":"^0.7.7","sinon":"^2.1.0","sinon-chai":"^2.9.0","url-loader":"^0.5.8","vue":"2.5.2","vue-hot-reload-api":"2.1.0","vue-html-loader":"^1.2.4","vue-loader":"^13.3.0","vue-style-loader":"3.0.1","vue-template-compiler":"2.5.2","webpack":"^3.7.1","webpack-dev-middleware":"^1.10.1","webpack-hot-middleware":"^2.17.1","webpack-merge":"^4.1.0"},"engines":{"node":">=6.9.0","npm":">= 3.0.0"},"files":["src","dist","es"],"greenkeeper":{"ignore":["extract-text-webpack-plugin","karma-webpack","webpack","webpack-merge"]},"homepage":"http://vue-chartjs.org","jsnext:main":"es/index.js","keywords":["ChartJs","Vue","Visualisation","Wrapper","Charts"],"license":"MIT","main":"dist/vue-chartjs.js","maintainers":[{"name":"Jakub Juszczak","email":"jakub@posteo.de","url":"http://www.jakubjuszczak.de"}],"module":"es/index.js","name":"vue-chartjs","peerDependencies":{"chart.js":"2.7.x"},"repository":{"type":"git","url":"git+ssh://git@github.com/apertureless/vue-chartjs.git"},"scripts":{"build":"yarn run release && yarn run build:es","build:es":"cross-env BABEL_ENV=es babel src --out-dir es","dev":"node build/dev-server.js","e2e":"node test/e2e/runner.js","lint":"eslint --ext .js,.vue src test/unit/specs test/e2e/specs","prepublishOnly":"yarn run lint && yarn run test && yarn run build","release":"webpack --progress --hide-modules --config  ./build/webpack.release.js && NODE_ENV=production webpack --progress --hide-modules --config  ./build/webpack.release.min.js","test":"npm run unit","unit":"karma start test/unit/karma.conf.js --single-run"},"unpkg":"dist/vue-chartjs.min.js","version":"3.0.2"}

/***/ }),

/***/ "prU4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FreqHorizBar_vue__ = __webpack_require__("BBVn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FreqHorizBar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FreqHorizBar_vue__);
function injectStyle (ssrContext) {
  __webpack_require__("6V9n")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */
var __vue_template__ = null
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-be848812"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FreqHorizBar_vue___default.a,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "sYoA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _FreqHorizBar = __webpack_require__("prU4");

var _FreqHorizBar2 = _interopRequireDefault(_FreqHorizBar);

var _WordCloud = __webpack_require__("TYdW");

var _WordCloud2 = _interopRequireDefault(_WordCloud);

var _WikidataDisease = __webpack_require__("8DN6");

var _WikidataDisease2 = _interopRequireDefault(_WikidataDisease);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      columns: ['Paper ID', 'Human Genes', 'Species Binomial', 'Species Genus', 'Word Frequencies', 'Disease'],
      rawData: [{
        'Paper ID': 'PMC4683095',
        'Human Genes': "",
        "Species Binomial": { "Plasmodium falciparum": 6 },
        'Word Frequencies': {
          'falciparum': 21,
          'vivax': 39,
          'severe': 35,
          'Sabah': 28,
          'Plasmodium': 47
        },
        'Disease': 'Q12156'
      }, {
        'Paper ID': 'PMC4696710',
        'Human Genes': '',
        "Species Binomial": {
          "Plasmodium knowlesi": 102,
          "Plasmodium vivax": 24,
          "Plasmodium malariae": 24,
          "Plasmodium falciparum": 20,
          "Klebsiella pneumoniae": 1
        },
        'Word Frequencies': {
          'falciparum': 21,
          'vivax': 39,
          'severe': 35,
          'Sabah': 28,
          'Plasmodium': 47
        }
      }],
      tableData: [],
      options: {
        templates: {
          'Species Binomial': _FreqHorizBar2.default,
          'Word Frequencies': _WordCloud2.default,
          'Disease': _WikidataDisease2.default
        }
      }
    };
  },

  created: function created() {
    this.mungeTableData();
  },
  methods: {
    mungeTableData: function mungeTableData() {
      this.tableData = this.rawData.map(function (x) {
        return {
          'Paper ID': x['Paper ID'],
          'Human Genes': x['Human Genes'],
          'Species Binomial': x['Species Binomial'],
          'Word Frequencies': x['Word Frequencies'],
          'Disease': x.Disease
        };
      });
    }
  }
}; //
//
//
//
//
//
//

/***/ }),

/***/ "uslO":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "3CJN",
	"./af.js": "3CJN",
	"./ar": "3MVc",
	"./ar-dz": "tkWw",
	"./ar-dz.js": "tkWw",
	"./ar-kw": "j8cJ",
	"./ar-kw.js": "j8cJ",
	"./ar-ly": "wPpW",
	"./ar-ly.js": "wPpW",
	"./ar-ma": "dURR",
	"./ar-ma.js": "dURR",
	"./ar-sa": "7OnE",
	"./ar-sa.js": "7OnE",
	"./ar-tn": "BEem",
	"./ar-tn.js": "BEem",
	"./ar.js": "3MVc",
	"./az": "eHwN",
	"./az.js": "eHwN",
	"./be": "3hfc",
	"./be.js": "3hfc",
	"./bg": "lOED",
	"./bg.js": "lOED",
	"./bn": "aM0x",
	"./bn.js": "aM0x",
	"./bo": "w2Hs",
	"./bo.js": "w2Hs",
	"./br": "OSsP",
	"./br.js": "OSsP",
	"./bs": "aqvp",
	"./bs.js": "aqvp",
	"./ca": "wIgY",
	"./ca.js": "wIgY",
	"./cs": "ssxj",
	"./cs.js": "ssxj",
	"./cv": "N3vo",
	"./cv.js": "N3vo",
	"./cy": "ZFGz",
	"./cy.js": "ZFGz",
	"./da": "YBA/",
	"./da.js": "YBA/",
	"./de": "DOkx",
	"./de-at": "8v14",
	"./de-at.js": "8v14",
	"./de-ch": "Frex",
	"./de-ch.js": "Frex",
	"./de.js": "DOkx",
	"./dv": "rIuo",
	"./dv.js": "rIuo",
	"./el": "CFqe",
	"./el.js": "CFqe",
	"./en-au": "Sjoy",
	"./en-au.js": "Sjoy",
	"./en-ca": "Tqun",
	"./en-ca.js": "Tqun",
	"./en-gb": "hPuz",
	"./en-gb.js": "hPuz",
	"./en-ie": "ALEw",
	"./en-ie.js": "ALEw",
	"./en-nz": "dyB6",
	"./en-nz.js": "dyB6",
	"./eo": "Nd3h",
	"./eo.js": "Nd3h",
	"./es": "LT9G",
	"./es-do": "7MHZ",
	"./es-do.js": "7MHZ",
	"./es.js": "LT9G",
	"./et": "XlWM",
	"./et.js": "XlWM",
	"./eu": "sqLM",
	"./eu.js": "sqLM",
	"./fa": "2pmY",
	"./fa.js": "2pmY",
	"./fi": "nS2h",
	"./fi.js": "nS2h",
	"./fo": "OVPi",
	"./fo.js": "OVPi",
	"./fr": "tzHd",
	"./fr-ca": "bXQP",
	"./fr-ca.js": "bXQP",
	"./fr-ch": "VK9h",
	"./fr-ch.js": "VK9h",
	"./fr.js": "tzHd",
	"./fy": "g7KF",
	"./fy.js": "g7KF",
	"./gd": "nLOz",
	"./gd.js": "nLOz",
	"./gl": "FuaP",
	"./gl.js": "FuaP",
	"./gom-latn": "+27R",
	"./gom-latn.js": "+27R",
	"./he": "Nzt2",
	"./he.js": "Nzt2",
	"./hi": "ETHv",
	"./hi.js": "ETHv",
	"./hr": "V4qH",
	"./hr.js": "V4qH",
	"./hu": "xne+",
	"./hu.js": "xne+",
	"./hy-am": "GrS7",
	"./hy-am.js": "GrS7",
	"./id": "yRTJ",
	"./id.js": "yRTJ",
	"./is": "upln",
	"./is.js": "upln",
	"./it": "FKXc",
	"./it.js": "FKXc",
	"./ja": "ORgI",
	"./ja.js": "ORgI",
	"./jv": "JwiF",
	"./jv.js": "JwiF",
	"./ka": "RnJI",
	"./ka.js": "RnJI",
	"./kk": "j+vx",
	"./kk.js": "j+vx",
	"./km": "5j66",
	"./km.js": "5j66",
	"./kn": "gEQe",
	"./kn.js": "gEQe",
	"./ko": "eBB/",
	"./ko.js": "eBB/",
	"./ky": "6cf8",
	"./ky.js": "6cf8",
	"./lb": "z3hR",
	"./lb.js": "z3hR",
	"./lo": "nE8X",
	"./lo.js": "nE8X",
	"./lt": "/6P1",
	"./lt.js": "/6P1",
	"./lv": "jxEH",
	"./lv.js": "jxEH",
	"./me": "svD2",
	"./me.js": "svD2",
	"./mi": "gEU3",
	"./mi.js": "gEU3",
	"./mk": "Ab7C",
	"./mk.js": "Ab7C",
	"./ml": "oo1B",
	"./ml.js": "oo1B",
	"./mr": "5vPg",
	"./mr.js": "5vPg",
	"./ms": "ooba",
	"./ms-my": "G++c",
	"./ms-my.js": "G++c",
	"./ms.js": "ooba",
	"./my": "F+2e",
	"./my.js": "F+2e",
	"./nb": "FlzV",
	"./nb.js": "FlzV",
	"./ne": "/mhn",
	"./ne.js": "/mhn",
	"./nl": "3K28",
	"./nl-be": "Bp2f",
	"./nl-be.js": "Bp2f",
	"./nl.js": "3K28",
	"./nn": "C7av",
	"./nn.js": "C7av",
	"./pa-in": "pfs9",
	"./pa-in.js": "pfs9",
	"./pl": "7LV+",
	"./pl.js": "7LV+",
	"./pt": "ZoSI",
	"./pt-br": "AoDM",
	"./pt-br.js": "AoDM",
	"./pt.js": "ZoSI",
	"./ro": "wT5f",
	"./ro.js": "wT5f",
	"./ru": "ulq9",
	"./ru.js": "ulq9",
	"./sd": "fW1y",
	"./sd.js": "fW1y",
	"./se": "5Omq",
	"./se.js": "5Omq",
	"./si": "Lgqo",
	"./si.js": "Lgqo",
	"./sk": "OUMt",
	"./sk.js": "OUMt",
	"./sl": "2s1U",
	"./sl.js": "2s1U",
	"./sq": "V0td",
	"./sq.js": "V0td",
	"./sr": "f4W3",
	"./sr-cyrl": "c1x4",
	"./sr-cyrl.js": "c1x4",
	"./sr.js": "f4W3",
	"./ss": "7Q8x",
	"./ss.js": "7Q8x",
	"./sv": "Fpqq",
	"./sv.js": "Fpqq",
	"./sw": "DSXN",
	"./sw.js": "DSXN",
	"./ta": "+7/x",
	"./ta.js": "+7/x",
	"./te": "Nlnz",
	"./te.js": "Nlnz",
	"./tet": "gUgh",
	"./tet.js": "gUgh",
	"./th": "XzD+",
	"./th.js": "XzD+",
	"./tl-ph": "3LKG",
	"./tl-ph.js": "3LKG",
	"./tlh": "m7yE",
	"./tlh.js": "m7yE",
	"./tr": "k+5o",
	"./tr.js": "k+5o",
	"./tzl": "iNtv",
	"./tzl.js": "iNtv",
	"./tzm": "FRPF",
	"./tzm-latn": "krPU",
	"./tzm-latn.js": "krPU",
	"./tzm.js": "FRPF",
	"./uk": "ntHu",
	"./uk.js": "ntHu",
	"./ur": "uSe8",
	"./ur.js": "uSe8",
	"./uz": "XU1s",
	"./uz-latn": "/bsm",
	"./uz-latn.js": "/bsm",
	"./uz.js": "XU1s",
	"./vi": "0X8Q",
	"./vi.js": "0X8Q",
	"./x-pseudo": "e/KL",
	"./x-pseudo.js": "e/KL",
	"./yo": "YXlc",
	"./yo.js": "YXlc",
	"./zh-cn": "Vz2w",
	"./zh-cn.js": "Vz2w",
	"./zh-hk": "ZUyn",
	"./zh-hk.js": "ZUyn",
	"./zh-tw": "BbgG",
	"./zh-tw.js": "BbgG"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "uslO";

/***/ }),

/***/ "xJD8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {
  name: 'app'
};

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.3d0ee174a7ea37330e76.js.map