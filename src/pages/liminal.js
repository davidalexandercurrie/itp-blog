import React, { useRef, useState, useEffect, Suspense } from "react"
import { Canvas, useFrame, useThree, useLoader } from "react-three-fiber"
import * as THREE from "three"
import { Html, PositionalAudio } from "@react-three/drei"
import { Link } from "gatsby"

const sites = [
  "https://degenerative-supernova.glitch.me/",
  "https://text-to-pizza.herokuapp.com",
  "https://www.youtube.com/embed/Jx5slkcBc8I?mute=1&autoplay=1&loop=1&playlist=Jx5slkcBc8I",
  "https://www.youtube.com/embed/nZDkspwtAzE?mute=1&autoplay=1&loop=1&playlist=nZDkspwtAzE",
  "https://multimono.space",
  "https://sentiment-synthesis.herokuapp.com/",
  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/171273618&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
  "https://www.youtube.com/embed/y-eJfYD1coo?mute=1&autoplay=1&loop=1&playlist=y-eJfYD1coo",
  "https://www.youtube.com/embed/JKVTSWfQ_YQ?mute=1&autoplay=1&loop=1&playlist=JKVTSWfQ_YQ",
  "https://up-cycle.glitch.me",
  "https://littlespaceship.herokuapp.com/",
  "https://davidalexandercurrie.github.io/webmidifun/",
  "https://socket-av.herokuapp.com",
  "https://davidalexandercurrie.github.io/ComPoser/",
  "https://spooky-ghost-game.herokuapp.com/",
]

function Dolly() {
  // This one makes the camera move in and out
  useFrame(({ clock, camera }) => {
    camera.position.z = 50
    camera.position.x = -100 + clock.getElapsedTime() * 3
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
    ref.current.position.y = 12 - ref.current.position.z * 30
  })
  return (
    <>
      <mesh ref={ref} position={props.pos}>
        <Html center>
          <iframe
            className="liminal-iframe"
            ref={iframe}
            src={props.url}
          ></iframe>
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
      <Suspense fallback={null}>
        <mesh ref={ref} position={props.pos}>
          <Html center>
            <Link to="/">
              <p id="exit">⬅ exit to website</p>
            </Link>
          </Html>
          {/* <PlaySound url="d18.ogg" /> */}
        </mesh>
      </Suspense>
    </>
  )
}

function PlaySound({ url }) {
  // This component creates a suspense block, blocking execution until
  // all async tasks (in this case PositionAudio) have been resolved.
  const sound = useRef()
  return <PositionalAudio url={url} ref={sound} />
}

function Light({ brightness, color }) {
  return (
    <>
      <rectAreaLight
        width={3}
        height={3}
        color={color}
        intensity={brightness}
        position={[-2, 0, -5]}
        lookAt={[0, 0, 0]}
        penumbra={1}
        castShadow
      />
    </>
  )
}

function BackDrop() {
  return (
    <mesh receiveShadow position={[0, -1, -5]}>
      <planeBufferGeometry attach="geometry" args={[5000, 2000]} />
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  )
}

function Lines({ ...props }) {
  return (
    <mesh
      receiveShadow
      position={[0, props.y, 20]}
      rotation={[1, Math.random() * 0.1 - 0.05, 0]}
    >
      <planeGeometry attach="geometry" args={[2000, 1, 1]} />
      <meshBasicMaterial color={"blue"} attach="material" />
    </mesh>
  )
}

export default function liminal() {
  return (
    <>
      <Canvas>
        <Suspense fallback={() => <div>hi</div>}>
          <BackDrop />
          <Light brightness={5} color={"white"} />
          <fog attach="fog" args={["blue", 50, 0]} />
          {sites.map((site, index) => (
            <Cube
              url={site}
              pos={[-100 + 50 * index, 0, Math.random() * 1 - 0.3]}
            />
          ))}
          {sites.map((site, index) => (
            <Lines y={index * 1 - 20} />
          ))}
          {sites.map((site, index) => (
            <Lines y={index * 1 - 20} />
          ))}
          {sites.map((site, index) => (
            <Lines y={index * 1 - 20} />
          ))}
          <LinkHome pos={[0, 50, 0]} />
          <Dolly />
        </Suspense>
      </Canvas>
    </>
  )
}
