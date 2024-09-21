import * as THREE from 'three'

export function getCamera() {
    const camera = new THREE.PerspectiveCamera(70,
        window.innerWidth / window.innerHeight,
        0.01,
        10
    )
    camera.position.z = 2
    return camera
}