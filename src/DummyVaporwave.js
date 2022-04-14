// import "../styles.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { GammaCorrectionShader } from "three/examples/jsm/shaders/GammaCorrectionShader.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { RGBShiftShader } from "three/examples/jsm/shaders/RGBShiftShader.js";

import imghead from './Logo1.png';
import galaxyimg from './galaxy4.jpg';
import normal from './normal.jpg'

import earth1 from './earth11.jpg';
import earth2 from './earth2.jpg';
import earth3 from './earth3.jpg';


const TEXTURE_PATH = "https://res.cloudinary.com/dg5nsedzw/image/upload/v1641657168/blog/vaporwave-threejs-textures/grid.png";
const DISPLACEMENT_PATH = "https://res.cloudinary.com/dg5nsedzw/image/upload/v1641657200/blog/vaporwave-threejs-textures/displacement.png";
const METALNESS_PATH = "https://res.cloudinary.com/dg5nsedzw/image/upload/v1641657200/blog/vaporwave-threejs-textures/metalness.png";

// const IMG_TEXTURE = "https://res.cloudinary.com/dg5nsedzw/image/upload/v1641657168/blog/vaporwave-threejs-textures/grid.png";
const IMG_TEXTURE = imghead;
const GALAXY_TEXTURE = galaxyimg;
const NORMAL_TEXTURE = galaxyimg;

// Textures
const textureLoader = new THREE.TextureLoader();
const gridTexture = textureLoader.load(TEXTURE_PATH);
const terrainTexture = textureLoader.load(DISPLACEMENT_PATH);
const metalnessTexture = textureLoader.load(METALNESS_PATH);
const Imgtexture = textureLoader.load(IMG_TEXTURE);
const Galaxytexture = textureLoader.load(GALAXY_TEXTURE);
const Normaltexture = textureLoader.load(NORMAL_TEXTURE);

const canvas = document.querySelector("canvas.vaporwave");

// Scene
const scene = new THREE.Scene();

const geo_img = new THREE.PlaneGeometry(1.2, 0.2);
const mat_img = new THREE.MeshBasicMaterial({
    map: Imgtexture,
    transparent: true,
    opacity: 1,
})
// console.log(Imgtexture);
const plane1 = new THREE.Mesh(geo_img, mat_img);
scene.add(plane1)
// plane1.position.z += 0.2
// plane1.position.x += -0.1
plane1.position.y += 0.1








//Load background texture
const loader = new THREE.TextureLoader();
loader.load(galaxyimg, function (texture) {
    scene.background = texture;
});







// Galaxy

// const geo_galaxy = new THREE.SphereGeometry(1, 10, 10)
// const mat_galaxy = new THREE.MeshBasicMaterial({
//     map: Galaxytexture,
//     transparent: true,
//     opacity: 1,
// })
// console.log(Galaxytexture);
// const sphere_galaxy = new THREE.Mesh(geo_galaxy, mat_galaxy);
// scene.add(sphere_galaxy);
// sphere_galaxy.rotation.x = -Math.PI * 0.5;
// sphere_galaxy.position.y = 0.1;
// sphere_galaxy.position.z = 2;












// Earth

// const earthTexture = new THREE.TextureLoader().load('earth1.jpg');
// const normalTexture1 = new THREE.TextureLoader().load('normal.jpg');

// const geo_earth = new THREE.SphereGeometry(15, 32, 16 );
// const mat_earth = new THREE.MeshStandardMaterial({
//     map: Galaxytexture,
//     normalMap: Normaltexture
// })
// const earth = new Mesh(geo_earth, mat_earth)

// scene.add(earth);





// let directionalLight = new THREE.DirectionalLight(0xffffff, 2);
// directionalLight.position.set(10, 10, 10);
// scene.add(directionalLight);

// const earthGeometry = new THREE.SphereGeometry(2, 16, 16);
// const earthMaterial = new THREE.MeshBasicMaterial({
//     specular: 0x333333,
//     shininess: 5,
//     map: textureLoader.load(earth1),
//     specularMap: textureLoader.load(earth2),
//     normalMap: textureLoader.load(earth3),
//     normalScale: new THREE.Vector2(0.85, 0.85)
// });
// earth = new THREE.Mesh(earthGeometry, earthMaterial);
// scene.add(earth);

