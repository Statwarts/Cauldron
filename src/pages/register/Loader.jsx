import React, { useRef, useEffect } from "react";
const Loader = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.5;
    }
  }, []);

  const maskstyle = {
    maskImage: "radial-gradient(circle, white 50%, transparent 0%)",
    WebkitMaskImage: "radial-gradient(circle, white 50%, transparent 0%)",
  };
  return (
    <>
      <div className="">
        <video
          ref={videoRef}
          style={maskstyle}
          src="../src/assets/videos/Loader.mp4"
          width={300}
          autoPlay
          loop
          draggable={false}
        />
      </div>
    </>
  );
};

export default Loader;
