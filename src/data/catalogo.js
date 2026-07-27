/**
 * CATÁLOGO DE DESCARGAS
 *
 * Regla del proyecto: TODOS los enlaces apuntan a la web oficial del fabricante
 * (Microsoft, Apple, Google, RARLab, Mozilla, etc.) o a un índice que sirve
 * archivos alojados en los servidores del propio fabricante.
 *
 * Nunca se enlaza a repositorios no autorizados, activadores ni cracks.
 * Si un producto ya no se distribuye oficialmente, se marca como
 * `estado: 'descontinuado'` y se explica la vía legal en `alternativa`.
 *
 * IDIOMA. Cada versión declara en qué idioma llega la descarga:
 *   'es'    → la página y el instalador están en español (enlaces es-ES / intl/es / .es.html)
 *   'multi' → instalador multilingüe: eliges el idioma al descargar o durante la instalación
 *   'en'    → solo disponible en inglés
 * Los enlaces de Microsoft usan el prefijo /es-es/, así que el selector de idioma de la
 * ISO ya aparece con «Español» disponible.
 *
 * Los tamaños son aproximados y sirven solo de referencia.
 */

export const IDIOMAS = {
  es: { etiqueta: 'Español', corta: 'ES' },
  multi: { etiqueta: 'Multilingüe', corta: 'Multi' },
  en: { etiqueta: 'Solo en inglés', corta: 'EN' },
}

