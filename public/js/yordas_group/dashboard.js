/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/yordas_group/dashboard.js":
/*!************************************************!*\
  !*** ./resources/js/yordas_group/dashboard.js ***!
  \************************************************/
/***/ (() => {

eval("var app = new Vue({\n  el: '#app',\n  data: {\n    selectedSubstance: null,\n    sortDirection: null,\n    table: {\n      isBusy: false,\n      totalRows: 1,\n      currentPage: 1,\n      perPage: 11,\n      filter: null,\n      filterOn: [],\n      fields: [{\n        key: 'id',\n        label: 'ID',\n        sortable: true,\n        sortDirection: 'desc'\n      }, {\n        key: 'substance_name',\n        label: 'Subsance Name',\n        sortable: true,\n        sortDirection: 'desc'\n      }, {\n        key: 'ec_number',\n        label: 'EC Number',\n        sortable: true,\n        sortDirection: 'desc'\n      }, {\n        key: 'cas_number',\n        label: 'CAS Number',\n        sortable: true,\n        sortDirection: 'desc'\n      }],\n      items: []\n    }\n  },\n  watch: {\n    'table.filter': function tableFilter() {\n      this.table.currentPage = 1; //reset page to 1 on when search function is used - otherwise data may not shown\n    }\n  },\n  methods: {\n    rowClicked: function rowClicked(row) {\n      this.selectedSubstance = row;\n    },\n    onBack: function onBack() {\n      this.selectedSubstance = null;\n    }\n  },\n  created: function created() {\n    var _this = this;\n\n    this.table.isBusy = true;\n    axios.post('/api') //sending request through routes\n    .then(function (response) {\n      response.data.forEach(function (x) {\n        var obj = {\n          id: x.id,\n          substance_name: x.substance_name ? x.substance_name : 'N/A',\n          ec_number: x.ec_number ? x.ec_number : 'N/A',\n          cas_number: x.cas_number ? x.cas_number : 'N/A',\n          tsd: x.tsd ? x.tsd : null,\n          svhc: x.svhc ? x.svhc : null\n        };\n\n        _this.table.items.push(obj);\n      });\n      _this.table.totalRows = _this.table.items.length;\n      _this.table.isBusy = false;\n    })[\"catch\"](function (err) {\n      _this.table.isBusy = false;\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMveW9yZGFzX2dyb3VwL2Rhc2hib2FyZC5qcz9mZmU4Il0sIm5hbWVzIjpbImFwcCIsIlZ1ZSIsImVsIiwiZGF0YSIsInNlbGVjdGVkU3Vic3RhbmNlIiwic29ydERpcmVjdGlvbiIsInRhYmxlIiwiaXNCdXN5IiwidG90YWxSb3dzIiwiY3VycmVudFBhZ2UiLCJwZXJQYWdlIiwiZmlsdGVyIiwiZmlsdGVyT24iLCJmaWVsZHMiLCJrZXkiLCJsYWJlbCIsInNvcnRhYmxlIiwiaXRlbXMiLCJ3YXRjaCIsIm1ldGhvZHMiLCJyb3dDbGlja2VkIiwicm93Iiwib25CYWNrIiwiY3JlYXRlZCIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImZvckVhY2giLCJ4Iiwib2JqIiwiaWQiLCJzdWJzdGFuY2VfbmFtZSIsImVjX251bWJlciIsImNhc19udW1iZXIiLCJ0c2QiLCJzdmhjIiwicHVzaCIsImxlbmd0aCIsImVyciJdLCJtYXBwaW5ncyI6IkFBQ0EsSUFBTUEsR0FBRyxHQUFHLElBQUlDLEdBQUosQ0FBUTtBQUNoQkMsRUFBQUEsRUFBRSxFQUFFLE1BRFk7QUFFaEJDLEVBQUFBLElBQUksRUFBRTtBQUNGQyxJQUFBQSxpQkFBaUIsRUFBRSxJQURqQjtBQUVGQyxJQUFBQSxhQUFhLEVBQUUsSUFGYjtBQUdGQyxJQUFBQSxLQUFLLEVBQUU7QUFDSEMsTUFBQUEsTUFBTSxFQUFFLEtBREw7QUFFSEMsTUFBQUEsU0FBUyxFQUFFLENBRlI7QUFHSEMsTUFBQUEsV0FBVyxFQUFFLENBSFY7QUFJSEMsTUFBQUEsT0FBTyxFQUFFLEVBSk47QUFLSEMsTUFBQUEsTUFBTSxFQUFFLElBTEw7QUFNSEMsTUFBQUEsUUFBUSxFQUFFLEVBTlA7QUFPSEMsTUFBQUEsTUFBTSxFQUFFLENBQ0o7QUFBRUMsUUFBQUEsR0FBRyxFQUFFLElBQVA7QUFBYUMsUUFBQUEsS0FBSyxFQUFFLElBQXBCO0FBQTBCQyxRQUFBQSxRQUFRLEVBQUUsSUFBcEM7QUFBMENYLFFBQUFBLGFBQWEsRUFBRTtBQUF6RCxPQURJLEVBRUo7QUFBRVMsUUFBQUEsR0FBRyxFQUFFLGdCQUFQO0FBQXlCQyxRQUFBQSxLQUFLLEVBQUUsZUFBaEM7QUFBaURDLFFBQUFBLFFBQVEsRUFBRSxJQUEzRDtBQUFpRVgsUUFBQUEsYUFBYSxFQUFFO0FBQWhGLE9BRkksRUFHSjtBQUFFUyxRQUFBQSxHQUFHLEVBQUUsV0FBUDtBQUFvQkMsUUFBQUEsS0FBSyxFQUFFLFdBQTNCO0FBQXdDQyxRQUFBQSxRQUFRLEVBQUUsSUFBbEQ7QUFBd0RYLFFBQUFBLGFBQWEsRUFBRTtBQUF2RSxPQUhJLEVBSUo7QUFBRVMsUUFBQUEsR0FBRyxFQUFFLFlBQVA7QUFBcUJDLFFBQUFBLEtBQUssRUFBRSxZQUE1QjtBQUEwQ0MsUUFBQUEsUUFBUSxFQUFFLElBQXBEO0FBQTBEWCxRQUFBQSxhQUFhLEVBQUU7QUFBekUsT0FKSSxDQVBMO0FBYUhZLE1BQUFBLEtBQUssRUFBRTtBQWJKO0FBSEwsR0FGVTtBQXFCaEJDLEVBQUFBLEtBQUssRUFBRTtBQUNILG9CQUFnQix1QkFBVztBQUN2QixXQUFLWixLQUFMLENBQVdHLFdBQVgsR0FBeUIsQ0FBekIsQ0FEdUIsQ0FDSTtBQUM5QjtBQUhFLEdBckJTO0FBMEJoQlUsRUFBQUEsT0FBTyxFQUFFO0FBQ0xDLElBQUFBLFVBREssc0JBQ01DLEdBRE4sRUFDVztBQUNaLFdBQUtqQixpQkFBTCxHQUF5QmlCLEdBQXpCO0FBQ0gsS0FISTtBQUlMQyxJQUFBQSxNQUpLLG9CQUlJO0FBQ0wsV0FBS2xCLGlCQUFMLEdBQXlCLElBQXpCO0FBQ0g7QUFOSSxHQTFCTztBQWtDaEJtQixFQUFBQSxPQWxDZ0IscUJBa0NOO0FBQUE7O0FBQ04sU0FBS2pCLEtBQUwsQ0FBV0MsTUFBWCxHQUFvQixJQUFwQjtBQUNBaUIsSUFBQUEsS0FBSyxDQUFDQyxJQUFOLENBQVksTUFBWixFQUFvQjtBQUFwQixLQUNDQyxJQURELENBQ00sVUFBQ0MsUUFBRCxFQUFjO0FBQ2hCQSxNQUFBQSxRQUFRLENBQUN4QixJQUFULENBQWN5QixPQUFkLENBQXNCLFVBQUFDLENBQUMsRUFBSTtBQUN2QixZQUFJQyxHQUFHLEdBQUc7QUFDTkMsVUFBQUEsRUFBRSxFQUFFRixDQUFDLENBQUNFLEVBREE7QUFFTkMsVUFBQUEsY0FBYyxFQUFFSCxDQUFDLENBQUNHLGNBQUYsR0FBbUJILENBQUMsQ0FBQ0csY0FBckIsR0FBc0MsS0FGaEQ7QUFHTkMsVUFBQUEsU0FBUyxFQUFFSixDQUFDLENBQUNJLFNBQUYsR0FBY0osQ0FBQyxDQUFDSSxTQUFoQixHQUE0QixLQUhqQztBQUlOQyxVQUFBQSxVQUFVLEVBQUVMLENBQUMsQ0FBQ0ssVUFBRixHQUFlTCxDQUFDLENBQUNLLFVBQWpCLEdBQThCLEtBSnBDO0FBS05DLFVBQUFBLEdBQUcsRUFBRU4sQ0FBQyxDQUFDTSxHQUFGLEdBQVFOLENBQUMsQ0FBQ00sR0FBVixHQUFnQixJQUxmO0FBTU5DLFVBQUFBLElBQUksRUFBRVAsQ0FBQyxDQUFDTyxJQUFGLEdBQVNQLENBQUMsQ0FBQ08sSUFBWCxHQUFrQjtBQU5sQixTQUFWOztBQVFBLFFBQUEsS0FBSSxDQUFDOUIsS0FBTCxDQUFXVyxLQUFYLENBQWlCb0IsSUFBakIsQ0FBc0JQLEdBQXRCO0FBQ0gsT0FWRDtBQVdBLE1BQUEsS0FBSSxDQUFDeEIsS0FBTCxDQUFXRSxTQUFYLEdBQXVCLEtBQUksQ0FBQ0YsS0FBTCxDQUFXVyxLQUFYLENBQWlCcUIsTUFBeEM7QUFDQSxNQUFBLEtBQUksQ0FBQ2hDLEtBQUwsQ0FBV0MsTUFBWCxHQUFvQixLQUFwQjtBQUNILEtBZkQsV0FlUyxVQUFBZ0MsR0FBRyxFQUFJO0FBQ1osTUFBQSxLQUFJLENBQUNqQyxLQUFMLENBQVdDLE1BQVgsR0FBb0IsS0FBcEI7QUFDSCxLQWpCRDtBQWtCSDtBQXREZSxDQUFSLENBQVoiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XHJcbiAgICBlbDogJyNhcHAnLFxyXG4gICAgZGF0YToge1xyXG4gICAgICAgIHNlbGVjdGVkU3Vic3RhbmNlOiBudWxsLFxyXG4gICAgICAgIHNvcnREaXJlY3Rpb246IG51bGwsXHJcbiAgICAgICAgdGFibGU6IHtcclxuICAgICAgICAgICAgaXNCdXN5OiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxSb3dzOiAxLFxyXG4gICAgICAgICAgICBjdXJyZW50UGFnZTogMSxcclxuICAgICAgICAgICAgcGVyUGFnZTogMTEsXHJcbiAgICAgICAgICAgIGZpbHRlcjogbnVsbCxcclxuICAgICAgICAgICAgZmlsdGVyT246IFtdLFxyXG4gICAgICAgICAgICBmaWVsZHM6IFtcclxuICAgICAgICAgICAgICAgIHsga2V5OiAnaWQnLCBsYWJlbDogJ0lEJywgc29ydGFibGU6IHRydWUsIHNvcnREaXJlY3Rpb246ICdkZXNjJyB9LFxyXG4gICAgICAgICAgICAgICAgeyBrZXk6ICdzdWJzdGFuY2VfbmFtZScsIGxhYmVsOiAnU3Vic2FuY2UgTmFtZScsIHNvcnRhYmxlOiB0cnVlLCBzb3J0RGlyZWN0aW9uOiAnZGVzYycgfSxcclxuICAgICAgICAgICAgICAgIHsga2V5OiAnZWNfbnVtYmVyJywgbGFiZWw6ICdFQyBOdW1iZXInLCBzb3J0YWJsZTogdHJ1ZSwgc29ydERpcmVjdGlvbjogJ2Rlc2MnIH0sXHJcbiAgICAgICAgICAgICAgICB7IGtleTogJ2Nhc19udW1iZXInLCBsYWJlbDogJ0NBUyBOdW1iZXInLCBzb3J0YWJsZTogdHJ1ZSwgc29ydERpcmVjdGlvbjogJ2Rlc2MnIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGl0ZW1zOiBbXVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB3YXRjaDoge1xyXG4gICAgICAgICd0YWJsZS5maWx0ZXInOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdGhpcy50YWJsZS5jdXJyZW50UGFnZSA9IDEgLy9yZXNldCBwYWdlIHRvIDEgb24gd2hlbiBzZWFyY2ggZnVuY3Rpb24gaXMgdXNlZCAtIG90aGVyd2lzZSBkYXRhIG1heSBub3Qgc2hvd25cclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICByb3dDbGlja2VkKHJvdykge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkU3Vic3RhbmNlID0gcm93XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkJhY2soKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTdWJzdGFuY2UgPSBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgdGhpcy50YWJsZS5pc0J1c3kgPSB0cnVlXHJcbiAgICAgICAgYXhpb3MucG9zdCggJy9hcGknKSAvL3NlbmRpbmcgcmVxdWVzdCB0aHJvdWdoIHJvdXRlc1xyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICByZXNwb25zZS5kYXRhLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb2JqID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB4LmlkLCBcclxuICAgICAgICAgICAgICAgICAgICBzdWJzdGFuY2VfbmFtZTogeC5zdWJzdGFuY2VfbmFtZSA/IHguc3Vic3RhbmNlX25hbWUgOiAnTi9BJyAsXHJcbiAgICAgICAgICAgICAgICAgICAgZWNfbnVtYmVyOiB4LmVjX251bWJlciA/IHguZWNfbnVtYmVyIDogJ04vQScsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzX251bWJlcjogeC5jYXNfbnVtYmVyID8geC5jYXNfbnVtYmVyIDogJ04vQScsXHJcbiAgICAgICAgICAgICAgICAgICAgdHNkOiB4LnRzZCA/IHgudHNkIDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBzdmhjOiB4LnN2aGMgPyB4LnN2aGMgOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhYmxlLml0ZW1zLnB1c2gob2JqKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLnRhYmxlLnRvdGFsUm93cyA9IHRoaXMudGFibGUuaXRlbXMubGVuZ3RoXHJcbiAgICAgICAgICAgIHRoaXMudGFibGUuaXNCdXN5ID0gZmFsc2VcclxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRhYmxlLmlzQnVzeSA9IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG4iXSwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL3lvcmRhc19ncm91cC9kYXNoYm9hcmQuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/yordas_group/dashboard.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/yordas_group/dashboard.js"]();
/******/ 	
/******/ })()
;