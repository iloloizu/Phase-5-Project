import React from 'react'
import {Canvas} from "@react-three/fiber"
import Jordan from "./Jordan.js"
import { OrbitControls } from "@react-three/drei"

function PlainShoe() {
  return (
        // <div className="canvas-holder">
        <div>
            <Canvas className='canvas' >
                <Jordan/>
                <ambientLight intensity={0.5}/>
                <directionalLight position={[-2,5,2]} intensity={1}/>
                <OrbitControls enableZoom={false} autoRotate={true}/>
            </Canvas>
        </div>
  )
}

export default PlainShoe;