"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
// const { default: state } = require("./state")
var mutations = {
  changeCategoryLeft: function changeCategoryLeft(state, data) {
    state.categoryLeftDatas = data;
  },
  changeCategoryRight: function changeCategoryRight(state, data) {
    state.categoryRightDatas = data;
  },
  changeAd: function changeAd(state, data) {
    state.ad = data;
  },
  changeShowLoading: function changeShowLoading(state, data) {
    state.showLoading = data;
  },
  changeId: function changeId(state, data) {
    state.cat_id = data;
  },
  changeCategoryList: function changeCategoryList(state, data) {
    state.categoryListDatas = data;
  }
};
var _default = mutations;
exports["default"] = _default;