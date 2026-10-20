# Integración en Next.js

## 1. Instalar dependencias

```bash
# React 18
npm install three @react-three/fiber@8 @react-three/drei

# React 19
npm install three @react-three/fiber@9 @react-three/drei
```

```bash
# Tipos para TypeScript
npm install -D @types/three
```

## 2. Copiar los archivos

Mueve los dos componentes a tu proyecto Next.js:

```
src/
└── components/
    ├── MinotauroViewer.tsx        # Componente 3D ("use client")
    └── MinotauroViewerWrapper.tsx # Wrapper con dynamic import (sin SSR)
```

## 3. Copiar los modelos .glb

Los archivos exportados desde Blender van en la carpeta `public/`:

```
public/
└── models/
    ├── minotauro-base.glb
    ├── minotauro-tunica.glb
    └── minotauro-full.glb
```

## 4. Usarlo en una página

```tsx
// app/page.tsx (o cualquier page/component)
import MinotauroViewerWrapper from "@/components/MinotauroViewerWrapper";

export default function Page() {
  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Nuestra Mascota</h1>
      <MinotauroViewerWrapper />
    </main>
  );
}
```

## 5. Configurar next.config.js (si hay errores de importación de Three.js)

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["three"],
};

module.exports = nextConfig;
```

## Notas

- Los modelos `.glb` se sirven estáticamente desde `public/` — sin API routes.
- `OrbitControls` con `autoRotate` hace la rotación automática; el usuario puede
  interrumpirla arrastrando y vuelve a activarse al soltar.
- Los tres modelos se pre-cargan con `useGLTF.preload()` para que el cambio
  de outfit sea instantáneo.
