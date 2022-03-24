import React from 'react'

//three.js
import {Canvas} from "@react-three/fiber"
import Jordan from "./ThreeJS Components/Jordan.js"
import { OrbitControls } from "@react-three/drei"

function Three() {

  return (
    <div className='shoe-container'>
        <div className='shoe-box'>
            <Canvas className='canvas' >
                <Jordan/>
                <ambientLight intensity={0.5}/>
                <directionalLight position={[-2,5,2]} intensity={1}/>
                <OrbitControls enableZoom={false} autoRotate={true}/>
            </Canvas>
        </div>
    </div>
  )
}

export default Three;