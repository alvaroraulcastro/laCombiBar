# Plan: Integración de Instagram Stories en La Combi Bar

## Objetivo

Mostrar las Instagram Stories de la cuenta personal de La Combi Bar en el sitio web, de forma gratuita.

---

## Limitación Técnica Conocida

Instagram **no ofrece API pública** para acceder a Stories de cuentas personales. Las stories expiran en 24h y Meta no expone ese dato a terceros de forma gratuita para cuentas personales.

La solución utiliza servicios de terceros que actuan como "agregadores" de contenido de Instagram.

---

## Servicio Seleccionado: Behold.so

| Criterio | Resultado |
|----------|-----------|
| Costo | Gratis (tier gratuito disponible) |
| Cuenta requerida | Personal funciona |
| Tipo de contenido | Stories (las que aún no han expirado) |
| Dificultad de setup | Baja - solo copiar y pegar código |

---

## Tareas de Implementación

### Fase 1: Configuración de Behold.so

- [ ] 1.1 Crear cuenta en [behold.so](https://behold.so/)
- [ ] 1.2 Conectar cuenta de Instagram de La Combi Bar
- [ ] 1.3 Seleccionar "Stories" como tipo de contenido
- [ ] 1.4 Obtener el código embed proporcionado por Behold

### Fase 2: Desarrollo del Componente

- [ ] 2.1 Crear archivo `components/InstagramStories.tsx`
- [ ] 2.2 Integrar el código embed de Behold
- [ ] 2.3 Estilizar el componente con Tailwind CSS
- [ ] 2.4 Crear archivo de configuración si es necesario

### Fase 3: Integración en el Sitio

- [ ] 3.1 Decidir ubicación en el sitio (layout principal o página específica)
- [ ] 3.2 Integrar componente en el layout o página seleccionada
- [ ] 3.3 Verificar responsividad en móviles

### Fase 4: Deploy y Verificación

- [ ] 4.1 Subir cambios a GitHub
- [ ] 4.2 Verificar redeploy en Vercel
- [ ] 4.3 Probar que las stories se muestren correctamente
- [ ] 4.4 Verificar que funcione en producción

---

## Alternativas Consideradas

| Opción | Ventaja | Limitación |
|--------|---------|------------|
| **Behold.so** (seleccionado) | Gratis, fácil, funciona con cuenta personal | Solo muestra stories que aún no han expirado |
| Elfsight | Más opciones de personalización | tier gratuito limitado |
| Convertir a Business | Más opciones de API | Requiere página de Facebook, más configuración |
| Screenshot manual | 100% control | Tedioso, requiere actualizar manualmente |

---

## Notas Técnicas

- El código embed de Behold generalmente es un `<script>` que se puede agregar directamente en un componente React
- Algunas soluciones usan iframes, otras inyectan el feed via JavaScript
- Verificar que el servicio no requiera autenticación del usuario final para ver las stories

---

## Referencias

- Behold.so: https://behold.so/
- Documentación de Instagram Basic Display API (para cuentas business): https://developers.facebook.com/docs/instagram-basic-display-api

---

## Estado

**Fecha de creación:** Mayo 2026
**Estado:** Pendiente de implementación