export const PRODUCTOS = [
  // ─────────────────────────────── WINDOWS ───────────────────────────────
  {
    id: 'windows-11',
    nombre: 'Windows 11',
    categoria: 'windows',
    fabricante: 'Microsoft',
    estado: 'oficial',
    plataformas: ['Windows'],
    etiquetas: ['iso', 'sistema operativo', 'microsoft', 'w11'],
    descripcion:
      'ISO multi-edición (Home, Pro, Education). Requiere TPM 2.0, Secure Boot y CPU compatible.',
    nota: 'Elige «Descargar imagen de disco (ISO)» y, en el selector de idioma del producto, «Español (España)» o «Español (México)». El enlace generado caduca a las 24 horas.',
    versiones: [
      { nombre: 'Windows 11 24H2 · x64', arquitectura: 'x64', formato: 'ISO', tamano: '~5,8 GB', idioma: 'es', url: 'https://www.microsoft.com/es-es/software-download/windows11' },
      { nombre: 'Windows 11 24H2 · ARM64', arquitectura: 'ARM64', formato: 'ISO', tamano: '~5,1 GB', idioma: 'es', url: 'https://www.microsoft.com/es-es/software-download/windows11arm64' },
      { nombre: 'Windows 11 Enterprise (evaluación 90 días)', arquitectura: 'x64', formato: 'ISO', tamano: '~6,0 GB', idioma: 'multi', url: 'https://www.microsoft.com/es-es/evalcenter/evaluate-windows-11-enterprise' },
    ],
  },
  {
    id: 'windows-10',
    nombre: 'Windows 10',
    categoria: 'windows',
    fabricante: 'Microsoft',
    estado: 'oficial',
    plataformas: ['Windows'],
    etiquetas: ['iso', 'sistema operativo', 'microsoft', 'w10'],
    descripcion:
      'ISO 22H2, la última versión de Windows 10. Soporte principal finalizado en octubre de 2025.',
    nota: 'La ISO se descarga ya en español si eliges «Español» en el selector de idioma del producto. Considera Windows 11 si el equipo es compatible.',
    versiones: [
      { nombre: 'Windows 10 22H2 · x64 / x86', arquitectura: 'x64 · x86', formato: 'ISO', tamano: '~5,8 GB', idioma: 'es', url: 'https://www.microsoft.com/es-es/software-download/windows10' },
      { nombre: 'Windows 10 Enterprise (evaluación 90 días)', arquitectura: 'x64', formato: 'ISO', tamano: '~5,0 GB', idioma: 'multi', url: 'https://www.microsoft.com/es-es/evalcenter/evaluate-windows-10-enterprise' },
      { nombre: 'Windows 10 LTSC 2021 (evaluación)', arquitectura: 'x64', formato: 'ISO', tamano: '~4,7 GB', idioma: 'multi', url: 'https://www.microsoft.com/es-es/evalcenter/evaluate-windows-10-enterprise-ltsc-2021' },
    ],
  },
  {
    id: 'windows-insider',
    nombre: 'Windows Insider Preview',
    categoria: 'windows',
    fabricante: 'Microsoft',
    estado: 'oficial',
    plataformas: ['Windows'],
    etiquetas: ['iso', 'beta', 'preview', 'insider'],
    descripcion:
      'Compilaciones de prueba de Windows. Requiere iniciar sesión con una cuenta Microsoft registrada en el programa Insider.',
    nota: 'Software preliminar: no lo instales en un equipo de producción. Las ISOs Insider incluyen español entre los idiomas disponibles.',
    versiones: [
      { nombre: 'ISOs Insider (Canary / Dev / Beta)', arquitectura: 'x64 · ARM64', formato: 'ISO', tamano: '~6 GB', idioma: 'es', url: 'https://www.microsoft.com/es-es/software-download/windowsinsiderpreviewiso' },
    ],
  },
  {
    id: 'windows-8-1',
    nombre: 'Windows 8.1',
    categoria: 'windows',
    fabricante: 'Microsoft',
    estado: 'descontinuado',
    plataformas: ['Windows'],
    etiquetas: ['iso', 'sistema operativo', 'w8', 'legacy'],
    descripcion: 'Fin de soporte el 10 de enero de 2023. Microsoft retiró la página de descarga de ISOs.',
    alternativa:
      'Ya no existe descarga pública oficial. Si tienes licencia por volumen, la imagen sigue en el Centro de servicios de licencias por volumen (VLSC / Centro de administración de Microsoft 365). Los fabricantes (Dell, HP, Lenovo) también ofrecen medios de recuperación en español para equipos con esa licencia OEM.',
    enlaceInfo: 'https://learn.microsoft.com/es-es/lifecycle/products/windows-81',
    versiones: [],
  },
  {
    id: 'windows-7',
    nombre: 'Windows 7',
    categoria: 'windows',
    fabricante: 'Microsoft',
    estado: 'descontinuado',
    plataformas: ['Windows'],
    etiquetas: ['iso', 'sistema operativo', 'w7', 'legacy'],
    descripcion: 'Fin de soporte extendido el 14 de enero de 2020. Sin parches de seguridad desde entonces.',
    alternativa:
      'Microsoft cerró la herramienta de descarga por clave de producto en 2021. Vías legítimas: medios de recuperación del fabricante del equipo, licencias por volumen (VLSC) o suscripción Visual Studio (my.visualstudio.com), que aún publica imágenes antiguas en español para desarrolladores.',
    enlaceInfo: 'https://learn.microsoft.com/es-es/lifecycle/products/windows-7',
    versiones: [],
  },
  {
    id: 'windows-xp',
    nombre: 'Windows XP',
    categoria: 'windows',
    fabricante: 'Microsoft',
    estado: 'descontinuado',
    plataformas: ['Windows'],
    etiquetas: ['iso', 'sistema operativo', 'xp', 'legacy', 'retro'],
    descripcion: 'Fin de soporte el 8 de abril de 2014. Inseguro para conectarlo a Internet.',
    alternativa:
      'No hay descarga oficial ni forma legal de obtener una licencia nueva. Para software antiguo que lo requiera, lo recomendable es una máquina virtual aislada (sin red) con un medio original propio, o probar compatibilidad en Windows 11 / Wine.',
    enlaceInfo: 'https://learn.microsoft.com/es-es/lifecycle/products/windows-xp',
    versiones: [],
  },

  // ──────────────────────────── WINDOWS SERVER ────────────────────────────
  {
    id: 'server-2025',
    nombre: 'Windows Server 2025',
    categoria: 'server',
    fabricante: 'Microsoft',
    estado: 'evaluacion',
    plataformas: ['Windows Server'],
    etiquetas: ['iso', 'server', 'datacenter', 'standard'],
    descripcion: 'Última versión LTSC. Evaluación completa de 180 días (Standard y Datacenter).',
    nota: 'El Evaluation Center pide un registro breve. En el desplegable de idioma elige «Spanish» para bajar la ISO en español.',
    versiones: [
      { nombre: 'Server 2025 · evaluación 180 días', arquitectura: 'x64', formato: 'ISO', tamano: '~5,3 GB', idioma: 'multi', url: 'https://www.microsoft.com/es-es/evalcenter/evaluate-windows-server-2025' },
    ],
  },
  {
    id: 'server-2022',
    nombre: 'Windows Server 2022',
    categoria: 'server',
    fabricante: 'Microsoft',
    estado: 'evaluacion',
    plataformas: ['Windows Server'],
    etiquetas: ['iso', 'server', 'ltsc'],
    descripcion: 'LTSC con soporte extendido hasta 2031. La opción más habitual en producción hoy.',
    nota: 'Selecciona «Spanish» en el desplegable de idioma antes de pulsar Descargar.',
    versiones: [
      { nombre: 'Server 2022 · evaluación 180 días', arquitectura: 'x64', formato: 'ISO', tamano: '~4,7 GB', idioma: 'multi', url: 'https://www.microsoft.com/es-es/evalcenter/evaluate-windows-server-2022' },
    ],
  },
  {
    id: 'server-2019',
    nombre: 'Windows Server 2019',
    categoria: 'server',
    fabricante: 'Microsoft',
    estado: 'evaluacion',
    plataformas: ['Windows Server'],
    etiquetas: ['iso', 'server', 'ltsc'],
    descripcion: 'LTSC con soporte extendido hasta enero de 2029.',
    versiones: [
      { nombre: 'Server 2019 · evaluación 180 días', arquitectura: 'x64', formato: 'ISO', tamano: '~5,0 GB', idioma: 'multi', url: 'https://www.microsoft.com/es-es/evalcenter/evaluate-windows-server-2019' },
    ],
  },
  {
    id: 'server-2016',
    nombre: 'Windows Server 2016',
    categoria: 'server',
    fabricante: 'Microsoft',
    estado: 'evaluacion',
    plataformas: ['Windows Server'],
    etiquetas: ['iso', 'server', 'ltsc', 'legacy'],
    descripcion: 'Soporte extendido hasta enero de 2027. Útil para laboratorios y migraciones.',
    versiones: [
      { nombre: 'Server 2016 · evaluación 180 días', arquitectura: 'x64', formato: 'ISO', tamano: '~6,5 GB', idioma: 'multi', url: 'https://www.microsoft.com/es-es/evalcenter/evaluate-windows-server-2016' },
    ],
  },
  {
    id: 'server-2012-r2',
    nombre: 'Windows Server 2012 R2',
    categoria: 'server',
    fabricante: 'Microsoft',
    estado: 'descontinuado',
    plataformas: ['Windows Server'],
    etiquetas: ['iso', 'server', 'legacy'],
    descripcion: 'Fin de soporte extendido el 10 de octubre de 2023.',
    alternativa:
      'Solo disponible mediante licencias por volumen o suscripción Visual Studio. Para entornos nuevos usa Server 2022 o 2025.',
    enlaceInfo: 'https://learn.microsoft.com/es-es/lifecycle/products/windows-server-2012-r2',
    versiones: [],
  },
  {
    id: 'sql-server',
    nombre: 'SQL Server',
    categoria: 'server',
    fabricante: 'Microsoft',
    estado: 'oficial',
    plataformas: ['Windows', 'Linux'],
    etiquetas: ['base de datos', 'sql', 'express', 'developer'],
    descripcion: 'Ediciones Developer y Express gratuitas; evaluación de 180 días para Standard/Enterprise.',
    nota: 'El instalador detecta el idioma del sistema; en Windows en español se instala en español automáticamente.',
    versiones: [
      { nombre: 'SQL Server 2022 · Developer / Express', arquitectura: 'x64', formato: 'EXE', tamano: '~1,0 GB', idioma: 'es', url: 'https://www.microsoft.com/es-es/sql-server/sql-server-downloads' },
      { nombre: 'SQL Server Management Studio (SSMS)', arquitectura: 'x64', formato: 'EXE', tamano: '~700 MB', idioma: 'es', url: 'https://learn.microsoft.com/es-es/ssms/install/install' },
    ],
  },

  // ───────────────────────────── APPLE ─────────────────────────────
  {
    id: 'ipsw',
    nombre: 'Firmwares IPSW (iOS / iPadOS)',
    categoria: 'apple',
    fabricante: 'Apple',
    estado: 'oficial',
    plataformas: ['iOS', 'iPadOS'],
    etiquetas: ['ios', 'ipsw', 'iphone', 'ipad', 'restaurar', 'firmware'],
    descripcion:
      'Índice de firmwares por modelo. Los archivos se descargan directamente de los servidores de Apple (updates.cdn-apple.com).',
    nota:
      'El IPSW no tiene idioma: iOS incluye todos y eliges el tuyo al configurar el dispositivo. Apple solo permite restaurar a versiones que sigan «firmadas» (marcadas en verde en ipsw.me). Se restaura con Finder (macOS) o la app Dispositivos Apple (Windows).',
    versiones: [
      { nombre: 'ipsw.me · buscar por modelo', arquitectura: 'Todos', formato: 'IPSW', tamano: '3–8 GB', idioma: 'multi', url: 'https://ipsw.me' },
      { nombre: 'Apple Developer · betas y releases', arquitectura: 'Todos', formato: 'IPSW', tamano: '3–8 GB', idioma: 'en', url: 'https://developer.apple.com/download/' },
    ],
  },
  {
    id: 'macos',
    nombre: 'macOS (instaladores)',
    categoria: 'apple',
    fabricante: 'Apple',
    estado: 'oficial',
    plataformas: ['macOS'],
    etiquetas: ['macos', 'sonoma', 'sequoia', 'ventura', 'instalador', 'usb'],
    descripcion:
      'Instaladores completos de macOS. Los actuales se obtienen desde Ajustes del Sistema; los antiguos, desde la App Store o el instalador delta de Apple.',
    nota:
      'macOS incluye todos los idiomas en la misma imagen. Truco para descargar sin la App Store: en Terminal, `softwareupdate --list-full-installers` lista las versiones y `softwareupdate --fetch-full-installer --full-installer-version 15.0` descarga la que elijas.',
    versiones: [
      { nombre: 'Actualizar a la última versión de macOS', arquitectura: 'Apple Silicon · Intel', formato: 'APP', tamano: '~13 GB', idioma: 'es', url: 'https://www.apple.com/es/macos/how-to-upgrade/' },
      { nombre: 'Versiones anteriores de macOS (soporte Apple)', arquitectura: 'Apple Silicon · Intel', formato: 'APP / DMG', tamano: '8–14 GB', idioma: 'es', url: 'https://support.apple.com/es-es/HT211683' },
    ],
  },
  {
    id: 'apple-devices',
    nombre: 'iTunes / Dispositivos Apple (Windows)',
    categoria: 'apple',
    fabricante: 'Apple',
    estado: 'oficial',
    plataformas: ['Windows'],
    etiquetas: ['itunes', 'apple devices', 'restaurar', 'sincronizar'],
    descripcion:
      'Necesario en Windows para restaurar un iPhone/iPad con un archivo IPSW o hacer copias de seguridad locales.',
    nota: 'En Windows 10/11 la app moderna se llama «Dispositivos Apple» y está en Microsoft Store; iTunes sigue disponible como instalador clásico en español.',
    versiones: [
      { nombre: 'iTunes para Windows', arquitectura: 'x64', formato: 'EXE', tamano: '~200 MB', idioma: 'es', url: 'https://www.apple.com/es/itunes/download/' },
      { nombre: 'Guía de Dispositivos Apple', arquitectura: 'x64', formato: 'Store', tamano: '~150 MB', idioma: 'es', url: 'https://support.apple.com/es-es/guide/devices-windows/welcome/windows' },
    ],
  },
  {
    id: 'xcode',
    nombre: 'Xcode',
    categoria: 'apple',
    fabricante: 'Apple',
    estado: 'oficial',
    plataformas: ['macOS'],
    etiquetas: ['xcode', 'desarrollo', 'ios', 'swift'],
    descripcion: 'IDE oficial de Apple con simuladores de iOS, iPadOS, watchOS y tvOS.',
    nota: 'La interfaz de Xcode solo está en inglés, aunque el sistema esté en español.',
    versiones: [
      { nombre: 'Xcode · Mac App Store', arquitectura: 'Apple Silicon · Intel', formato: 'APP', tamano: '~8 GB', idioma: 'en', url: 'https://apps.apple.com/es/app/xcode/id497799835' },
      { nombre: 'Versiones anteriores (Developer)', arquitectura: 'Apple Silicon · Intel', formato: 'XIP', tamano: '~8 GB', idioma: 'en', url: 'https://developer.apple.com/download/all/' },
    ],
  },

  // ───────────────────────────── LINUX ─────────────────────────────
  {
    id: 'ubuntu',
    nombre: 'Ubuntu',
    categoria: 'linux',
    fabricante: 'Canonical',
    estado: 'oficial',
    plataformas: ['Linux'],
    etiquetas: ['iso', 'linux', 'lts', 'debian'],
    descripcion: 'La distribución más extendida. Las versiones LTS tienen 5 años de soporte.',
    nota: 'La ISO es única para todos los idiomas: el español se elige en la primera pantalla del instalador.',
    versiones: [
      { nombre: 'Ubuntu Desktop LTS', arquitectura: 'x64', formato: 'ISO', tamano: '~6 GB', idioma: 'multi', url: 'https://ubuntu.com/download/desktop' },
      { nombre: 'Ubuntu Server LTS', arquitectura: 'x64 · ARM64', formato: 'ISO', tamano: '~2,7 GB', idioma: 'multi', url: 'https://ubuntu.com/download/server' },
      { nombre: 'Sabores (Kubuntu, Xubuntu, Lubuntu…)', arquitectura: 'x64', formato: 'ISO', tamano: '~3–4 GB', idioma: 'multi', url: 'https://ubuntu.com/download/flavours' },
    ],
  },
  {
    id: 'debian',
    nombre: 'Debian',
    categoria: 'linux',
    fabricante: 'Proyecto Debian',
    estado: 'oficial',
    plataformas: ['Linux'],
    etiquetas: ['iso', 'linux', 'servidor', 'estable'],
    descripcion: 'Estabilidad por encima de todo. Base de Ubuntu y de la mayoría de derivadas.',
    nota: 'El instalador de Debian arranca preguntando el idioma; el español está incluido en todas las imágenes.',
    versiones: [
      { nombre: 'Debian netinst (instalador de red)', arquitectura: 'x64', formato: 'ISO', tamano: '~700 MB', idioma: 'multi', url: 'https://www.debian.org/distrib/netinst.es.html' },
      { nombre: 'Debian DVD / live', arquitectura: 'x64 · ARM64', formato: 'ISO', tamano: '~3,7 GB', idioma: 'multi', url: 'https://www.debian.org/distrib/index.es.html' },
    ],
  },
  {
    id: 'linux-mint',
    nombre: 'Linux Mint',
    categoria: 'linux',
    fabricante: 'Linux Mint',
    estado: 'oficial',
    plataformas: ['Linux'],
    etiquetas: ['iso', 'linux', 'cinnamon', 'principiantes'],
    descripcion: 'La transición más suave para quien viene de Windows. Escritorio Cinnamon.',
    nota: 'Escritorio traducido al español; el idioma se configura durante la instalación.',
    versiones: [
      { nombre: 'Linux Mint (Cinnamon / MATE / Xfce)', arquitectura: 'x64', formato: 'ISO', tamano: '~2,9 GB', idioma: 'multi', url: 'https://linuxmint.com/download.php' },
    ],
  },
  {
    id: 'fedora',
    nombre: 'Fedora',
    categoria: 'linux',
    fabricante: 'Red Hat / Fedora Project',
    estado: 'oficial',
    plataformas: ['Linux'],
    etiquetas: ['iso', 'linux', 'gnome', 'red hat'],
    descripcion: 'Siempre con las últimas versiones del kernel y GNOME. Base upstream de RHEL.',
    versiones: [
      { nombre: 'Fedora Workstation', arquitectura: 'x64 · ARM64', formato: 'ISO', tamano: '~2,2 GB', idioma: 'multi', url: 'https://fedoraproject.org/workstation/download' },
      { nombre: 'Fedora Server', arquitectura: 'x64 · ARM64', formato: 'ISO', tamano: '~2,5 GB', idioma: 'multi', url: 'https://fedoraproject.org/server/download' },
    ],
  },
  {
    id: 'arch',
    nombre: 'Arch Linux',
    categoria: 'linux',
    fabricante: 'Arch Linux',
    estado: 'oficial',
    plataformas: ['Linux'],
    etiquetas: ['iso', 'linux', 'rolling release', 'avanzado'],
    descripcion: 'Rolling release y minimalista. Instalación manual (o con el script `archinstall`).',
    nota: 'El entorno de instalación es en inglés; el idioma del sistema se configura después con `locale.conf`.',
    versiones: [
      { nombre: 'Arch Linux ISO (mensual)', arquitectura: 'x64', formato: 'ISO', tamano: '~1,2 GB', idioma: 'en', url: 'https://archlinux.org/download/' },
    ],
  },
  {
    id: 'zorin',
    nombre: 'Zorin OS',
    categoria: 'linux',
    fabricante: 'Zorin Group',
    estado: 'oficial',
    plataformas: ['Linux'],
    etiquetas: ['iso', 'linux', 'windows-like'],
    descripcion: 'Distribución basada en Ubuntu diseñada para parecerse a Windows. Edición Core gratuita.',
    versiones: [
      { nombre: 'Zorin OS Core', arquitectura: 'x64', formato: 'ISO', tamano: '~3,5 GB', idioma: 'multi', url: 'https://zorin.com/os/download/' },
    ],
  },
  {
    id: 'kali',
    nombre: 'Kali Linux',
    categoria: 'linux',
    fabricante: 'OffSec',
    estado: 'oficial',
    plataformas: ['Linux'],
    etiquetas: ['iso', 'linux', 'seguridad', 'pentesting'],
    descripcion: 'Distribución para auditoría de seguridad. Imágenes ISO, VM, WSL y ARM.',
    nota: 'Úsala solo sobre sistemas propios o con autorización expresa por escrito. El instalador (basado en Debian) permite elegir español.',
    versiones: [
      { nombre: 'Kali Installer / Live / VM', arquitectura: 'x64 · ARM64', formato: 'ISO / OVA', tamano: '~4 GB', idioma: 'multi', url: 'https://www.kali.org/get-kali/' },
    ],
  },

  // ─────────────────────────── OFIMÁTICA ───────────────────────────
  {
    id: 'office-odt',
    nombre: 'Microsoft Office (ODT)',
    categoria: 'office',
    fabricante: 'Microsoft',
    estado: 'oficial',
    plataformas: ['Windows'],
    etiquetas: ['office', 'word', 'excel', 'powerpoint', '2021', '2024', 'odt'],
    descripcion:
      'La Office Deployment Tool descarga e instala Office 2019 / 2021 / 2024 o Microsoft 365 desde los servidores de Microsoft usando un archivo XML de configuración.',
    nota:
      'Para que se instale en español, en el XML pon <Language ID="es-es" /> dentro del bloque <Product>. Flujo: genera el XML en config.office.com, ponlo junto a setup.exe y ejecuta `setup.exe /configure config.xml`. Necesitas una licencia válida para activar.',
    versiones: [
      { nombre: 'Office Deployment Tool (setup.exe)', arquitectura: 'x64 · x86', formato: 'EXE', tamano: '~8 MB', idioma: 'es', url: 'https://www.microsoft.com/es-es/download/details.aspx?id=49117' },
      { nombre: 'Generador de configuración XML', arquitectura: 'Web', formato: 'XML', tamano: '—', idioma: 'es', url: 'https://config.office.com/deploymentsettings' },
      { nombre: 'Instalar con clave de producto (retail)', arquitectura: 'Web', formato: 'Web', tamano: '—', idioma: 'es', url: 'https://setup.office.com' },
    ],
  },
  {
    id: 'microsoft-365',
    nombre: 'Microsoft 365',
    categoria: 'office',
    fabricante: 'Microsoft',
    estado: 'oficial',
    plataformas: ['Windows', 'macOS'],
    etiquetas: ['office', '365', 'suscripción', 'word', 'excel'],
    descripcion: 'Instalación de las apps de escritorio asociadas a tu suscripción o cuenta de trabajo.',
    nota: 'En «Instalar aplicaciones → Otras opciones» puedes elegir explícitamente el idioma español antes de descargar.',
    versiones: [
      { nombre: 'Portal de cuenta · Instalar aplicaciones', arquitectura: 'x64 · ARM64', formato: 'EXE / PKG', tamano: '~4 GB', idioma: 'es', url: 'https://portal.office.com/account' },
      { nombre: 'Microsoft 365 (web)', arquitectura: 'Web', formato: 'Web', tamano: '—', idioma: 'es', url: 'https://www.microsoft365.com' },
    ],
  },
  {
    id: 'libreoffice',
    nombre: 'LibreOffice',
    categoria: 'office',
    fabricante: 'The Document Foundation',
    estado: 'oficial',
    plataformas: ['Windows', 'macOS', 'Linux'],
    etiquetas: ['ofimática', 'gratis', 'open source', 'alternativa a office'],
    descripcion: 'Suite ofimática libre y gratuita, compatible con formatos de Microsoft Office.',
    nota: 'Descarga desde la web en español: el instalador ya viene con la interfaz en español. Añade aparte el «Paquete de ayuda» si quieres la ayuda offline traducida.',
    versiones: [
      { nombre: 'LibreOffice en español · rama estable', arquitectura: 'x64 · ARM64', formato: 'MSI / DMG / DEB', tamano: '~350 MB', idioma: 'es', url: 'https://es.libreoffice.org/descarga/' },
    ],
  },
  {
    id: 'onlyoffice',
    nombre: 'ONLYOFFICE Desktop',
    categoria: 'office',
    fabricante: 'Ascensio System',
    estado: 'oficial',
    plataformas: ['Windows', 'macOS', 'Linux'],
    etiquetas: ['ofimática', 'gratis', 'docx', 'xlsx'],
    descripcion: 'La alternativa gratuita con mejor fidelidad visual frente a los formatos OOXML.',
    versiones: [
      { nombre: 'ONLYOFFICE Desktop Editors', arquitectura: 'x64 · ARM64', formato: 'EXE / DMG / DEB', tamano: '~250 MB', idioma: 'es', url: 'https://www.onlyoffice.com/es/download-desktop.aspx' },
    ],
  },
  {
    id: 'acrobat-reader',
    nombre: 'Adobe Acrobat Reader',
    categoria: 'office',
    fabricante: 'Adobe',
    estado: 'oficial',
    plataformas: ['Windows', 'macOS'],
    etiquetas: ['pdf', 'lector', 'gratis'],
    descripcion: 'Lector de PDF gratuito. La página de descarga ofrece extras opcionales: desmárcalos.',
    nota: 'La página en español preselecciona el instalador en español; comprueba el desplegable «Idioma» antes de descargar.',
    versiones: [
      { nombre: 'Acrobat Reader', arquitectura: 'x64', formato: 'EXE / DMG', tamano: '~300 MB', idioma: 'es', url: 'https://get.adobe.com/es/reader/' },
      { nombre: 'Instaladores empresariales (offline)', arquitectura: 'x64 · x86', formato: 'MSI', tamano: '~350 MB', idioma: 'es', url: 'https://get.adobe.com/es/reader/enterprise/' },
    ],
  },

  // ─────────────────────────── NAVEGADORES ───────────────────────────
  {
    id: 'chrome',
    nombre: 'Google Chrome',
    categoria: 'navegadores',
    fabricante: 'Google',
    estado: 'oficial',
    plataformas: ['Windows', 'macOS', 'Linux'],
    etiquetas: ['navegador', 'chrome', 'offline', 'standalone', 'msi'],
    descripcion:
      'Instalador standalone (offline): descarga el paquete completo en lugar del típico instalador de 1 MB que necesita conexión.',
    nota: 'El parámetro `?standalone=1` es la clave para obtener el instalador completo, ideal para equipos sin internet. Con `/intl/es/` la descarga llega ya configurada en español.',
    versiones: [
      { nombre: 'Chrome standalone · un usuario', arquitectura: 'x64', formato: 'EXE', tamano: '~110 MB', idioma: 'es', url: 'https://www.google.com/intl/es/chrome/?standalone=1' },
      { nombre: 'Chrome Enterprise · MSI (todo el equipo)', arquitectura: 'x64 · ARM64', formato: 'MSI / PKG', tamano: '~130 MB', idioma: 'multi', url: 'https://chromeenterprise.google/browser/download/' },
      { nombre: 'Chrome para macOS / Linux', arquitectura: 'Universal · x64', formato: 'DMG / DEB / RPM', tamano: '~200 MB', idioma: 'es', url: 'https://www.google.com/intl/es/chrome/' },
    ],
  },
  {
    id: 'firefox',
    nombre: 'Mozilla Firefox',
    categoria: 'navegadores',
    fabricante: 'Mozilla',
    estado: 'oficial',
    plataformas: ['Windows', 'macOS', 'Linux'],
    etiquetas: ['navegador', 'firefox', 'esr', 'privacidad'],
    descripcion: 'Instaladores completos en todos los idiomas y plataformas, incluida la rama ESR para empresas.',
    nota: 'En la tabla busca «Español (España)» o «Español (México/Argentina/Chile)»: cada uno es un instalador distinto, ya traducido.',
    versiones: [
      { nombre: 'Firefox · todos los idiomas y sistemas', arquitectura: 'x64 · x86 · ARM64', formato: 'EXE / DMG / TAR', tamano: '~60 MB', idioma: 'es', url: 'https://www.mozilla.org/es-ES/firefox/all/' },
      { nombre: 'Firefox ESR (empresas)', arquitectura: 'x64 · x86', formato: 'MSI', tamano: '~60 MB', idioma: 'es', url: 'https://www.mozilla.org/es-ES/firefox/enterprise/' },
    ],
  },
  {
    id: 'edge',
    nombre: 'Microsoft Edge',
    categoria: 'navegadores',
    fabricante: 'Microsoft',
    estado: 'oficial',
    plataformas: ['Windows', 'macOS', 'Linux'],
    etiquetas: ['navegador', 'edge', 'chromium'],
    descripcion: 'Navegador basado en Chromium. La versión Business incluye instaladores offline y políticas de grupo.',
    versiones: [
      { nombre: 'Edge estable', arquitectura: 'x64 · ARM64', formato: 'EXE / PKG', tamano: '~180 MB', idioma: 'es', url: 'https://www.microsoft.com/es-es/edge/download' },
      { nombre: 'Edge for Business (MSI offline)', arquitectura: 'x64 · x86 · ARM64', formato: 'MSI', tamano: '~180 MB', idioma: 'es', url: 'https://www.microsoft.com/es-es/edge/business/download' },
    ],
  },
  {
    id: 'brave',
    nombre: 'Brave',
    categoria: 'navegadores',
    fabricante: 'Brave Software',
    estado: 'oficial',
    plataformas: ['Windows', 'macOS', 'Linux'],
    etiquetas: ['navegador', 'privacidad', 'bloqueador'],
    descripcion: 'Chromium con bloqueo de anuncios y rastreadores integrado.',
    versiones: [
      { nombre: 'Brave Browser', arquitectura: 'x64 · ARM64', formato: 'EXE / DMG / DEB', tamano: '~150 MB', idioma: 'es', url: 'https://brave.com/es/download/' },
    ],
  },
  {
    id: 'opera',
    nombre: 'Opera',
    categoria: 'navegadores',
    fabricante: 'Opera Software',
    estado: 'oficial',
    plataformas: ['Windows', 'macOS', 'Linux'],
    etiquetas: ['navegador', 'vpn', 'gx'],
    descripcion: 'Incluye VPN gratuita integrada. Opera GX es la variante orientada a videojuegos.',
    versiones: [
      { nombre: 'Opera', arquitectura: 'x64', formato: 'EXE / DMG', tamano: '~110 MB', idioma: 'es', url: 'https://www.opera.com/es/download' },
      { nombre: 'Opera GX', arquitectura: 'x64', formato: 'EXE / DMG', tamano: '~120 MB', idioma: 'es', url: 'https://www.opera.com/es/gx' },
    ],
  },
  {
    id: 'tor',
    nombre: 'Tor Browser',
    categoria: 'navegadores',
    fabricante: 'Tor Project',
    estado: 'oficial',
    plataformas: ['Windows', 'macOS', 'Linux'],
    etiquetas: ['navegador', 'privacidad', 'anonimato'],
    descripcion: 'Navegación anónima a través de la red Tor. Basado en Firefox ESR.',
    nota: 'Descarga el paquete «Español» de la lista de idiomas para tener la interfaz traducida.',
    versiones: [
      { nombre: 'Tor Browser', arquitectura: 'x64', formato: 'EXE / DMG / TAR', tamano: '~110 MB', idioma: 'es', url: 'https://www.torproject.org/es/download/' },
    ],
  },

  // ─────────────────────────── COMPRESORES ───────────────────────────
  {
    id: 'winrar',
    nombre: 'WinRAR',
    categoria: 'compresores',
    fabricante: 'RARLAB (win.rar GmbH)',
    estado: 'oficial',
    plataformas: ['Windows', 'macOS', 'Linux', 'Android'],
    etiquetas: ['comprimir', 'rar', 'zip', 'descomprimir'],
    descripcion:
      'El compresor clásico. La versión de prueba no caduca funcionalmente, pero requiere licencia para uso continuado.',
    nota:
      'WinRAR se distribuye como un ejecutable por idioma: en la tabla de RARLAB busca la fila «Spanish» (hay versión de España y otra de Latinoamérica). Descarga siempre desde win-rar.com o rarlab.com; las copias de terceros suelen venir modificadas.',
    versiones: [
      { nombre: 'WinRAR en español (RARLAB · lista por idioma)', arquitectura: 'x64 · x86', formato: 'EXE', tamano: '~3,8 MB', idioma: 'es', url: 'https://www.rarlab.com/download.htm' },
      { nombre: 'WinRAR · página oficial de descarga', arquitectura: 'x64 · x86', formato: 'EXE', tamano: '~3,8 MB', idioma: 'multi', url: 'https://www.win-rar.com/download.html' },
    ],
  },
  {
    id: '7zip',
    nombre: '7-Zip',
    categoria: 'compresores',
    fabricante: 'Igor Pavlov',
    estado: 'oficial',
    plataformas: ['Windows', 'Linux'],
    etiquetas: ['comprimir', '7z', 'zip', 'gratis', 'open source'],
    descripcion: 'Gratuito, de código abierto y con la mejor tasa de compresión (formato .7z).',
    nota: 'El instalador es único y ya incluye el español: se activa solo si tu Windows está en español (o se cambia en Herramientas → Opciones → Idioma).',
    versiones: [
      { nombre: '7-Zip', arquitectura: 'x64 · x86 · ARM64', formato: 'EXE / MSI', tamano: '~1,5 MB', idioma: 'multi', url: 'https://www.7-zip.org/download.html' },
    ],
  },
  {
    id: 'peazip',
    nombre: 'PeaZip',
    categoria: 'compresores',
    fabricante: 'Giorgio Tani',
    estado: 'oficial',
    plataformas: ['Windows', 'Linux'],
    etiquetas: ['comprimir', 'gratis', 'open source', 'portable'],
    descripcion: 'Soporta más de 200 formatos y tiene versión portable (no requiere instalación).',
    nota: 'Incluye traducción al español dentro del propio paquete (Options → Localization).',
    versiones: [
      { nombre: 'PeaZip', arquitectura: 'x64 · ARM64', formato: 'EXE / DEB / RPM', tamano: '~10 MB', idioma: 'multi', url: 'https://peazip.github.io/' },
    ],
  },
  {
    id: 'nanazip',
    nombre: 'NanaZip',
    categoria: 'compresores',
    fabricante: 'M2Team',
    estado: 'oficial',
    plataformas: ['Windows'],
    etiquetas: ['comprimir', 'open source', 'windows 11', 'menú contextual'],
    descripcion: 'Fork moderno de 7-Zip con integración nativa en el menú contextual de Windows 11.',
    nota: 'Sigue el idioma del sistema: en un Windows en español se muestra en español.',
    versiones: [
      { nombre: 'NanaZip (GitHub · releases)', arquitectura: 'x64 · ARM64', formato: 'MSIX', tamano: '~10 MB', idioma: 'multi', url: 'https://github.com/M2Team/NanaZip/releases' },
    ],
  },

  // ──────────────────── UTILIDADES USB / ISO ────────────────────
  {
    id: 'rufus',
    nombre: 'Rufus',
    categoria: 'utilidades',
    fabricante: 'Pete Batard',
    estado: 'oficial',
    plataformas: ['Windows'],
    etiquetas: ['usb', 'booteable', 'iso', 'instalación'],
    descripcion:
      'Crea USB de instalación desde una ISO. Permite saltar los requisitos de TPM/Secure Boot y la cuenta Microsoft obligatoria de Windows 11.',
    nota: 'Web e interfaz completamente en español. Es la herramienta más rápida y ligera para grabar ISOs de Windows; existe versión portable.',
    versiones: [
      { nombre: 'Rufus', arquitectura: 'x64 · ARM64', formato: 'EXE', tamano: '~1,5 MB', idioma: 'es', url: 'https://rufus.ie/es/' },
    ],
  },
  {
    id: 'ventoy',
    nombre: 'Ventoy',
    categoria: 'utilidades',
    fabricante: 'Ventoy',
    estado: 'oficial',
    plataformas: ['Windows', 'Linux'],
    etiquetas: ['usb', 'multiboot', 'iso', 'booteable'],
    descripcion:
      'Se instala una vez en el USB y luego basta con copiar las ISOs dentro: aparecen todas en un menú de arranque.',
    nota: 'Ideal para llevar Windows, Linux y herramientas de rescate en un solo pendrive. La app incluye español en el selector de idioma.',
    versiones: [
      { nombre: 'Ventoy', arquitectura: 'x64 · ARM64', formato: 'ZIP / TAR', tamano: '~20 MB', idioma: 'multi', url: 'https://www.ventoy.net/en/download.html' },
    ],
  },
  {
    id: 'etcher',
    nombre: 'balenaEtcher',
    categoria: 'utilidades',
    fabricante: 'Balena',
    estado: 'oficial',
    plataformas: ['Windows', 'macOS', 'Linux'],
    etiquetas: ['usb', 'iso', 'img', 'raspberry pi'],
    descripcion: 'Grabador de imágenes multiplataforma, muy simple. Perfecto para Linux y Raspberry Pi.',
    nota: 'La interfaz solo está en inglés, pero tiene apenas tres botones.',
    versiones: [
      { nombre: 'balenaEtcher', arquitectura: 'x64 · ARM64', formato: 'EXE / DMG / AppImage', tamano: '~150 MB', idioma: 'en', url: 'https://etcher.balena.io/' },
    ],
  },
  {
    id: 'media-creation-tool',
    nombre: 'Media Creation Tool',
    categoria: 'utilidades',
    fabricante: 'Microsoft',
    estado: 'oficial',
    plataformas: ['Windows'],
    etiquetas: ['usb', 'iso', 'windows', 'oficial'],
    descripcion: 'Herramienta oficial de Microsoft: descarga la ISO y crea el USB de instalación en un solo paso.',
    nota: 'Desmarca «Usar las opciones recomendadas para este equipo» si quieres forzar el idioma español en un equipo configurado en otro idioma.',
    versiones: [
      { nombre: 'Media Creation Tool · Windows 11', arquitectura: 'x64', formato: 'EXE', tamano: '~10 MB', idioma: 'es', url: 'https://www.microsoft.com/es-es/software-download/windows11' },
      { nombre: 'Media Creation Tool · Windows 10', arquitectura: 'x64 · x86', formato: 'EXE', tamano: '~20 MB', idioma: 'es', url: 'https://www.microsoft.com/es-es/software-download/windows10' },
    ],
  },
  {
    id: 'virtualbox',
    nombre: 'VirtualBox',
    categoria: 'utilidades',
    fabricante: 'Oracle',
    estado: 'oficial',
    plataformas: ['Windows', 'macOS', 'Linux'],
    etiquetas: ['virtualización', 'vm', 'máquina virtual', 'probar iso'],
    descripcion: 'Virtualizador gratuito para probar cualquier ISO sin tocar tu sistema principal.',
    nota: 'Recuerda instalar también el Extension Pack si necesitas USB 3.0 o RDP. La interfaz incluye español (File → Preferences → Language).',
    versiones: [
      { nombre: 'VirtualBox + Extension Pack', arquitectura: 'x64 · ARM64', formato: 'EXE / DMG / DEB', tamano: '~110 MB', idioma: 'multi', url: 'https://www.virtualbox.org/wiki/Downloads' },
    ],
  },

  // ───────────────────── RUNTIMES Y LIBRERÍAS ─────────────────────
  {
    id: 'vcredist',
    nombre: 'Visual C++ Redistributable',
    categoria: 'runtimes',
    fabricante: 'Microsoft',
    estado: 'oficial',
    plataformas: ['Windows'],
    etiquetas: ['redistribuible', 'vcredist', 'dll', 'error'],
    descripcion:
      'La causa nº 1 de errores tipo «falta MSVCP140.dll» o «VCRUNTIME140.dll no encontrado». Instala x64 y x86.',
    versiones: [
      { nombre: 'VC++ 2015–2022 (última versión)', arquitectura: 'x64 · x86 · ARM64', formato: 'EXE', tamano: '~25 MB', idioma: 'es', url: 'https://learn.microsoft.com/es-es/cpp/windows/latest-supported-vc-redist' },
    ],
  },
  {
    id: 'dotnet',
    nombre: '.NET',
    categoria: 'runtimes',
    fabricante: 'Microsoft',
    estado: 'oficial',
    plataformas: ['Windows', 'macOS', 'Linux'],
    etiquetas: ['runtime', 'sdk', 'dotnet', 'framework'],
    descripcion: 'Runtime para ejecutar aplicaciones .NET y SDK para desarrollarlas.',
    versiones: [
      { nombre: '.NET (runtime + SDK, versión actual)', arquitectura: 'x64 · x86 · ARM64', formato: 'EXE / PKG', tamano: '~200 MB', idioma: 'es', url: 'https://dotnet.microsoft.com/es-es/download' },
      { nombre: '.NET Framework 4.8 / 3.5 (heredado)', arquitectura: 'x64 · x86', formato: 'EXE', tamano: '~110 MB', idioma: 'es', url: 'https://dotnet.microsoft.com/es-es/download/dotnet-framework' },
    ],
  },
  {
    id: 'java',
    nombre: 'Java (JRE / JDK)',
    categoria: 'runtimes',
    fabricante: 'Eclipse Adoptium · Oracle',
    estado: 'oficial',
    plataformas: ['Windows', 'macOS', 'Linux'],
    etiquetas: ['java', 'jdk', 'jre', 'runtime'],
    descripcion:
      'Temurin (Adoptium) es la distribución OpenJDK libre recomendada; Oracle Java tiene licencia más restrictiva para uso comercial.',
    versiones: [
      { nombre: 'Eclipse Temurin (OpenJDK, recomendado)', arquitectura: 'x64 · ARM64', formato: 'MSI / PKG / TAR', tamano: '~180 MB', idioma: 'en', url: 'https://adoptium.net/temurin/releases/' },
      { nombre: 'Oracle Java', arquitectura: 'x64 · ARM64', formato: 'EXE / DMG', tamano: '~180 MB', idioma: 'es', url: 'https://www.java.com/es/download/' },
    ],
  },
  {
    id: 'directx',
    nombre: 'DirectX End-User Runtime',
    categoria: 'runtimes',
    fabricante: 'Microsoft',
    estado: 'oficial',
    plataformas: ['Windows'],
    etiquetas: ['directx', 'juegos', 'd3dx9', 'xinput'],
    descripcion:
      'Instala las librerías legacy (D3DX9, XAudio 2.7, XInput) que muchos juegos antiguos siguen pidiendo.',
    nota: 'No actualiza la versión de DirectX del sistema; solo añade los componentes que faltan. En la página elige «Español» en el desplegable de idioma.',
    versiones: [
      { nombre: 'DirectX End-User Runtime Web Installer', arquitectura: 'x64 · x86', formato: 'EXE', tamano: '~300 KB', idioma: 'es', url: 'https://www.microsoft.com/es-es/download/details.aspx?id=35' },
    ],
  },

  // ─────────────────────────── MULTIMEDIA ───────────────────────────
  {
    id: 'vlc',
    nombre: 'VLC Media Player',
    categoria: 'multimedia',
    fabricante: 'VideoLAN',
    estado: 'oficial',
    plataformas: ['Windows', 'macOS', 'Linux', 'Android', 'iOS'],
    etiquetas: ['reproductor', 'video', 'códecs', 'gratis'],
    descripcion: 'Reproduce prácticamente cualquier formato sin instalar códecs adicionales.',
    nota: 'El instalador incluye todos los idiomas y detecta el español automáticamente.',
    versiones: [
      { nombre: 'VLC (todas las plataformas)', arquitectura: 'x64 · ARM64', formato: 'EXE / DMG / DEB', tamano: '~45 MB', idioma: 'es', url: 'https://www.videolan.org/vlc/index.es.html' },
      { nombre: 'VLC para Windows', arquitectura: 'x64 · x86', formato: 'EXE / ZIP', tamano: '~45 MB', idioma: 'es', url: 'https://www.videolan.org/vlc/download-windows.es.html' },
    ],
  },
  {
    id: 'obs',
    nombre: 'OBS Studio',
    categoria: 'multimedia',
    fabricante: 'OBS Project',
    estado: 'oficial',
    plataformas: ['Windows', 'macOS', 'Linux'],
    etiquetas: ['grabar pantalla', 'streaming', 'gratis'],
    descripcion: 'Grabación de pantalla y streaming en directo. Estándar de facto y gratuito.',
    nota: 'Interfaz traducida al español (Ajustes → General → Idioma).',
    versiones: [
      { nombre: 'OBS Studio', arquitectura: 'x64 · ARM64', formato: 'EXE / DMG / DEB', tamano: '~140 MB', idioma: 'es', url: 'https://obsproject.com/es/download' },
    ],
  },
  {
    id: 'handbrake',
    nombre: 'HandBrake',
    categoria: 'multimedia',
    fabricante: 'HandBrake Team',
    estado: 'oficial',
    plataformas: ['Windows', 'macOS', 'Linux'],
    etiquetas: ['convertir video', 'mp4', 'h264', 'gratis'],
    descripcion: 'Conversor de vídeo con aceleración por hardware y perfiles listos para usar.',
    nota: 'Incluye traducción al español en Tools → Preferences → Language.',
    versiones: [
      { nombre: 'HandBrake', arquitectura: 'x64 · ARM64', formato: 'EXE / DMG', tamano: '~25 MB', idioma: 'multi', url: 'https://handbrake.fr/downloads.php' },
    ],
  },
  {
    id: 'gimp',
    nombre: 'GIMP',
    categoria: 'multimedia',
    fabricante: 'GIMP Team',
    estado: 'oficial',
    plataformas: ['Windows', 'macOS', 'Linux'],
    etiquetas: ['edición de imagen', 'photoshop', 'gratis', 'open source'],
    descripcion: 'Editor de imágenes libre, la alternativa clásica a Photoshop.',
    nota: 'El instalador pregunta el idioma al arrancar y trae el español completo.',
    versiones: [
      { nombre: 'GIMP', arquitectura: 'x64 · ARM64', formato: 'EXE / DMG / AppImage', tamano: '~300 MB', idioma: 'multi', url: 'https://www.gimp.org/downloads/' },
    ],
  },
  {
    id: 'audacity',
    nombre: 'Audacity',
    categoria: 'multimedia',
    fabricante: 'Muse Group',
    estado: 'oficial',
    plataformas: ['Windows', 'macOS', 'Linux'],
    etiquetas: ['audio', 'grabar', 'editar', 'gratis'],
    descripcion: 'Editor y grabador de audio multipista, gratuito y de código abierto.',
    nota: 'El instalador pide el idioma en la primera pantalla; el español está incluido.',
    versiones: [
      { nombre: 'Audacity', arquitectura: 'x64', formato: 'EXE / DMG / AppImage', tamano: '~130 MB', idioma: 'multi', url: 'https://www.audacityteam.org/download/' },
    ],
  },

  // ─────────────────────────── DESARROLLO ───────────────────────────
  {
    id: 'vscode',
    nombre: 'Visual Studio Code',
    categoria: 'desarrollo',
    fabricante: 'Microsoft',
    estado: 'oficial',
    plataformas: ['Windows', 'macOS', 'Linux'],
    etiquetas: ['editor', 'ide', 'gratis'],
    descripcion: 'Editor de código gratuito. La versión System Installer instala para todos los usuarios.',
    nota: 'Para ponerlo en español instala la extensión «Spanish Language Pack for Visual Studio Code» de Microsoft.',
    versiones: [
      { nombre: 'VS Code (todas las plataformas)', arquitectura: 'x64 · ARM64', formato: 'EXE / ZIP / DMG / DEB', tamano: '~110 MB', idioma: 'multi', url: 'https://code.visualstudio.com/download' },
    ],
  },
  {
    id: 'git',
    nombre: 'Git',
    categoria: 'desarrollo',
    fabricante: 'Git Project',
    estado: 'oficial',
    plataformas: ['Windows', 'macOS', 'Linux'],
    etiquetas: ['control de versiones', 'git bash'],
    descripcion: 'Control de versiones. En Windows incluye Git Bash, una terminal tipo Unix muy útil.',
    nota: 'Los mensajes de Git son en inglés; la documentación oficial sí tiene traducción parcial.',
    versiones: [
      { nombre: 'Git', arquitectura: 'x64 · ARM64', formato: 'EXE / PKG', tamano: '~65 MB', idioma: 'en', url: 'https://git-scm.com/downloads' },
    ],
  },
  {
    id: 'nodejs',
    nombre: 'Node.js',
    categoria: 'desarrollo',
    fabricante: 'OpenJS Foundation',
    estado: 'oficial',
    plataformas: ['Windows', 'macOS', 'Linux'],
    etiquetas: ['javascript', 'npm', 'runtime', 'lts'],
    descripcion: 'Runtime de JavaScript con npm incluido. Usa siempre la rama LTS para proyectos reales.',
    versiones: [
      { nombre: 'Node.js LTS', arquitectura: 'x64 · ARM64', formato: 'MSI / PKG / TAR', tamano: '~30 MB', idioma: 'es', url: 'https://nodejs.org/es/download' },
    ],
  },
  {
    id: 'python',
    nombre: 'Python',
    categoria: 'desarrollo',
    fabricante: 'Python Software Foundation',
    estado: 'oficial',
    plataformas: ['Windows', 'macOS', 'Linux'],
    etiquetas: ['python', 'pip', 'lenguaje'],
    descripcion: 'Intérprete oficial. En Windows, marca «Add python.exe to PATH» durante la instalación.',
    nota: 'La documentación oficial tiene traducción al español en docs.python.org/es/.',
    versiones: [
      { nombre: 'Python (última estable)', arquitectura: 'x64 · x86 · ARM64', formato: 'EXE / PKG', tamano: '~28 MB', idioma: 'en', url: 'https://www.python.org/downloads/' },
    ],
  },
  {
    id: 'visual-studio',
    nombre: 'Visual Studio',
    categoria: 'desarrollo',
    fabricante: 'Microsoft',
    estado: 'oficial',
    plataformas: ['Windows', 'macOS'],
    etiquetas: ['ide', 'community', 'c#', '.net'],
    descripcion: 'IDE completo. La edición Community es gratuita para uso personal, educativo y open source.',
    nota: 'En el instalador, pestaña «Paquetes de idioma», marca Español para tener el IDE traducido.',
    versiones: [
      { nombre: 'Visual Studio Community / Professional / Enterprise', arquitectura: 'x64 · ARM64', formato: 'EXE', tamano: '2–30 GB', idioma: 'es', url: 'https://visualstudio.microsoft.com/es/downloads/' },
    ],
  },
  {
    id: 'docker',
    nombre: 'Docker Desktop',
    categoria: 'desarrollo',
    fabricante: 'Docker Inc.',
    estado: 'oficial',
    plataformas: ['Windows', 'macOS', 'Linux'],
    etiquetas: ['contenedores', 'docker', 'wsl2'],
    descripcion: 'Contenedores en el escritorio. En Windows requiere WSL 2 activado.',
    nota: 'Gratuito para uso personal y empresas pequeñas; las grandes necesitan suscripción. Interfaz solo en inglés.',
    versiones: [
      { nombre: 'Docker Desktop', arquitectura: 'x64 · ARM64', formato: 'EXE / DMG / DEB', tamano: '~600 MB', idioma: 'en', url: 'https://www.docker.com/products/docker-desktop/' },
    ],
  },
  {
    id: 'notepadpp',
    nombre: 'Notepad++',
    categoria: 'desarrollo',
    fabricante: 'Don Ho',
    estado: 'oficial',
    plataformas: ['Windows'],
    etiquetas: ['editor', 'texto', 'gratis', 'ligero'],
    descripcion: 'Editor de texto ligero con resaltado de sintaxis. Existe versión portable.',
    nota: 'Trae el español incluido (Settings → Preferences → General → Localization).',
    versiones: [
      { nombre: 'Notepad++', arquitectura: 'x64 · x86 · ARM64', formato: 'EXE / ZIP', tamano: '~5 MB', idioma: 'multi', url: 'https://notepad-plus-plus.org/downloads/' },
    ],
  },
]

// Derivados útiles para los filtros de la interfaz
export const PLATAFORMAS = [...new Set(PRODUCTOS.flatMap((p) => p.plataformas))].sort()

export const FORMATOS = [
  ...new Set(
    PRODUCTOS.flatMap((p) => p.versiones.flatMap((v) => v.formato.split(' / ').map((f) => f.trim())))
  ),
].sort()

/** Un producto «está en español» si alguna de sus versiones lo está. */
export function tieneEspanol(producto) {
  return producto.versiones.some((v) => v.idioma === 'es')
}
