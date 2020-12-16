"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCategoryList = exports.getCategoryRight = exports.getCategoryLeft = exports.getHomeList1 = exports.getHomeList = void 0;

var _ajax = _interopRequireDefault(require("./ajax"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Base_URL = "/api";

var getHomeList = function getHomeList(url, params) {
  return (0, _ajax["default"])(Base_URL + url, params);
};

exports.getHomeList = getHomeList;

var getHomeList1 = function getHomeList1(params) {
  return (0, _ajax["default"])(Base_URL + "/visual/visual_second_category", params);
};

exports.getHomeList1 = getHomeList1;

var getCategoryLeft = function getCategoryLeft() {
  return (0, _ajax["default"])(Base_URL + "/catalog/list");
};

exports.getCategoryLeft = getCategoryLeft;

var getCategoryRight = function getCategoryRight(cat_id) {
  // console.log(cat_id);  //858
  // console.log( Base_URL + "/catalog/list" + cat_id);
  return (0, _ajax["default"])(Base_URL + "/catalog/list/" + cat_id);
};

exports.getCategoryRight = getCategoryRight;

var getCategoryList = function getCategoryList(url, params, type) {
  return (0, _ajax["default"])(Base_URL + url + params + type);
};

exports.getCategoryList = getCategoryList;