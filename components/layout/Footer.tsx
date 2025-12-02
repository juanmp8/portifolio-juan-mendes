import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-deep-blue border-t border-white/10 py-12 mt-auto">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col items-center md:items-start">
                    <Link href="/" className="text-xl font-bold font-heading tracking-tighter text-white mb-2">
                        Pexon<span className="text-turquoise">Labs</span>
                    </Link>
                    <p className="text-white/60 text-sm">
                        Criando experiências digitais na interseção entre tecnologia e o mar.
                    </p>
                </div>

                <div className="flex items-center space-x-6">
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-turquoise transition-colors"
                        aria-label="GitHub"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-turquoise transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-turquoise transition-colors"
                        aria-label="Twitter"
                    >
                        <Twitter size={20} />
                    </a>
                    <a
                        href="mailto:contact@pexonlabs.com"
                        className="text-white/60 hover:text-turquoise transition-colors"
                        aria-label="Email"
                    >
                        <Mail size={20} />
                    </a>
                </div>

                <div className="text-white/40 text-xs">
                    &copy; {currentYear} Pexon Labs. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
}
