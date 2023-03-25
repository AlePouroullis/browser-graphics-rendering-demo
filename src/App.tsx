import { useRef, useState, useEffect } from "react";
import { Editor } from "./graphics/Editor";

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const isDrawing = useRef(false);

  useEffect(() => {
    const canvasElement = canvasRef.current!;
    const ctx = canvasElement!.getContext("2d");
    if (ctx === null) {
      alert(
        "Unable to initialize WebGL. Your browser or machine may not support it."
      );
      return;
    }

    const image = new Image();

    image.onload = () => {
      Editor.canvas.drawImage(image);
    };

    image.src = "/test_images/1.jpeg";

    Editor.canvas.setCanvas(canvasElement);
    // Editor.canvas.drawImage()
  }, []);
  return (
    <div className="App">
      <canvas id="canvas" ref={canvasRef} />
    </div>
  );
}

export default App;
