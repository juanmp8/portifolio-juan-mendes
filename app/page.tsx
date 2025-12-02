"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code, Layers, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-turquoise/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-turquoise text-sm font-medium mb-6 backdrop-blur-sm">
            Disponível para Projetos Freelance
          </span>
          <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tight mb-6 leading-tight">
            Criando Experiências <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-turquoise to-blue-500">
              Digitais
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Eu construo experiências web acessíveis, pixel-perfect, performáticas e responsivas que fundem tecnologia com a fluidez do mar.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/projects">
              <Button size="lg" className="group">
                Ver Projetos
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="secondary" size="lg">
                Entre em Contato
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Features / Tech Stack Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-left"
        >
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-turquoise/20 flex items-center justify-center text-turquoise mb-4">
              <Code size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Código Limpo</h3>
            <p className="text-white/60">
              Arquiteturas de código manuteníveis, escaláveis e eficientes usando as melhores práticas modernas.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-turquoise/20 flex items-center justify-center text-turquoise mb-4">
              <Layers size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Stack Moderna</h3>
            <p className="text-white/60">
              Construído com Next.js, Tailwind CSS e TypeScript para performance robusta.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-turquoise/20 flex items-center justify-center text-turquoise mb-4">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Rápido & Fluido</h3>
            <p className="text-white/60">
              Otimizado para velocidade com animações suaves impulsionadas pelo Framer Motion.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
