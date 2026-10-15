# Portafolio — Juan Trejos

SPA de portafolio construida con **React + TypeScript + Vite**. La interfaz sigue el
layout de la referencia incluida en `../index`: cabecera fija (sticky) a la izquierda
con navegación por secciones y columna de contenido desplazable a la derecha, sobre
paleta oscura (slate) con acentos teal.

## Secciones

Sobre mí · Experticia · Experiencia · Proyectos · Habilidades · Contacto

## Estructura

```
src/
├── assets/            # imágenes, logos, proyectos y fuentes (Inter + Nexa)
├── components/        # Header, Section, Spotlight e iconos
├── pages/Home/
│   ├── index.tsx      # composición de la página
│   ├── sources.tsx    # contenido editable (textos, experiencia, proyectos, contacto)
│   └── sections/      # una sección por archivo
└── styles/
    ├── index.css      # reset, layout y estilos del sitio
    ├── variables.css  # tokens de color, tipografía y motion
    └── fonts.css      # @font-face (Inter auto-hospedada + Nexa)
```

Todo el contenido editable vive en `src/pages/Home/sources.tsx`; los ids de sección
definidos ahí alimentan a la vez la navegación del header y los encabezados.

## Scripts

| Script            | Descripción                                 |
| ----------------- | ------------------------------------------- |
| `npm run dev`     | Servidor de desarrollo con HMR              |
| `npm run build`   | Compila TypeScript y genera `dist/`         |
| `npm run preview` | Sirve localmente el build de producción     |
| `npm run format`  | Formatea con Prettier (`.prettierrc` local) |
| `npm run lint`    | ESLint (requiere crear `eslint.config.js`)  |

> Nota: `npm run lint` no funciona todavía porque falta `eslint.config.js` en la raíz;
> las dependencias de ESLint ya están instaladas.

## Personalización rápida

- **Colores, fuentes y transiciones:** `src/styles/variables.css`.
- **Textos, perfil, redes, experiencia, proyectos y habilidades:** `src/pages/Home/sources.tsx`.
- **CV e historial laboral:** `public/files/` (enlazados desde la sección Experiencia).

## Despliegue

El `Dockerfile` compila la app y la sirve con nginx en el puerto 80:

```sh
docker build -t portfolio-frontend .
docker run -p 8080:80 portfolio-frontend
```
