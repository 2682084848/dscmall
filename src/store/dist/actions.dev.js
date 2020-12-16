"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _api = require("@/api/api.js");

var actions = {
  actChangeNum: function actChangeNum(context, data) {
    context.commit("changeNumX", data);
  },
  actChangeCategoryLeft: function actChangeCategoryLeft(context) {
    var tesult;
    return regeneratorRuntime.async(function actChangeCategoryLeft$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap((0, _api.getCategoryLeft)());

          case 2:
            tesult = _context.sent;
            context.commit("changeCategoryLeft", tesult.data);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  actChangeCategoryRight: function actChangeCategoryRight(context, cat_id) {
    var resultRight, resultLeft;
    return regeneratorRuntime.async(function actChangeCategoryRight$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            context.commit("changeShowLoading", false);
            _context2.next = 3;
            return regeneratorRuntime.awrap((0, _api.getCategoryRight)(cat_id));

          case 3:
            resultRight = _context2.sent;
            _context2.next = 6;
            return regeneratorRuntime.awrap((0, _api.getCategoryLeft)());

          case 6:
            resultLeft = _context2.sent;
            resultLeft.data.forEach(function (item) {
              if (item.cat_id == cat_id) {
                context.commit("changeAd", item.touch_catads);
              }
            });

            if (resultRight.status == "success") {
              context.commit("changeShowLoading", true);
              context.commit("changeCategoryRight", resultRight.data);
              context.commit("changeId", cat_id);
            }

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    });
  },
  actChangeCategoryList: function actChangeCategoryList(context, params) {
    var resultList;
    return regeneratorRuntime.async(function actChangeCategoryList$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return regeneratorRuntime.awrap(getCategoryList(params.url, params.params, params.type));

          case 2:
            resultList = _context3.sent;
            context.commit("categoryListDatas", resultList.data);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    });
  }
};
var _default = actions;
exports["default"] = _default;