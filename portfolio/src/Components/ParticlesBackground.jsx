import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = (props) => {
  const [init, setInit] = useState(false);
  
  useEffect(() => {
    console.log("🔧 ParticlesBackground mounted");
    let mounted = true;
    
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      if (mounted) {
        setInit(true);
      }
    }).catch(error => {
      console.error("Particles initialization failed:", error);
    });

    return () => {
      mounted = false; // Cleanup to prevent state updates on unmounted component
    };
  }, []);

  const particlesLoaded = (container) => {
    console.log("✅ Particles loaded", container);
  };

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "transparent" }},
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "repulse" },
          onHover: { enable: true, mode: 'repulse' },
        },
        modes: {
          push: { distance: 200, duration: 15 },
          grab: { distance: 150 },
          repulse: { distance: 120, duration: 15 },
        },
      },
      particles: {
        color: { value: "#7c3aed" },
        links: {
          color: "#7c3aed",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "bounce" },
          random: true,
          speed: 2, // Reduced speed for better visibility
          straight: false,
        },
        number: {
          density: { enable: true, area: 800 },
          value: 60, // Reduced number for better performance
        },
        opacity: { value: 0.6 }, // Increased opacity
        shape: { type: "circle" },
        size: { value: { min: 2, max: 4 } }, // Slightly larger
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div className="relative w-full min-h-screen bg-gray-50"> {/* Added background fallback */}
      {init && (
        <Particles
          id={props.id}
          particlesLoaded={particlesLoaded}
          options={options}
          className="absolute inset-0"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0
          }}
        />
      )}
      
      {/* Content container */}
      <div className="relative z-10 w-full h-full min-h-screen">
        {props.children}
      </div>
    </div>
  );
};

export default ParticlesBackground;