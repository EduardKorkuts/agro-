/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/styles.scss":
/*!***********************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/styles.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"../node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"../node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../src/assets/banner2.jpg */ \"./assets/banner2.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../src/assets/banner3.jpg */ \"./assets/banner3.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../src/assets/banner4.jpg */ \"./assets/banner4.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../src/assets/banner5.jpg */ \"./assets/banner5.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../src/assets/banner6.jpg */ \"./assets/banner6.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@charset \\\"UTF-8\\\";\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0; }\\n\\n.slider {\\n  width: 1200px;\\n  margin: auto;\\n  overflow: hidden;\\n  position: relative;\\n  height: 80vh;\\n  border-radius: 10px; }\\n  .slider__slides {\\n    z-index: 1;\\n    position: relative;\\n    height: 100%; }\\n  .slider__control {\\n    z-index: 2;\\n    position: absolute;\\n    top: 50%;\\n    left: 5%;\\n    width: 60px;\\n    height: 60px;\\n    margin-left: -30px;\\n    margin-top: -30px;\\n    border-radius: 50%;\\n    background: whitesmoke;\\n    transition: background-color 0.3s;\\n    cursor: pointer; }\\n    .slider__control--right {\\n      left: 95%; }\\n    .slider__control:hover {\\n      background-color: #90B52D; }\\n    .slider__control-line {\\n      position: absolute;\\n      left: 23px;\\n      top: 50%;\\n      width: 3px;\\n      height: 14px;\\n      transform-origin: 50% 0;\\n      transform: rotate(-45deg); }\\n      .slider__control-line:nth-child(2) {\\n        transform: translateY(1px) rotate(-135deg); }\\n      .slider__control--right .slider__control-line {\\n        left: 37px;\\n        transform-origin: 1px 0;\\n        transform: rotate(45deg); }\\n        .slider__control--right .slider__control-line:nth-child(2) {\\n          transform: translateY(1px) rotate(135deg); }\\n      .slider__control-line:after {\\n        content: \\\"\\\";\\n        position: absolute;\\n        left: 0;\\n        top: 0;\\n        width: 100%;\\n        height: 100%;\\n        background-color: #848484;\\n        transition: background-color 0.3s; }\\n      .slider__control:hover .slider__control-line:after {\\n        background-color: whitesmoke; }\\n      .slider__control.a--rotation .slider__control-line:after {\\n        animation: arrowLineRotation 0.49s; }\\n      .slider__control.a--rotation .slider__control-line:nth-child(1):after {\\n        animation: arrowLineRotationRev 0.49s; }\\n\\n@keyframes arrowLineRotation {\\n  to {\\n    transform: rotate(180deg); } }\\n\\n@keyframes arrowLineRotationRev {\\n  to {\\n    transform: rotate(-180deg); } }\\n\\n.slide {\\n  overflow: hidden;\\n  position: absolute;\\n  left: 50%;\\n  top: 50%;\\n  width: 150vmax;\\n  height: 150vmax;\\n  transform: translate(-50%, -50%);\\n  border-radius: 50%;\\n  transition: clip-path 0s 0.91s;\\n  clip-path: circle(30px at 120vw 50%); }\\n  .slide.s--prev {\\n    clip-path: circle(30px at 30vw 50%); }\\n  .slide.s--active {\\n    z-index: 1;\\n    transition: clip-path 1.3s;\\n    clip-path: circle(120vmax at 120vw 50%); }\\n    .slide.s--active.s--active-prev {\\n      clip-path: circle(120vmax at 30vw 50%); }\\n  .slide:nth-child(1) .slide__inner {\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \"); }\\n  .slide:nth-child(2) .slide__inner {\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \"); }\\n  .slide:nth-child(3) .slide__inner {\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \"); }\\n  .slide:nth-child(4) .slide__inner {\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \"); }\\n  .slide:nth-child(5) .slide__inner {\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \"); }\\n  .slide__inner {\\n    position: absolute;\\n    left: 50%;\\n    top: 50%;\\n    width: 100vw;\\n    height: 100vh;\\n    margin-left: -50vw;\\n    margin-top: -50vh;\\n    background-size: cover;\\n    background-position: center center; }\\n    .slide__inner:before {\\n      content: \\\"\\\";\\n      position: absolute;\\n      left: 0;\\n      top: 0;\\n      width: 100%;\\n      height: 100%;\\n      background: rgba(0, 0, 0, 0.3); }\\n  .slide__content {\\n    position: absolute;\\n    left: 25%;\\n    top: 50%;\\n    margin-left: -30px;\\n    margin-top: 48px;\\n    max-width: 480px;\\n    color: whitesmoke; }\\n  .slide__heading {\\n    margin-bottom: 20px;\\n    font-size: 60px; }\\n  .slide__text {\\n    font-size: 25px; }\\n    .slide__text a {\\n      color: inherit; }\\n\\n* {\\n  padding: 0;\\n  margin: 0;\\n  box-sizing: border-box;\\n  font-family: Rubik, sans-serif; }\\n\\nbody {\\n  width: 100%;\\n  font-size: 16px; }\\n\\n.nav-link {\\n  text-decoration: none;\\n  font-family: \\\"Rubik\\\", sans-serif;\\n  color: #515151; }\\n  .nav-link:hover {\\n    color: #90B52D; }\\n  .nav-link_footer {\\n    font-size: 20px;\\n    color: whitesmoke; }\\n  .nav-link_term-of-use {\\n    color: whitesmoke;\\n    border-bottom: 1px solid whitesmoke;\\n    width: 270px;\\n    font-size: 14px; }\\n    .nav-link_term-of-use:hover {\\n      border-bottom: 1px solid #90B52D; }\\n\\n.wrapper {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  width: 1280px;\\n  min-height: 800px;\\n  padding: 50px 0 80px 0;\\n  margin: auto; }\\n\\n.header {\\n  display: flex;\\n  align-items: center;\\n  margin: 0 auto;\\n  width: 1280px;\\n  height: 115px;\\n  padding: 0 25px; }\\n  .header__nav {\\n    display: flex;\\n    justify-content: space-between;\\n    width: 1000px;\\n    list-style: none; }\\n    .header__nav-item {\\n      text-decoration: none;\\n      font-family: \\\"Rubik\\\", sans-serif;\\n      font-weight: 400;\\n      font-size: 16px;\\n      color: #515151;\\n      transition: all 0.1s ease; }\\n      .header__nav-item:hover {\\n        color: #2F4464; }\\n      .header__nav-item_desiccants {\\n        display: inline-block;\\n        width: 100px;\\n        border-right: 1px solid #dcdcdc; }\\n  .header .page-logo_active:hover {\\n    filter: brightness(1.05); }\\n\\n.nav_top {\\n  margin: 0 auto; }\\n\\n.content-wrapper {\\n  width: 79.16%;\\n  align-items: center;\\n  justify-content: space-between; }\\n\\n.hr {\\n  border: none;\\n  /* Убираем границу для браузера Firefox */\\n  color: #e8e8e8;\\n  /* Цвет линии для остальных браузеров */\\n  background-color: #e8e8e8;\\n  /* Цвет линии для браузера Firefox и Opera */\\n  height: 1px;\\n  /* Толщина линии */ }\\n\\nform {\\n  display: flex;\\n  margin-bottom: 2.08333333333vw; }\\n  form input[type='search']::-webkit-search-decoration,\\n  form input[type='search']::-webkit-search-cancel-button,\\n  form input[type='search']::-webkit-search-results-button,\\n  form input[type='search']::-webkit-search-results-decoration {\\n    display: none; }\\n  form button {\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    width: 12rem;\\n    height: 2.75rem;\\n    background: #ffffff;\\n    outline: none;\\n    border: 1px solid #079D28;\\n    border-radius: 5px;\\n    cursor: pointer;\\n    color: #079D28; }\\n    form button img {\\n      margin-right: 0.479375rem; }\\n\\n.drug-category-wrapper {\\n  width: 1200px;\\n  padding-top: 50px; }\\n  .drug-category-wrapper h3 {\\n    font-family: \\\"Rubik\\\", sans-serif;\\n    font-weight: 400;\\n    font-size: 34px;\\n    margin-bottom: 2.08333333333vw; }\\n\\n.drug-category {\\n  display: flex;\\n  flex-wrap: wrap;\\n  height: 960px;\\n  justify-content: space-between;\\n  margin-bottom: 25px; }\\n\\n.drug-card {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: space-around;\\n  width: 280px;\\n  height: 460px;\\n  padding: 20px 0;\\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\\n  border-radius: 5px; }\\n  .drug-card__info {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center; }\\n  .drug-card__image {\\n    width: 220px;\\n    height: 268px; }\\n  .drug-card__title {\\n    font-weight: 500;\\n    font-size: 18px;\\n    color: #515151;\\n    margin-bottom: 10px; }\\n  .drug-card__short-description {\\n    text-align: center; }\\n  .drug-card-button {\\n    position: relative;\\n    display: flex;\\n    height: 50px;\\n    width: 150px;\\n    align-items: center;\\n    justify-content: space-around;\\n    border: 1px solid #90B52D;\\n    border-radius: 5px;\\n    outline: none;\\n    user-select: none;\\n    background: #FFFFFF;\\n    color: #90B52D;\\n    font-size: 16px;\\n    cursor: pointer; }\\n    .drug-card-button:hover {\\n      background: #90B52D;\\n      color: whitesmoke; }\\n      .drug-card-button:hover svg {\\n        stroke: whitesmoke;\\n        transform: scale(1.3);\\n        transition: all 0.3s ease; }\\n    .drug-card-button svg {\\n      stroke: #90B52D; }\\n    .drug-card-button_regulation:active {\\n      top: 1px; }\\n    .drug-card-button_instruction:active {\\n      top: 1px; }\\n\\n.load-more {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  margin: 0 auto;\\n  width: 202px;\\n  height: 49px;\\n  border: 1px solid #90B52D;\\n  border-radius: 5px;\\n  cursor: pointer;\\n  background: #fff;\\n  font-family: \\\"Rubik\\\", sans-serif;\\n  font-weight: 400;\\n  font-size: 16px;\\n  line-height: 18.96px;\\n  color: #90B52D; }\\n  .load-more svg {\\n    fill: #90B52D;\\n    margin-right: 10px; }\\n  .load-more:hover {\\n    background: #90B52D;\\n    color: whitesmoke; }\\n    .load-more:hover svg {\\n      fill: whitesmoke;\\n      transform: rotate(180deg);\\n      transition: all 0.4s ease; }\\n\\n.bottom-nav {\\n  display: flex;\\n  align-items: center;\\n  width: 79.16%;\\n  height: 5.20833333333vw;\\n  margin: auto; }\\n  .bottom-nav ul {\\n    width: 100%;\\n    list-style-type: none;\\n    display: flex;\\n    justify-content: space-between; }\\n    .bottom-nav ul li a {\\n      font-family: \\\"Rubik\\\", sans-serif;\\n      font-weight: 400;\\n      font-size: 1.125rem;\\n      color: #515151;\\n      text-decoration: none; }\\n      .bottom-nav ul li a:visited {\\n        text-decoration: none; }\\n\\n.drug-table {\\n  border: 1px solid #cccccc;\\n  border-radius: 5px;\\n  position: absolute; }\\n  .drug-table th {\\n    background: #90B52D;\\n    height: 60px;\\n    width: 25%;\\n    font-weight: lighter;\\n    text-shadow: 0 1px 0 gray;\\n    color: white;\\n    border: 1px solid #90B52D;\\n    box-shadow: inset 0px 1px 2px #90B52D;\\n    transition: all 0.2s; }\\n  .drug-table tr {\\n    border-bottom: 1px solid #cccccc; }\\n  .drug-table tr:last-child {\\n    border-bottom: 0px; }\\n  .drug-table td {\\n    border-right: 1px solid #cccccc;\\n    padding: 10px;\\n    transition: all 0.2s; }\\n  .drug-table td:last-child {\\n    border-right: 0px; }\\n\\n.drug-instruction {\\n  font-family: \\\"Rubik\\\", sans-serif;\\n  color: #515151;\\n  position: absolute; }\\n  .drug-instruction-benefits {\\n    list-style-type: none;\\n    padding: 20px 0; }\\n    .drug-instruction-benefits__item {\\n      display: flex;\\n      align-items: center; }\\n    .drug-instruction-benefits-text {\\n      padding-left: 10px;\\n      line-height: 30px; }\\n  .drug-instruction__recommendation-heading {\\n    padding: 15px 0;\\n    font-weight: 400;\\n    font-size: 20px;\\n    color: #90B52D; }\\n  .drug-instruction__recommendation-text {\\n    font-family: \\\"Rubik\\\", sans-serif;\\n    color: #515151;\\n    padding-bottom: 20px; }\\n\\n.drug-full-info {\\n  width: 1200px;\\n  margin: 0 auto;\\n  padding-top: 40px;\\n  color: #515151; }\\n  .drug-full-info .drug-name {\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-between;\\n    width: 500px;\\n    margin-bottom: 40px; }\\n  .drug-full-info .drug-description {\\n    display: flex;\\n    width: 1200px;\\n    justify-content: space-between; }\\n    .drug-full-info .drug-description .drug-short-description {\\n      margin-bottom: 30px; }\\n    .drug-full-info .drug-description__controls {\\n      display: flex;\\n      width: 320px;\\n      justify-content: space-between; }\\n  .drug-full-info .drug-heading {\\n    font-family: \\\"Rubik\\\", sans-serif;\\n    font-weight: lighter;\\n    font-size: 35px; }\\n  .drug-full-info .drug-picture {\\n    width: 200px;\\n    height: 213px;\\n    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, #d1d5db 0px 0px 0px 1px inset; }\\n  .drug-full-info .drug-text {\\n    width: 900px; }\\n  .drug-full-info .drug-specification {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-between;\\n    list-style-type: none;\\n    height: 130px;\\n    margin-bottom: 34px; }\\n    .drug-full-info .drug-specification__item {\\n      display: flex;\\n      align-items: center; }\\n    .drug-full-info .drug-specification__point {\\n      font-family: \\\"Rubik\\\", sans-serif;\\n      font-weight: 500;\\n      font-size: 18px;\\n      width: 240px; }\\n\\n.drug-docs {\\n  width: 100%;\\n  height: 500px;\\n  position: relative;\\n  padding-top: 40px; }\\n\\n.drug-alphabetically-category {\\n  align-self: baseline;\\n  display: flex;\\n  padding: 15px 0;\\n  border-top: 1px solid #d9eaab; }\\n  .drug-alphabetically-category-wrapper {\\n    width: 1100px;\\n    padding: 30px 0 30px 0; }\\n  .drug-alphabetically-category__icon {\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    width: 35px;\\n    height: 35px;\\n    border: 2px solid #90B52D;\\n    border-radius: 50%;\\n    color: #515151;\\n    user-select: none; }\\n  .drug-alphabetically-category__list {\\n    display: flex;\\n    width: 500px;\\n    flex-wrap: wrap;\\n    justify-content: space-between;\\n    align-items: center;\\n    padding: 0 15px; }\\n\\n.drug-alphabetically {\\n  width: 160px;\\n  display: flex;\\n  align-items: center;\\n  padding: 5px; }\\n  .drug-alphabetically__canister-pic {\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    margin-right: 5px; }\\n  .drug-alphabetically__name {\\n    text-decoration: none;\\n    font-size: 20px;\\n    color: #6b6b6b;\\n    font-family: \\\"Rubik\\\", sans-serif;\\n    font-weight: 400;\\n    padding: 0 5px;\\n    border-radius: 5px; }\\n    .drug-alphabetically__name:hover {\\n      background: #90B52D;\\n      color: whitesmoke; }\\n\\n.footer {\\n  width: 100%;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  height: 200px;\\n  background: #495057; }\\n  .footer-nav {\\n    display: flex;\\n    list-style-type: none; }\\n    .footer-nav__item {\\n      padding: 0 10px;\\n      border-right: 2px solid #bababa; }\\n      .footer-nav__item:last-child {\\n        border-right: none; }\\n  .footer-content {\\n    font-family: \\\"Rubik\\\", sans-serif;\\n    font-weight: 400;\\n    color: white;\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-between;\\n    width: 1200px; }\\n    .footer-content-docs {\\n      display: flex;\\n      flex-direction: column;\\n      justify-content: space-between;\\n      align-items: center;\\n      width: 530px;\\n      height: 130px;\\n      text-align: center;\\n      font-size: 12px;\\n      line-height: 20px; }\\n    .footer-content-phone-logo {\\n      margin-right: 15px; }\\n    .footer-content-phones {\\n      display: flex;\\n      flex-direction: column;\\n      justify-content: space-between;\\n      height: 75px; }\\n      .footer-content-phones__item {\\n        display: flex;\\n        align-items: center;\\n        font-size: 17px; }\\n\\n.controls {\\n  display: flex;\\n  justify-content: space-between;\\n  width: 1100px; }\\n  .controls-button {\\n    padding: 5px 10px;\\n    background: #ffffff;\\n    border: 1px solid #90B52D;\\n    text-transform: uppercase;\\n    border-radius: 5px;\\n    font-family: \\\"Rubik\\\", sans-serif;\\n    font-weight: 400;\\n    font-size: 18px;\\n    cursor: pointer;\\n    user-select: none;\\n    color: #515151; }\\n    .controls-button:hover {\\n      color: whitesmoke;\\n      background: #90B52D;\\n      transition: all 0.1s ease; }\\n\\nnav .drop-down {\\n  position: absolute;\\n  z-index: 1000;\\n  list-style: none;\\n  overflow: hidden;\\n  /* When ul height is reduced, ensure overflowing li are not shown */\\n  background-color: white;\\n  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.1) 0px 30px 60px -30px;\\n  border-radius: 5px;\\n  font-family: \\\"Rubik\\\", sans-serif;\\n  width: 200px;\\n  padding: 10px 0;\\n  -webkit-transition: height 0.3s ease;\\n  transition: height 0.3s ease; }\\n\\nnav .drop-down.closed {\\n  visibility: hidden;\\n  /*  When toggled via jQuery this class will reduce the height of the ul which inconjuction\\r\\n      with overflow: hidden set on the ul will hide all list items apart from the first */\\n  /* current li height 38px + 5px border */\\n  height: 43px; }\\n\\nnav .drop-down li a {\\n  display: block;\\n  color: #515151;\\n  text-decoration: none;\\n  padding: 15px;\\n  /* Larger touch target area */ }\\n\\n.hidden {\\n  display: none; }\\n\\n.contacts {\\n  width: 100%;\\n  height: 800px; }\\n  .contacts img {\\n    max-width: 100%;\\n    opacity: 0.5; }\\n  .contacts-heading {\\n    font-family: 'Lobster', cursive;\\n    font-size: 60px;\\n    text-align: center;\\n    color: #6b6b6b; }\\n  .contacts-types {\\n    display: flex;\\n    justify-content: space-around;\\n    width: 100%;\\n    padding: 70px 0; }\\n    .contacts-types__item {\\n      display: flex;\\n      align-items: center;\\n      justify-content: center;\\n      width: 260px;\\n      height: 260px;\\n      border: 15px solid #c6e082;\\n      border-radius: 50%; }\\n    .contacts-types svg {\\n      width: 120px;\\n      height: 120px;\\n      fill: #2F4464; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./styles/styles.scss?../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!***************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./styles/styles.css":
/*!***************************!*\
  !*** ./styles/styles.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/styles.css?");

/***/ }),

