"use client";

import { useRef, useMemo, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Function to create points along an arc
const createArc = (
  radius: number,
  theta1: number,
  theta2: number,
  phiStart: number,
  phiLength: number,
  density: number
) => {
  const points = [];
  const thetaStep = (theta2 - theta1) / Math.floor(density * (theta2 - theta1));
  const phiStep = phiLength / Math.floor(density * phiLength);

  for (let theta = theta1; theta <= theta2; theta += thetaStep) {
    for (let phi = phiStart; phi <= phiStart + phiLength; phi += phiStep) {
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      points.push(new THREE.Vector3(x, y, z));
    }
  }

  return points;
};

interface FormationProps {
  points: THREE.Vector3[];
  color: string;
  rotationAxis: THREE.Vector3;
  rotationSpeed: number;
  animationSpeed: number;
  mousePosition?: { x: number; y: number };
  fadeInOut?: boolean;
  initialRotation?: [number, number, number];
}

function Formation({
  points,
  color,
  rotationAxis,
  rotationSpeed,
  animationSpeed,
  mousePosition = { x: 0, y: 0 },
  fadeInOut = false,
  initialRotation
}: FormationProps) {
  const groupRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const opacityRef = useRef(1);
  const fadeDirectionRef = useRef(-1);

  // Integrate initialRotation prop or fallback to random initial angles on mount
  const randomInitials = useMemo(() => {
    return {
      rotationX: initialRotation ? initialRotation[0] : Math.random() * Math.PI * 2,
      rotationY: initialRotation ? initialRotation[1] : Math.random() * Math.PI * 2,
      rotationZ: initialRotation ? initialRotation[2] : Math.random() * Math.PI * 2,
      direction: Math.random() < 0.5 ? -1 : 1,
    };
  }, [initialRotation]);

  const [currentAxis, setCurrentAxis] = useState(
    () => new THREE.Vector3().copy(rotationAxis).multiplyScalar(randomInitials.direction)
  );
  const [targetAxis, setTargetAxis] = useState(
    () => new THREE.Vector3().copy(rotationAxis).multiplyScalar(randomInitials.direction)
  );
  const [transitionProgress, setTransitionProgress] = useState(1);
  const [nextTransitionTime, setNextTransitionTime] = useState(() => Math.random() * 10 + 5);

  const positions = useMemo(() => {
    const positions = new Float32Array(points.length * 3);
    for (let i = 0; i < points.length; i++) {
      positions[i * 3] = points[i].x;
      positions[i * 3 + 1] = points[i].y;
      positions[i * 3 + 2] = points[i].z;
    }
    return positions;
  }, [points]);

  useFrame((state) => {
    if (!groupRef.current || !pointsRef.current) return;

    const time = state.clock.getElapsedTime();
    const deltaTime = state.clock.getDelta();
    const effectiveSpeed = rotationSpeed * animationSpeed * randomInitials.direction;

    if (mousePosition) {
      groupRef.current.rotation.x += mousePosition.y * deltaTime * 0.5;
      groupRef.current.rotation.y += mousePosition.x * deltaTime * 0.5;
    }

    if (time > nextTransitionTime && transitionProgress >= 1) {
      const newTarget = new THREE.Vector3(
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2
      ).normalize().multiplyScalar(Math.max(0.2, Math.random()));

      setCurrentAxis(new THREE.Vector3().copy(targetAxis));
      setTargetAxis(newTarget);
      setTransitionProgress(0);
      setNextTransitionTime(time + Math.random() * 7 + 8);
    }

    if (transitionProgress < 1) {
      setTransitionProgress(Math.min(transitionProgress + deltaTime * 0.2, 1));

      const t = easeSineInOut(transitionProgress);
      rotationAxis.x = currentAxis.x * (1 - t) + targetAxis.x * t;
      rotationAxis.y = currentAxis.y * (1 - t) + targetAxis.y * t;
      rotationAxis.z = currentAxis.z * (1 - t) + targetAxis.z * t;
    }

    groupRef.current.rotation.x += rotationAxis.x * effectiveSpeed * 0.01;
    groupRef.current.rotation.y += rotationAxis.y * effectiveSpeed * 0.01;
    groupRef.current.rotation.z += rotationAxis.z * effectiveSpeed * 0.01;

    if (fadeInOut && pointsRef.current.material instanceof THREE.PointsMaterial) {
      const fadeSpeed = 0.005 * animationSpeed;

      if (fadeDirectionRef.current < 0) {
        opacityRef.current -= fadeSpeed;
        if (opacityRef.current <= 0.2) {
          fadeDirectionRef.current = 1;
        }
      } else {
        opacityRef.current += fadeSpeed;
        if (opacityRef.current >= 1) {
          fadeDirectionRef.current = -1;
        }
      }

      pointsRef.current.material.opacity = opacityRef.current;
    }
  });

  return (
    <group 
      ref={groupRef}
      rotation={[
        randomInitials.rotationX, 
        randomInitials.rotationY, 
        randomInitials.rotationZ
      ]}
    >
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.1}
          color={color}
          transparent
          opacity={1}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

function easeSineInOut(t: number): number {
  return -(Math.cos(Math.PI * t) - 1) / 2;
}

interface RotatingFormationsProps {
  animationSpeed?: number;
  color?: string;
  mousePosition?: { x: number; y: number };
  baseRadius?: number;
  initialRotation?: [number, number, number];
}

export function RotatingFormations({
  animationSpeed = 1,
  color = '#00ccff',
  mousePosition = { x: 0, y: 0 },
  baseRadius = 2,
  initialRotation
}: RotatingFormationsProps) {
  const baseColorHue = useMemo(() => {
    const hex = color.toLowerCase();

    if (hex.startsWith('#')) {
      const r = parseInt(hex.slice(1, 3), 16) / 255;
      const g = parseInt(hex.slice(3, 5), 16) / 255;
      const b = parseInt(hex.slice(5, 7), 16) / 255;

      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      let h = 0;

      if (max !== min) {
        if (max === r) {
          h = 60 * ((g - b) / (max - min)) + (g < b ? 360 : 0);
        } else if (max === g) {
          h = 60 * ((b - r) / (max - min)) + 120;
        } else {
          h = 60 * ((r - g) / (max - min)) + 240;
        }
      }

      return h;
    }

    return 45;
  }, [color]);

  const formations = useMemo(() => {
    const result = [];
    const hue = baseColorHue;
    const radiusMultipliers = [0.83, 1.0, 1.17, 1.33, 1.07];

    const getRandomAxis = () =>
      new THREE.Vector3(
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2
      ).normalize();

    // Arc 1
    result.push({
      points: createArc(baseRadius * radiusMultipliers[0], 0, Math.PI, Math.PI / 2, Math.PI / 8, 10),
      color: `hsl(${hue}, 90%, 60%)`,
      rotationAxis: getRandomAxis(),
      rotationSpeed: 0.5,
      fadeInOut: true
    });

    // Arc 2
    result.push({
      points: createArc(baseRadius * radiusMultipliers[1], Math.PI / 4, Math.PI * 5 / 4, Math.PI / 4, Math.PI / 6, 12),
      color: `hsl(${hue}, 90%, 55%)`,
      rotationAxis: getRandomAxis(),
      rotationSpeed: 0.7,
      fadeInOut: false
    });

    // Arc 3
    result.push({
      points: createArc(baseRadius * radiusMultipliers[2], 0, Math.PI / 2, Math.PI / 3, Math.PI / 10, 20),
      color: `hsl(${hue}, 95%, 65%)`,
      rotationAxis: getRandomAxis(),
      rotationSpeed: 0.9,
      fadeInOut: true
    });

    // Arc 4
    result.push({
      points: createArc(baseRadius * radiusMultipliers[3], Math.PI / 2, Math.PI * 3 / 2, Math.PI / 2, Math.PI / 5, 8),
      color: `hsl(${hue}, 100%, 50%)`,
      rotationAxis: getRandomAxis(),
      rotationSpeed: 0.4,
      fadeInOut: false
    });

    // Arc 5
    result.push({
      points: createArc(baseRadius * radiusMultipliers[4], 0, Math.PI * 2, 0, Math.PI / 4, 15),
      color: `hsl(${hue}, 85%, 58%)`,
      rotationAxis: getRandomAxis(),
      rotationSpeed: 0.6,
      fadeInOut: true
    });

    return result;
  }, [baseColorHue, baseRadius]);

  return (
    <>
      {formations.map((formation, i) => (
        <Formation
          key={i}
          {...formation}
          animationSpeed={animationSpeed}
          mousePosition={mousePosition}
          initialRotation={initialRotation}
        />
      ))}
    </>
  );
}