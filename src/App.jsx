import { useState, useMemo, useEffect, useCallback } from 'react'
import { Inbox, Menu, ScanSearch, Search, Trash2, X } from 'lucide-react'
import { PRODUCTOS, PLATAFORMAS, IDIOMAS, tieneEspanol } from './data/catalogo.js'
import { CATEGORIAS, CATEGORIA_POR_ID } from './data/categorias.js'
import { almacen } from './storage.js'
import Sidebar from './components/Sidebar.jsx'
import TarjetaProducto from './components/TarjetaProducto.jsx'
import ModalDetalle from './components/ModalDetalle.jsx'
import PanelCola from './components/PanelCola.jsx'

const ORDENES = {
  relevancia: 'Por categoría',
  nombre: 'Nombre (A–Z)',
  fabricante: 'Fabricante',
}

/** Devuelve la versión en español si existe; si no, la primera. */
function versionPreferida(producto) {
  return producto.versiones.find((v) => v.idioma === 'es') || producto.versiones[0]
}

export default function App() {
  const [busqueda, setBusqueda] = useState('')
  const [categoria, setCategoria] = useState('todas')
  const [plataforma, setPlataforma] = useState('todas')
  const [soloDisponibles, setSoloDisponibles] = useState(false)
  const [soloEspanol, setSoloEspanol] = useState(false)
  const [orden, setOrden] = useState('relevancia')

  const [favoritos, setFavoritos] = useState(almacen.favoritos)
  const [cola, setCola] = useState(almacen.cola)
  const [historial, setHistorial] = useState(almacen.historial)

  const [detalle, setDetalle] = useState(null)
  const [menuAbierto, setMenuAbierto] = useState(false)
  const [colaAbierta, setColaAbierta] = useState(false)
  const [aviso, setAviso] = useState(null)

  useEffect(() => almacen.guardarFavoritos(favoritos), [favoritos])
  useEffect(() => almacen.guardarCola(cola), [cola])
  useEffect(() => almacen.guardarHistorial(historial), [historial])

  const notificar = useCallback((texto) => {
    setAviso(texto)
    const t = setTimeout(() => setAviso(null), 2600)
    return () => clearTimeout(t)
  }, [])

  // ─── Filtrado ───
  const conteos = useMemo(() => {
    const acc = {}
    for (const p of PRODUCTOS) acc[p.categoria] = (acc[p.categoria] || 0) + 1
    return acc
  }, [])

  const resultados = useMemo(() => {
    const q = busqueda.trim().toLowerCase()
    let lista = PRODUCTOS.filter((p) => {
      if (categoria === 'favoritos') {
        if (!favoritos.includes(p.id)) return false
      } else if (categoria !== 'todas' && p.categoria !== categoria) {
        return false
      }
      if (plataforma !== 'todas' && !p.plataformas.includes(plataforma)) return false
      if (soloDisponibles && p.versiones.length === 0) return false
      if (soloEspanol && !tieneEspanol(p)) return false
      if (!q) return true

      const heno = [
        p.nombre,
        p.fabricante,
        p.descripcion,
        ...p.etiquetas,
        ...p.versiones.map((v) => v.nombre),
      ]
        .join(' ')
        .toLowerCase()
      return q.split(/\s+/).every((termino) => heno.includes(termino))
    })

    const ordenCategorias = Object.fromEntries(CATEGORIAS.map((c, i) => [c.id, i]))
    lista = [...lista].sort((a, b) => {
      if (orden === 'nombre') return a.nombre.localeCompare(b.nombre, 'es')
      if (orden === 'fabricante') return a.fabricante.localeCompare(b.fabricante, 'es')
      const dif = ordenCategorias[a.categoria] - ordenCategorias[b.categoria]
      return dif !== 0 ? dif : a.nombre.localeCompare(b.nombre, 'es')
    })
    return lista
  }, [busqueda, categoria, plataforma, soloDisponibles, soloEspanol, orden, favoritos])

  const itemsCola = useMemo(
    () => cola.map((id) => PRODUCTOS.find((p) => p.id === id)).filter(Boolean),
    [cola]
  )

  // ─── Acciones ───
  const alternarFavorito = (id) =>
    setFavoritos((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))

  const alternarCola = (id) =>
    setCola((prev) => {
      const dentro = prev.includes(id)
      notificar(dentro ? 'Quitado de la lista' : 'Añadido a la lista')
      return dentro ? prev.filter((x) => x !== id) : [...prev, id]
    })

  const descargar = (producto, version) => {
    if (!version?.url) return
    window.open(version.url, '_blank', 'noopener,noreferrer')
    setHistorial((prev) =>
      [
        {
          id: producto.id,
          nombre: producto.nombre,
          version: version.nombre,
          idioma: version.idioma,
          fecha: new Date().toISOString(),
        },
        ...prev.filter((h) => !(h.id === producto.id && h.version === version.nombre)),
      ].slice(0, 40)
    )
  }

  const copiar = async (texto) => {
    try {
      await navigator.clipboard.writeText(texto)
      notificar('Enlace copiado al portapapeles')
    } catch {
      notificar('No se pudo copiar. Copia el enlace manualmente.')
    }
  }

  const copiarTodo = () => {
    const texto = itemsCola
      .map((p) => {
        const v = versionPreferida(p)
        return `${p.nombre} — ${v?.url || 'sin descarga oficial'}`
      })
      .join('\n')
    copiar(texto)
  }

  const exportarLista = () => {
    const fecha = new Date().toLocaleDateString('es-ES')
    const lineas = [
      'LISTA DE DESCARGAS',
      `Generada el ${fecha}`,
      'Todos los enlaces apuntan al sitio oficial del fabricante.',
      'Idioma: ES = español · Multi = eliges idioma al instalar · EN = solo inglés',
      '',
      ...itemsCola.flatMap((p) => [
        `## ${p.nombre} (${p.fabricante})`,
        `   ${p.descripcion}`,
        ...p.versiones.map(
          (v) => `   - [${IDIOMAS[v.idioma].corta}] ${v.nombre} · ${v.formato}, ${v.tamano}\n     ${v.url}`
        ),
        '',
      ]),
    ]
    const blob = new Blob([lineas.join('\n')], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'lista-de-descargas.txt'
    a.click()
    URL.revokeObjectURL(url)
    notificar('Lista exportada')
  }

  const limpiarFiltros = () => {
    setBusqueda('')
    setCategoria('todas')
    setPlataforma('todas')
    setSoloDisponibles(false)
    setSoloEspanol(false)
  }

  const hayFiltros =
    busqueda || categoria !== 'todas' || plataforma !== 'todas' || soloDisponibles || soloEspanol

  const tituloVista =
    categoria === 'todas'
      ? 'Todo el catálogo'
      : categoria === 'favoritos'
        ? 'Favoritos'
        : CATEGORIA_POR_ID[categoria]?.nombre

  const subtituloVista =
    categoria === 'favoritos'
      ? 'Los programas que has marcado con una estrella'
      : CATEGORIA_POR_ID[categoria]?.descripcion || 'Descargas verificadas desde el sitio del fabricante'

  return (
    <div className="app">
      <Sidebar
        categoriaActiva={categoria}
        onCategoria={(c) => {
          setCategoria(c)
          setMenuAbierto(false)
        }}
        conteos={conteos}
        totalProductos={PRODUCTOS.length}
        totalFavoritos={favoritos.length}
        abierta={menuAbierto}
        onCerrar={() => setMenuAbierto(false)}
      />

      <main className="contenido">
        <header className="barra-superior">
          <button className="btn-menu" onClick={() => setMenuAbierto(true)} aria-label="Abrir menú">
            <Menu size={18} />
          </button>

          <div className="buscador">
            <Search size={15} className="buscador-icono" />
            <input
              type="search"
              placeholder="Buscar: windows 11, iso, office, chrome, winrar…"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
            {busqueda && (
              <button className="btn-icono" onClick={() => setBusqueda('')} aria-label="Limpiar">
                <X size={15} />
              </button>
            )}
          </div>

          <button className="btn btn-cola" onClick={() => setColaAbierta(true)}>
            <Inbox size={15} /> Lista
            {cola.length > 0 && <span className="badge">{cola.length}</span>}
          </button>
        </header>

        <div className="cabecera-vista">
          <div>
            <h2>{tituloVista}</h2>
            <p>{subtituloVista}</p>
          </div>
          <span className="contador">
            {resultados.length} {resultados.length === 1 ? 'resultado' : 'resultados'}
          </span>
        </div>

        <div className="filtros">
          <select value={plataforma} onChange={(e) => setPlataforma(e.target.value)}>
            <option value="todas">Todas las plataformas</option>
            {PLATAFORMAS.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>

          <select value={orden} onChange={(e) => setOrden(e.target.value)}>
            {Object.entries(ORDENES).map(([k, v]) => (
              <option key={k} value={k}>
                {v}
              </option>
            ))}
          </select>

          <label className="interruptor">
            <input
              type="checkbox"
              checked={soloEspanol}
              onChange={(e) => setSoloEspanol(e.target.checked)}
            />
            <span>Solo en español</span>
          </label>

          <label className="interruptor">
            <input
              type="checkbox"
              checked={soloDisponibles}
              onChange={(e) => setSoloDisponibles(e.target.checked)}
            />
            <span>Solo con descarga disponible</span>
          </label>

          {hayFiltros && (
            <button className="btn btn-fantasma pequeno" onClick={limpiarFiltros}>
              Limpiar filtros
            </button>
          )}
        </div>

        {resultados.length === 0 ? (
          <div className="sin-resultados">
            <ScanSearch size={40} strokeWidth={1.2} />
            <h3>Sin resultados</h3>
            <p>
              {busqueda
                ? `No hay nada que coincida con «${busqueda}». Prueba con otro término o revisa los filtros activos.`
                : 'Ningún producto cumple los filtros activos.'}
            </p>
            <button className="btn btn-secundario" onClick={limpiarFiltros}>
              Limpiar filtros
            </button>
          </div>
        ) : (
          <div className="cuadricula">
            {resultados.map((p) => (
              <TarjetaProducto
                key={p.id}
                producto={p}
                esFavorito={favoritos.includes(p.id)}
                enCola={cola.includes(p.id)}
                onFavorito={alternarFavorito}
                onCola={alternarCola}
                onAbrir={setDetalle}
                onDescargar={descargar}
              />
            ))}
          </div>
        )}

        {historial.length > 0 && categoria === 'todas' && !busqueda && (
          <section className="historial">
            <h3>Descargas recientes</h3>
            <ul>
              {historial.slice(0, 6).map((h, i) => (
                <li key={`${h.id}-${i}`}>
                  <span>{h.nombre}</span>
                  <span className="tenue">{h.version}</span>
                  <span className="tenue">
                    {new Date(h.fecha).toLocaleDateString('es-ES', {
                      day: '2-digit',
                      month: 'short',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </li>
              ))}
            </ul>
            <button className="btn btn-fantasma pequeno" onClick={() => setHistorial([])}>
              <Trash2 size={13} /> Borrar historial
            </button>
          </section>
        )}

        <footer className="pie">
          <p>
            <strong>Nota legal.</strong> Este sistema es un catálogo de enlaces: no aloja ni
            redistribuye ningún archivo. Todas las descargas se realizan desde los servidores
            oficiales de cada fabricante y están sujetas a sus términos de licencia. Los sistemas
            operativos y suites ofimáticas de pago requieren una licencia válida para activarse.
          </p>
        </footer>
      </main>

      <ModalDetalle
        producto={detalle}
        esFavorito={detalle ? favoritos.includes(detalle.id) : false}
        onFavorito={alternarFavorito}
        onCerrar={() => setDetalle(null)}
        onDescargar={descargar}
        onCopiar={copiar}
      />

      <PanelCola
        abierto={colaAbierta}
        items={itemsCola}
        onCerrar={() => setColaAbierta(false)}
        onQuitar={(id) => setCola((prev) => prev.filter((x) => x !== id))}
        onVaciar={() => setCola([])}
        onDescargar={descargar}
        onCopiarTodo={copiarTodo}
        onExportar={exportarLista}
      />

      {aviso && <div className="notificacion">{aviso}</div>}
    </div>
  )
}
