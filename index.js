'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.year = exports.add = exports.timeago = exports.monthDayYearAtTime = exports.monthDayYear = undefined;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

require('moment-timezone');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var monthDayYear = exports.monthDayYear = function monthDayYear(timestamp, timezone) {
  return !timezone ? (0, _moment2.default)(timestamp).format('MMMM Do, YYYY') : (0, _moment2.default)(timestamp).tz(timezone).format('MMMM Do, YYYY');
};

var monthDayYearAtTime = exports.monthDayYearAtTime = function monthDayYearAtTime(timestamp, timezone) {
  return !timezone ? (0, _moment2.default)(timestamp).format('MMMM Do, YYYY [at] hh:mm a') : (0, _moment2.default)(timestamp).tz(timezone).format('MMMM Do, YYYY [at] hh:mm a');
};

var timeago = exports.timeago = function timeago(timestamp, timezone) {
  return !timezone ? (0, _moment2.default)(timestamp).fromNow() : (0, _moment2.default)(timestamp).tz(timezone).fromNow();
};

var add = exports.add = function add(timestamp, amount, range, timezone) {
  return !timezone ? (0, _moment2.default)(timestamp).add(amount, range).format() : (0, _moment2.default)(timestamp).tz(timezone).add(amount, range).format();
};

var year = exports.year = function year(timestamp, timezone) {
  return !timezone ? (0, _moment2.default)(timestamp).format('YYYY') : (0, _moment2.default)(timestamp).tz(timezone).format('YYYY');
};