---
inclusion: always
---

# Proyecto: Mascota Minotauro 3D

Este workspace es para diseñar y exportar una mascota minotauro 3D en Blender,
conectado via MCP, para luego integrarlo en un proyecto Next.js existente.

## Contexto del proyecto

- **Personaje**: Minotauro cartoon musculoso, estilo animado, expresión alegre
- **Boceto de referencia**: `reference/boceto-minotauro.jpeg`
- **Enfoque**: Modelar primero el cuerpo base (sin ropa) y luego agregar ropa por capas
- **Destino final**: Visor 3D interactivo en web Next.js usando React Three Fiber

## Conexión Blender ↔ Kiro

- El MCP de Blender corre en **localhost:9876**
- Para ejecutar algo en Blender, usar las herramientas MCP del servidor `blender`
- Blender versión: **5.2**
- El addon está instalado en: `~/Library/Application Support/Blender/5.2/scripts/addons/blender_mcp.py`

## Estructura de carpetas

```
mascota/
├── reference/         # Boceto original
├── blender/           # Archivos .blend de trabajo
├── exports/           # .glb exportados listos para web
│   ├── minotauro-base.glb
│   ├── minotauro-tunica.glb
│   └── minotauro-full.glb
└── web/               # Componentes Next.js listos para copiar
```

## Convenciones de Blender

- Objetos: `minotauro_body`, `minotauro_tunica`, `minotauro_banda`, `minotauro_cinturon`, `minotauro_grebas`
- Materiales: `mat_fur_brown`, `mat_gold`, `mat_white_cloth`, `mat_green_cloth`, `mat_eyes_green`
- Colecciones: `BASE`, `OUTFIT_TUNICA`, `OUTFIT_BANDA`, `OUTFIT_CINTURON`, `OUTFIT_GREBAS`
- Huesos: `spine`, `neck`, `head`, `arm_L`, `arm_R`, `leg_L`, `leg_R`, `horn_L`, `horn_R`
- Escala de trabajo: **1 unidad Blender = 1 metro** (el personaje mide ~2m)

## Paleta de colores

| Elemento        | Hex       |
|-----------------|-----------|
| Pelaje marrón   | `#8B5A2B` |
| Pelaje oscuro   | `#5C3317` |
| Cuernos / oro   | `#D4A017` |
| Oro brillante   | `#FFD700` |
| Ojos verdes     | `#2E8B57` |
| Túnica blanca   | `#FFFDF0` |
| Banda verde     | `#4A7C3F` |

## Capas de outfit (en orden de modelado)

1. `body` — cuerpo base, pelaje, cuernos, brazaletes
2. `tunica` — falda griega corta, cenefa dorada con patrón meander
3. `banda` — banda diagonal verde con hoja de laurel dorada
4. `cinturon` — cinturón dorado con hebilla circular verde
5. `grebas` — sandalias/grebas doradas en tobillos

## Exportación

- Formato: **GLB** (binario GLTF, más eficiente para web)
- Destino: carpeta `exports/` de este workspace, luego copiar a `public/models/` del proyecto Next.js
- Una exportación por versión de outfit: `base`, `tunica`, `full`

## Integración web

- Framework: **Next.js** (App Router)
- Librería 3D: **React Three Fiber** + **@react-three/drei**
- Componentes listos en `web/MinotauroViewer.tsx` y `web/MinotauroViewerWrapper.tsx`
- Ver instrucciones en `web/INSTALL.md`
