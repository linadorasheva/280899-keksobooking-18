'use strict';
var QUANTITY_OBJECTS = 8;

var CoordXMock = {
  MIN: 350,
  MAX: 1200
};
var CoordYMock = {
  MIN: 130,
  MAX: 630
};
var PriceMock = {
  MIN: 1000,
  MAX: 100000
};
var RoomMock = {
  MIN: 1,
  MAX: 10
};
var GuestsMock = {
  MIN: 1,
  MAX: 10
};

var pinSize = {
  width: 50,
  heigth: 70
};

var typesObjectMock = ['palace', 'flat', 'house', 'bungalo'];
var checkinsMock = ['12:00', '13:00', '14:00'];
var checkoutsMock = ['12:00', '13:00', '14:00'];
var featuresMock = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var photosMock = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
var mapBlock = document.querySelector('.map');
mapBlock.classList.remove('map--faded');
var pinTemplate = document.querySelector('#pin').content.querySelector('button');
var pinContainer = document.querySelector('.map__pins');
var getRandomArrElement = function (arr) {
  var randomArrElement = Math.floor(Math.random() * arr.length);

  return randomArrElement;
};

var getRandomInteger = function (min, max) {
  var RandomInteger = min - 0.5 + Math.random() * (max - min + 1);
  RandomInteger = Math.round(RandomInteger);
  return RandomInteger;
};

// Одно объявление
var createAdObject = function (index) {
  var ad = {
    'author': {
      'avatar': 'img/avatars/user0' + index + '.png'
    },
    'offer': {
      'title': 'Заголовок предложения',
      'address': getRandomInteger(CoordXMock.MIN, CoordXMock.MAX) + ',' + getRandomInteger(CoordYMock.MIN, CoordYMock.MAX),
      'price': getRandomInteger(PriceMock.MIN, PriceMock.MAX),
      'type': typesObjectMock[getRandomArrElement(typesObjectMock)],
      'rooms': getRandomInteger(RoomMock.MIN, RoomMock.MAX),
      'guests': getRandomInteger(GuestsMock.MIN, GuestsMock.MAX),
      'checkin': checkinsMock[getRandomArrElement(checkinsMock)],
      'checkout': checkoutsMock[getRandomArrElement(checkoutsMock)],
      'features': featuresMock.slice(getRandomInteger(0, featuresMock.length)),
      'descriptions': 'Описание',
      'photos': photosMock.slice(getRandomInteger(0, photosMock.length))
    },
    'location': {
      'x': getRandomInteger(CoordXMock.MIN, CoordXMock.MAX),
      'y': getRandomInteger(CoordYMock.MIN, CoordYMock.MAX)
    }
  };
  return ad;
};
// Массив объявлений
var getArrayAdds = function () {
  var arrayAdds = [];
  for (var i = 1; i <= QUANTITY_OBJECTS; i++) {
    arrayAdds.push(createAdObject(i));
  }
  return arrayAdds;
};

// Метка
var createElement = function (object) {
  var element = pinTemplate.cloneNode(true);
  element.querySelector('img').src = object.author.avatar;
  element.querySelector('img').alt = object.offer.title;
  element.style = 'left: ' + (object.location.x - pinSize.width / 2) + 'px;' + 'top: ' + (object.location.y - pinSize.heigth) + 'px;';

  return element;
};

// Отрисовка меток
var renderPins = function (array) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < array.length; i++) {
    fragment.appendChild(createElement(array[i]));
  }
  pinContainer.appendChild(fragment);
};

var adds = getArrayAdds();
renderPins(adds);
