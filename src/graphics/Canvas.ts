class Canvas {
  canvas: HTMLCanvasElement | null = null;
  ctx: CanvasRenderingContext2D | null = null;
  mousePosition: { x: number; y: number } = { x: 0, y: 0 };
  backgroundColor = "black";
  isDrawing = false;

  setCanvas(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");

    window.addEventListener("resize", this.resizeCanvas);
    this.canvas.addEventListener("mousemove", this.onMouseMove);
    this.canvas.addEventListener("mousedown", this.onMouseDown);
    this.canvas.addEventListener("mouseup", this.onMouseUp);

    this.resizeCanvas();
  }

  onMouseMove = (event: MouseEvent) => {
    const { offsetX, offsetY } = event;
    this.mousePosition.x = offsetX;
    this.mousePosition.y = offsetY;

    if (this.isDrawing) {
      this.drawRectangle(
        this.mousePosition.x,
        this.mousePosition.y,
        100,
        100,
        "red"
      );
    }
  };

  onMouseDown = (event: MouseEvent) => {
    this.isDrawing = true;
    // draw rectangle
  };

  onMouseUp = (event: MouseEvent) => {
    this.isDrawing = false;
  };

  drawImage = (image: HTMLImageElement) => {
    if (!this.ctx) {
      return;
    }
    this.ctx.drawImage(image, 0, 0);
  };
  

  drawRectangle(
    x: number,
    y: number,
    width: number,
    height: number,
    color: string
  ) {
    if (!this.ctx) {
      return;
    }
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, width, height);
  }

  resizeCanvas() {
    if (this.canvas === null) {
      return;
    }
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    if (!this.ctx) {
      return;
    }

    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

export const canvas = new Canvas();
