// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Funciones botones del explorador 
    
    // Seleccionar todos los botones de explorar (usando la clase correcta 'boton-explorar')
    const botonesExplorar = document.querySelectorAll('.boton-explorar');
    
    // se crea evento click para cada botón
    botonesExplorar.forEach(boton => {
        boton.addEventListener('click', function() {
            
            // Encontrar la tarjeta de categoría padre más cercana
            const tarjetaCategoria = this.closest('.tarjeta-categoria');
            
            // Obtener el nombre de la categoría (texto del h3)
            const nombreCategoria = tarjetaCategoria.querySelector('h3').textContent;
            
            // Obtener el ID de la categoría (para posible uso en redirección)
            const idCategoria = tarjetaCategoria.id;
            
            // Mostrar mensaje temporal (esto es solo para prueba)
            console.log(`El usuario quiere explorar: ${nombreCategoria} (ID: ${idCategoria})`);
            
            // Ejemplo de cómo redirigir a una página específica (descomentar cuando esté lista)
            // window.location.href = `tutorias.html?categoria=${idCategoria}`;
            
            // Alternativa: Mostrar un mensaje al usuario
            alert(`Redirigiendo a la sección de ${nombreCategoria}`);
        });
    });
    
    
    // 2. Algunos efectos hover para las tarjetas 

    
    // Seleccionar todas las tarjetas de categoría
    const tarjetasCategoria = document.querySelectorAll('.tarjeta-categoria');
    
    // Añadir efectos hover a cada tarjeta
    tarjetasCategoria.forEach(tarjeta => {
        // Cuando el mouse entra en la tarjeta
        tarjeta.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
            this.style.transition = 'all 0.3s ease';
        });
        
        // Cuando el mouse sale de la tarjeta
        tarjeta.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // =============================================
    // 3. POSIBLES MEJORAS FUTURAS (COMENTADAS)
    // =============================================
    /*
    // Ejemplo para cargar dinámicamente las categorías desde una API:
    fetch('/api/categorias')
      .then(response => response.json())
      .then(data => {
          // Lógica para crear las tarjetas dinámicamente
      });
    */
});