// DOM yuklangandan so'ng
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menyuni boshqarish
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        menuToggle.innerHTML = navLinks.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    // Navbar linklarini bosganda mobile menyuni yopish
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
    
    // Scroll uchun navbar effekti
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.padding = '15px 0';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // Ko'nikmalar progress barlarini animatsiya qilish
    function animateSkills() {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = '0%';
            
            // Kichik kechikish bilan animatsiya
            setTimeout(() => {
                bar.style.width = width + '%';
            }, 300);
        });
    }
    
    // Scroll animatsiyalari
    function handleScrollAnimations() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        
        // Ko'nikmalar animatsiyasi
        const skillsSection = document.querySelector('.skills');
        if (skillsSection) {
            const skillsPosition = skillsSection.getBoundingClientRect().top;
            if (skillsPosition < windowHeight * 0.9) {
                animateSkills();
            }
        }
        
        // Scroll to top tugmasi
        const scrollTopBtn = document.querySelector('.scroll-top');
        if (scrollTop > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
        
        // Aktiv nav linkni o'zgartirish
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollTop >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    }
    
    // Scroll hodisasi
    window.addEventListener('scroll', handleScrollAnimations);
    
    // Scroll to top tugmasi
    document.querySelector('.scroll-top').addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Formni yuborish
    const contactForm = document.getElementById('messageForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Bu yerda haqiqiy form yuborish logikasi bo'lishi kerak
            // Hozircha faqat demo
            const formData = new FormData(contactForm);
            const name = formData.get('name') || "Ism kiritilmagan";
            
            // Xabarni yuborildi deb ko'rsatish
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Xabar yuborildi!';
            submitBtn.style.background = '#28a745';
            
            // 3 soniyadan so'ng asl holatiga qaytarish
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.background = '';
                contactForm.reset();
            }, 3000);
            
            console.log('Form yuborildi:', Object.fromEntries(formData));
        });
    }
    
    // Sahifa yuklanganda bir marta animatsiyalarni ishga tushirish
    handleScrollAnimations();
    
    // Tasodifiy rang generatori (qo'shimcha interaktivlik)
    function generateRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    
    // Interaktiv effekt: kartalarni hover qilganda rang o'zgartirish
    const cards = document.querySelectorAll('.hobby-card, .info-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const randomColor = generateRandomColor();
            this.style.borderTop = `3px solid ${randomColor}`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.borderTop = '3px solid transparent';
        });
    });
    
    // Yilni avtomatik yangilash
    const currentYear = new Date().getFullYear();
    const yearElements = document.querySelectorAll('.current-year');
    yearElements.forEach(el => {
        el.textContent = currentYear;
    });
});