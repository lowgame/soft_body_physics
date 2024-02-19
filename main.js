const { VerletPhysics2D, VerletParticle2D, VerletSpring2D } = toxi.physics2d;
const { GravityBehavior } = toxi.physics2d.behaviors;
const { Vec2D, Rect } = toxi.geom;

let physics;


function setup() {
    createCanvas(800, 600);
    physics = new VerletPhysics2D();
    let gravity = new GravityBehavior(new Vec2D(0, 1));

    particleA = new VerletParticle2D(width/2, height/2);
    particleB = new VerletParticle2D(width/2 + 50, height/2 + 100);
    particleC = new VerletParticle2D(width/2 + 100, height/2 + 200);

    let springAB = new VerletSpring2D(particleA, particleB, 100, 0.001);
    let springBC = new VerletSpring2D(particleB, particleC, 100, 0.02);
    let springCA = new VerletSpring2D(particleC, particleA, 100, 0.001);
    
    let bounds = new Rect(0, 0, width, height);
    physics.setWorldBounds(bounds);

    physics.addBehavior(gravity);
    physics.addParticle(particleA);
    physics.addParticle(particleB);
    physics.addParticle(particleC);
    physics.addSpring(springAB);
    physics.addSpring(springBC);
    physics.addSpring(springCA);

}

function draw() {
    background(255);

    fill(0, 255, 0)
    circle(particleA.x, particleA.y, 20);

    fill(0)
    circle(particleB.x, particleB.y, 20);

    fill(0)
    circle(particleC.x, particleC.y, 20);

    stroke(0);
    line(particleA.x, particleA.y, particleB.x, particleB.y);
    line(particleB.x, particleB.y, particleC.x, particleC.y);
    line(particleC.x, particleC.y, particleA.x, particleA.y);

    if (mouseIsPressed) {
        particleA.lock();
        particleA.x = mouseX;
        particleA.y = mouseY;
        particleA.unlock();
    }
    



    physics.update();
    }