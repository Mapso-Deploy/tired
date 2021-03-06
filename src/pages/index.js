import React from "react"
import { Canvas } from "react-three-fiber"
import Model from "../components/model"
import Controls from "../components/controls"
import GLTF from "../components/gatsby.gltf"
import "../style.css"

export default () => (
  <main>
    <Canvas camera={{ position: [0, 0, 300] }}>
      <ambientLight intensity={0.7} />
      <Model url={GLTF} />
      <Controls
        autoRotate
        enablePan={false}
        enableZoom={false}
        enableDamping
        dampingFactor={0.5}
        rotateSpeed={50}
        maxPolarAngle={Math.PI / 3}
        minPolarAngle={Math.PI / 3}
      />
    </Canvas>
  </main>
)
