import React from "react";

function RtopSideImage() {
  const image = [
    {
      src: "chat",
      alt: "chat",
    },
    {
      src: "notification (1)",
      alt: "notification",
    },
    {
      src: "Setting",
      alt: "setting",
    },
  ];

  return (
    <>
      <div className="flex gap-4 items-center">
        {image.map(({ src, alt }) => (
          <div key={src}>
            <img className="" src={`./Assets/${src}.png`} alt="" />
          </div>
        ))}
      </div>
    </>
  );
}

export default RtopSideImage;
