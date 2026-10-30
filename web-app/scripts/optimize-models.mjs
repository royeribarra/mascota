// Genera las versiones optimizadas para web de los modelos 3D.
// Los originales (exports/ y reference/) no se modifican.
import { execFileSync } from "node:child_process";

const common = ["--compress", "meshopt", "--simplify-error", "0.001"];

const fromReference = (names, args) =>
  names.map((name) => ({ src: `../reference/${name}.glb`, out: `public/models/${name}.glb`, args }));

const models = [
  // Cuerpo base (~650k triángulos, con texturas PNG)
  {
    src: "../exports/minotauro-base.glb",
    out: "public/models/minotauro-base.glb",
    args: ["--simplify-ratio", "0.08", "--texture-compress", "webp", "--texture-size", "2048"],
  },
  // Niveles generados por Royer (~120k triángulos)
  ...fromReference(["fase1", "fase2", "fase3"], ["--simplify-ratio", "0.35"]),
  // Accesorios modelados a mano en Blender (pocos polígonos, se colocan sobre minotauro-base)
  ...fromReference(["lentes", "gorra", "corona", "audifono", "brazalete", "mochila"], ["--simplify", "false"]),
  // Ropa modelada a mano (más polígonos por la subdivisión de la tela)
  ...fromReference(["tunica", "sudadera", "bufanda", "capa"], ["--simplify-ratio", "0.5"]),
];

for (const { src, out, args } of models) {
  console.log(`→ ${src} → ${out}`);
  execFileSync("npx", ["gltf-transform", "optimize", src, out, ...common, ...args], {
    stdio: "inherit",
    shell: process.platform === "win32",
  });
}
