import { Perlin2D } from "./perlin";
import { render } from "./render";

const WIDTH = 256;
const HEIGHT = 256;
const GRADIENT_RESOLUTION = 16;
const perlin = new Perlin2D(GRADIENT_RESOLUTION, GRADIENT_RESOLUTION);

const canvas = document.querySelector<HTMLCanvasElement>("#app")!;
canvas.width = WIDTH;
canvas.height = HEIGHT;

const scaleInput = document.querySelector<HTMLInputElement>("#scale-input")!;
scaleInput.addEventListener("change", refresh);

const persistenceInput =
  document.querySelector<HTMLInputElement>("#persistence-input")!;
persistenceInput.addEventListener("change", refresh);

const octavesInput =
  document.querySelector<HTMLInputElement>("#octaves-input")!;
octavesInput.addEventListener("change", refresh);

function refresh() {
  const ctx = canvas.getContext("2d")!;
  render({
    ctx,
    perlin,
    width: WIDTH,
    height: HEIGHT,
    scale: Number.parseFloat(scaleInput.value),
    persistence: Number.parseFloat(persistenceInput.value),
    octaves: Number.parseInt(octavesInput.value),
  });
}

refresh();
