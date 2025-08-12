// Intersection Observer for scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, {
            threshold: 0.1
        });
        
        document.querySelectorAll('.program-card, .instructor-card, .feature-card').forEach(card => {
            observer.observe(card);
        });
        
        // Simple testimonial slider
        let currentTestimonial = 0;
        const testimonials = [
            {
                quote: "The AI certification completely changed my career trajectory. Within 3 months of completing the program, I landed a position at a cutting-edge AI startup with a 40% salary increase.",
                name: "Michael Rodriguez",
                title: "AI Engineer at NeuroTech",
            },
            {
                quote: "Zentrixia's practical approach to learning gave me the confidence to transition from IT support to cybersecurity. I now manage security operations for a Fortune 500 company.",
                name: "Jennifer Lee",
                title: "Security Operations Manager",
            },
            {
                quote: "The web development program covered everything from fundamentals to advanced concepts. I went from knowing basic HTML to building full-stack applications in just 6 months.",
                name: "David Kim",
                title: "Full-Stack Developer",
            }
        ];
        
        function changeTestimonial() {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            updateTestimonial();
        }
        
        function updateTestimonial() {
            const testimonial = testimonials[currentTestimonial];
            const testimonialElement = document.querySelector('.testimonial-card');
            
            testimonialElement.innerHTML = `
                <p class="testimonial-quote">${testimonial.quote}</p>
                <div class="testimonial-author">
                    <div class="testimonial-author-info">
                        <h4>${testimonial.name}</h4>
                        <p>${testimonial.title}</p>
                    </div>
                </div>
            `;
        }
        
        setInterval(changeTestimonial, 5000);
        
        // Smooth scrolling for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Form submission handling
        document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput.value) {
                alert('Thank you for subscribing! We\'ll send you updates soon.');
                emailInput.value = '';
            }
        });

         const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
