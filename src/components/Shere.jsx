import React from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { Canvas } from '@react-three/fiber'
// import { AmbientLight } from 'three'
// import { DirectionalLight } from 'three'
import texture from '../assets/texture.jpg'
function Sphere() {
    const textureMap = useLoader(TextureLoader, texture)
    return (
        <div className="App">
            <ambientLight intensity={5} />
            <directionalLight position={[-2, 100, 2]} intensity={1} />
            <Canvas className='canvas1'>
                <mesh >
                    <sphereBufferGeometry attach='geometry' args={[2, 32]} />
                    <meshStandardMaterial map={textureMap} />
                </mesh>
                {/* <Sphere/> */}
            </Canvas>
        </div>
    )
}

export default Sphere