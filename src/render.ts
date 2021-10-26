import { Perlin2D } from "./perlin";

export function render({
  ctx,
  perlin,
  width,
  height,
  scale,
  octaves,
  persistence,
}: {
  ctx: CanvasRenderingContext2D;
  perlin: Perlin2D;
  width: number;
  height: number;
  scale: number;
  octaves: number;
  persistence: number;
}) {
  ctx.fillStyle = "grey";
  ctx.fillRect(0, 0, width, height);

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      const value = perlin.getOctave(
        x / scale,
        y / scale,
        octaves,
        persistence
      );
      ctx.fillStyle = `rgba(${1 - value * 255 * 2}, 1, ${
        1 - value * 255 * 2
      }, 1)`;
      ctx.fillRect(x, y, 1, 1);
    }
  }
}