/***/ "./styles/styles.scss":
/*!****************************!*\
  !*** ./styles/styles.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"../node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"../node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"../node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"../node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/styles.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./styles/styles.scss?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ \"./styles/styles.css\");\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/styles.scss */ \"./styles/styles.scss\");\n/* harmony import */ var _js_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/dropdown */ \"./js/dropdown.js\");\n/* harmony import */ var _js_dropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_dropdown__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _js_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/slider */ \"./js/slider.js\");\n/* harmony import */ var _js_slider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_slider__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _js_drugControls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/drugControls */ \"./js/drugControls.js\");\n/* harmony import */ var _js_drugControls__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_drugControls__WEBPACK_IMPORTED_MODULE_4__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./js/dropdown.js":
/*!************************!*\
  !*** ./js/dropdown.js ***!
  \************************/
/***/ (() => {

eval("const navItems = document.querySelectorAll('.header__nav-item')\r\n\r\nnavItems\r\n    .forEach(item => item.addEventListener('mouseover', function () {\r\n      this.childNodes[3].classList.toggle('closed')\r\n    }))\r\n\r\nnavItems\r\n    .forEach(item => item.addEventListener('mouseout', function () {\r\n      this.childNodes[3].classList.toggle('closed')\r\n    }))\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/dropdown.js?");

/***/ }),

