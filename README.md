# 🚀 Portfólio - Desenvolvedor Unity & AR Mobile

Um portfólio profissional e responsivo para desenvolvedores Unity especializados em aplicativos mobile com realidade aumentada.

## ✨ Características

- **Design Moderno**: Interface limpa e profissional
- **Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Animações Suaves**: Transições e efeitos visuais elegantes
- **Performance Otimizada**: Código limpo e eficiente
- **Foco em AR/Unity**: Seções específicas para aplicativos de realidade aumentada
- **Sem Dependências Externas**: Apenas HTML, CSS e JavaScript puro

## 🎯 Seções do Site

### 1. **Header & Navegação**
- Logo e menu de navegação
- Menu mobile responsivo
- Efeito de scroll no header

### 2. **Hero Section**
- Título principal e subtítulo
- Estatísticas animadas (anos de experiência, apps publicados, plataformas)
- Botões de call-to-action
- Visual do smartphone com animação AR

### 3. **Sobre Mim**
- Descrição profissional
- Destaques das habilidades
- Card de perfil com avatar

### 4. **Aplicativos**
- Grid responsivo de aplicativos
- Cards com informações detalhadas
- Modal com detalhes completos
- Tags e estatísticas de cada app

### 5. **Habilidades & Tecnologias**
- Categorias organizadas (Desenvolvimento, AR, Ferramentas)
- Grid de habilidades com ícones
- Efeitos hover interativos

### 6. **Contato**
- Informações de contato
- Formulário funcional
- Links para redes sociais

### 7. **Footer**
- Informações de copyright
- Links para redes sociais

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilos modernos com Flexbox e Grid
- **JavaScript ES6+**: Funcionalidades interativas
- **Font Awesome**: Ícones profissionais
- **Google Fonts**: Tipografia Inter para melhor legibilidade

## 📁 Estrutura do Projeto

```
Portifolio/
├── index.html          # Página principal
├── css/
│   ├── main.css        # Estilos principais
│   └── animations.css  # Animações e transições
├── js/
│   └── main.js         # Funcionalidades JavaScript
├── images/
│   └── placeholder.svg # Imagem placeholder para apps
├── assets/             # Recursos adicionais
├── test.html           # Página de teste
└── README.md           # Documentação
```

## 🎨 Animações Implementadas

### **Animações de Entrada**
- Fade-in com slide up para seções
- Animações em sequência para cards de apps
- Contadores animados para estatísticas

### **Efeitos Hover**
- Elevação de cards com sombras
- Transformações suaves em botões
- Efeitos de escala em elementos interativos

### **Animações de Scroll**
- Elementos aparecem conforme a tela é rolada
- Transições suaves entre seções
- Header com efeito de scroll

### **Animações Especiais**
- Smartphone flutuante no hero
- Elementos AR com efeitos de pulso
- Transições suaves no menu mobile

## 📱 Responsividade

- **Desktop**: Layout em grid com múltiplas colunas
- **Tablet**: Adaptação para telas médias
- **Mobile**: Layout em coluna única com menu hambúrguer
- **Breakpoints**: 768px e 480px para diferentes dispositivos

## 🚀 Como Usar

### **1. Personalização**
- Edite `index.html` para alterar textos e informações
- Modifique `css/main.css` para personalizar cores e estilos
- Ajuste `js/main.js` para modificar funcionalidades

### **2. Adicionar Aplicativos**
Edite a função `renderApps()` em `js/main.js`:

```javascript
const apps = [
    {
        id: 1,
        name: "Nome do App",
        description: "Descrição do aplicativo",
        tags: ["Unity", "AR Foundation", "Mobile"],
        playstore: "link-google-play",
        appstore: "link-app-store",
        downloads: "100K+",
        rating: 4.5,
        year: 2024
    }
    // Adicione mais apps aqui
];
```

### **3. Executar Localmente**
1. Clone ou baixe o projeto
2. Abra `index.html` em um navegador
3. Ou use um servidor local:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js
   npx serve .
   ```

## 🔧 Funcionalidades JavaScript

### **Navegação**
- Scroll suave para seções
- Menu mobile responsivo
- Header com efeito de scroll

### **Aplicativos**
- Renderização dinâmica de cards
- Modal com detalhes completos
- Animações de entrada sequenciais

### **Formulário**
- Validação de campos
- Simulação de envio
- Notificações de sucesso

### **Animações**
- Intersection Observer para animações de scroll
- Contadores animados
- Efeitos hover interativos

## 🎯 Aplicativos Incluídos

1. **AR Shopping Experience** - Visualização de produtos em AR
2. **Virtual Interior Designer** - Design de interiores em AR
3. **AR Educational Games** - Jogos educativos com AR
4. **AR Fitness Trainer** - Personal trainer virtual em AR
5. **AR Navigation Pro** - Navegação avançada com AR
6. **Virtual Try-On Beauty** - Teste de maquiagem em AR

## 🌟 Destaques

- **Código Limpo**: Estrutura organizada e bem comentada
- **Performance**: Animações otimizadas e responsivas
- **Acessibilidade**: HTML semântico e navegação por teclado
- **Cross-browser**: Compatível com navegadores modernos
- **SEO-friendly**: Meta tags e estrutura otimizada

## 📊 Estatísticas dos Apps

- **Total de Apps**: 6 aplicativos
- **Downloads**: 600K+ downloads combinados
- **Avaliação Média**: 4.5/5 estrelas
- **Plataformas**: Android (Google Play) e iOS (App Store)
- **Tecnologias**: Unity, AR Foundation, ARCore, ARKit

## 🔮 Próximas Atualizações

- [ ] Sistema de filtros por categoria
- [ ] Galeria de screenshots dos apps
- [ ] Integração com APIs das lojas
- [ ] Sistema de blog/artigos técnicos
- [ ] Dark mode
- [ ] PWA (Progressive Web App)

## 📝 Licença

Este projeto é de uso livre para fins educacionais e comerciais.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir melhorias
- Enviar pull requests
- Compartilhar feedback

---

**Desenvolvido com ❤️ para a comunidade de desenvolvedores Unity e AR** 