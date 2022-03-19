import React from 'react'

//three.js
import * as THREE from 'three';
import {Canvas} from "@react-three/fiber"
import Box from './ThreeJS Components/Box';
import { OrbitControls } from "@react-three/drei"

function Three() {

    const canvas = document.getElementById("c");
    document.addEventListener("DOMContentLoaded", () => {
      canvas.style.opacity = 1;
    });

  return (
    <div>
        <Canvas className='canvas' id='c'>
            <Box/>
            <ambientLight intensity={0.5}/>
            <directionalLight position={[-2,5,2]} intensity={1}/>
            <OrbitControls/>
        </Canvas>

    hi
    </div>
  )
}

export default Three