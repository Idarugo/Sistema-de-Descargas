import { Check, Download, Info, Plus, Star } from 'lucide-react'
import { CATEGORIA_POR_ID, ESTADOS } from '../data/categorias.js'
import { IDIOMAS } from '../data/catalogo.js'
import { IconoProducto, colorDeProducto } from '../data/iconos.jsx'

export default function TarjetaProducto({
  producto,
  esFavorito,
  enCola,
  onFavorito,
  onCola,
  onAbrir,
  onDescargar,
}) {
  const categoria = CATEGORIA_POR_ID[producto.categoria]
  const estado = ESTADOS[producto.estado]
  const principal = producto.versiones[0]
  const disponible = producto.versiones.length > 0
  const idiomaPrincipal = producto.versiones.find((v) => v.idioma === 'es') || principal

  return (
    <article
      className="tarjeta"
      style={{
        '--color-cat': categoria?.color || '#7d8ea3',
        '--color-marca': colorDeProducto(producto.id),
      }}
    >
      <header className="tarjeta-cabecera">
        <div className="tarjeta-icono">
          <IconoProducto id={producto.id} size={24} />
        </div>
        <div className="tarjeta-titulo">
          <h3>{producto.nombre}</h3>
          <span className="tarjeta-fabricante">{producto.fabricante}</span>
        </div>
        <button
          className={`btn-icono ${esFavorito ? 'activo' : ''}`}
          onClick={() => onFavorito(producto.id)}
          title={esFavorito ? 'Quitar de favoritos' : 'Añadir a favoritos'}
          aria-label={esFavorito ? 'Quitar de favoritos' : 'Añadir a favoritos'}
        >
          <Star size={17} fill={esFavorito ? 'currentColor' : 'none'} />
        </button>
      </header>

      <p className="tarjeta-descripcion">{producto.descripcion}</p>

      <div className="tarjeta-meta">
        <span className="chip chip-estado" style={{ '--color-chip': estado.color }}>
          {estado.etiqueta}
        </span>
        {disponible && (
          <span
            className={`chip chip-idioma ${idiomaPrincipal.idioma === 'es' ? 'es' : ''}`}
            title={IDIOMAS[idiomaPrincipal.idioma].etiqueta}
          >
            {IDIOMAS[idiomaPrincipal.idioma].etiqueta}
          </span>
        )}
        {disponible && <span className="chip">{principal.formato}</span>}
        {disponible && principal.tamano !== '—' && <span className="chip">{principal.tamano}</span>}
        {producto.versiones.length > 1 && (
          <span className="chip chip-suave">{producto.versiones.length} versiones</span>
        )}
      </div>

      <footer className="tarjeta-acciones">
        {disponible ? (
          <>
            <button
              className="btn btn-primario"
              onClick={() => onDescargar(producto, idiomaPrincipal)}
            >
              <Download size={14} /> Descargar
            </button>
            <button
              className={`btn btn-secundario ${enCola ? 'activo' : ''}`}
              onClick={() => onCola(producto.id)}
              title={enCola ? 'Quitar de la lista' : 'Añadir a la lista'}
            >
              {enCola ? <Check size={14} /> : <Plus size={14} />}
              {enCola ? 'En lista' : 'Lista'}
            </button>
          </>
        ) : (
          <button className="btn btn-deshabilitado" onClick={() => onAbrir(producto)}>
            <Info size={14} /> Ver alternativas legales
          </button>
        )}
        <button className="btn btn-fantasma" onClick={() => onAbrir(producto)} title="Ver detalles">
          Detalles
        </button>
      </footer>
    </article>
  )
}
