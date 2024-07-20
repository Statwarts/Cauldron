import React, { useRef, useEffect, useState } from "react";

const Loader = () => {
  const videoRef = useRef(null);
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.75;
    }
    const loadVideo = async () => {
      const videoModule = await import("../../assets/Videos/Loader.mp4");
      setVideoSrc(videoModule.default);
    };

    loadVideo();
  }, []);

  const maskstyle = {
    maskImage: "radial-gradient(circle, white 50%, transparent 0%)",
    WebkitMaskImage: "radial-gradient(circle, white 50%, transparent 0%)",
  };

  return (
    <div className="">
      {videoSrc && (
        <video
          ref={videoRef}
          style={maskstyle}
          src={videoSrc}
          width={300}
          autoPlay
          loop
          draggable={false}
        />
      )}
    </div>
  );
};

export default Loader;
