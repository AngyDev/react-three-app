import React, { useEffect, useRef } from 'react';
import { Canvas, useThree } from "@react-three/fiber";
import { ResizeObserver } from "@juggle/resize-observer";
import * as THREE from "three";
import { TrackballControls } from "@react-three/drei";

function MyMesh() {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    //const material = new THREE.MeshBasicMaterial();
    //const mesh = new Mesh(geometry, material);
    return (
        <mesh geometry={geometry} aoM>
            <meshBasicMaterial color="yellow" aoMapIntensity={0.1} />
        </mesh>
    );
}

function Lights() {
    const { camera } = useThree();
    const trackballRef = useRef();
    const light = useRef();

    // the directionalLight follows the camera position
    useEffect(() => {
        trackballRef.current.addEventListener("change", () => {
            light.current.position.copy(camera.position);
        });
    }, [trackballRef]);

    return (
        <>
            <TrackballControls ref={trackballRef} rotateSpeed={5} zoomSpeed={1} />
            <ambientLight intensity={1} color={0xffffff} />
            <directionalLight
                ref={light}
                color={0xffffff}
                intensity={0.5}
                position={[1, 1, 1]}
                castShadow
                shadow-mapSize-width={512}
                shadow-mapSize-height={512}
                shadow-camera-near={0.5}
                shadow-camera-far={500}
            />
        </>
    );
}

export default function Three() {
    return (
        <Canvas className="canvas" resize={{ polyfill: ResizeObserver }}>
            <MyMesh />
            <Lights />
            <axesHelper args={20} />
        </Canvas>
    )
}
