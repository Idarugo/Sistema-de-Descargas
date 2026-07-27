import { useEffect } from 'react'
import {
  Copy,
  Download,
  ExternalLink,
  Lightbulb,
  Lock,
  Star,
  TriangleAlert,
  X,
} from 'lucide-react'
import { CATEGORIA_POR_ID, ESTADOS } from '../data/categorias.js'
import { IDIOMAS } from '../data/catalogo.js'
import { IconoProducto, colorDeProducto } from '../data/iconos.jsx'

function dominioDe(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return url
  }
}

export default function ModalDetalle({ producto, esFavorito, onFavorito, onCerrar, onDescargar, onCopiar }) {
  useEffect(() => {
    const alPulsar = (e) => e.key === 'Escape' && onCerrar()
    window.addEventListener('keydown', alPulsar)
    return () => window.removeEventListener('keydown', alPulsar)
  }, [onCerrar])

  if (!producto) return null

  const categoria = CATEGORIA_POR_ID[producto.categoria]
  const estado = ESTADOS[producto.estado]

  return (
    <div className="modal-fondo" onClick={onCerrar}>
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
        style={{
          '--color-cat': categoria?.color || '#7d8ea3',
          '--color-marca': colorDeProducto(producto.id),
        }}
        role="dialog"
        aria-modal="true"
      >
        <button className="modal-cerrar" onClick={onCerrar} aria-label="Cerrar">
          <X size={16} />
        </button>

        <header className="modal-cabecera">
          <div className="tarjeta-icono grande">
            <IconoProducto id={producto.id} size={30} />
          </div>
          <div>
            <h2>{producto.nombre}</h2>
            <p className="modal-fabricante">
              {producto.fabricante} · {categoria?.nombre}
            </p>
            <div className="tarjeta-meta">
              <span className="chip chip-estado" style={{ '--color-chip': estado.color }}>
                {estado.etiqueta}
              </span>
              {producto.familia && <span className="chip chip-familia">{producto.familia}</span>}
              {producto.plataformas.map((p) => (
                <span key={p} className="chip chip-suave">
                  {p}
                </span>
              ))}
            </div>
          </div>
          <button
            className={`btn-icono ${esFavorito ? 'activo' : ''}`}
            onClick={() => onFavorito(producto.id)}
            aria-label="Favorito"
          >
            <Star size={18} fill={esFavorito ? 'currentColor' : 'none'} />
          </button>
        </header>

        <p className="modal-descripcion">{producto.descripcion}</p>

        {producto.nota && (
          <div className="aviso aviso-info">
            <strong>
              <Lightbulb size={14} /> Consejo
            </strong>
            <p>{producto.nota}</p>
          </div>
        )}

        {producto.alternativa && (
          <div className="aviso aviso-alerta">
            <strong>
              <TriangleAlert size={14} /> Sin descarga oficial disponible
            </strong>
            <p>{producto.alternativa}</p>
            {producto.enlaceInfo && (
              <a href={producto.enlaceInfo} target="_blank" rel="noopener noreferrer">
                Ver ciclo de vida oficial <ExternalLink size={12} />
              </a>
            )}
          </div>
        )}

        {producto.versiones.length > 0 && (
          <>
            <h4 className="modal-subtitulo">Descargas disponibles</h4>
            <ul className="lista-versiones">
              {producto.versiones.map((v) => (
                <li key={v.nombre} className="version">
                  <div className="version-info">
                    <span className="version-nombre">
                      {v.nombre}
                      <span className={`etiqueta-idioma ${v.idioma}`}>
                        {IDIOMAS[v.idioma].corta}
                      </span>
                    </span>
                    <span className="version-meta">
                      {v.arquitectura} · {v.formato} · {v.tamano} · {IDIOMAS[v.idioma].etiqueta}
                    </span>
                    <span className="version-dominio">
                      <Lock size={11} /> {dominioDe(v.url)}
                    </span>
                  </div>
                  <div className="version-acciones">
                    <button className="btn btn-primario pequeno" onClick={() => onDescargar(producto, v)}>
                      <Download size={13} /> Descargar
                    </button>
                    <button
                      className="btn btn-fantasma pequeno"
                      onClick={() => onCopiar(v.url)}
                      title="Copiar enlace"
                      aria-label="Copiar enlace"
                    >
                      <Copy size={13} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}

        <div className="modal-etiquetas">
          {producto.etiquetas.map((t) => (
            <span key={t} className="etiqueta">
              #{t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
