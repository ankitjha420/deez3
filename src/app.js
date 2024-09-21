// imports ->
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { getPlane } from './components/plane.js'
import { getCamera } from "./components/camera.js"
import Stats from 'stats.js'


// constants ->
const width = window.innerWidth
const height = window.innerHeight

function initScene (element) {
    const camera = getCamera()
    const scene = new THREE.Scene()
    const mesh = getPlane()
    scene.add(mesh)
    scene.add(camera)

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(width, height)
    const controls = new OrbitControls(camera, renderer.domElement)
    const stats = new Stats()
    document.body.appendChild(stats.dom)
    renderer.setAnimationLoop(animate)
    element.appendChild(renderer.domElement)

    function animate () {
        requestAnimationFrame(animate)
        stats.begin()
        if (mesh.material.type === "ShaderMaterial") {
            mesh.material.uniforms.time.value += 0.05
            mesh.material.uniforms.resolution.value.set(window.innerWidth, window.innerHeight)
        }
        controls.update()
        renderer.render(scene, camera)
        stats.end()
    }
}

// where be the big dog?
function main () {
    const el = document.getElementById('app')
    initScene(el)
}

main()
console.log("done")