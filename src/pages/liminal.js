import React, { useRef } from "react"
import { Canvas, useFrame } from "react-three-fiber"
import { Html } from "@react-three/drei"
import { Link } from "gatsby"

const sites = [
  "https://degenerative-supernova.glitch.me/",
  "https://socket-av.herokuapp.com",
  "https://multimono.space",
  "https://up-cycle.glitch.me",
  "https://text-to-pizza.herokuapp.com",
  "https://www.youtube.com/embed/y-eJfYD1coo",
  "https://www.youtube.com/embed/Jx5slkcBc8I",
  "https://sentiment-synthesis.herokuapp.com/",
  "https://spooky-ghost-game.herokuapp.com/",
]

function Dolly() {
  // This one makes the camera move in and out
  useFrame(({ clock, camera }) => {
    camera.position.z = 50
    camera.position.x = -100 + clock.getElapsedTime() * 50
  })
  return null
}

function Cube({ ...props }) {
  const ref = useRef()
  const iframe = useRef()
  useFrame(({ clock, camera }) => {
    // ref.current.rotation.x = ref.current.rotation.y += 0.01;
    iframe.current.width = `${
      400 - (camera.position.z - ref.current.position.z * 400)
    }px`
    iframe.current.height = `${
      400 - (camera.position.z - ref.current.position.z * 400)
    }px`
  })
  return (
    <>
      <mesh ref={ref} position={props.pos}>
        <Html center>
          <iframe ref={iframe} src={props.url}></iframe>
        </Html>
      </mesh>
    </>
  )
}
function LinkHome({ ...props }) {
  const ref = useRef()
  useFrame(({ clock, camera }) => {
    ref.current.position.x = camera.position.x
    ref.current.position.y = camera.position.y + 25
    ref.current.position.z = 10
  })
  return (
    <>
      <mesh ref={ref} position={props.pos}>
        <Html center>
          <Link to="/">
            <p id="exit">⬅ exit to website</p>
          </Link>
        </Html>
      </mesh>
    </>
  )
}

function Light({ brightness, color }) {
  return (
  <>
     
    <rectAreaLight
      width={3}
      height={3}
      color={color}
      intensity={brightness}
      position={[-2, 0, 5]}
      lookAt={[0, 0, 0]}
      penumbra={1}
      castShadow
    /></>
  )
}

function BackDrop() {
  return (
    <mesh receiveShadow position={[0, -1, -5]}>
      <planeBufferGeometry attach="geometry" args={[5000, 2000]} />
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  );
}

export default function liminal() {
  return (
    <>
      <Canvas>
      <BackDrop />
        <Light brightness={10} color={"white"} />
        <fog attach="fog" args={['blue', 50, 0]} />
        {sites.map((site, index) => (
          <Cube url={site} pos={[-100 + 50 * index, 0, 0]} />
        ))}

        <mesh receiveShadow position={[0, -20, -5]} rotation={[1, 0, 0]}>
          <planeGeometry attach="geometry" args={[1000, 20, 1]} />
          <meshBasicMaterial color={"magenta"} attach="material" />
        </mesh>
        <LinkHome pos={[0, 50, 0]} />
        <Dolly />
      </Canvas>
    </>
  )
}
