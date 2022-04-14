// import "../styles.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { GammaCorrectionShader } from "three/examples/jsm/shaders/GammaCorrectionShader.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { RGBShiftShader } from "three/examples/jsm/shaders/RGBShiftShader.js";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


import imghead from './Logo1.png';
import hellothere from './hellothere.png';
import galaxyimg from './galaxy4.jpg';
// import normal from './normal.jpg'
// import earth1 from './earth11.jpg';
// import earth2 from './earth2.jpg';
// import earth3 from './earth3.jpg';






const TEXTURE_PATH = "https://res.cloudinary.com/dg5nsedzw/image/upload/v1641657168/blog/vaporwave-threejs-textures/grid.png";
const DISPLACEMENT_PATH = "https://res.cloudinary.com/dg5nsedzw/image/upload/v1641657200/blog/vaporwave-threejs-textures/displacement.png";
const METALNESS_PATH = "https://res.cloudinary.com/dg5nsedzw/image/upload/v1641657200/blog/vaporwave-threejs-textures/metalness.png";

// const IMG_TEXTURE = "https://res.cloudinary.com/dg5nsedzw/image/upload/v1641657168/blog/vaporwave-threejs-textures/grid.png";
const IMG_TEXTURE = imghead;
const HELLO_TEXTURE = hellothere;
const GALAXY_TEXTURE = galaxyimg;
const NORMAL_TEXTURE = galaxyimg;

// Textures
const textureLoader = new THREE.TextureLoader();
const gridTexture = textureLoader.load(TEXTURE_PATH);
const terrainTexture = textureLoader.load(DISPLACEMENT_PATH);
const metalnessTexture = textureLoader.load(METALNESS_PATH);
const Imgtexture = textureLoader.load(IMG_TEXTURE);
const Hellotexture = textureLoader.load(HELLO_TEXTURE);
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








// Hellothere Image
// const geo_hello = new THREE.PlaneGeometry(2, 0.5);
// const mat_hello = new THREE.MeshBasicMaterial({
//     map: Imgtexture,
//     transparent: true
// })
// const helloplane = new THREE.Mesh(geo_hello, mat_hello);
// scene.add(helloplane)
// helloplane.position.z += 5
// helloplane.position.y += 0.1










// Video
//Get your video element:
// const video = document.getElementById('video');
// const videoTexture = new THREE.VideoTexture(video);
// const videoMaterial =  new THREE.MeshBasicMaterial( {
//     map: videoTexture,
//     side: THREE.FrontSide,
//     toneMapped: false,
//     transparent: true
// } );
// const screen = new THREE.PlaneGeometry(2, 2);
// const videoScreen = new THREE.Mesh(screen, videoMaterial);
// scene.add(videoScreen);
// videoScreen.position.z = 3










//Load background texture
// const loader = new THREE.TextureLoader();
// loader.load(galaxyimg, function (texture) {
//     scene.background = texture;
// });







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
const particlesCnt = 10000;

const posArray = new Float32Array(particlesCnt * 3);
// xyz, xyz, xyz, xyz

for (let i = 0; i < particlesCnt * 3; i++) {
    // posArray[i] = Math.random();
    // posArray[i] = Math.random() - 0.5
    posArray[i] = (Math.random() - 0.5) * 5;  // multiple with certain number for spreading
}
particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3))

// Materials

const material2 = new THREE.PointsMaterial({ size: '0.005', color: 'white' })
const particlesaterial = new THREE.PointsMaterial({
    size: '0.005',
    // map: cross,
    // transparent: true,
    // color: 'white'
})

material2.color = new THREE.Color(0xffffff);
const particlesMesh = new THREE.Points(particlesGeo, particlesaterial)
scene.add(particlesMesh)















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









// Sphere mesh

const geo11 = new THREE.TetrahedronGeometry(15, 64, 31)
const mat11 = new THREE.MeshNormalMaterial({
    wireframe: true,
    transparent: true
})
const sphere111 = new THREE.Mesh(geo11, mat11);
scene.add(sphere111);
sphere111.rotation.x = -Math.PI * 0.5;
sphere111.position.y = 0.5;
sphere111.position.z = 15;















