import React, { useRef, useEffect } from "react";
import LoadingVideo from "../../assets/Videos/Loader.mp4";
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
          src={LoadingVideo}
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
