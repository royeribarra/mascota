/**
 * Wrapper para Next.js App Router.
 *
 * Three.js / React Three Fiber usa APIs del browser (WebGL, window, etc.)
 * que no existen en el servidor. `dynamic` con `ssr: false` resuelve esto.
 *
 * Uso en cualquier page/component del App Router:
 *
 *   import MinotauroViewerWrapper from "@/components/MinotauroViewerWrapper";
 *   // ...
 *   <MinotauroViewerWrapper />
 */

import dynamic from "next/dynamic";

const MinotauroViewer = dynamic(() => import("./MinotauroViewer"), {
  ssr: false,
  loading: () => (
    <div
      className="w-full rounded-2xl bg-gray-900 animate-pulse flex items-center justify-center"
      style={{ height: "520px" }}
    >
      <span className="text-gray-500 text-sm">Cargando minotauro...</span>
    </div>
  ),
});

export default function MinotauroViewerWrapper() {
  return <MinotauroViewer />;
}
