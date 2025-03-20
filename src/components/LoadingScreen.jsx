import { useEffect } from "react";
import { useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "Welcome To My Portfolio Site";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 pl-5 bg-black text-gray-70 flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-sans font-bold">
        {text} <span className="animate-blink ml-1"> | </span>
      </div>
      <div className="w-[400px] h-[2px] bg-gray-600 rounded mt-5 relative overflow-hidden">
        <div className="w-[40%] h-full bg-blue-600 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};
