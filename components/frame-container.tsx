import React, { useState } from "react";

export default function FrameContainer({ id }: { id: string }) {
  const [src, setSrc] = useState("/iframe/home.html");
  const [fade, setFade] = useState(false);

  const handleChange = (newSrc: string) => {
    setFade(true);
    setTimeout(() => {
      setSrc(newSrc);
      setFade(false);
    }, 300);
  };

  return (
    <iframe
      id={id}
      src={src}
      className={`w-full h-[80%] transition-opacity duration-500 ${
        fade ? "opacity-30" : "opacity-100"
      }`}
    ></iframe>
  );
}
