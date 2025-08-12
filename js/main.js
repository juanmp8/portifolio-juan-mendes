// JavaScript Principal com Animações Limpas

document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfólio carregado com sucesso!');
    
    // Inicializar todas as funcionalidades
    initBasicFeatures();
    renderApps();
    initContactForm();
    initAnimations();
    initCounters();
});

// Funcionalidades básicas
function initBasicFeatures() {
    // Navegação suave
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Fechar menu mobile se estiver aberto
                closeMobileMenu();
            }
        });
    });
    
    // Menu mobile
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Renderizar aplicativos
function renderApps() {
    const appsGrid = document.getElementById('apps-grid');
    if (!appsGrid) return;
    
    // Dados dos aplicativos
    const apps = [
        {
            id: 1,
            name: "AR Shopping Experience",
            description: "Aplicativo de realidade aumentada para visualização de produtos em tempo real. Permite aos usuários ver como móveis e decorações ficariam em suas casas antes da compra.",
            tags: ["Unity", "AR Foundation", "ARCore", "ARKit", "Mobile"],
            playstore: "#",
            appstore: "#",
            downloads: "50K+",
            rating: 4.5,
            year: 2024
        },
        {
            id: 2,
            name: "Virtual Interior Designer",
            description: "Ferramenta profissional para designers de interiores criarem projetos em realidade aumentada. Permite visualização de ambientes completos com diferentes estilos e cores.",
            tags: ["Unity", "AR Foundation", "3D Modeling", "Professional Tools", "Mobile"],
            playstore: "#",
            appstore: "#",
            downloads: "25K+",
            rating: 4.7,
            year: 2024
        },
        {
            id: 3,
            name: "AR Educational Games",
            description: "Coleção de jogos educativos que utilizam realidade aumentada para tornar o aprendizado mais interativo e envolvente para crianças e adolescentes.",
            tags: ["Unity", "AR Foundation", "Education", "Gaming", "Mobile"],
            playstore: "#",
            appstore: "#",
            downloads: "100K+",
            rating: 4.6,
            year: 2023
        },
        {
            id: 4,
            name: "AR Fitness Trainer",
            description: "Personal trainer virtual em realidade aumentada que guia usuários através de exercícios personalizados, com feedback em tempo real sobre postura e movimento.",
            tags: ["Unity", "AR Foundation", "Computer Vision", "Fitness", "Mobile"],
            playstore: "#",
            appstore: "#",
            downloads: "75K+",
            rating: 4.4,
            year: 2023
        },
        {
            id: 5,
            name: "AR Navigation Pro",
            description: "Sistema de navegação avançado que sobrepõe informações de direção e pontos de interesse em tempo real sobre a visão do usuário.",
            tags: ["Unity", "AR Foundation", "GPS", "Navigation", "Mobile"],
            playstore: "#",
            appstore: "#",
            downloads: "200K+",
            rating: 4.3,
            year: 2023
        },
        {
            id: 6,
            name: "Virtual Try-On Beauty",
            description: "Aplicativo de maquiagem virtual que permite aos usuários testar diferentes produtos de beleza em tempo real usando a câmera do dispositivo.",
            tags: ["Unity", "AR Foundation", "Computer Vision", "Beauty", "Mobile"],
            playstore: "#",
            appstore: "#",
            downloads: "150K+",
            rating: 4.5,
            year: 2023
        }
    ];
    
    // Limpar grid
    appsGrid.innerHTML = '';
    
    // Criar cards dos aplicativos com animação de entrada
    apps.forEach((app, index) => {
        const appCard = createAppCard(app);
        appCard.style.opacity = '0';
        appCard.style.transform = 'translateY(30px)';
        appsGrid.appendChild(appCard);
        
        // Animar entrada com delay
        setTimeout(() => {
            appCard.style.transition = 'all 0.6s ease';
            appCard.style.opacity = '1';
            appCard.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Criar card de aplicativo
function createAppCard(app) {
    const card = document.createElement('div');
    card.className = 'app-card';
    
    card.innerHTML = `
        <div class="app-image">
            <div style="
                width: 100%; 
                height: 100%; 
                background: linear-gradient(45deg, #3b82f6, #8b5cf6);
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-weight: bold;
                text-align: center;
                padding: 20px;
            ">
                ${app.name}
            </div>
        </div>
        <div class="app-content">
            <h3 class="app-title">${app.name}</h3>
            <p class="app-description">${app.description}</p>
            <div class="app-tags">
                ${app.tags.map(tag => `<span class="app-tag">${tag}</span>`).join('')}
            </div>
            <div class="app-stats">
                <span>📥 ${app.downloads}</span>
                <span>⭐ ${app.rating}</span>
                <span>📅 ${app.year}</span>
            </div>
            <div class="app-links">
                <a href="${app.playstore}" class="app-link playstore">
                    <i class="fab fa-google-play"></i> Google Play
                </a>
                <a href="${app.appstore}" class="app-link appstore">
                    <i class="fab fa-apple"></i> App Store
                </a>
            </div>
        </div>
    `;
    
    // Adicionar evento de clique para mostrar detalhes
    card.addEventListener('click', function() {
        showAppDetails(app);
    });
    
    return card;
}

// Modal de detalhes do aplicativo
function showAppDetails(app) {
    // Criar modal
    const modal = document.createElement('div');
    modal.className = 'app-modal';
    modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <div class="modal-header">
                    <h2>${app.name}</h2>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="modal-image">
                        <div style="
                            width: 100%; 
                            height: 300px; 
                            background: linear-gradient(45deg, #3b82f6, #8b5cf6);
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            color: white;
                            font-weight: bold;
                            text-align: center;
                            border-radius: 12px;
                        ">
                            ${app.name}
                        </div>
                    </div>
                    <div class="modal-info">
                        <p class="modal-description">${app.description}</p>
                        <div class="modal-features">
                            <h3>Funcionalidades:</h3>
                            <ul>
                                <li>Realidade Aumentada Avançada</li>
                                <li>Interface Intuitiva</li>
                                <li>Performance Otimizada</li>
                                <li>Multiplataforma</li>
                            </ul>
                        </div>
                        <div class="modal-stats">
                            <div class="stat">
                                <span class="stat-label">Downloads:</span>
                                <span class="stat-value">${app.downloads}</span>
                            </div>
                            <div class="stat">
                                <span class="stat-label">Avaliação:</span>
                                <span class="stat-value">${app.rating}/5</span>
                            </div>
                            <div class="stat">
                                <span class="stat-label">Ano:</span>
                                <span class="stat-value">${app.year}</span>
                            </div>
                        </div>
                        <div class="modal-links">
                            <a href="${app.playstore}" class="btn" target="_blank">
                                <i class="fab fa-google-play"></i> Google Play
                            </a>
                            <a href="${app.appstore}" class="btn btn-secondary" target="_blank">
                                <i class="fab fa-apple"></i> App Store
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Adicionar ao DOM
    document.body.appendChild(modal);
    
    // Animar entrada
    setTimeout(() => modal.classList.add('active'), 10);
    
    // Eventos do modal
    const closeBtn = modal.querySelector('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');
    
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
    
    function closeModal() {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
    }
    
    // Fechar com ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// Formulário de contato
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simular envio
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            showNotification('Mensagem enviada com sucesso!', 'success');
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1000);
    });
}

// Inicializar animações
function initAnimations() {
    // Animar elementos quando entrarem na viewport
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observar elementos para animação
    const animatedElements = document.querySelectorAll('.section-header, .about-content, .skills-content, .contact-content');
    animatedElements.forEach(el => observer.observe(el));
}

// Inicializar contadores
function initCounters() {
    const counters = document.querySelectorAll('.stat-number[data-target]');
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.dataset.target);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += step;
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + '+';
            }
        };
        
        updateCounter();
    };
    
    // Animar contadores quando estiverem visíveis
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    });
    
    counters.forEach(counter => counterObserver.observe(counter));
}

