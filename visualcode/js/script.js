// script.js CORRIGIDO E SIMPLIFICADO
document.addEventListener('DOMContentLoaded', function() {
    console.log('Site carregado - Ricardo Social Media');

    // Smooth Scroll Corrigido
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#') && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
                    const targetPosition = target.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Form Submission - ATUALIZADO PARA SEU FORMULÁRIO
    const contactForms = document.querySelectorAll('form');
    contactForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Coleta dados do formulário
            const formData = new FormData(this);
            const name = formData.get('nome') || '';
            const email = formData.get('email') || '';
            const telefone = formData.get('telefone') || '';
            const mensagem = formData.get('mensagem') || '';
            
            // Validação
            if (!name || !email || !mensagem) {
                alert('Por favor, preencha pelo menos nome, email e mensagem.');
                return;
            }
            
            // 🔥 SEU NÚMERO DO WHATSAPP AQUI 🔥
            const phoneNumber = '5551981670024'; // MANTENHA SEU NÚMERO
            
            // Mensagem formatada
            const whatsappMessage = `Olá Ricardo! Me chamo *${name}*.

📧 Email: ${email}
📞 WhatsApp: ${telefone || 'Não informado'}

💬 Mensagem:
${mensagem}

*Gostaria de saber mais sobre seus serviços!*`;

            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
            
            // Feedback visual
            const submitBtn = this.querySelector('button[type="submit"]');
            if (submitBtn) {
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Redirecionando...';
                submitBtn.disabled = true;
                
                setTimeout(() => {
                    window.open(whatsappUrl, '_blank');
                    this.reset();
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 1000);
            } else {
                window.open(whatsappUrl, '_blank');
                this.reset();
            }
        });
    });

    // Header no scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (header) {
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.background = '#ffffff';
                header.style.backdropFilter = 'none';
            }
        }
    });
});

// Animações simples ao scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

// Observar elementos para animação
document.querySelectorAll('.servico-card, .case-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});