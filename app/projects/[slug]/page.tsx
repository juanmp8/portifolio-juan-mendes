"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ProjectDetails() {
    const params = useParams();
    const slug = params.slug as string;

    // In a real app, fetch project data based on slug
    const projectTitle = slug ? slug.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase()) : "Detalhes do Projeto";

    return (
        <div className="container mx-auto px-6 py-20">
            <Link href="/projects" className="inline-flex items-center text-white/60 hover:text-turquoise mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar para Projetos
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading">
                        {projectTitle}
                    </h1>

                    <div className="flex flex-wrap gap-3">
                        <span className="px-3 py-1 rounded-full bg-turquoise/10 text-turquoise text-sm font-medium">Next.js</span>
                        <span className="px-3 py-1 rounded-full bg-turquoise/10 text-turquoise text-sm font-medium">Tailwind CSS</span>
                        <span className="px-3 py-1 rounded-full bg-turquoise/10 text-turquoise text-sm font-medium">TypeScript</span>
                    </div>

                    <p className="text-lg text-white/80 leading-relaxed">
                        Esta é uma descrição detalhada do projeto. Ela explica o problema resolvido, os desafios técnicos superados e o impacto da solução.
                        A filosofia de design segue o conceito "Tecnologia + Mar", garantindo uma experiência de usuário fluida.
                    </p>

                    <div className="flex gap-4">
                        <Button>
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo ao Vivo
                        </Button>
                        <Button variant="outline">
                            <Github className="w-4 h-4 mr-2" />
                            Ver Código
                        </Button>
                    </div>
                </div>

                <div className="aspect-video bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center">
                    <span className="text-white/20 font-bold text-2xl">Screenshot / Vídeo do Projeto</span>
                </div>
            </div>
        </div>
    );
}
