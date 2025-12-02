import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6">
            <h1 className="text-6xl font-bold font-heading text-turquoise mb-4">404</h1>
            <h2 className="text-2xl font-bold text-white mb-6">Página Não Encontrada</h2>
            <p className="text-white/60 max-w-md mb-8">
                Desculpe, a página que você está procurando não existe ou foi movida para as profundezas do oceano.
            </p>
            <Link href="/">
                <Button>Voltar ao Início</Button>
            </Link>
        </div>
    );
}
