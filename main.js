import * as THREE from 'three';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

const lenis = new Lenis()

lenis.on('scroll', (e) => {
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const sphere = new THREE.Mesh(new THREE.SphereGeometry(1, 15, 15), new THREE.MeshStandardMaterial({ color: 0xffffff, wireframe: true }));
scene.add(sphere);

const smallSphere = new THREE.Mesh(new THREE.SphereGeometry(0.5, 10, 10), new THREE.MeshStandardMaterial({ color: 0x800080, wireframe: true }));
scene.add(smallSphere);

smallSphere.position.set(3, 0, 0);



const starGeometry = new THREE.SphereGeometry(0.005, 5, 5);
const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
const stars = [];

for (let i = 0; i < 100; i++) {
  const star = new THREE.Mesh(starGeometry, starMaterial);
  const x = Math.random() * 10 - 5;
  const y = Math.random() * 10 - 5;
  const z = Math.random() * 10 - 5;
  star.position.set(x, y, z);
  stars.push(star);
  scene.add(star);
}


sphere.position.set(0.8, 1, 2)

const mousePosition = new THREE.Vector2;
let rotationAngle = 0;

/*
window.addEventListener('mousemove', (event) => {
  mousePosition.x = (event.clientX - window.innerWidth / 2);
  mousePosition.y = (event.clientY - window.innerHeight / 2);
  rotationAngle = Math.atan2( mousePosition.x,  mousePosition.y);
});
*/

const pointLight = new THREE.PointLight(0x800080, 400);
pointLight.position.set(-5, -5, 5);
scene.add(pointLight);

const secondPointLight = new THREE.PointLight(0xFFA500, 5);
secondPointLight.position.set(5, 5, 5);
scene.add(secondPointLight);


const animate = () => {
  requestAnimationFrame(animate);

  // Update the rotation of the sphere
  sphere.rotation.y += 0.005;
  smallSphere.rotation.y += 0.003;

  renderer.render(scene, camera);
}

const onWindowResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);

};

window.addEventListener('resize', onWindowResize);




animate();
const t1 = gsap.timeline({defaults:{duration: 1}}); 
t1.fromTo(sphere.scale, {x: 0, y: 0, z: 0}, {x: 1, y: 1, z: 1});
t1.fromTo(smallSphere.scale, {x: 0, y: 0, z: 0}, {x: 1, y: 1, z: 1}, "-=0.5");

const t2 = gsap.timeline({defaults:{duration: 1}});
t2.fromTo("nav", {y: -50, opacity: 0}, {y: 0, opacity: 1});
gsap.registerPlugin(ScrollTrigger);

let t3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".uct ",
    start: "top bottom",
    end: "30% center -=1000px",
    scrub: true,
    markers: false
  }
});

let t4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".private",
    start: "top bottom",
    end: "30% center -=1000px",
    scrub: true,
    markers: false
  }
});

let t5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".top-trend",
    start: "top bottom",
    end: "40% 70%",
    scrub: true,
    markers: false
  }
});

t3.fromTo(".uct", {x: 900, opacity: 0, duration: 1}, {x: 0, opacity: 1, duration: 1});
t4.fromTo(".private", {x: -900, opacity: 0, duration: 1}, {x: 0, opacity: 1, duration: 1});
t5.fromTo(".top-trend", {x: 900, opacity: 0, duration: 1}, {x: 0, opacity: 1, duration: 1});