/***/ "./js/drugControls.js":
/*!****************************!*\
  !*** ./js/drugControls.js ***!
  \****************************/
/***/ (() => {

eval("const buttonRegulation = document.querySelector('#regulation')\r\nconst buttonInstruction = document.querySelector('#instruction')\r\nconst drugTable = document.querySelector('.drug-table')\r\nconst drugInstruction = document.querySelector('.drug-instruction')\r\n\r\n\r\nbuttonRegulation.addEventListener('click', function () {\r\n  if (this.dataset.open === 'false') {\r\n    drugTable.classList.remove('hidden')\r\n    this.dataset.open = 'true'\r\n\r\n  }\r\n  if (buttonInstruction.dataset.open === 'true') {\r\n    drugInstruction.classList.add('hidden')\r\n    buttonInstruction.dataset.open = 'false'\r\n  }\r\n})\r\n\r\nbuttonInstruction.addEventListener('click', function () {\r\n  if (this.dataset.open === 'false') {\r\n    drugInstruction.classList.remove('hidden')\r\n    this.dataset.open = 'true'\r\n  }\r\n  if (buttonRegulation.dataset.open === 'true') {\r\n    drugTable.classList.add('hidden')\r\n    buttonRegulation.dataset.open = 'false'\r\n  }\r\n})\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/drugControls.js?");

/***/ }),

