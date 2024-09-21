import * as THREE from "three"
import vertexShader from "../shaders/vertex.glsl"
import fragmentShader from "../shaders/fragment.glsl"

export function getPlane () {
    const plane = new THREE.PlaneGeometry(1, 1)
    const material = getMaterial()
    return new THREE.Mesh(plane, material)
}

const getMaterial = () => {
    return new THREE.ShaderMaterial({
        uniforms: {
            time: { value: 1.0 },
            resolution: { value: new THREE.Vector2() }
        },
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        side: THREE.DoubleSide
    })
}

const getNormalMaterial = () => {
    return new THREE.MeshNormalMaterial({
        color: 0x00ff00,
        side: THREE.DoubleSide
    })
}