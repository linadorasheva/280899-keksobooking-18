'use strict';

var PhotoUrlMock = {
  min: '01',
  max: '08'
};

var CoordYMock = {
  min: 130,
  max: 630
};

var PriceMock = {
  min: 1000,
  max: 100000
};

var typesObjectMock = ['palace','flat','house','bungalo'];

var RoomMock = {
  min: 1,
  max: 10
};

var GuestsMock = {
  min: 1,
  max: 10
};

var checkinsMock = ['12:00','13:00','14:00'];
var checkoutsMock = ['12:00','13:00','14:00'];
var featuresMock = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"];
var photosMock = ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"];


var getRandomArrElement = function (arr) {
  var randomArrElement = Math.floor(Math.random() * arr.length);

  return randomArrElement;
};

var getRandomInteger = function (min, max) {
  var randomInteger = min - 0.5 + Math.random() * (max - min + 1);
  randomInteger = Math.round(randomInteger);
  return randomInteger;
};

var mapBlock = document.querySelector('.map');
mapBlock.classList.remove('map--faded');
