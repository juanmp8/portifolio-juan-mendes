// Arquivo de configuração para personalização fácil do portfólio
// Edite as informações abaixo e elas serão aplicadas automaticamente

const portfolioConfig = {
    // Identidade Pexon Labs
    brand: {
        name: "Pexon Labs",
        tagline: "Tecnologia que flui como o oceano",
        description: "Onde tecnologia encontra a fluidez do oceano",
        philosophy: "Criando soluções digitais que fluem naturalmente - tecnologia profunda, resultados que emergem naturalmente."
    },

    // Informações pessoais
    personal: {
        name: "Juan Mendes",
        title: "Desenvolvedor Full Stack",
        subtitle: "Criando soluções digitais que fluem como o oceano",
        email: "juan@pexonlabs.com",
        phone: "(11) 99999-9999",
        whatsapp: "5511999999999",
        location: "São Paulo, SP - Brasil",
        profileImage: "images/profile.jpg",
        aboutImage: "images/about.jpg"
    },

    // Estatísticas do hero com tema oceânico
    stats: {
        experience: "5+",
        experienceLabel: "Anos navegando códigos",
        projects: "50+",
        projectsLabel: "Projetos lançados ao mar",
        clients: "30+",
        clientsLabel: "Clientes satisfeitos"
    },

    // Sobre mim - Pexon Labs
    about: {
        title: "Pexon Labs - onde tecnologia encontra a fluidez do oceano",
        description: [
            "Como desenvolvedor por trás da Pexon Labs, acredito que a melhor tecnologia flui naturalmente, assim como as correntes oceânicas. Com mais de 5 anos navegando pelos mares do desenvolvimento web, construo soluções que são profundas em funcionalidade, mas suaves na experiência.",
            "O nome 'Pexon' une minha conexão pessoal com o mar (Peixoto) à essência da inovação tecnológica. Cada projeto é uma jornada de descoberta, onde mergulho fundo nos desafios para emergir com soluções que transformam negócios e encantam usuários."
        ]
    },

    // Serviços oferecidos
    services: [
        {
            icon: "fas fa-code",
            title: "Desenvolvimento Web",
            description: "Criação de websites e aplicações web responsivas, modernas e otimizadas para todos os dispositivos."
        },
        {
            icon: "fas fa-mobile-alt",
            title: "Aplicações Mobile",
            description: "Desenvolvimento de aplicativos móveis nativos e híbridos para iOS e Android com performance otimizada."
        },
        {
            icon: "fas fa-palette",
            title: "UI/UX Design",
            description: "Design de interfaces intuitivas e experiências de usuário que convertem visitantes em clientes."
        },
        {
            icon: "fas fa-search",
            title: "SEO & Performance",
            description: "Otimização para mecanismos de busca e performance, garantindo melhor ranking e velocidade de carregamento."
        },
        {
            icon: "fas fa-server",
            title: "Backend & APIs",
            description: "Desenvolvimento de sistemas backend robustos e APIs RESTful para integração de dados e serviços."
        },
        {
            icon: "fas fa-tools",
            title: "Manutenção & Suporte",
            description: "Suporte técnico contínuo, manutenção e atualizações para manter seus projetos sempre funcionando."
        }
    ],

    // Experiência profissional
    experience: [
        {
            period: "2023 - Atualmente",
            position: "Desenvolvedor Full Stack Sênior",
            company: "Tech Solutions Inc.",
            logo: "images/companies/company1.png",
            description: "Liderança técnica no desenvolvimento de aplicações web complexas, mentoria de desenvolvedores júnior e implementação de melhores práticas.",
            technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"]
        },
        {
            period: "2021 - 2023",
            position: "Desenvolvedor Full Stack Pleno",
            company: "Digital Innovations",
            logo: "images/companies/company2.png",
            description: "Desenvolvimento de sistemas web escaláveis, integração de APIs e colaboração em projetos de transformação digital.",
            technologies: ["Vue.js", "Laravel", "MySQL", "Docker"]
        },
        {
            period: "2019 - 2021",
            position: "Desenvolvedor Junior",
            company: "StartUp Web",
            logo: "images/companies/company3.png",
            description: "Início da carreira profissional, desenvolvimento de features frontend e backend, participação em projetos de e-commerce e landing pages.",
            technologies: ["HTML/CSS", "JavaScript", "PHP", "WordPress"]
        }
    ],

    // Habilidades técnicas
    skills: {
        frontend: [
            { name: "React", percentage: 95 },
            { name: "Vue.js", percentage: 90 },
            { name: "JavaScript", percentage: 95 },
            { name: "TypeScript", percentage: 85 }
        ],
        backend: [
            { name: "Node.js", percentage: 90 },
            { name: "Python", percentage: 85 },
            { name: "PHP/Laravel", percentage: 88 },
            { name: "APIs RESTful", percentage: 92 }
        ],
        database: [
            { name: "PostgreSQL", percentage: 90 },
            { name: "MongoDB", percentage: 85 },
            { name: "Docker", percentage: 80 },
            { name: "AWS", percentage: 75 }
        ]
    },

    // Projetos do portfólio
    portfolio: [
        {
            title: "E-commerce Moderno",
            category: "web",
            image: "images/portfolio/project1.jpg",
            description: "Plataforma completa de vendas online",
            demoUrl: "#",
            codeUrl: "#"
        },
        {
            title: "App de Delivery",
            category: "app",
            image: "images/portfolio/project2.jpg",
            description: "Aplicativo para pedidos de comida",
            demoUrl: "#",
            codeUrl: "#"
        },
        {
            title: "Dashboard Analytics",
            category: "web",
            image: "images/portfolio/project3.jpg",
            description: "Painel de controle e relatórios",
            demoUrl: "#",
            codeUrl: "#"
        },
        {
            title: "Loja Virtual",
            category: "ecommerce",
            image: "images/portfolio/project4.jpg",
            description: "E-commerce de moda e acessórios",
            demoUrl: "#",
            codeUrl: "#"
        },
        {
            title: "App Financeiro",
            category: "app",
            image: "images/portfolio/project5.jpg",
            description: "Controle de gastos pessoais",
            demoUrl: "#",
            codeUrl: "#"
        },
        {
            title: "Site Corporativo",
            category: "web",
            image: "images/portfolio/project6.jpg",
            description: "Website institucional responsivo",
            demoUrl: "#",
            codeUrl: "#"
        }
    ],

    // Depoimentos de clientes
    testimonials: [
        {
            name: "Maria Silva",
            position: "CEO, TechStart",
            image: "images/testimonials/client1.jpg",
            text: "Juan é um profissional excepcional. Entregou nosso projeto no prazo, com qualidade impecável e sempre disponível para ajustes. Recomendo fortemente!"
        },
        {
            name: "Carlos Santos",
            position: "Diretor, Inovação Digital",
            image: "images/testimonials/client2.jpg",
            text: "Trabalhar com Juan foi uma experiência incrível. Ele transformou nossa ideia em um aplicativo funcional e bonito. Comunicação excelente durante todo o processo."
        },
        {
            name: "Ana Costa",
            position: "Proprietária, Loja Online",
            image: "images/testimonials/client3.jpg",
            text: "Profissional dedicado e competente. Nosso e-commerce aumentou 300% as vendas após as melhorias implementadas por Juan. Trabalho excepcional!"
        }
    ],

    // Redes sociais
    social: {
        linkedin: "https://linkedin.com/in/seuperfil",
        github: "https://github.com/seuusuario",
        twitter: "https://twitter.com/seuusuario",
        instagram: "https://instagram.com/seuusuario"
    },

    // Configurações de estilo/tema - Paleta Oceânica Pexon Labs
    theme: {
        primaryOcean: "#0B3C5D",      // Azul profundo oceânico
        secondaryOcean: "#328CC1",     // Azul claro sereno
        accentTeal: "#00BFA6",         // Turquesa inovação
        neutralLight: "#F5F7FA",       // Cinza claro respiro
        neutralDark: "#2E2E2E",        // Cinza grafite texto
        supportSand: "#E1D7C6",        // Areia suave
        
        // Dark mode colors
        darkPrimaryOcean: "#0F4C75",
        darkAccentTeal: "#0FF4C4",
        darkNeutralLight: "#1A1A2E",
        darkNeutralDark: "#EAEAEA",
        darkSupportSand: "#16213E"
    },

    // Configurações de formulário
    form: {
        // Para usar com EmailJS
        emailJS: {
            serviceId: "seu_service_id",
            templateId: "seu_template_id",
            publicKey: "sua_public_key"
        },
        // Para usar com Formspree
        formspree: {
            endpoint: "https://formspree.io/f/seuformid"
        }
    }
};

// Função para aplicar configurações automaticamente
function applyConfig() {
    // Aplicar informações pessoais
    const nameElements = document.querySelectorAll('[data-config="name"]');
    nameElements.forEach(el => el.textContent = portfolioConfig.personal.name);

    const titleElements = document.querySelectorAll('[data-config="title"]');
    titleElements.forEach(el => el.textContent = portfolioConfig.personal.title);

    // Aplicar estatísticas
    const statsElements = document.querySelectorAll('[data-config-stat]');
    statsElements.forEach(el => {
        const statType = el.getAttribute('data-config-stat');
        if (portfolioConfig.stats[statType]) {
            el.textContent = portfolioConfig.stats[statType];
        }
    });

    // Aplicar cores do tema
    const root = document.documentElement;
    root.style.setProperty('--primary-color', portfolioConfig.theme.primaryColor);
    root.style.setProperty('--secondary-color', portfolioConfig.theme.secondaryColor);
    root.style.setProperty('--accent-color', portfolioConfig.theme.accentColor);

    console.log('✅ Configurações aplicadas com sucesso!');
}

// Aplicar configurações quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', applyConfig);

// Exportar configuração para uso em outros scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioConfig;
}
