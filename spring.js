class Spring extends VerletSpring2D{
  constructor(a, b, len, k) {
    super(a, b, len, k);
    physics.addSpring(this);
  }

  show() {
    stroke(0);
    line(this.a.x, this.a.y, this.b.x, this.b.y);
  }
}
