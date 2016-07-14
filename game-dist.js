'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

;(function () {
  var Square = (function () {
    function Square(x, y) {
      _classCallCheck(this, Square);

      this.x = x;
      this.y = y;
    }

    _createClass(Square, [{
      key: 'draw',
      value: function draw() {
        ctx.fillRect(this.x, this.y, 10, 10);
      }
    }]);

    return Square;
  })();

  var Snake = (function () {
    function Snake() {
      _classCallCheck(this, Snake);

      this.head = new Square(100, 0);
      this.draw();
    }

    _createClass(Snake, [{
      key: 'draw',
      value: function draw() {
        this.head.draw();
      }
    }]);

    return Snake;
  })();

  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  var snake = new Snake();
})();
