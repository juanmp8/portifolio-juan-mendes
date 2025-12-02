"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Contact() {
    return (
        <div className="container mx-auto px-6 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            >
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                        Vamos <span className="text-turquoise">Conectar</span>
                    </h1>
                    <p className="text-lg text-white/60 mb-12 max-w-lg">
                        Interessado em trabalhar juntos? Tem alguma pergunta?
                        Preencha o formulário ou entre em contato através das redes sociais.
                        Estou sempre aberto a discutir novos projetos e ideias.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-lg bg-white/5 text-turquoise">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white">Email</h3>
                                <p className="text-white/60">contact@pexonlabs.com</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-lg bg-white/5 text-turquoise">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white">Localização</h3>
                                <p className="text-white/60">Remoto / Global</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-lg bg-white/5 text-turquoise">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white">Telefone</h3>
                                <p className="text-white/60">+1 (555) 123-4567</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-white/80">Nome</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 rounded-lg bg-deep-blue border border-white/10 text-white focus:outline-none focus:border-turquoise focus:ring-1 focus:ring-turquoise transition-colors"
                                    placeholder="João Silva"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-white/80">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-lg bg-deep-blue border border-white/10 text-white focus:outline-none focus:border-turquoise focus:ring-1 focus:ring-turquoise transition-colors"
                                    placeholder="joao@exemplo.com"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium text-white/80">Assunto</label>
                            <input
                                type="text"
                                id="subject"
                                className="w-full px-4 py-3 rounded-lg bg-deep-blue border border-white/10 text-white focus:outline-none focus:border-turquoise focus:ring-1 focus:ring-turquoise transition-colors"
                                placeholder="Consulta de Projeto"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-white/80">Mensagem</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full px-4 py-3 rounded-lg bg-deep-blue border border-white/10 text-white focus:outline-none focus:border-turquoise focus:ring-1 focus:ring-turquoise transition-colors resize-none"
                                placeholder="Conte-me sobre seu projeto..."
                            />
                        </div>
                        <Button type="submit" className="w-full">
                            Enviar Mensagem
                        </Button>
                    </form>
                </div>
            </motion.div>
        </div>
    );
}
