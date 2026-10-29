# 🐂 Mascota Minotauro — Proyecto 3D

Mascota oficial estilo cartoon inspirada en la mitología griega. Minotauro musculoso,
expresivo y amigable, diseñado para ser integrado en una web Next.js con visor 3D interactivo.

---

## Estructura del proyecto

```
mascota/
├── reference/              # Boceto original y referencias visuales
│   └── boceto-minotauro.jpeg
├── blender/                # Archivos .blend de trabajo
│   ├── minotauro-base.blend       # Cuerpo sin ropa
│   ├── minotauro-tunica.blend     # + Túnica blanca
│   └── minotauro-full.blend       # Outfit completo
├── exports/                # Exportaciones .glb listas para web
│   ├── minotauro-base.glb
│   ├── minotauro-tunica.glb
│   └── minotauro-full.glb
├── web/                    # Componentes Next.js
│   └── MinotauroViewer.tsx
└── .kiro/                  # Config de Kiro + MCP
```

---

## El personaje

### Características base (sin ropa)
- Cuerpo musculoso cartoon — proporciones exageradas, cabeza grande
- Pelaje marrón en todo el cuerpo
- Cuernos dorados en espiral
- Orejas de toro a los lados
- Ojos verdes grandes y expresivos
- Boca abierta con dientes, expresión alegre
- Pelaje más denso en tobillos y muñecas
- Brazaletes blancos en muñecas y tobillos (parte del cuerpo base)

### Capas de ropa (objetos separados en Blender)

| Capa | Objeto | Descripción |
|------|--------|-------------|
| 0 | `body` | Cuerpo base completo |
| 1 | `tunica` | Falda/toga corta blanca con cenefa dorada griega |
| 2 | `banda` | Banda verde diagonal con hoja de laurel |
| 3 | `cinturon` | Cinturón dorado con hebilla circular verde |
| 4 | `grebas` | Sandalias/grebas doradas en los tobillos |

---

## Plan de modelado

### Fase 1 — Setup
- [x] Instalar Blender 5.2
- [x] Instalar MCP for Blender addon
- [x] Conectar Kiro ↔ Blender via MCP (puerto 9876)
- [x] Crear estructura de proyecto

### Fase 2 — Cuerpo base
- [ ] Importar boceto como reference image (front + side)
- [ ] Modelar torso y cabeza (subdivisión suave, cartoon)
- [ ] Modelar extremidades — brazos musculosos, piernas con pezuñas
- [ ] Modelar cuernos dorados
- [ ] Modelar orejas de toro
- [ ] Aplicar materiales — pelaje marrón, cuernos dorados, ojos verdes
- [ ] Rig básico (armature) para pose dinámica como el boceto
- [ ] Exportar `minotauro-base.glb`

### Fase 3 — Outfit capa por capa
- [ ] Modelar túnica blanca (falda griega corta)
- [ ] Agregar cenefa dorada con patrón griego (meander)
- [ ] Modelar banda verde diagonal
- [ ] Modelar cinturón dorado
- [ ] Modelar grebas/sandalias doradas
- [ ] Exportar versión incremental por capa

### Fase 4 — Integración web
- [ ] Configurar Three.js / React Three Fiber en Next.js
- [ ] Visor 3D interactivo con rotación
- [ ] Switch de outfits (mostrar/ocultar capas)
- [ ] Animación idle (respiración, parpadeo)

---

## Paleta de colores

| Elemento | Color | Hex |
|----------|-------|-----|
| Pelaje | Marrón cálido | `#8B5A2B` |
| Pelaje oscuro | Marrón oscuro | `#5C3317` |
| Cuernos / oro | Dorado | `#D4A017` |
| Oro brillante | Dorado claro | `#FFD700` |
| Ojos | Verde esmeralda | `#2E8B57` |
| Túnica | Blanco hueso | `#FFFDF0` |
| Banda | Verde oliva | `#4A7C3F` |
| Cenefa | Dorado | `#D4A017` |

---

## Herramientas

- **Blender 5.2** — modelado, rigging, exportación
- **MCP for Blender** — control desde Kiro via Python scripts
- **React Three Fiber** — visor 3D en Next.js
- **@react-three/drei** — helpers (OrbitControls, useGLTF, etc.)

---

## Convenciones de nombrado en Blender

