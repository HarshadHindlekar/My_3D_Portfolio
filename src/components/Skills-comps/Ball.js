import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
    Decal,
    Float,
    OrbitControls,
    Preload,
} from "@react-three/drei";
import * as THREE from 'three';

import CanvasLoader from "../Contact-Comps/Loader";

const fallbackTextureUrl = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" rx="48" fill="%23e5e7eb"/><path d="M64 128h128" stroke="%239ca3af" stroke-width="18" stroke-linecap="round"/><circle cx="128" cy="128" r="54" fill="%23fff" opacity="0.7"/></svg>';

const Ball = (props) => {
    const meshRef = useRef();
    const [decal, setDecal] = React.useState(null);

    React.useEffect(() => {
        let cancelled = false;

        const loader = new THREE.TextureLoader();
        loader.setCrossOrigin('anonymous');

        const url = typeof props.imgUrl === 'string' && props.imgUrl.length > 0 ? props.imgUrl : fallbackTextureUrl;

        loader.load(
            url,
            (texture) => {
                if (cancelled) return;
                texture.needsUpdate = true;
                setDecal(texture);
            },
            undefined,
            () => {
                if (cancelled) return;
                loader.load(fallbackTextureUrl, (texture) => {
                    if (cancelled) return;
                    texture.needsUpdate = true;
                    setDecal(texture);
                });
            }
        );

        return () => {
            cancelled = true;
        };
    }, [props.imgUrl]);

    useFrame((state) => {
        if (!meshRef.current) return;
        meshRef.current.rotation.y = state.clock.elapsedTime * 0.45;
        meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.7) * 0.16;
    });

    return (
        <Float speed={1.55} rotationIntensity={0.8} floatIntensity={1.7}>
            <ambientLight intensity={0.45} />
            <pointLight position={[3, 3, 3]} intensity={2.8} color="#64f4ac" />
            <pointLight position={[-3, -2, 2]} intensity={1.8} color="#5fd7ff" />
            <mesh ref={meshRef} castShadow receiveShadow scale={2.65}>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial
                    color='#d7e5e4'
                    roughness={0.42}
                    metalness={0.22}
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading />
                {decal ? (
                    <Decal
                        position={[0, 0, 1]}
                        rotation={[2 * Math.PI, 0, 6.25]}
                        scale={1}
                        map={decal}
                        flatShading />
                ) : null}
            </mesh>
        </Float>
    );
};

const BallCanvas = ({ icon }) => {
    return (
        <Canvas
            frameloop='always'
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true, antialias: true, alpha: true }}
            camera={{ position: [0, 0, 7], fov: 45 }}
            style={{
                width: '100%',
                height: '100%',
                display: 'block',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls 
                    enableZoom={false}
                    enablePan={false}
                    enableRotate={false}
                />
                <Ball imgUrl={icon} />
            </Suspense>
            <Preload all />
        </Canvas>
    )
};

export default BallCanvas;
