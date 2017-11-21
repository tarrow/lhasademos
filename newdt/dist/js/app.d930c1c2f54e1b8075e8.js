webpackJsonp([1],{

/***/ "6V9n":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "9rLS":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ETqE":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Jmt5":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__("7+uW");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/App.vue
//
//
//
//
//
//

/* harmony default export */ var App = ({
  name: 'app'
});
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
  App,
  selectortype_template_index_0_src_App,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_App = (Component.exports);

// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("/ocq");

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/values.js
var values = __webpack_require__("gRE1");
var values_default = /*#__PURE__*/__webpack_require__.n(values);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/keys.js
var keys = __webpack_require__("fZjL");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ./node_modules/vue-chartjs/es/index.js + 11 modules
var es = __webpack_require__("UlOv");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/FreqHorizBar.vue


//



/* harmony default export */ var FreqHorizBar = ({
  extends: es["a" /* HorizontalBar */],
  mounted: function mounted() {
    // Overwriting base render method with actual data.
    var dataToRender = this.data['Species Binomial'];
    this.renderChart({
      labels: keys_default()(dataToRender),
      datasets: [{
        backgroundColor: '#f87979',
        data: values_default()(dataToRender)
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
});
// CONCATENATED MODULE: ./src/components/FreqHorizBar.vue
function FreqHorizBar_injectStyle (ssrContext) {
  __webpack_require__("6V9n")
}
var FreqHorizBar_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */
var __vue_template__ = null
/* template functional */
var FreqHorizBar___vue_template_functional__ = false
/* styles */
var FreqHorizBar___vue_styles__ = FreqHorizBar_injectStyle
/* scopeId */
var FreqHorizBar___vue_scopeId__ = "data-v-be848812"
/* moduleIdentifier (server only) */
var FreqHorizBar___vue_module_identifier__ = null
var FreqHorizBar_Component = FreqHorizBar_normalizeComponent(
  FreqHorizBar,
  __vue_template__,
  FreqHorizBar___vue_template_functional__,
  FreqHorizBar___vue_styles__,
  FreqHorizBar___vue_scopeId__,
  FreqHorizBar___vue_module_identifier__
)

/* harmony default export */ var components_FreqHorizBar = (FreqHorizBar_Component.exports);

// EXTERNAL MODULE: ./node_modules/vue-wordcloud/dist/word-cloud.js
var word_cloud = __webpack_require__("6zY2");
var word_cloud_default = /*#__PURE__*/__webpack_require__.n(word_cloud);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/WordCloud.vue

//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var WordCloud = ({
  name: 'wordfreqcloud',
  components: {
    wordcloud: word_cloud_default.a
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
      return keys_default()(me.data['Word Frequencies']).map(function (key) {
        return { name: key, value: me.data['Word Frequencies'][key] };
      });
    }
  },
  props: ['data', 'index']
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1bffba6a","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/WordCloud.vue
var WordCloud_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"wordfreqcloud"}},[_c('wordcloud',{attrs:{"data":_vm.Words,"nameKey":"name","valueKey":"value"}})],1)}
var WordCloud_staticRenderFns = []
var WordCloud_esExports = { render: WordCloud_render, staticRenderFns: WordCloud_staticRenderFns }
/* harmony default export */ var components_WordCloud = (WordCloud_esExports);
// CONCATENATED MODULE: ./src/components/WordCloud.vue
function WordCloud_injectStyle (ssrContext) {
  __webpack_require__("ETqE")
}
var WordCloud_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var WordCloud___vue_template_functional__ = false
/* styles */
var WordCloud___vue_styles__ = WordCloud_injectStyle
/* scopeId */
var WordCloud___vue_scopeId__ = "data-v-1bffba6a"
/* moduleIdentifier (server only) */
var WordCloud___vue_module_identifier__ = null
var WordCloud_Component = WordCloud_normalizeComponent(
  WordCloud,
  components_WordCloud,
  WordCloud___vue_template_functional__,
  WordCloud___vue_styles__,
  WordCloud___vue_scopeId__,
  WordCloud___vue_module_identifier__
)

/* harmony default export */ var src_components_WordCloud = (WordCloud_Component.exports);

// EXTERNAL MODULE: ./node_modules/wikidata-sdk/lib/index.js
var lib = __webpack_require__("wztF");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("mtWM");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/WikidataDisease.vue
//
//
//
//
//
//



/* harmony default export */ var WikidataDisease = ({
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
      var url = lib_default.a.getEntities(wid);
      axios_default.a.get(url).then(function (resp) {
        console.log(resp);
        me.disease = resp.data.entities[wid].labels.en.value;
        console.log(resp.data.entities[wid].claims.P1120[0].mainsnak.datavalue.value);
        me.numberofdeaths = parseInt(resp.data.entities[wid].claims.P1120[0].mainsnak.datavalue.value.amount);
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6fa5df20","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/WikidataDisease.vue
var WikidataDisease_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.disease),expression:"disease"}],attrs:{"id":"Wikidata"}},[_vm._v("\n  Disease "+_vm._s(_vm.disease)+" causes "+_vm._s(_vm.numberofdeaths)+" deaths each year\n")])}
var WikidataDisease_staticRenderFns = []
var WikidataDisease_esExports = { render: WikidataDisease_render, staticRenderFns: WikidataDisease_staticRenderFns }
/* harmony default export */ var components_WikidataDisease = (WikidataDisease_esExports);
// CONCATENATED MODULE: ./src/components/WikidataDisease.vue
var WikidataDisease_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var WikidataDisease___vue_template_functional__ = false
/* styles */
var WikidataDisease___vue_styles__ = null
/* scopeId */
var WikidataDisease___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var WikidataDisease___vue_module_identifier__ = null
var WikidataDisease_Component = WikidataDisease_normalizeComponent(
  WikidataDisease,
  components_WikidataDisease,
  WikidataDisease___vue_template_functional__,
  WikidataDisease___vue_styles__,
  WikidataDisease___vue_scopeId__,
  WikidataDisease___vue_module_identifier__
)

