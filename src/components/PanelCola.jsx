import { Copy, Download, Inbox, Save, Trash2, X } from 'lucide-react'
import { IDIOMAS } from '../data/catalogo.js'
import { IconoProducto } from '../data/iconos.jsx'

export default function PanelCola({ abierto, items, onCerrar, onQuitar, onVaciar, onDescargar, onCopiarTodo, onExportar }) {
  return (
    <>
      <div className={`sidebar-fondo ${abierto ? 'visible' : ''}`} onClick={onCerrar} />
      <aside className={`panel-cola ${abierto ? 'abierto' : ''}`}>
        <header className="panel-cabecera">
          <h3>Mi lista de descargas</h3>
          <button className="btn-icono" onClick={onCerrar} aria-label="Cerrar">
            <X size={17} />
          </button>
        </header>

        {items.length === 0 ? (
          <div className="panel-vacio">
            <Inbox size={38} strokeWidth={1.3} />
            <p>Tu lista está vacía.</p>
            <p className="tenue">
              Añade programas con el botón <strong>Lista</strong> para preparar la instalación de un
              equipo y descargarlos todos de una vez.
            </p>
          </div>
        ) : (
          <>
            <ul className="panel-lista">
              {items.map((p) => {
                const version = p.versiones.find((v) => v.idioma === 'es') || p.versiones[0]
                return (
                  <li key={p.id}>
                    <span className="panel-icono">
                      <IconoProducto id={p.id} size={20} />
                    </span>
                    <div className="panel-info">
                      <strong>{p.nombre}</strong>
                      <span>
                        {version?.formato} · {version?.tamano} · {IDIOMAS[version?.idioma]?.corta}
                      </span>
                    </div>
                    <button
                      className="btn btn-primario pequeno"
                      onClick={() => onDescargar(p, version)}
                      aria-label={`Descargar ${p.nombre}`}
                    >
                      <Download size={13} />
                    </button>
                    <button className="btn-icono" onClick={() => onQuitar(p.id)} aria-label="Quitar">
                      <X size={15} />
                    </button>
                  </li>
                )
              })}
            </ul>

            <div className="panel-acciones">
              <button className="btn btn-primario" onClick={onCopiarTodo}>
                <Copy size={14} /> Copiar todos los enlaces
              </button>
              <button className="btn btn-secundario" onClick={onExportar}>
                <Save size={14} /> Exportar lista (.txt)
              </button>
              <button className="btn btn-fantasma" onClick={onVaciar}>
                <Trash2 size={14} /> Vaciar lista
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
