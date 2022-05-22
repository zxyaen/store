"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.factPrice = factPrice;
exports.currency = currency;
exports.formatTime = formatTime;
var digitsRE = /(\d{3})(?=\d)/g;

function factPrice(value, discount) {
  value = parseFloat(value);
  discount = parseFloat(discount);
  if (!discount) return value;
  return value * discount;
}

function currency(value, currency, decimals) {
  value = parseFloat(value);
  if (!isFinite(value) || !value && value !== 0) return '';
  currency = currency != null ? currency : '￥';
  decimals = decimals != null ? decimals : 2;
  var stringified = Math.abs(value).toFixed(decimals);

  var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;

  var i = _int.length % 3;
  var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';

  var _float = decimals ? stringified.slice(-1 - decimals) : '';

  var sign = value < 0 ? '-' : '';
  return sign + currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
}

function formatTime(value) {
  return value.toLocaleString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '');
}