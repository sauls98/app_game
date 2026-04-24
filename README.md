# Ritual de Pareja Offline

Aplicación web offline en HTML, CSS y JavaScript puro para juegos sensuales de pareja adulta.

## Características

- Funciona sin internet una vez descargada.
- Archivos separados: `index.html`, `style.css`, `app.js`.
- PWA opcional con `manifest.json` y `service-worker.js`.
- Pantalla inicial 18+ con aviso de consentimiento.
- Ruleta, cartas, dados, retos por niveles, modo aleatorio y categorías.
- Filtros por intensidad: suave, medio e intenso.
- Exclusión de categorías/límites.
- Temporizador de retos.
- Sistema de puntos, historial y reinicio de partida.
- Privacidad rápida para ocultar la pantalla.
- Configuración guardada con `localStorage`.
- Recursos locales en `assets/`.

## Ejecutar offline

Opción directa:

1. Descomprime la carpeta.
2. Abre `index.html` en el navegador.

Opción recomendada para activar PWA/service worker:

1. Entra en la carpeta del proyecto.
2. Ejecuta un servidor local, por ejemplo:

```bash
python -m http.server 8080
```

3. Abre en el navegador:

```text
http://localhost:8080
```

4. Una vez cargada, la app queda cacheada para uso offline desde ese mismo navegador.

## Multimedia local

- Imágenes: `assets/images/`
- Íconos: `assets/icons/`
- Audio: `assets/audio/`
- Video: `assets/video/`

Para reemplazar recursos, conserva los nombres o actualiza las rutas en `index.html` y `service-worker.js`.

## Seguridad y consentimiento

El contenido está diseñado para mayores de 18 años. Cualquier reto debe poder saltarse, adaptarse o detenerse. El historial, configuración y puntos se guardan solo en el navegador local.