- Objetos: `minotauro_body`, `minotauro_tunica`, `minotauro_banda`, etc.
- Huesos (armature): `spine`, `neck`, `head`, `arm_L`, `arm_R`, `leg_L`, `leg_R`
- Materiales: `mat_fur_brown`, `mat_gold`, `mat_white_cloth`, `mat_green_cloth`
- Colecciones: `BASE`, `OUTFIT_TUNICA`, `OUTFIT_BANDA`, `OUTFIT_CINTURON`, `OUTFIT_GREBAS`


---

## 📋 Log de sesiones

### Sesión 1 — 28 Sep 2026

**Lo que se hizo:**

- Se descartó modelado manual en Blender (muy tedioso para detalles faciales)
- Se generó el modelo 3D del minotauro Theo nivel 4 con **Hyper3D Rodin** (GLB con texturas PBR 2048×2048)
- El GLB generado se guardó en `reference/hyper3d/base_basic_pbr.glb`
- Se importó en Blender, se ajustó el color del pelaje con nodo Multiply (marrón cálido)
- Se guardó el archivo de trabajo en `blender/minotauro-base.blend`
- Se exportó `exports/minotauro-base.glb` (27MB — texturas embebidas)
- Se creó el proyecto Next.js en `web-app/` con:
  - React Three Fiber + @react-three/drei + Three.js
  - Visor 3D interactivo en el home (`app/page.tsx`)
  - Componentes `MinotauroViewer.tsx` y `MinotauroViewerWrapper.tsx`
  - Modelo copiado a `web-app/public/models/minotauro-base.glb`
  - Build compilando sin errores

**Estado actual del plan de modelado:**

- [x] Fase 1 — Setup completo
- [x] Fase 2 — Cuerpo base nivel 4 (Hyper3D) ✅
- [ ] Fase 2b — Generar niveles 1, 2, 3 con Hyper3D (pendiente, necesita tokens)
- [ ] Fase 3 — Outfits (túnica, banda, cinturón, grebas)
- [ ] Fase 4 — Integración web completa

**Para mañana — próxima sesión:**

1. ~~**Comprimir GLBs**~~ ✅ Hecho — de 28.8MB → 0.87MB (ver "Optimización de modelos para web")

2. **Generar niveles 1, 2, 3** con Hyper3D y moverlos a `reference/hyper3d/`
   - Importarlos en Blender, ajustar color, exportar como:
     - `exports/minotauro-nivel1.glb`
     - `exports/minotauro-nivel2.glb`
     - `exports/minotauro-nivel3.glb`

3. **Construir vistas web** en `web-app/`:
   - Selector de niveles (1→4) con switch visual
   - Vista de perfil de mascota
   - Vista de tienda de outfits
   - Selector de outfits (cuando los GLBs de ropa estén listos)

4. **Backend** (más adelante): lógica de ownership — qué cliente tiene qué mascota y qué outfits desbloqueados

**Notas técnicas importantes:**
- Los outfits van como GLBs separados: `public/models/minotauro-tunica.glb`, etc.
- Estrategia elegida: **Opción A** — un GLB por versión completa (cuerpo + outfit)
- El visor web ya está preparado para agregar el selector de outfits
- Generadores 3D disponibles: Hyper3D Rodin (de pago), Hunyuan3D (bloqueado geográficamente)
- MCP Blender corre en `localhost:9876`, addon en `~/Library/Application Support/Blender/5.2/scripts/addons/blender_mcp.py`

---

## Optimización de modelos para web

El GLB que sale de Blender (`exports/`) es el original de alta calidad y **no se modifica**.
La versión que usa la web (`web-app/public/models/`) se genera optimizada con
[gltf-transform](https://gltf-transform.dev/):

```bash
cd web-app
npm run optimize:models
```

| | Original (`exports/`) | Web (`public/models/`) |
|---|---|---|
| Peso | 28.8 MB | 0.87 MB |
| Triángulos | ~650.000 | ~52.000 |
| Texturas | PNG 2048×2048 | WebP 2048×2048 |
| Compresión de malla | — | Meshopt |

- Cada vez que se re-exporte el modelo desde Blender, correr `npm run optimize:models`.
- El decodificador Meshopt ya viene incluido en `useGLTF` de drei, no requiere configuración extra.
