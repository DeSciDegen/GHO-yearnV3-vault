import React from "react";

const DemoVideo = () => {
  return (
    <div className="w-8/12 mx-auto justify-center items-center mt-5 ">
      <p className="font-bold text-center text-xl mb-1">
        LFGHO Hackathon - Demo Video{" "}
      </p>
      <video className="w-full rounded" controls>
        <source src="/docs/videos/flowbite.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default DemoVideo;
