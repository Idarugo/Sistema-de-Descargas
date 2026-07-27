# Sistema de Descargas

Catálogo web para encontrar y descargar software desde **fuentes oficiales**: ISOs de Windows y
Windows Server, firmwares IPSW de iOS, macOS, distribuciones Linux, Office, navegadores,
compresores (WinRAR, 7-Zip), utilidades para crear USB booteables, runtimes y más.

## Puesta en marcha

```bash
npm install
npm run dev      # http://localhost:5180
npm run build    # genera dist/
```

## Cómo funciona

- **Catálogo**: 50+ productos organizados en 11 categorías, con buscador, filtro por plataforma
  y ordenación.
- **Ficha de detalle**: cada producto lista todas sus variantes (arquitectura, formato, tamaño) y
  muestra el **dominio real** de destino antes de descargar, para que puedas verificar la fuente.
- **Mi lista**: marca varios programas y descárgalos de golpe, copia todos los enlaces o exporta
  un `.txt` — útil para preparar la instalación de un equipo nuevo.
- **Favoritos e historial**: se guardan en `localStorage`, no hay servidor ni cuentas.

## Regla del catálogo

Todos los enlaces apuntan al sitio oficial del fabricante o a un índice que sirve archivos alojados
en los servidores del propio fabricante (por ejemplo, `ipsw.me` sirve los IPSW desde el CDN de Apple).

**Nunca se enlaza a repositorios no autorizados, activadores ni cracks.** Cuando un producto ya no
se distribuye oficialmente (Windows 7, 8.1, XP, Server 2012 R2), la ficha lo marca como
`Sin descarga oficial` y explica las vías legítimas: medios de recuperación del fabricante del
equipo, licencias por volumen (VLSC) o suscripción Visual Studio.

Este proyecto **no aloja ni redistribuye ningún archivo**. Las descargas de sistemas operativos y
suites ofimáticas de pago requieren una licencia válida para activarse.

## Añadir un producto

Todo el contenido vive en [`src/data/catalogo.js`](src/data/catalogo.js). Añade un objeto al array
`PRODUCTOS`:

```js
{
  id: 'mi-programa',              // único
  nombre: 'Mi Programa',
  categoria: 'utilidades',        // un id de src/data/categorias.js
  fabricante: 'Quien lo hace',
  icono: '🔧',
  estado: 'oficial',              // oficial | evaluacion | descontinuado
  plataformas: ['Windows'],
  etiquetas: ['para', 'el', 'buscador'],
  descripcion: 'Qué hace, en una o dos frases.',
  nota: 'Consejo opcional que aparece en la ficha.',
  versiones: [
    { nombre: 'Versión estable', arquitectura: 'x64', formato: 'EXE', tamano: '~50 MB', url: 'https://…' },
  ],
}
```

Para un producto descontinuado, deja `versiones: []` y rellena `alternativa` (texto explicativo) y
opcionalmente `enlaceInfo`.

Las categorías se definen en [`src/data/categorias.js`](src/data/categorias.js); el color de cada
una tiñe los iconos y los bordes de sus tarjetas.

## Estructura

```
src/
├── App.jsx                    Estado, filtros y acciones
├── storage.js                 Persistencia en localStorage
├── styles.css                 Tema oscuro completo
├── data/
│   ├── catalogo.js            ← el contenido está aquí
│   └── categorias.js
└── components/
    ├── Sidebar.jsx
    ├── TarjetaProducto.jsx
    ├── ModalDetalle.jsx
    └── PanelCola.jsx
```
# Sistema-de-Descargas
