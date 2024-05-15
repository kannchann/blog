document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');

    navToggle.addEventListener('click', function () {
        navList.classList.toggle('nav-list-visible');
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const testimonialContainer = document.querySelector('.testimonial-container');
    const testimonials = document.querySelectorAll('.caption-card');
    const testimonialWidth = testimonials[0].offsetWidth; // Get the width of a single testimonial card
    const totalTestimonials = testimonials.length;
    let currentIndex = 0;
  
    function updateTestimonialPosition() {
      const offset = -currentIndex * testimonialWidth;
      testimonialContainer.style.transition = 'transform 0.5s ease-in-out';
      testimonialContainer.style.transform = `translateX(${offset}px)`;
    }
  
    function slideToNextTestimonial() {
      if (totalTestimonials <= 2) return; // Don't slide if only one testimonial
  
      currentIndex = (currentIndex + 1) % totalTestimonials;
      updateTestimonialPosition();
  
      // Reset to the first testimonial position after reaching the last testimonial
      if (currentIndex <= 0) {
        setTimeout(() => {
          testimonialContainer.style.transition = 'none';
          testimonialContainer.style.transform = `translateX(0)`;
          currentIndex = 0;
        }, 500); // 500ms delay matches the transition duration
      }
    }
  
    setInterval(slideToNextTestimonial, 2000); // Change slide every 5 seconds
  });
  