// Solar system


// const sunGeo = new THREE.SphereGeometry(16, 30, 30);
// const sunMat = new THREE.MeshBasicMaterial({
//     map: textureLoader.load(sunTexture)
// });
// const sun = new THREE.Mesh(sunGeo, sunMat);
// scene.add(sun);

// function createPlanete(size, texture, position, ring) {
//     const geo = new THREE.SphereGeometry(size, 30, 30);
//     const mat = new THREE.MeshStandardMaterial({
//         map: textureLoader.load(texture)
//     });
//     const mesh = new THREE.Mesh(geo, mat);
//     const obj = new THREE.Object3D();
//     obj.add(mesh);
//     if (ring) {
//         const ringGeo = new THREE.RingGeometry(
//             ring.innerRadius,
//             ring.outerRadius,
//             32);
//         const ringMat = new THREE.MeshBasicMaterial({
//             map: textureLoader.load(ring.texture),
//             side: THREE.DoubleSide
//         });
//         const ringMesh = new THREE.Mesh(ringGeo, ringMat);
//         obj.add(ringMesh);
//         ringMesh.position.x = position;
//         ringMesh.rotation.x = -0.5 * Math.PI;
//     }
//     scene.add(obj);
//     mesh.position.x = position;
//     return { mesh, obj }
// }

// const mercury = createPlanete(3.2, mercuryTexture, 28);
// const venus = createPlanete(5.8, venusTexture, 44);
// const earth = createPlanete(6, earthTexture, 62);
// const mars = createPlanete(4, marsTexture, 78);
// const jupiter = createPlanete(12, jupiterTexture, 100);
// const saturn = createPlanete(10, saturnTexture, 138, {
//     innerRadius: 10,
//     outerRadius: 20,
//     texture: saturnRingTexture
// });
// const uranus = createPlanete(7, uranusTexture, 176, {
//     innerRadius: 7,
//     outerRadius: 12,
//     texture: uranusRingTexture
// });
// const neptune = createPlanete(7, neptuneTexture, 200);
// const pluto = createPlanete(2.8, plutoTexture, 216);


// Solar system End





















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

// camera.position.set(-90, 140, 140);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;








// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
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




// Animate
const tick = () => {
    const elapsedTime = clock.getElapsedTime();

    // Update controls
    // controls.update();


    sphere11.rotation.x = .07 * elapsedTime
    sphere11.rotation.y = .07 * elapsedTime

    boxMesh.rotation.y = .5 * elapsedTime

    boxMesh1.rotation.x = .5 * elapsedTime
    boxMesh1.rotation.y = .5 * elapsedTime

    boxMesh11.rotation.x = .5 * elapsedTime
    boxMesh11.rotation.y = .5 * elapsedTime




    //Self-rotation

    // sun.rotateY(0.0004);
    // mercury.mesh.rotateY(0.0004);
    // venus.mesh.rotateY(0.0002);
    // earth.mesh.rotateY(0.002);
    // mars.mesh.rotateY(0.0018);
    // jupiter.mesh.rotateY(0.004);
    // saturn.mesh.rotateY(0.0038);
    // uranus.mesh.rotateY(0.003);
    // neptune.mesh.rotateY(0.0032);
    // pluto.mesh.rotateY(0.0008);

    //Around-sun-rotation

    // mercury.obj.rotateY(0.04);
    // venus.obj.rotateY(0.015);
    // earth.obj.rotateY(0.01);
    // mars.obj.rotateY(0.008);
    // jupiter.obj.rotateY(0.002);
    // saturn.obj.rotateY(0.0009);
    // uranus.obj.rotateY(0.0004);
    // neptune.obj.rotateY(0.0001);
    // pluto.obj.rotateY(0.00007);


    // Render
    renderer.render(scene, camera);
    // effectComposer.render();

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
};

tick();