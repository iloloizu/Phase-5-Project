import React from 'react'
import "../index.css"

//three.js
import * as THREE from 'three';
import {Canvas} from "@react-three/fiber"
import Jordan from "./ThreeJS Components/Jordan.js"
import { OrbitControls } from "@react-three/drei"

function Three() {

  return (
    <div className='shoe-box'>
        <Canvas className='canvas' >
            <Jordan/>
            <ambientLight intensity={0.5}/>
            <directionalLight position={[-2,5,2]} intensity={1}/>
            <OrbitControls enableZoom={false} />
        </Canvas>

    </div>
  )
}

export default Three