"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code, Globe, Server, Cpu } from "lucide-react";

export default function About() {
    return (
        <div className="container mx-auto px-6 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
            >
                <h1 className="text-4xl md:text-5xl font-bold font-heading mb-8">
                    Sobre a <span className="text-turquoise">Pexon Labs</span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <p className="text-lg text-white/80 mb-6 leading-relaxed">
                            Olá! Eu sou <strong className="text-white">Juan Mendes Peixoto</strong>, a mente criativa por trás da Pexon Labs.
                            Sou um Desenvolvedor Full Stack apaixonado com um profundo amor pelo oceano.
                            Minha missão é trazer a fluidez, profundidade e poder do mar para o mundo digital.
                        </p>
                        <p className="text-lg text-white/80 leading-relaxed">
                            Na Pexon Labs, nós não apenas construímos sites; criamos experiências digitais imersivas.
                            Acreditamos que a tecnologia deve ser tão natural e poderosa quanto as marés.
                            Seja uma aplicação web complexa ou um portfólio deslumbrante, navegamos pelas complexidades do código para entregar resultados perfeitos.
                        </p>
                    </div>
                    <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-white/5">
                        <Image
                            src="/images/foto-peixoto.png"
                            alt="Juan Mendes Peixoto - Fundador & Desenvolvedor Líder"
                            fill
                            className="object-contain md:object-cover object-top"
                            priority
                        />
                    </div>
                </div>

                <h2 className="text-3xl font-bold font-heading mb-8">Nossa Expertise</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                        <Globe className="text-turquoise mb-4 w-8 h-8" />
                        <h3 className="text-xl font-bold mb-2">Desenvolvimento Web</h3>
                        <p className="text-white/60">Construindo sites responsivos, acessíveis e performáticos usando frameworks modernos.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                        <Server className="text-turquoise mb-4 w-8 h-8" />
                        <h3 className="text-xl font-bold mb-2">Sistemas Backend</h3>
                        <p className="text-white/60">Soluções robustas do lado do servidor, integrações de API e gerenciamento de banco de dados.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                        <Code className="text-turquoise mb-4 w-8 h-8" />
                        <h3 className="text-xl font-bold mb-2">Design UI/UX</h3>
                        <p className="text-white/60">Criando interfaces intuitivas e visualmente deslumbrantes que engajam os usuários.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                        <Cpu className="text-turquoise mb-4 w-8 h-8" />
                        <h3 className="text-xl font-bold mb-2">Estratégia Técnica</h3>
                        <p className="text-white/60">Consultoria sobre a melhor stack tecnológica e arquitetura para suas necessidades específicas.</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