/* harmony default export */ var src_components_WikidataDisease = (WikidataDisease_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Table.vue
//
//
//
//
//
//
//





/* harmony default export */ var Table = ({
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
          'Species Binomial': components_FreqHorizBar,
          'Word Frequencies': src_components_WordCloud,
          'Disease': src_components_WikidataDisease
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
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-03abcacc","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Table.vue
var Table_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"datatable"}},[_c('h1',[_vm._v("ContentMine DataTables")]),_vm._v(" "),_c('v-client-table',{attrs:{"data":_vm.tableData,"columns":_vm.columns,"options":_vm.options}})],1)}
var Table_staticRenderFns = []
var Table_esExports = { render: Table_render, staticRenderFns: Table_staticRenderFns }
/* harmony default export */ var components_Table = (Table_esExports);
// CONCATENATED MODULE: ./src/components/Table.vue
function Table_injectStyle (ssrContext) {
  __webpack_require__("NlLq")
}
var Table_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var Table___vue_template_functional__ = false
/* styles */
var Table___vue_styles__ = Table_injectStyle
/* scopeId */
var Table___vue_scopeId__ = "data-v-03abcacc"
/* moduleIdentifier (server only) */
var Table___vue_module_identifier__ = null
var Table_Component = Table_normalizeComponent(
  Table,
  components_Table,
  Table___vue_template_functional__,
  Table___vue_styles__,
  Table___vue_scopeId__,
  Table___vue_module_identifier__
)

/* harmony default export */ var src_components_Table = (Table_Component.exports);

// CONCATENATED MODULE: ./src/router/index.js




vue_esm["default"].use(vue_router_esm["a" /* default */]);

/* harmony default export */ var router = (new vue_router_esm["a" /* default */]({
  routes: [{
    path: '/',
    name: 'Table',
    component: src_components_Table
  }]
}));
// EXTERNAL MODULE: ./node_modules/vue-tables-2/compiled/index.js
var compiled = __webpack_require__("e9ss");
var compiled_default = /*#__PURE__*/__webpack_require__.n(compiled);

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/dist/bootstrap-vue.esm.js
var bootstrap_vue_esm = __webpack_require__("sCSS");

// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.css
var bootstrap = __webpack_require__("Jmt5");
var bootstrap_default = /*#__PURE__*/__webpack_require__.n(bootstrap);

// CONCATENATED MODULE: ./src/main.js
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.








vue_esm["default"].use(compiled["ClientTable"]);
vue_esm["default"].use(bootstrap_vue_esm["a" /* default */]);
vue_esm["default"].use(es["b" /* default */]);

vue_esm["default"].config.productionTip = false;

/* eslint-disable no-new */
new vue_esm["default"]({
  el: '#app',
  router: router,
  template: '<App/>',
  components: { App: src_App }
});

/***/ }),

