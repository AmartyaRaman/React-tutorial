import React, { useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Text from "../components/Text";
import { toJpeg } from "html-to-image";

const Editpage = () => {
  const [params] = useSearchParams();
  const [countText, setCountText] = useState(0);
  const memeRef = useRef(null);

  const addText = () => {
    setCountText((prev) => prev + 1);
  };

  const saveAsJPEG = () => {
    if (memeRef.current) {
      toJpeg(memeRef.current, { quality: 0.95 })
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.href = dataUrl;
          link.download = "meme.jpeg";
          link.click();
        })
        .catch((err) => {
          console.error("Error exporting image:", err);
        });
    }
  };

  return (
    <div>
      <div ref={memeRef}>
        <img src={params.get("url")} alt="meme" width={250} />
        {Array.from({ length: countText }).map((_, index) => (
          <Text key={index} />
        ))}
      </div>
      <button className="bg-blue-500 px-2 py-1 text-white font-bold rounded-md mt-3 ml-3" onClick={addText}>
        Add text
      </button>
      <button className="bg-green-500 px-2 py-1 text-white font-bold rounded-md mt-3" onClick={saveAsJPEG}>
        Save
      </button>
    </div>
  );
};

export default Editpage;
