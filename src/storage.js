const PREFIJO = 'sistema-descargas:'

function leer(clave, porDefecto) {
  try {
    const bruto = localStorage.getItem(PREFIJO + clave)
    return bruto ? JSON.parse(bruto) : porDefecto
  } catch {
    return porDefecto
  }
}

function escribir(clave, valor) {
  try {
    localStorage.setItem(PREFIJO + clave, JSON.stringify(valor))
  } catch {
    // Modo privado o cuota llena: la app sigue funcionando sin persistencia.
  }
}

export const almacen = {
  favoritos: () => leer('favoritos', []),
  guardarFavoritos: (v) => escribir('favoritos', v),

  cola: () => leer('cola', []),
  guardarCola: (v) => escribir('cola', v),

  historial: () => leer('historial', []),
  guardarHistorial: (v) => escribir('historial', v),

  vista: () => leer('vista', 'cuadricula'),
  guardarVista: (v) => escribir('vista', v),
}
