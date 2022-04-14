// import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'


// Texture loader
const loader = new THREE.TextureLoader();
const cross = loader.load('./cross.png');

// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Objects
const geometry = new THREE.TorusGeometry(.7, .2, 16, 100);

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

const material = new THREE.PointsMaterial({ size: '0.005' })
const particlesaterial = new THREE.PointsMaterial({
    size: '0.005',
    // map: cross,
    // transparent: true,
    color: 'blue'
})

material.color = new THREE.Color(0xffffff);

const geo = new THREE.TorusGeometry(.7, .2, 16, 20);
const mate = new THREE.PointsMaterial({
    size: '0.002'
})
const mesh = new THREE.Points(geo, mate)
mesh.position.x = 1.5


const geo1 = new THREE.SphereGeometry(1, 10, 10)
const mat1 = new THREE.MeshNormalMaterial({
    wireframe: true
})
const sphere1 = new THREE.Mesh(geo1, mat1);
scene.add(sphere1);

// camera.position.z = 70


// Mesh
const sphere = new THREE.Points(geometry, material)
sphere.position.x = -1.5
const particlesMesh = new THREE.Points(particlesGeo, particlesaterial)
scene.add(sphere, particlesMesh, mesh)

// Lights

const pointLight = new THREE.PointLight(0xffffff, 0.1)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(pointLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 2
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor(new THREE.Color('#21282a'), 1)
// 1 is for opacity


document.addEventListener('mousemove', animateParticles)
let mouseX = 0
let mouseY = 0

function animateParticles(event) {
    mouseY = event.clientY
    mouseX = event.clientX
}

/**
 * Animate
 */

const clock = new THREE.Clock()

const tick = () => {

    const elapsedTime = clock.getElapsedTime()  // elapsedTime will give you how much time is passed

    // Update objects
    sphere.rotation.y = .5 * elapsedTime
    sphere.rotation.x = .5 * elapsedTime


    mesh.rotation.y = .5 * elapsedTime
    mesh.rotation.x = .5 * elapsedTime


    sphere1.rotation.y = .5 * elapsedTime

    particlesMesh.rotation.x = -.1 * elapsedTime

    if (mouseX > 0) {
        particlesMesh.rotation.x = -mouseY * (elapsedTime * 0.00008)
        particlesMesh.rotation.y = mouseX * (elapsedTime * 0.00008)
    }

    // Update Orbital Controls
    // controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()