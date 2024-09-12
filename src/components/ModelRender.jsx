import { useRef } from 'react';
import { CameraControls, useHelper } from '@react-three/drei';
import { DirectionalLightHelper, SpotLightHelper } from 'three';
import { Hoodie } from './3DModels/Hoodie';

import { Nike } from './3DModels/Nike';

const ModelRender = (props) => {
  const cameraControlsRef = useRef();
  const directionalLightRef1 = useRef(null);

  // useHelper(directionalLightRef1, DirectionalLightHelper, 3, 'yellow');

  const directionalLightRef2 = useRef(null);
  // useHelper(directionalLightRef2, DirectionalLightHelper, 3, 'red');

  const directionalLightRef3 = useRef(null);
  // useHelper(directionalLightRef3, DirectionalLightHelper, 3, 'green');

  const directionalLightRef4 = useRef(null);
  // useHelper(directionalLightRef4, DirectionalLightHelper, 3, 'blue');

  const directionalLightRef5 = useRef(null);
  // useHelper(directionalLightRef5, DirectionalLightHelper, 3, 'brown');

  const spotLight = useRef();
  // useHelper(spotLight, SpotLightHelper, 'green');
  return (
    <>
      <color attach="background" args={['#fff']} />
      {/* <ambientLight color="red" intensity={1} /> */}
      {/* <AdidasShoe /> */}
      {props.random ? <Nike {...props} /> : <Nike {...props} />}
      {/* <DualColorTShirt /> */}
      {/* <Floor /> */}
      <spotLight ref={spotLight} position={[0, 7, 0]} intensity={1} distance={5} />
      <CameraControls
        ref={cameraControlsRef}
        minDistance={5}
        maxDistance={10}
        distance={7}
        azimuthRotateSpeed={0.5}
        polarRotateSpeed={0.5}
        truckSpeed={10}
        minZoom={1}
        zoom={2}
        truck={0}
        polarAngle={Math.PI / 2.1}
      />
      <directionalLight ref={directionalLightRef1} color={'white'} position={[0, 10, 0]} castShadow={true} />
      <directionalLight ref={directionalLightRef2} color={'white'} position={[10, 10, 0]} castShadow={false} />
      <directionalLight ref={directionalLightRef3} color={'white'} position={[-10, 10, 0]} castShadow={false} />
      <directionalLight ref={directionalLightRef4} color={'white'} position={[0, 0, 10]} castShadow={false} />
      <directionalLight ref={directionalLightRef4} color={'white'} position={[0, 0, -10]} castShadow={false} />
    </>
  );
};

export default ModelRender;
