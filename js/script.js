// script.js
document.addEventListener('DOMContentLoaded', () => {

    // ---------------------------------------------
    // FUNCIONALIDAD PARA MÚLTIPLES CARRUSELES DE ESTILOS (MANUAL)
    // ---------------------------------------------
    const styleSliders = document.querySelectorAll('.style-slider');

    styleSliders.forEach(slider => {
        const slidesContainer = slider.querySelector('.style-slides');
        const images = slidesContainer.querySelectorAll('img');
        let currentStyleIndex = 0;
        const totalImages = images.length;

        // Función central para cambiar la imagen
        function updateSlidePosition() {
            // Calcula cuánto debe desplazarse: (índice * 100% / número total de imágenes)
            const offset = currentStyleIndex * (100 / totalImages);
            slidesContainer.style.transform = `translateX(-${offset}%)`;
        }
        
        // Clic en la flecha SIGUIENTE
        const nextButton = slider.querySelector('.next-btn');
        if (nextButton) {
            nextButton.addEventListener('click', () => {
                // Avanza, volviendo a 0 si llega al final
                currentStyleIndex = (currentStyleIndex + 1) % totalImages;
                updateSlidePosition();
            });
        }

        // Clic en la flecha ANTERIOR
        const prevButton = slider.querySelector('.prev-btn');
        if (prevButton) {
            prevButton.addEventListener('click', () => {
                // Retrocede, volviendo al final si llega a -1
                currentStyleIndex = (currentStyleIndex - 1 + totalImages) % totalImages;
                updateSlidePosition();
            });
        }
    });

    // --------------------------------------------------------
    // --- Lógica del Slider (Banner en la sección HERO) ---
    // --------------------------------------------------------

    const slidesContainer = document.querySelector('.slides-container');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev-slide');
    const nextButton = document.querySelector('.next-slide');
    
    // Si no encontramos los elementos del slider, salimos
    if (!slidesContainer || slides.length === 0) {
        // En lugar de salir, podemos simplemente no ejecutar el código del slider
    } else {
        const totalSlides = slides.length; 
        let currentSlide = 0;

        // Función principal para mostrar la diapositiva
        function showSlide(index) {
            // Maneja el ciclo del slider (si llega al final, vuelve al inicio; si va atrás, va al final)
            if (index >= totalSlides) {
                currentSlide = 0;
            } else if (index < 0) {
                currentSlide = totalSlides - 1;
            } else {
                currentSlide = index;
            }

            // Calcula el desplazamiento horizontal
            const offset = -currentSlide * 100 / totalSlides;
            slidesContainer.style.transform = `translateX(${offset}%)`;
        }

        // Evento de click para el botón siguiente
        nextButton.addEventListener('click', () => {
            showSlide(currentSlide + 1);
        });

        // Evento de click para el botón anterior
        prevButton.addEventListener('click', () => {
            showSlide(currentSlide - 1);
        });

        // Deslizamiento automático cada 5 segundos
        setInterval(() => {
            showSlide(currentSlide + 1);
        }, 5000); 

        // Muestra la primera diapositiva al cargar
        showSlide(currentSlide);
    }
    

    // ---------------------------------------------
    // FUNCIONALIDAD DEL ACORDEÓN DE PREGUNTAS FRECUENTES (FAQ)
    // ---------------------------------------------
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Alternar la clase 'active' para abrir/cerrar el acordeón
            item.classList.toggle('active');

            const answer = item.querySelector('.faq-answer');
            
            if (item.classList.contains('active')) {
                // Abre el acordeón: establece la altura a su tamaño real
                answer.style.maxHeight = answer.scrollHeight + "px";
                answer.style.opacity = 1;
                answer.style.paddingTop = "10px";

            } else {
                // Cierra el acordeón
                answer.style.maxHeight = "0";
                answer.style.opacity = 0;
                answer.style.paddingTop = "0";
            }
            
        });
    });
});