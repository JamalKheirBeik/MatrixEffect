class Katakana {
  constructor(x, y, speed, first, opacity) {
    this.x = x;
    this.y = y;
    this.value;

    this.speed = speed;
    this.first = first;
    this.opacity = opacity;

    this.switchInterval = round(random(2, 25));
  }

  setToRandomSymbol() {
    var charType = round(random(0, 5));
    if (frameCount % this.switchInterval == 0) {
      if (charType > 1) {
        // set it to Katakana
        this.value = String.fromCharCode(0x30a0 + floor(random(0, 97)));
      } else {
        // set it to numeric
        this.value = floor(random(0, 10));
      }
    }
  }

  rain() {
    this.y = this.y >= height ? 0 : (this.y += this.speed);
  }
}
