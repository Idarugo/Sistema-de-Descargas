/**
 * ICONOS
 *
 * Dos librerías, cada una para lo suyo:
 *   · @icons-pack/react-simple-icons → logos de marca reales (Ubuntu, Chrome, Apple…).
 *   · lucide-react                   → iconos de interfaz y sustitutos para las marcas
 *                                      que Simple Icons ya no distribuye (Microsoft,
 *                                      Adobe, Oracle y otras las retiraron por marca
 *                                      registrada).
 *
 * Los colores están ajustados para leerse sobre fondo oscuro: algunas marcas usan
 * negro o azules muy saturados que desaparecerían en el tema.
 */
import {
  AppWindow,
  Archive,
  Clapperboard,
  Code2,
  Cog,
  Database,
  Disc3,
  FileArchive,
  FileText,
  FileType2,
  FileVideo,
  FlaskConical,
  Gamepad2,
  Globe,
  HardDrive,
  Layers,
  Library,
  Package,
  Server,
  SquareCode,
  Star,
  Usb,
  Zap,
} from 'lucide-react'
import {
  SiApple,
  SiArchlinux,
  SiAudacity,
  SiBrave,
  SiDebian,
  SiDocker,
  SiDotnet,
  SiFedora,
  SiFirefoxbrowser,
  SiGimp,
  SiGit,
  SiGooglechrome,
  SiIos,
  SiItunes,
  SiKalilinux,
  SiLibreoffice,
  SiLinux,
  SiLinuxmint,
  SiMacos,
  SiNodedotjs,
  SiNotepadplusplus,
  SiObsstudio,
  SiOnlyoffice,
  SiOpenjdk,
  SiOpera,
  SiPython,
  SiTorbrowser,
  SiUbuntu,
  SiVirtualbox,
  SiVlcmediaplayer,
  SiXcode,
  SiZorin,
  Si7zip,
} from '@icons-pack/react-simple-icons'

const GRIS = '#7d8ea3'

// producto.id → [componente, color]
const POR_PRODUCTO = {
  // Windows
  'windows-11': [AppWindow, '#4cc2ff'],
  'windows-10': [AppWindow, '#4cc2ff'],
  'windows-insider': [FlaskConical, '#a78bfa'],
  'windows-8-1': [AppWindow, GRIS],
  'windows-7': [AppWindow, GRIS],
  'windows-xp': [AppWindow, GRIS],

  // Windows Server
  'server-2025': [Server, '#7cb9e8'],
  'server-2022': [Server, '#7cb9e8'],
  'server-2019': [Server, '#7cb9e8'],
  'server-2016': [Server, '#7cb9e8'],
  'server-2012-r2': [Server, GRIS],
  'sql-server': [Database, '#e8a33d'],

  // Apple
  ipsw: [SiIos, '#d4d4d8'],
  macos: [SiMacos, '#d4d4d8'],
  'apple-devices': [SiItunes, '#fa57c1'],
  xcode: [SiXcode, '#1575f9'],

  // Linux
  ubuntu: [SiUbuntu, '#e95420'],
  debian: [SiDebian, '#e0475f'],
  'linux-mint': [SiLinuxmint, '#87cf3e'],
  fedora: [SiFedora, '#51a2da'],
  arch: [SiArchlinux, '#1793d1'],
  zorin: [SiZorin, '#0cc1f3'],
  kali: [SiKalilinux, '#7fb3d5'],

  // Ofimática
  'office-odt': [FileText, '#ff7043'],
  'microsoft-365': [Layers, '#fb923c'],
  libreoffice: [SiLibreoffice, '#2ec84f'],
  onlyoffice: [SiOnlyoffice, '#ff6f3d'],
  'acrobat-reader': [FileType2, '#ff5252'],

  // Navegadores
  chrome: [SiGooglechrome, '#4285f4'],
  firefox: [SiFirefoxbrowser, '#ff7139'],
  edge: [Globe, '#33b1e6'],
  brave: [SiBrave, '#fb542b'],
  opera: [SiOpera, '#ff1b2d'],
  tor: [SiTorbrowser, '#9a6ee0'],

  // Compresores
  winrar: [FileArchive, '#c084fc'],
  '7zip': [Si7zip, '#ef7d7d'],
  peazip: [Package, '#86efac'],
  nanazip: [Archive, '#fbbf24'],

  // Utilidades USB / ISO
  rufus: [Usb, '#22d3ee'],
  ventoy: [HardDrive, '#38bdf8'],
  etcher: [Zap, '#4dabf7'],
  'media-creation-tool': [Disc3, '#94a3b8'],
  virtualbox: [SiVirtualbox, '#5b8ff9'],

  // Runtimes
  vcredist: [Cog, '#94a3b8'],
  dotnet: [SiDotnet, '#a179dc'],
  java: [SiOpenjdk, '#f89820'],
  directx: [Gamepad2, '#4ade80'],

  // Multimedia
  vlc: [SiVlcmediaplayer, '#ff8800'],
  obs: [SiObsstudio, '#d4d4d8'],
  handbrake: [FileVideo, '#f59e0b'],
  gimp: [SiGimp, '#9bcf7a'],
  audacity: [SiAudacity, '#4ea6ea'],

  // Desarrollo
  vscode: [Code2, '#22a7f0'],
  git: [SiGit, '#f05133'],
  nodejs: [SiNodedotjs, '#74c365'],
  python: [SiPython, '#4dabf7'],
  'visual-studio': [SquareCode, '#c084fc'],
  docker: [SiDocker, '#2496ed'],
  notepadpp: [SiNotepadplusplus, '#90e59a'],
}

// categoria.id → componente (el color lo pone la categoría)
const POR_CATEGORIA = {
  windows: AppWindow,
  server: Server,
  apple: SiApple,
  linux: SiLinux,
  office: FileText,
  navegadores: Globe,
  compresores: FileArchive,
  utilidades: Usb,
  runtimes: Cog,
  multimedia: Clapperboard,
  desarrollo: Code2,
  todas: Library,
  favoritos: Star,
}

export function IconoProducto({ id, size = 22 }) {
  const [Componente, color] = POR_PRODUCTO[id] || [Package, GRIS]
  return <Componente size={size} color={color} aria-hidden="true" />
}

/** Color de marca del producto: se usa para teñir el marco del icono. */
export function colorDeProducto(id) {
  return (POR_PRODUCTO[id] || [null, GRIS])[1]
}

export function IconoCategoria({ id, size = 16, color }) {
  const Componente = POR_CATEGORIA[id] || Package
  return <Componente size={size} color={color} aria-hidden="true" />
}
