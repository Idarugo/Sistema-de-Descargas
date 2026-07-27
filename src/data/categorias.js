// Categorías del catálogo. El `id` se usa como clave en catalogo.js y en iconos.jsx
export const CATEGORIAS = [
  { id: 'windows', nombre: 'Windows', color: '#4cc2ff', descripcion: 'ISOs de sistemas operativos de escritorio Microsoft' },
  { id: 'server', nombre: 'Windows Server', color: '#7cb9e8', descripcion: 'ISOs de evaluación de Windows Server' },
  { id: 'apple', nombre: 'Apple (iOS / macOS)', color: '#d4d4d8', descripcion: 'Firmwares IPSW e instaladores de macOS' },
  { id: 'linux', nombre: 'Linux', color: '#f59e0b', descripcion: 'Distribuciones GNU/Linux' },
  { id: 'office', nombre: 'Ofimática', color: '#ff7043', descripcion: 'Microsoft Office, Microsoft 365 y alternativas libres' },
  { id: 'navegadores', nombre: 'Navegadores', color: '#22c55e', descripcion: 'Instaladores completos (offline) de navegadores' },
  { id: 'compresores', nombre: 'Compresores', color: '#c084fc', descripcion: 'WinRAR, 7-Zip y compresores de archivos' },
  { id: 'utilidades', nombre: 'Utilidades USB / ISO', color: '#22d3ee', descripcion: 'Herramientas para crear medios de instalación booteables' },
  { id: 'runtimes', nombre: 'Runtimes y librerías', color: '#94a3b8', descripcion: 'Redistribuibles necesarios para que otros programas funcionen' },
  { id: 'multimedia', nombre: 'Multimedia', color: '#ec4899', descripcion: 'Reproductores, edición y captura' },
  { id: 'desarrollo', nombre: 'Desarrollo', color: '#3b82f6', descripcion: 'Editores, SDKs y control de versiones' },
]

export const CATEGORIA_POR_ID = Object.fromEntries(CATEGORIAS.map((c) => [c.id, c]))

// Estados posibles de un producto
export const ESTADOS = {
  oficial: { etiqueta: 'Descarga oficial', color: '#22c55e' },
  evaluacion: { etiqueta: 'Versión de evaluación', color: '#f59e0b' },
  descontinuado: { etiqueta: 'Sin descarga oficial', color: '#ef4444' },
}
