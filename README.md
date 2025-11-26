# Portfólio Juan Mendes

Um site de portfólio moderno e responsivo inspirado no design profissional, desenvolvido com HTML5, CSS3 e JavaScript vanilla.

## 🚀 Características

- **Design Responsivo**: Adaptável a todos os dispositivos (desktop, tablet, mobile)
- **Animações Suaves**: Transições e efeitos visuais modernos
- **Navegação Inteligente**: Menu responsivo com scroll suave
- **Seções Completas**: Todas as seções essenciais de um portfólio profissional
- **Formulário de Contato**: Sistema de contato funcional com validação
- **Performance Otimizada**: Carregamento rápido e código otimizado

## 📁 Estrutura do Projeto

```
portifolio-juan-mendes/
├── index.html                 # Página principal
├── css/
│   └── style.css             # Estilos principais
├── js/
│   └── script.js             # Funcionalidades JavaScript
├── images/                   # Pasta de imagens
│   ├── portfolio/           # Imagens dos projetos
│   ├── testimonials/        # Fotos dos clientes
│   ├── companies/           # Logos das empresas
│   ├── profile.jpg          # Sua foto principal
│   └── about.jpg            # Foto da seção sobre
└── README.md                # Este arquivo
```

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica moderna
- **CSS3**: Flexbox, Grid, Animations, Variables
- **JavaScript ES6+**: Funcionalidades interativas
- **Font Awesome**: Ícones profissionais
- **Google Fonts**: Tipografia moderna (Inter)

## 📱 Seções do Site

### 1. **Hero/Início**
- Apresentação principal com foto
- Estatísticas profissionais
- Call-to-action buttons

### 2. **Sobre Mim**
- Biografia profissional
- Informações pessoais
- Botão direto para WhatsApp

### 3. **Serviços**
- Desenvolvimento Web
- Aplicações Mobile
- UI/UX Design
- SEO & Performance
- Backend & APIs
- Manutenção & Suporte

### 4. **Experiência**
- Timeline profissional
- Empresas e cargos
- Tecnologias utilizadas
- Período de trabalho

### 5. **Habilidades**
- Tecnologias Frontend
- Tecnologias Backend
- Database & DevOps
- Barras de progresso animadas

### 6. **Portfólio**
- Projetos realizados
- Filtros por categoria
- Links para visualizar projetos
- Hover effects

### 7. **Depoimentos**
- Testemunhos de clientes
- Slider automático
- Fotos dos clientes

### 8. **Contato**
- Formulário funcional
- Informações de contato
- Links para redes sociais
- Validação de campos

## ⚙️ Personalização

### 1. **Informações Pessoais**
Edite as seguintes informações no arquivo `index.html`:

```html
<!-- Seus dados pessoais -->
<h1>Olá, eu sou <span class="text-gradient">SEU NOME</span></h1>
<span class="info-value">seu.email@email.com</span>
<span class="info-value">(11) 99999-9999</span>
```

### 2. **WhatsApp**
Atualize os links do WhatsApp com seu número:

```html
<a href="https://api.whatsapp.com/send?phone=5511999999999&text=Olá%2C%20gostaria%20de%20fazer%20um%20orçamento!">
```

### 3. **Redes Sociais**
Adicione seus links das redes sociais:

```html
<a href="https://linkedin.com/in/seuperfil" class="social-link">
<a href="https://github.com/seuusuario" class="social-link">
```

### 4. **Cores e Estilo**
Personalize as cores no arquivo `css/style.css`:

```css
:root {
    --primary-color: #3b82f6;    /* Cor principal */
    --secondary-color: #64748b;  /* Cor secundária */
    --accent-color: #f59e0b;     /* Cor de destaque */
}
```

### 5. **Imagens**
Substitua as imagens na pasta `images/`:

- `profile.jpg` - Sua foto principal (300x300px recomendado)
- `about.jpg` - Foto para seção sobre (600x400px)
- `portfolio/project1.jpg` - Capturas dos seus projetos
- `testimonials/client1.jpg` - Fotos dos clientes
- `companies/company1.png` - Logos das empresas

## 🚀 Como Usar

### 1. **Instalação Local**
```bash
# Clone ou baixe os arquivos
# Abra index.html em qualquer navegador
```

### 2. **Hospedagem**
- **GitHub Pages**: Faça upload para um repositório GitHub
- **Netlify**: Arraste a pasta para netlify.com
- **Vercel**: Conecte com seu repositório
- **Servidor tradicional**: Faça upload via FTP

### 3. **Desenvolvimento Local**
Para desenvolvimento com live reload, use:

```bash
# Com Python
python -m http.server 8000

# Com Node.js (http-server)
npx http-server

# Com PHP
php -S localhost:8000
```

## 📧 Configuração do Formulário

O formulário atualmente mostra uma notificação de sucesso. Para integrar com um backend:

### Opção 1: EmailJS (Gratuito)
```javascript
// Adicione no script.js
emailjs.send("service_id", "template_id", {
    name: name,
    email: email,
    message: message
});
```

### Opção 2: Formspree
```html
<form action="https://formspree.io/f/seuformid" method="POST">
```

### Opção 3: Netlify Forms
```html
<form name="contact" method="POST" data-netlify="true">
```

## 🎨 Funcionalidades JavaScript

- **Navegação suave**: Scroll automático entre seções
- **Menu responsivo**: Hamburger menu para mobile
- **Animações on-scroll**: Elementos aparecem ao rolar a página
- **Filtro de portfólio**: Filtrar projetos por categoria
- **Slider de depoimentos**: Carrossel automático
- **Validação de formulário**: Verificação de campos
- **Back to top**: Botão para voltar ao topo
- **Loading animations**: Animações de carregamento
- **Easter egg**: Código secreto (Konami Code)

## 📱 Responsividade

O site é totalmente responsivo com breakpoints para:

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile Large**: 481px - 767px
- **Mobile Small**: até 480px

## 🔧 Manutenção

### Atualizações Recomendadas:
1. **Conteúdo**: Mantenha projetos e experiências atualizados
2. **Imagens**: Use formatos otimizados (WebP quando possível)
3. **SEO**: Atualize meta tags e descriptions
4. **Performance**: Monitore velocidade de carregamento
5. **Segurança**: Mantenha bibliotecas atualizadas

## 📊 Analytics

Para monitorar visitantes, adicione o Google Analytics:

```html
<!-- No head do index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🆘 Suporte

Para dúvidas ou problemas:

1. Verifique se todos os arquivos estão na estrutura correta
2. Teste em diferentes navegadores
3. Valide o HTML e CSS
4. Verifique o console do navegador para erros

## 📄 Licença

Este projeto é livre para uso pessoal e comercial. Sinta-se à vontade para modificar e adaptar conforme suas necessidades.

---

**Desenvolvido com ❤️ para showcasing de talentos profissionais**

🚀 **Dica**: Mantenha sempre seu portfólio atualizado com seus projetos mais recentes!
