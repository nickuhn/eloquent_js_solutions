//A Vector Type

function Vector(x , y) {
  this.x = x;
  this.y = y;
}

Vector.prototype.plus = function(vector) {
  var x = this.x + vector.x;
  var y = this.y + vector.y;
  return new Vector(x, y);
};

Vector.prototype.minus = function(vector) {
  var x = this.x - vector.x;
  var y = this.y - vector.y;
  return new Vector(x, y);
};

Object.defineProperty(Vector.prototype, 'length', {
  get: function() {
    return (Math.sqrt(this.x * this.x + this.y * this.y));
  }
});

//Another Cell

function StretchCell(inner, width, height) {
  this.inner  = inner;
  this.width  = width;
  this.height = height;
}

StretchCell.prototype.minWidth = function() {
  return Math.max(this.inner.minWidth(), this.width);
};

StretchCell.prototype.minHeight = function() {
  return Math.max(this.inner.minHeight(), this.height);
};

StretchCell.prototype.draw = function(width, height) {
  return this.inner.draw(width, height);
};

//Sequence Interface

function logFive(seqObject) {
  for (var i = 0; i < 5; i ++) {
    if (seqObject.index < seqObject.end()){
      console.log(seqObject.next());
      seqObject.index ++;
    } else {
      break;
    }
  }
  seqObject.index = 0;
}

function ArraySeq(array) {
  this.array = array;
  this.index = 0;
}

ArraySeq.prototype.next = function() {
  return this.array[this.index];
};

ArraySeq.prototype.end = function() {
  return (this.array.length);
};

function RangeSeq(from, to) {
  this.from  = from;
  this.to    = to;
  this.index = 0;
}

RangeSeq.prototype.next = function() {
  return (this.from + this.index);
};

RangeSeq.prototype.end = function() {
  return (this.to - this.from + 1);
};