/***/ "./js/slider.js":
/*!**********************!*\
  !*** ./js/slider.js ***!
  \**********************/
/***/ (() => {

eval("  let $slides = document.querySelectorAll('.slide');\r\n  let $controls = document.querySelectorAll('.slider__control');\r\n  let numOfSlides = $slides.length;\r\n  let slidingAT = 1300;\r\n  let slidingBlocked = false;\r\n\r\n  [].slice.call($slides).forEach(function($el, index) {\r\n    let i = index + 1;\r\n    $el.classList.add('slide-' + i);\r\n    $el.dataset.slide = i;\r\n  });\r\n\r\n  [].slice.call($controls).forEach(function($el) {\r\n    $el.addEventListener('click', controlClickHandler);\r\n  });\r\n\r\n  function controlClickHandler() {\r\n    if (slidingBlocked) return;\r\n    slidingBlocked = true;\r\n\r\n    let $control = this;\r\n    let isRight = $control.classList.contains('m--right');\r\n    let $curActive = document.querySelector('.slide.s--active');\r\n    let index = +$curActive.dataset.slide;\r\n    (isRight) ? index++ : index--;\r\n    if (index < 1) index = numOfSlides;\r\n    if (index > numOfSlides) index = 1;\r\n    let $newActive = document.querySelector('.slide-' + index);\r\n\r\n    $control.classList.add('a--rotation');\r\n    $curActive.classList.remove('s--active', 's--active-prev');\r\n    document.querySelector('.slide.s--prev').classList.remove('s--prev');\r\n\r\n    $newActive.classList.add('s--active');\r\n    if (!isRight) $newActive.classList.add('s--active-prev');\r\n\r\n\r\n    let prevIndex = index - 1;\r\n    if (prevIndex < 1) prevIndex = numOfSlides;\r\n\r\n    document.querySelector('.slide-' + prevIndex).classList.add('s--prev');\r\n\r\n    setTimeout(function() {\r\n      $control.classList.remove('a--rotation');\r\n      slidingBlocked = false;\r\n    }, slidingAT*0.75);\r\n  }\r\n\r\n\n\n//# sourceURL=webpack:///./js/slider.js?");

/***/ }),

/***/ "./assets/banner2.jpg":
/*!****************************!*\
  !*** ./assets/banner2.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"f82d8c2bb316322f3be7.jpg\";\n\n//# sourceURL=webpack:///./assets/banner2.jpg?");

/***/ }),

/***/ "./assets/banner3.jpg":
/*!****************************!*\
  !*** ./assets/banner3.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"49c23148cf6e1c13426d.jpg\";\n\n//# sourceURL=webpack:///./assets/banner3.jpg?");

/***/ }),

/***/ "./assets/banner4.jpg":
/*!****************************!*\
  !*** ./assets/banner4.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"3ea9af577397accd2d22.jpg\";\n\n//# sourceURL=webpack:///./assets/banner4.jpg?");

/***/ }),

/***/ "./assets/banner5.jpg":
/*!****************************!*\
  !*** ./assets/banner5.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"526b7d0467cc8b304cb1.jpg\";\n\n//# sourceURL=webpack:///./assets/banner5.jpg?");

/***/ }),

/***/ "./assets/banner6.jpg":
/*!****************************!*\
  !*** ./assets/banner6.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"aa19cc0c5732ade31f01.jpg\";\n\n//# sourceURL=webpack:///./assets/banner6.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;