// earth.position.z = 5;
// earth.position.setY(2);













// Fog
const fog = new THREE.Fog("#000000", 1, 2.5);
scene.fog = fog;

// Objects
const geometry = new THREE.PlaneGeometry(1, 2, 24, 24);
const material = new THREE.MeshStandardMaterial({
    map: gridTexture,
    displacementMap: terrainTexture,
    displacementScale: 0.4,
    /**
     * Add a metalnessMap to our material that will tell the renderer
     * where the "rough" parts of our terrains are
     */
    metalnessMap: metalnessTexture,
    /**
     * Make the terrain very very metallic so it will reflect the light
     * and not diffuse it: it will stay black
     */
    metalness: 0.6,
    /**
     * Make the terrain a bit rough so the rough parts will diffuse the light
     * well
     */
    // roughness: 0.5,
    color: 'white'
});

const plane = new THREE.Mesh(geometry, material);
plane.rotation.x = -Math.PI * 0.5;
plane.position.y = -0.1;
plane.position.z = 0.15;


const plane2 = new THREE.Mesh(geometry, material);
plane2.rotation.x = -Math.PI * 0.5;
plane2.position.y = -0.1;
plane2.position.z = -1.85;
// 0.15 - 2 (the length of the first plane)

scene.add(plane);
scene.add(plane2);






// Box Geometry

const boxGeometry = new THREE.BoxGeometry(5, 5, 1, 5, 1, 16);
const boxMaterial = new THREE.MeshNormalMaterial({
    wireframe: true
})
const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial)
scene.add(boxMesh)
// console.log(boxMesh);


// Box Geometry

const boxGeometry1 = new THREE.BoxGeometry(5, 5, 1, 5, 1, 16);
const boxMaterial1 = new THREE.MeshNormalMaterial({
    wireframe: true
})
const boxMesh1 = new THREE.Mesh(boxGeometry1, boxMaterial1)
scene.add(boxMesh1)
boxMesh1.position.x = 10;
// console.log(boxMesh);


// Box Geometry

const boxGeometry11 = new THREE.BoxGeometry(5, 5, 1, 5, 1, 16);
const boxMaterial11 = new THREE.MeshNormalMaterial({
    wireframe: true
})
const boxMesh11 = new THREE.Mesh(boxGeometry11, boxMaterial11)
scene.add(boxMesh11)
boxMesh11.position.x = -10;
// console.log(boxMesh);




// Stars
const particlesGeo = new THREE.BufferGeometry;
const particlesCnt = 5000;

const posArray = new Float32Array(particlesCnt * 3);
// xyz, xyz, xyz, xyz

for (let i = 0; i < particlesCnt * 3; i++) {
    // posArray[i] = Math.random();
    // posArray[i] = Math.random() - 0.5
    posArray[i] = (Math.random() - 0.5) * 5;  // multiple with certain number for spreading
}
particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3))

// Materials

const material2 = new THREE.PointsMaterial({ size: '0.005' })
const particlesaterial = new THREE.PointsMaterial({
    size: '0.005',
    // map: cross,
    // transparent: true,
    color: 'blue'
})

material2.color = new THREE.Color(0xffffff);
const particlesMesh = new THREE.Points(particlesGeo, particlesaterial)
scene.add(particlesMesh)






// Random function with normal dustribution.
// camera.position.z = 1500
// const normalRandom = (mean, std) => {
//     let n = 0

//     for (let i = 1; i <= 12; i++) {
//       n += Math.random()
//     }

//     return (n - 6) * std + mean
// }

// const geometrygalaxy = new THREE.Geometry()
// const galaxySize = 1000

// // Generate particles for spiral galaxy:
// for (let i = 0; i < 1000; i++) {
//   var theta = THREE.Math.randFloatSpread(360) 
//   var phi = THREE.Math.randFloatSpread(360)
//   const distance = THREE.Math.randFloatSpread(galaxySize)

