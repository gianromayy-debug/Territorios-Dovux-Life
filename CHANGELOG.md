## FactionOS v1.4.3

- Actualizados los mapas de Ciudad y Norte con todos los territorios vacíos y bordes blancos.
- Migración automática y única que elimina propietarios, reputación y graffitis territoriales anteriores.
- Nueva regla independiente: `Graffitis para capturar territorio vacío` (2 por defecto).
- Contadores de pines y fichas territoriales ahora usan el requisito correspondiente a cada territorio.
- Estados nuevos para territorios sin dueño: Disponible, Conquista en progreso y Lista para capturar.
- Se preservan los demás datos almacenados del workspace.
- Ajustadas las dimensiones reales de ambos mapas y el zoom inicial del mapa Norte.

## FactionOS v1.3.1

- Pines territoriales refinados.
- Módulos de Negocios, Propiedades, Actos delictivos y gestión general.


## v1.4.3
- Corrección del mapa de Ciudad.
- Se agregaron nuevos nombres de archivo para los mapas (cache-busting) y evitar que el navegador muestre la versión anterior en caché.


## v1.4.3
- Mapas centrados automáticamente dentro del panel.
- Se deshabilitó el desplazamiento manual de los mapas.
- El zoom con rueda y botones permanece activo y conserva el centro.
- El botón de porcentaje vuelve a encajar el mapa en el área visible.
- Ajuste automático al cambiar el tamaño de la ventana.


## v1.4.3
- Corrección crítica de carga visual al abrir la aplicación de forma local.
- Se eliminaron parámetros de versión en rutas `file://` que impedían cargar CSS y módulos JavaScript.
- CSS y scripts renombrados físicamente a v1.4.3 para evitar caché sin romper el modo local.
- Se mantiene el mapa fijo, centrado y con zoom habilitado.
