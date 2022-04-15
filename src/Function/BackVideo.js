import React, { useState } from "react";
import BackVideoFile from "../Video/VR background.mp4";

const BackVideo = () => {
  return (
    <video
      loop
      autoPlay
      muted
      width={"90%"}
      style={{
        zIndex: "-1",
        backgroundColor: "transparent",
        position: "absolute",
        top: "10vw",
      }}
    >
      <source src={BackVideoFile} type="video/mp4" />
    </video>
  );
};

export default BackVideo;
//https://vrlandingvideo.s3.ap-northeast-2.amazonaws.com/VR+background.mp4
