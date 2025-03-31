import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  // Adjust scale based on screen size
  const scale = isMobile ? 1.0 : 1.75; // Increased scale for both mobile and desktop
  const position = isMobile ? [0, -2, -1] : [0, -4.0, -1.5]; // Adjusted position

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      {!isMobile && (
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={isMobile ? 512 : 1024}
        />
      )}
      <pointLight intensity={isMobile ? 0.8 : 1} />
      <primitive
        object={computer.scene}
        scale={scale} // Using the adjusted scale
        position={position} // Using the adjusted position
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const canvasRef = useRef();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    if (canvasRef.current && isMobile) {
      const handleTouchStart = () => {
        canvasRef.current.style.touchAction = "auto";
      };

      const handleTouchEnd = () => {
        canvasRef.current.style.touchAction = "pan-y";
      };

      canvasRef.current.addEventListener("touchstart", handleTouchStart);
      canvasRef.current.addEventListener("touchend", handleTouchEnd);
      canvasRef.current.addEventListener("touchcancel", handleTouchEnd);

      return () => {
        canvasRef.current.removeEventListener("touchstart", handleTouchStart);
        canvasRef.current.removeEventListener("touchend", handleTouchEnd);
        canvasRef.current.removeEventListener("touchcancel", handleTouchEnd);
      };
    } else if (canvasRef.current) {
      canvasRef.current.style.touchAction = "auto";
    }
  }, [isMobile]);

  return (
    <Canvas
      ref={canvasRef}
      frameloop="demand"
      shadows
      dpr={isMobile ? [1, 1.5] : [1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ pointerEvents: "auto" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enabled={true}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;