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
  id: 'mi-programa',              // único; es también la clave del icono en iconos.jsx
  nombre: 'Mi Programa',
  categoria: 'utilidades',        // un id de src/data/categorias.js
  fabricante: 'Quien lo hace',
  estado: 'oficial',              // oficial | evaluacion | descontinuado
  plataformas: ['Windows'],
  etiquetas: ['para', 'el', 'buscador'],
  descripcion: 'Qué hace, en una o dos frases.',
  nota: 'Consejo opcional que aparece en la ficha.',
  versiones: [
    {
      nombre: 'Versión estable',
      arquitectura: 'x64',
      formato: 'EXE',
      tamano: '~50 MB',
      idioma: 'es',               // es | multi | en
      url: 'https://…',
    },
  ],
}
```

Para un producto descontinuado, deja `versiones: []` y rellena `alternativa` (texto explicativo) y
opcionalmente `enlaceInfo`.

Las categorías se definen en [`src/data/categorias.js`](src/data/categorias.js); el color de cada
una tiñe el icono del menú lateral.

## Distribuciones Linux

La categoría Linux cubre las 10 «major distributions» de
[DistroWatch](https://distrowatch.com/dwres-mobile.php?resource=major) —más FreeBSD, que esa página
lista aparte— y las derivadas más descargadas. Cada distro declara una `familia`, que se muestra
como etiqueta y alimenta un desplegable **«Todas las familias»** que solo aparece dentro de Linux:

| Familia | Distribuciones |
|---|---|
| Debian | Debian, MX Linux, Kali, Raspberry Pi OS, antiX, Tails |
| Debian / Ubuntu | Ubuntu, Linux Mint, Zorin OS, Pop!_OS, elementary OS |
| Red Hat / RPM | Fedora, openSUSE, RHEL, AlmaLinux, Rocky Linux, CentOS Stream |
| Arch | Arch Linux, Manjaro, EndeavourOS |
| Independiente | Gentoo, Slackware, Alpine Linux, NixOS |
| BSD | FreeBSD |

La familia también entra en el buscador: escribir `arch` devuelve Arch, Manjaro y EndeavourOS.

## Idioma de las descargas

Cada versión declara su `idioma` y la interfaz lo muestra como una etiqueta:

| Valor | Etiqueta | Significa |
|---|---|---|
| `es` | Español | La página y el instalador están en español (URLs `es-es`, `intl/es`, `.es.html`) |
| `multi` | Multilingüe | Instalador único: eliges el idioma al descargar o durante la instalación |
| `en` | Solo en inglés | No existe versión traducida |

El botón **Descargar** de cada tarjeta abre siempre la versión en español si el producto tiene una;
si no, la primera de la lista. El filtro **«Solo en español»** deja únicamente los productos con al
menos una versión `es`.

## Iconos

Sin emojis: dos librerías npm, cada una para lo suyo, mapeadas en
[`src/data/iconos.jsx`](src/data/iconos.jsx).

- **[`@icons-pack/react-simple-icons`](https://www.npmjs.com/package/@icons-pack/react-simple-icons)**
  — logos de marca reales (Ubuntu, Debian, Chrome, Firefox, Apple, Docker, Git…).
- **[`lucide-react`](https://lucide.dev)** — iconos de interfaz, iconos de categoría y sustitutos
  para las marcas que Simple Icons ya no distribuye: Microsoft, Adobe y Oracle las retiraron por
  marca registrada, así que Windows, Office, Edge o Acrobat usan iconos genéricos de Lucide.

Ambas librerías exportan un componente por icono y se sacuden en el build (*tree-shaking*), así que
solo pesa lo que se usa. Para añadir el icono de un producto nuevo, añade su `id` a `POR_PRODUCTO`
en `iconos.jsx` con `[Componente, '#color']`. Los colores están ajustados para leerse sobre fondo
oscuro (varias marcas usan negro o azules muy saturados que desaparecerían en el tema).

## Estructura

```
src/
├── App.jsx                    Estado, filtros y acciones
├── storage.js                 Persistencia en localStorage
├── styles.css                 Tema oscuro completo
├── data/
│   ├── catalogo.js            ← el contenido está aquí
│   ├── categorias.js
│   └── iconos.jsx             ← mapa id → icono + color
└── components/
    ├── Sidebar.jsx
    ├── TarjetaProducto.jsx
    ├── ModalDetalle.jsx
    └── PanelCola.jsx
```
# Sistema-de-Descargas
