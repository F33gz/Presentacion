// Configuración y inicialización de Reveal.js
document.addEventListener('DOMContentLoaded', function() {
    
    // Inicializar Reveal.js
    Reveal.initialize({
        // Configuración básica - optimizada para PDF y 1080p
        width: 1080,
        height: 760,
        margin: 0.1,
        minScale: 0.2,
        maxScale: 2.0,
        
        // Controles y navegación
        controls: true,
        controlsTutorial: true,
        controlsLayout: 'bottom-right',
        controlsBackArrows: 'faded',
        progress: true,
        slideNumber: 'c/t',
        showSlideNumber: 'all',
        hash: true,
        history: true,
        keyboard: true,
        overview: true,
        center: true,
        touch: true,
        loop: false,
        rtl: false,
        
        // Fragmentos
        fragments: true,
        fragmentInURL: false,
        
        // Transiciones
        transition: 'slide', // none/fade/slide/convex/concave/zoom
        transitionSpeed: 'default', // default/fast/slow
        backgroundTransition: 'fade', // none/fade/slide/convex/concave/zoom
        
        // Otros
        preloadIframes: null,
        autoSlide: 0, // 0 = no auto slide
        autoSlideStoppable: true,
        mouseWheel: false,
        hideInactiveCursor: true,
        hideCursorTime: 5000,
        
        // Plugins
        plugins: [ RevealNotes, RevealMarkdown, RevealHighlight ],
        
        // Configuración de notas del presentador
        showNotes: false,
        
        // Configuración para exportar PDF
        pdfMaxPagesPerSlide: 1,
        pdfSeparateFragments: true,
        pdfPageHeightOffset: -1,
        
        // Configuración de markdown
        markdown: {
            smartypants: true
        }
    });
    
    // Event listeners de Reveal.js
    Reveal.on('ready', function(event) {
        console.log('Presentación lista');
    });
    
    Reveal.on('slidechanged', function(event) {
        console.log(`Cambiando a diapositiva: ${event.indexh + 1}`);
    });
    
    // Funciones de utilidad para el presentador
    window.presenterUtils = {
        // Ir a diapositiva específica
        goToSlide: function(slideNumber) {
            Reveal.slide(slideNumber - 1, 0);
        },
        
        // Obtener información de la presentación
        getTotalSlides: function() {
            return Reveal.getTotalSlides();
        },
        
        // Obtener diapositiva actual
        getCurrentSlide: function() {
            const indices = Reveal.getIndices();
            return indices.h + 1;
        }
    };
    
    // Configuración adicional para diferentes modos
    const urlParams = new URLSearchParams(window.location.search);
    
    // Configuración especial para PDF
    if (urlParams.get('print-pdf') !== null) {
        // Ajustes específicos para PDF
        Reveal.configure({
            width: 1080,
            height: 800,
            margin: 0.15,
            center: false,
            transition: 'none',
            backgroundTransition: 'none'
        });
        console.log('🖨️ Modo PDF activado - configuración optimizada');
    }
    
    // Modo presentador
    if (urlParams.get('mode') === 'speaker') {
        // Configuraciones específicas para el presentador
        document.body.classList.add('speaker-mode');
    }
    
    // Debug mode
    if (urlParams.get('debug') === 'true') {
        console.log('Modo debug activado');
        window.revealDebug = {
            reveal: Reveal,
            utils: window.presenterUtils
        };
    }
    
    // Función para exportar a PDF (optimizada para mejor visualización)
    window.exportToPDF = function() {
        const url = window.location.href.split('?')[0] + '?print-pdf';
        window.open(url, '_blank');
        console.log('📄 Para exportar a PDF optimizado:');
        console.log('1. Abre la URL: ' + url);
        console.log('2. Espera a que cargue completamente');
        console.log('3. Usa Ctrl+P o Cmd+P');
        console.log('4. Selecciona "Guardar como PDF"');
        console.log('5. En Opciones Más, marca "Gráficos de fondo"');
        console.log('6. Selecciona "Más configuraciones" y usa márgenes "Mínimos"');
    };
    
    // Atajos de teclado de ayuda
    console.log('🎯 Atajos de teclado disponibles:');
    console.log('S - Abrir notas del presentador');
    console.log('O - Vista general (overview)');
    console.log('F - Pantalla completa');
    console.log('ESC - Salir de pantalla completa/overview');
    console.log('Flechas/Espacio - Navegar entre diapositivas');
    
    // Log de bienvenida
    console.log('📊 Presentación GitHub Copilot cargada');
    console.log('🎮 Usa presenterUtils para funciones adicionales');
});

// Funciones globales de utilidad
window.addEventListener('load', function() {
    // Precargar imágenes para mejor rendimiento
    const images = [
        'images/ai-coding-concept.webp',
        'images/copilot-free.jpg', 
        'images/vscode-copilot-screenshot.png',
        'images/vscode-marketplace-copilot.png'
    ];
    
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
    
    console.log('✅ Recursos precargados');
});