//   // Here I need generate spiral arms instead of sphere.
//   geometrygalaxy.vertices.push(new THREE.Vector3(
//   	 distance * Math.sin(theta) * Math.cos(phi),
//      distance * Math.sin(theta) * Math.sin(phi),
//      distance * Math.cos(theta) / 10
//   ))
// }

// const spiralGalaxy = new THREE.Points(geometrygalaxy, new THREE.PointsMaterial({ color: 0xffffff }))
// scene.add(spiralGalaxy)



















// Sphere mesh

const geo1 = new THREE.SphereGeometry(1, 10, 10)
const mat1 = new THREE.MeshNormalMaterial({
    wireframe: true
})
const sphere11 = new THREE.Mesh(geo1, mat1);
scene.add(sphere11);
sphere11.rotation.x = -Math.PI * 0.5;
sphere11.position.y = 0.1;
sphere11.position.z = 1;

// Light
// Ambient Light
const ambientLight = new THREE.AmbientLight("#ffffff", 10);
scene.add(ambientLight);

// Right Spotlight aiming to the left
const spotlight = new THREE.SpotLight("#d53c3d", 20, 25, Math.PI * 0.1, 0.25);
spotlight.position.set(0.5, 0.75, 2.2);
// Target the spotlight to a specific point to the left of the scene
spotlight.target.position.x = -0.25;
spotlight.target.position.y = 0.25;
spotlight.target.position.z = 0.25;
scene.add(spotlight);
scene.add(spotlight.target);

// Left Spotlight aiming to the right
const spotlight2 = new THREE.SpotLight("#d53c3d", 20, 25, Math.PI * 0.1, 0.25);
spotlight2.position.set(-0.5, 0.75, 2.2);
// Target the spotlight to a specific point to the right side of the scene
spotlight2.target.position.x = 0.25;
spotlight2.target.position.y = 0.25;
spotlight2.target.position.z = 0.25;
scene.add(spotlight2);
scene.add(spotlight2.target);


// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
};

// Camera
const camera = new THREE.PerspectiveCamera(
    75,
    sizes.width / sizes.height,
    0.01,
    20
);
camera.position.x = 0;
camera.position.y = 0.03;
camera.position.z = 0.5;

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// renderer.setClearColor(new THREE.Color('#f7f5ee'), 1)

// Post Processing
const effectComposer = new EffectComposer(renderer);
effectComposer.setSize(sizes.width, sizes.height);
effectComposer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const renderPass = new RenderPass(scene, camera);
effectComposer.addPass(renderPass);

const rgbShiftPass = new ShaderPass(RGBShiftShader);
rgbShiftPass.uniforms["amount"].value = 0.0015;

effectComposer.addPass(rgbShiftPass);

const gammaCorrectionPass = new ShaderPass(GammaCorrectionShader);
effectComposer.addPass(gammaCorrectionPass);

// Event listener to handle screen resize
window.addEventListener("resize", () => {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Update effect composer
    effectComposer.setSize(sizes.width, sizes.height);
    effectComposer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

const clock = new THREE.Clock();



// Scroll Animation

function moveCamera() {
    const t = document.body.getBoundingClientRect().top;     // It will give me the viewport
    console.log(t);
    camera.position.z = t * -0.01;
    camera.position.x = t * 2;
    // camera.rotation.y = t * -0.0002;
}

document.body.onscroll = moveCamera;
moveCamera();

// Animate
const tick = () => {
    // const elapsedTime = clock.getElapsedTime();

    const t = document.body.getBoundingClientRect().top;     // It will give me the viewport
    console.log(t);
    camera.position.z = t * 5;

    // Update controls
    // controls.update();
    sphere11.rotation.x = .07 * t
    sphere11.rotation.y = .07 * t

    boxMesh.rotation.y = .5 * t

    boxMesh1.rotation.x = .5 * t
    boxMesh1.rotation.y = .5 * t

    boxMesh11.rotation.x = .5 * t
    boxMesh11.rotation.y = .5 * t


    earth.rotation.x = .5 * t
    earth.rotation.y = .5 * t

    // Render
    renderer.render(scene, camera);
    // effectComposer.render();

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
};

tick();
