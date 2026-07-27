import { CATEGORIAS } from '../data/categorias.js'
import { IconoCategoria } from '../data/iconos.jsx'
import { ArrowDownToLine, Library, ShieldCheck, Star } from 'lucide-react'

export default function Sidebar({
  categoriaActiva,
  onCategoria,
  conteos,
  totalProductos,
  totalFavoritos,
  abierta,
  onCerrar,
}) {
  return (
    <>
      <div className={`sidebar-fondo ${abierta ? 'visible' : ''}`} onClick={onCerrar} />
      <aside className={`sidebar ${abierta ? 'abierta' : ''}`}>
        <div className="sidebar-marca">
          <span className="marca-icono">
            <ArrowDownToLine size={20} strokeWidth={2.4} />
          </span>
          <div>
            <h1>Sistema de Descargas</h1>
            <p>Solo fuentes oficiales</p>
          </div>
        </div>

        <nav className="sidebar-nav">
          <button
            className={`nav-item ${categoriaActiva === 'todas' ? 'activo' : ''}`}
            onClick={() => onCategoria('todas')}
          >
            <span className="nav-icono">
              <Library size={16} />
            </span>
            <span className="nav-texto">Todo el catálogo</span>
            <span className="nav-conteo">{totalProductos}</span>
          </button>

          <button
            className={`nav-item ${categoriaActiva === 'favoritos' ? 'activo' : ''}`}
            onClick={() => onCategoria('favoritos')}
            style={{ '--color-cat': '#f59e0b' }}
          >
            <span className="nav-icono">
              <Star size={16} fill={totalFavoritos > 0 ? 'currentColor' : 'none'} />
            </span>
            <span className="nav-texto">Favoritos</span>
            <span className="nav-conteo">{totalFavoritos}</span>
          </button>

          <div className="nav-separador">Categorías</div>

          {CATEGORIAS.map((cat) => (
            <button
              key={cat.id}
              className={`nav-item ${categoriaActiva === cat.id ? 'activo' : ''}`}
              onClick={() => onCategoria(cat.id)}
              style={{ '--color-cat': cat.color }}
            >
              <span className="nav-icono" style={{ color: cat.color }}>
                <IconoCategoria id={cat.id} size={16} />
              </span>
              <span className="nav-texto">{cat.nombre}</span>
              <span className="nav-conteo">{conteos[cat.id] || 0}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-pie">
          <ShieldCheck size={14} />
          <p>
            Todos los enlaces apuntan al sitio oficial del fabricante. Verifica siempre el dominio
            antes de descargar.
          </p>
        </div>
      </aside>
    </>
  )
}
