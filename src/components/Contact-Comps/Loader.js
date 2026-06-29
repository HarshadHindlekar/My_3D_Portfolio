import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      className="canvas-loader-wrap"
    >
      <span className='canvas-loader' aria-hidden="true"></span>
      <p>{Math.round(progress)}%</p>
    </Html>
  );
};

export default CanvasLoader;