/***/ "NlLq":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ll94":
/***/ (function(module, exports) {

module.exports = {"_from":"vue-chartjs","_id":"vue-chartjs@3.0.2","_inBundle":false,"_integrity":"sha512-m6ItjL8o3ff4JpbF083RzZ4KPiNBFsqMKmWCcAtlisOdm1vvB/9mUDJePmxYKJkvl2AcpvLPiH1cUrhq46r8vA==","_location":"/vue-chartjs","_phantomChildren":{},"_requested":{"type":"tag","registry":true,"raw":"vue-chartjs","name":"vue-chartjs","escapedName":"vue-chartjs","rawSpec":"","saveSpec":null,"fetchSpec":"latest"},"_requiredBy":["#USER","/"],"_resolved":"https://registry.npmjs.org/vue-chartjs/-/vue-chartjs-3.0.2.tgz","_shasum":"960d0ba9c2f3720b85ff02417707adc02f953de9","_spec":"vue-chartjs","_where":"/home/tom/src/contentmine/lhasademos/newdt","author":{"name":"Jakub Juszczak","email":"jakub@posteo.de"},"browserify":{"transform":["babelify"]},"bugs":{"url":"https://github.com/apertureless/vue-chartjs/issues"},"bundleDependencies":false,"contributors":[{"name":"Thorsten Lünborg","url":"https://github.com/LinusBorg"},{"name":"Juan Carlos Alonso","url":"https://github.com/jcalonso"}],"dependencies":{"lodash.merge":"^4.6.0"},"deprecated":false,"description":"Vue.js wrapper for chart.js for creating beautiful charts.","devDependencies":{"@babel/cli":"^7.0.0-beta.31","@babel/core":"^7.0.0-beta.31","@babel/preset-env":"^7.0.0-beta.31","@babel/preset-stage-2":"^7.0.0-beta.31","babel-loader":"8.0.0-beta.0","chai":"^3.5.0","chart.js":"2.7.0","chromedriver":"^2.28.0","connect-history-api-fallback":"^1.1.0","cross-env":"^3.2.4","cross-spawn":"^5.1.0","css-loader":"^0.28.0","eslint":"^3.19.0","eslint-config-standard":"^10.2.1","eslint-friendly-formatter":"^2.0.7","eslint-loader":"^1.7.1","eslint-plugin-html":"^2.0.1","eslint-plugin-import":"^2.2.0","eslint-plugin-node":"^4.2.2","eslint-plugin-promise":"^3.5.0","eslint-plugin-standard":"^3.0.1","eventsource-polyfill":"^0.9.6","express":"^4.15.2","extract-text-webpack-plugin":"^3.0.1","file-loader":"^0.10.1","friendly-errors-webpack-plugin":"^1.6.1","function-bind":"^1.0.2","html-webpack-plugin":"^2.28.0","http-proxy-middleware":"^0.17.4","inject-loader":"^3.0.0","isparta":"^4.0.0","jasmine-core":"^2.5.2","json-loader":"^0.5.4","karma":"^1.5.0","karma-coverage":"^1.1.1","karma-jasmine":"^1.0.2","karma-mocha":"^1.2.0","karma-phantomjs-launcher":"^1.0.4","karma-phantomjs-shim":"^1.4.0","karma-sinon-chai":"^1.2.0","karma-sourcemap-loader":"^0.3.7","karma-spec-reporter":"0.0.30","karma-webpack":"2","lolex":"^1.6.0","mocha":"^3.1.0","nightwatch":"^0.9.14","opn":"^5.1.0","ora":"^1.2.0","phantomjs-prebuilt":"^2.1.13","portfinder":"^1.0.13","selenium-server":"^3.3.1","shelljs":"^0.7.7","sinon":"^2.1.0","sinon-chai":"^2.9.0","url-loader":"^0.5.8","vue":"2.5.2","vue-hot-reload-api":"2.1.0","vue-html-loader":"^1.2.4","vue-loader":"^13.3.0","vue-style-loader":"3.0.1","vue-template-compiler":"2.5.2","webpack":"^3.7.1","webpack-dev-middleware":"^1.10.1","webpack-hot-middleware":"^2.17.1","webpack-merge":"^4.1.0"},"engines":{"node":">=6.9.0","npm":">= 3.0.0"},"files":["src","dist","es"],"greenkeeper":{"ignore":["extract-text-webpack-plugin","karma-webpack","webpack","webpack-merge"]},"homepage":"http://vue-chartjs.org","jsnext:main":"es/index.js","keywords":["ChartJs","Vue","Visualisation","Wrapper","Charts"],"license":"MIT","main":"dist/vue-chartjs.js","maintainers":[{"name":"Jakub Juszczak","email":"jakub@posteo.de","url":"http://www.jakubjuszczak.de"}],"module":"es/index.js","name":"vue-chartjs","peerDependencies":{"chart.js":"2.7.x"},"repository":{"type":"git","url":"git+ssh://git@github.com/apertureless/vue-chartjs.git"},"scripts":{"build":"yarn run release && yarn run build:es","build:es":"cross-env BABEL_ENV=es babel src --out-dir es","dev":"node build/dev-server.js","e2e":"node test/e2e/runner.js","lint":"eslint --ext .js,.vue src test/unit/specs test/e2e/specs","prepublishOnly":"yarn run lint && yarn run test && yarn run build","release":"webpack --progress --hide-modules --config  ./build/webpack.release.js && NODE_ENV=production webpack --progress --hide-modules --config  ./build/webpack.release.min.js","test":"npm run unit","unit":"karma start test/unit/karma.conf.js --single-run"},"unpkg":"dist/vue-chartjs.min.js","version":"3.0.2"}

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

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.d930c1c2f54e1b8075e8.js.map