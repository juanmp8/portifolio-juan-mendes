"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ui/ProjectCard";

const projects = [
    {
        id: 1,
        title: "Dashboard Oceânico",
        description: "Visualização de dados em tempo real para pesquisa marinha, com mapas interativos e gráficos de profundidade.",
        tags: ["Next.js", "D3.js", "Tailwind"],
        link: "/projects/oceanic-dashboard",
    },
    {
        id: 2,
        title: "E-Commerce Deep Blue",
        description: "Uma plataforma de e-commerce de alta performance para equipamentos de mergulho sustentáveis, otimizada para conversão.",
        tags: ["React", "Shopify API", "Framer Motion"],
        link: "/projects/deep-blue-ecommerce",
    },
    {
        id: 3,
        title: "App Tidal Finance",
        description: "Aplicativo fintech com animações fluidas e processamento seguro de transações.",
        tags: ["TypeScript", "Node.js", "PostgreSQL"],
        link: "/projects/tidal-finance",
    },
    {
        id: 4,
        title: "Monitor de Recifes de Coral",
        description: "Dashboard IoT monitorando métricas de saúde dos corais com sistemas de alerta.",
        tags: ["Vue.js", "Firebase", "Chart.js"],
        link: "/projects/coral-reef-monitor",
    },
    {
        id: 5,
        title: "Navegação Náutica",
        description: "Sistema de navegação GPS para barcos de lazer com capacidades offline.",
        tags: ["React Native", "Maps API", "Redux"],
        link: "/projects/nautical-navigation",
    },
    {
        id: 6,
        title: "Landing Page Aqua Pure",
        description: "Landing page de marketing para uma startup de purificação de água, focada em storytelling.",
        tags: ["Next.js", "GSAP", "WebGL"],
        link: "/projects/aqua-pure",
    },
];

export default function Projects() {
    return (
        <div className="container mx-auto px-6 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
                    Projetos <span className="text-turquoise">Selecionados</span>
                </h1>
                <p className="text-lg text-white/60 mb-12 max-w-2xl">
                    Uma coleção de experiências digitais que fundem precisão técnica com fluidez estética.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            index={index}
                            {...project}
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
