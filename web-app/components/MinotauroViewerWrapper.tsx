"use client";

/**
 * Wrapper con dynamic import para evitar SSR de Three.js en Next.js App Router.
 * Three.js usa APIs del browser (WebGL, window) que no existen en el servidor.
 */

import dynamic from "next/dynamic";

const MinotauroViewer = dynamic(() => import("./MinotauroViewer"), {
  ssr: false,
  loading: () => (
    <div
      className="w-full rounded-3xl animate-pulse flex items-center justify-center"
      style={{
        height: "520px",
        background: "linear-gradient(160deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
      }}
    >
      <div className="flex flex-col items-center gap-3">
        <div className="w-12 h-12 rounded-full border-2 border-yellow-500/30 border-t-yellow-500 animate-spin" />
        <span className="text-yellow-500/60 text-sm font-medium">Cargando Theo...</span>
      </div>
    </div>
  ),
});

export default function MinotauroViewerWrapper() {
  return <MinotauroViewer />;
}
