# Presentación GitHub Copilot

Una presentación de 5 minutos sobre GitHub Copilot usando Reveal.js, diseñada para mostrar qué es, cómo funciona y cómo empezar a usarlo de forma responsable.

## 🎯 Estructura de la Presentación

### Duración: 4 minutos (5 diapositivas)

1. **Título** - GitHub Copilot: el copiloto de IA para desarrolladores
2. **Contexto** - ¿Por qué ahora la IA generativa en desarrollo?
3. **Definición** - ¿Qué es GitHub Copilot y sus capacidades?
4. **Flujo de trabajo** - ¿Dónde 'vive' en el proceso de desarrollo?
5. **Beneficios y límites** - Qué aporta y en qué tener cuidado
6. **FAQ** (opcional) - Preguntas frecuentes

## 🚀 Cómo usar

### Abrir la presentación
```bash
# Opción 1: Abrir directamente
start index.html

# Opción 2: Usar servidor local (recomendado)
python -m http.server 8000
# Luego abrir http://localhost:8000

# Opción 3: Usar la tarea de VS Code
Ctrl+Shift+P -> "Tasks: Run Task" -> "Abrir presentación"
```

### Modos de presentación

#### Modo Normal
```
http://localhost:8000/index.html
```

#### Modo Presentador (con notas)

```url
http://localhost:8000/index.html
```

Presiona `S` para abrir las notas del presentador en una ventana separada.

#### Exportar a PDF
```javascript
// En la consola del navegador
exportToPDF()
```
O agregar `?print-pdf` a la URL y usar Ctrl+P.

## ⌨️ Controles y Atajos

### Navegación básica

- **Flechas** o **Espacio**: Navegar entre diapositivas
- **Inicio/Fin**: Primera/última diapositiva
- **N/P**: Siguiente/anterior diapositiva

### Presentación

- **S**: Abrir notas del presentador
- **O**: Vista general (overview)
- **F**: Pantalla completa
- **ESC**: Salir de pantalla completa/overview

### Funciones JavaScript disponibles

```javascript
// Ir a diapositiva específica
presenterUtils.goToSlide(3);

// Ver total de diapositivas
presenterUtils.getTotalSlides();

// Ver diapositiva actual
presenterUtils.getCurrentSlide();

// Exportar a PDF
exportToPDF();
```

## 🎨 Diseño y Colores

### Paleta de colores GitHub
- **Primario**: `#24292f` (Negro GitHub)
- **Secundario**: `#0969da` (Azul GitHub)
- **Acento**: `#2da44e` (Verde GitHub)
- **Advertencia**: `#fb8500` (Naranja)
- **Morado**: `#6f42c1` (Purple GitHub)

### Responsive Design
- ✅ Desktop (1280x720 óptimo)
- ✅ Tablet (768px y abajo)
- ✅ Mobile (480px y abajo)

## 📁 Estructura de archivos

```
Presentacion/
├── index.html          # Archivo principal de la presentación
├── styles.css          # Estilos personalizados con colores GitHub
├── script.js           # Configuración de Reveal.js y timer
├── README.md           # Este archivo de documentación
├── package.json        # Configuración del proyecto
├── .github/
│   └── copilot-instructions.md  # Instrucciones para Copilot
└── images/             # Imágenes de la presentación
    ├── ai-coding-concept.webp
    ├── copilot-free.jpg
    ├── vscode-copilot-screenshot.png
    └── vscode-marketplace-copilot.png
```

## 🔧 Tecnologías Utilizadas

- **Reveal.js 4.3.1**: Framework de presentaciones HTML
- **CDN**: Reveal.js, plugins y dependencias
- **CSS Grid & Flexbox**: Layout responsive
- **JavaScript ES6+**: Funcionalidades del timer y controles
- **CSS Custom Properties**: Sistema de colores consistente



## 🎤 Notas del Presentador

Cada diapositiva incluye notas detalladas en los elementos `<aside class="notes">`. 

Para acceder:
1. Presiona `S` durante la presentación
2. Se abre una ventana con vista del presentador
3. Incluye diapositiva actual, siguiente y notas

### Guiones por diapositiva

**Diapositiva 1 - Título (50s)**
> "Hoy les presento GitHub Copilot, un asistente de IA diseñado para acelerar el trabajo de los desarrolladores. En cinco minutos veremos qué es, dónde vive dentro del flujo de trabajo, qué aporta, sus límites y cómo empezar a usarlo de forma responsable."

**Diapositiva 2 - Contexto (50s)**
> "La IA generativa llegó al desarrollo para reducir trabajo mecánico y darnos un primer borrador más rápido. Copilot no reemplaza al desarrollador: sugiere, nosotros decidimos. La clave es ganar velocidad sin sacrificar calidad ni buenas prácticas."

**Diapositiva 3 - Definición (50s)**
> "Copilot es un asistente que sugiere líneas y bloques de código, genera pruebas, explica diffs y ayuda desde el editor, el chat integrado y los pull requests. Está disponible en editores populares y también ofrece una CLI para la terminal, cubriendo gran parte del flujo diario."

**Diapositiva 4 - Flujo de trabajo (50s)**
> "En el editor, Copilot predice el siguiente bloque y puede refactorizar o documentar. En el chat, responde con contexto del archivo o repo abierto. En PRs, resume cambios y sugiere mejoras. Y en la terminal, propone comandos y explica scripts, cerrando el círculo de desarrollo."

**Diapositiva 5 - Beneficios y límites**
> "Los beneficios más claros son velocidad y reducción de trabajo repetitivo, además de facilitar el onboarding. Casos comunes: crear esqueletos, generar pruebas y documentar. Pero puede proponer APIs inexistentes o enfoques subóptimos. Por eso, revisamos siempre, evitamos compartir secretos y pedimos tests junto con el código."

## 🔍 Solución de Problemas

### La presentación no se ve bien

- Usa un servidor local en lugar de abrir el archivo directamente
- Verifica que todas las imágenes estén en la carpeta `images/`
- Asegúrate de tener conexión a internet para los CDN

### Exportar a PDF no funciona

- Usa Chrome/Chromium para mejores resultados
- Agrega `?print-pdf` a la URL antes de imprimir
- En opciones de impresión, marca "Gráficos de fondo"

## 📚 Recursos Adicionales

- [Documentación de Reveal.js](https://revealjs.com/)
- [GitHub Copilot Docs](https://docs.github.com/copilot)
- [Guía de mejores prácticas](https://docs.github.com/copilot/using-github-copilot/best-practices-for-using-github-copilot)

## 🤝 Contribuciones

Para mejorar la presentación:

1. Modifica el contenido en `index.html`
2. Ajusta estilos en `styles.css`
3. Añade funcionalidades en `script.js`
4. Actualiza la documentación en `README.md`

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Siéntete libre de usar, modificar y distribuir.

---

**¡Presentación lista! 🚀**

Usa `start index.html` para abrir o la tarea "Abrir presentación" en VS Code.