// Fechar menu mobile
function closeMobileMenu() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
}

// Sistema de notificações
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem;
        border-radius: 8px;
        z-index: 10001;
        max-width: 300px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Auto-remover após 3 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Adicionar estilos CSS para o modal e animações
function addModalStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .app-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10000;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }
        
        .app-modal.active {
            opacity: 1;
            visibility: visible;
        }
        
        .modal-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
        
        .modal-content {
            background: white;
            border-radius: 20px;
            max-width: 800px;
            width: 100%;
            max-height: 90vh;
            overflow-y: auto;
            transform: scale(0.8);
            transition: transform 0.3s ease;
        }
        
        .app-modal.active .modal-content {
            transform: scale(1);
        }
        
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.5rem;
            border-bottom: 1px solid #e5e7eb;
        }
        
        .modal-close {
            background: none;
            border: none;
            font-size: 2rem;
            cursor: pointer;
            color: #6b7280;
            transition: color 0.3s ease;
        }
        
        .modal-close:hover {
            color: #1f2937;
        }
        
        .modal-body {
            padding: 1.5rem;
        }
        
        .modal-image {
            margin-bottom: 1.5rem;
        }
        
        .modal-features ul {
            list-style: none;
            padding: 0;
        }
        
        .modal-features li {
            padding: 0.5rem 0;
            border-bottom: 1px solid #f3f4f6;
        }
        
        .modal-features li:before {
            content: "✓";
            color: #10b981;
            font-weight: bold;
            margin-right: 0.5rem;
        }
        
        .modal-stats {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
            margin: 1.5rem 0;
        }
        
        .stat {
            text-align: center;
            padding: 1rem;
            background: #f9fafb;
            border-radius: 8px;
        }
        
        .stat-label {
            display: block;
            font-size: 0.875rem;
            color: #6b7280;
            margin-bottom: 0.5rem;
        }
        
        .stat-value {
            font-size: 1.25rem;
            font-weight: 600;
            color: #1f2937;
        }
        
        .modal-links {
            display: flex;
            gap: 1rem;
            margin-top: 1.5rem;
        }
        
        .modal-links .btn {
            flex: 1;
            text-align: center;
        }
        
        .animate-in {
            animation: slideInUp 0.8s ease forwards;
        }
        
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @media (max-width: 768px) {
            .modal-content {
                margin: 20px;
                max-height: calc(100vh - 40px);
            }
            
            .modal-stats {
                grid-template-columns: 1fr;
            }
            
            .modal-links {
                flex-direction: column;
            }
        }
    `;
    
    document.head.appendChild(style);
}

// Adicionar estilos quando a página carregar
window.addEventListener('load', function() {
    addModalStyles();
});

console.log('JavaScript principal carregado com animações!'); 