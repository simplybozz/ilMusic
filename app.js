document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('registroForm');
    if (formulario) {
      formulario.addEventListener('submit', function (event) {
        event.preventDefault();
  
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const email = document.getElementById('email').value;
  
        const mensajePersonalizado = document.getElementById('mensajePersonalizado');
        if (mensajePersonalizado) {
          mensajePersonalizado.innerHTML = `Hola ${nombre} ${apellido}. Gracias por unirte.`;
        }
  
        const mensajeConfirmacion = document.getElementById('mensajeConfirmacion');
        if (mensajeConfirmacion) {
          mensajeConfirmacion.style.display = 'block';
        }
  
        console.log(`Correo enviado a: ${email}`);
        this.reset();
      });
    }
  
    const sliders = document.querySelectorAll('.slider');
    const sliderPositions = {};
  
    sliders.forEach(slider => {
      const id = slider.id;
      const slides = slider.querySelectorAll('.slide');
      const slideWidth = slides[0].offsetWidth + 20;
  
      sliderPositions[id] = {
        position: 0,
        total: slides.length,
        width: slideWidth
      };
  
      window.addEventListener('resize', () => {
        const newWidth = slides[0].offsetWidth + 20;
        sliderPositions[id].width = newWidth;
        slider.style.transform = `translateX(-${sliderPositions[id].position * newWidth}px)`;
      });
    });
  
    window.moverSlider = function (sliderId, direction) {
      const slider = document.getElementById(sliderId);
      const data = sliderPositions[sliderId];
      if (!slider || !data) return;
  
      data.position += direction;
  
      if (data.position < 0) {
        data.position = data.total - 3;
      } else if (data.position > data.total - 3) {
        data.position = 0;
      }
  
      slider.style.transform = `translateX(-${data.position * data.width}px)`;
    };
  });
  
  function mostrarDetalles(button) {
    const detalles = button.parentElement.nextElementSibling;
  
    if (detalles.classList.contains('active')) {
      detalles.classList.remove('active');
      button.textContent = 'Ver detalles';
    } else {
      detalles.classList.add('active');
      button.textContent = 'Ocultar detalles';
    }
  }
  