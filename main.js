const { VerletPhysics2D, VerletParticle2D, VerletSpring2D } = toxi.physics2d;
const { GravityBehavior } = toxi.physics2d.behaviors;
const { Vec2D, Rect } = toxi.geom;

let physics;

let particles = [];
let springs = [];
let middleParticle;

function setup() {
    createCanvas(800, 600);
    physics = new VerletPhysics2D();
    let gravity = new GravityBehavior(new Vec2D(0, 1));

    middleParticle = new Particle(width/2, height/2);

    particles.push(new Particle(width/2, height/2 - 100)); // 0
    particles.push(new Particle(width/2 + 25, height/2 - 75)); // 1
    particles.push(new Particle(width/2 + 50, height/2 - 50)); // 2
    particles.push(new Particle(width/2 + 75, height/2 - 25)); // 3
    particles.push(new Particle(width/2 + 100, height/2)); // 4
    particles.push(new Particle(width/2 + 75, height/2 + 25)); // 5
    particles.push(new Particle(width/2 + 50, height/2 + 50)); // 6
    particles.push(new Particle(width/2 + 25, height/2 + 75)); // 7
    particles.push(new Particle(width/2, height/2 + 100)); // 8
    particles.push(new Particle(width/2 - 25, height/2 + 75)); // 9
    particles.push(new Particle(width/2 - 50, height/2 + 50)); // 10 
    particles.push(new Particle(width/2 - 75, height/2 + 25)); // 11
    particles.push(new Particle(width/2 - 100, height / 2)); // 12
    particles.push(new Particle(width/2 - 75, height/2 - 25)); // 13
    particles.push(new Particle(width/2 - 50, height/2 - 50)); // 14
    particles.push(new Particle(width/2 - 25, height/2 - 75)); // 15

    let k = 0.01;
    let k1 = 0.01;
    let k2 = 0.01;

    springs.push(new Spring(particles[0], particles[1], 39.2699, k1));
    springs.push(new Spring(particles[1], particles[2], 39.2699, k1));
    springs.push(new Spring(particles[2], particles[3], 39.2699, k1));
    springs.push(new Spring(particles[3], particles[4], 39.2699, k1));
    springs.push(new Spring(particles[4], particles[5], 39.2699, k1));
    springs.push(new Spring(particles[5], particles[6], 39.2699, k1));
    springs.push(new Spring(particles[6], particles[7], 39.2699, k1));
    springs.push(new Spring(particles[7], particles[8], 39.2699, k1));
    springs.push(new Spring(particles[8], particles[9], 39.2699, k1));
    springs.push(new Spring(particles[9], particles[10], 39.2699, k1));
    springs.push(new Spring(particles[10], particles[11], 39.2699, k1));
    springs.push(new Spring(particles[11], particles[12], 39.2699, k1));
    springs.push(new Spring(particles[12], particles[13], 39.2699, k1));
    springs.push(new Spring(particles[13], particles[14], 39.2699, k1));
    springs.push(new Spring(particles[14], particles[15], 39.2699, k1));
    springs.push(new Spring(particles[15], particles[0], 39.2699, k1));

    springs.push(new Spring(particles[0], particles[8], 200, k));
    springs.push(new Spring(particles[1], particles[9], 200, k));
    springs.push(new Spring(particles[2], particles[10], 200, k));
    springs.push(new Spring(particles[3], particles[11], 200, k));
    springs.push(new Spring(particles[4], particles[12], 200, k));
    springs.push(new Spring(particles[5], particles[13], 200, k));
    springs.push(new Spring(particles[6], particles[14], 200, k));
    springs.push(new Spring(particles[7], particles[15], 200, k));

    springs.push(new Spring(particles[0], middleParticle, 100, k2));
    springs.push(new Spring(particles[1], middleParticle, 100, k2));
    springs.push(new Spring(particles[2], middleParticle, 100, k2));
    springs.push(new Spring(particles[3], middleParticle, 100, k2));
    springs.push(new Spring(particles[4], middleParticle, 100, k2));
    springs.push(new Spring(particles[5], middleParticle, 100, k2));
    springs.push(new Spring(particles[6], middleParticle, 100, k2));
    springs.push(new Spring(particles[7], middleParticle, 100, k2));
    springs.push(new Spring(particles[8], middleParticle, 100, k2));
    springs.push(new Spring(particles[9], middleParticle, 100, k2));
    springs.push(new Spring(particles[10], middleParticle, 100, k2));
    springs.push(new Spring(particles[11], middleParticle, 100, k2));
    springs.push(new Spring(particles[12], middleParticle, 100, k2));
    springs.push(new Spring(particles[13], middleParticle, 100, k2));
    springs.push(new Spring(particles[14], middleParticle, 100, k2));
    springs.push(new Spring(particles[15], middleParticle, 100, k2));




    
    let bounds = new Rect(0, 0, width, height);
    physics.setWorldBounds(bounds);
    physics.addBehavior(gravity);
}

function draw() {
    background(255);

    fill(0, 255, 0, 150);
    beginShape();
    for (let particle of particles) {
        vertex(particle.x, particle.y);
    }
    endShape(CLOSE);

    // for (let particle of particles) {
    //     particle.show();
    // }

    // for (let spring of springs) {
    //     spring.show();
    // }

    if (mouseIsPressed) {
        middleParticle.lock();
        middleParticle.x = mouseX;
        middleParticle.y = mouseY;
        middleParticle.unlock();
    }

    physics.update();
    }