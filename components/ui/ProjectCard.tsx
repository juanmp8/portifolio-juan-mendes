import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { clsx } from "clsx";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    link: string;
    index: number;
}

export function ProjectCard({ title, description, tags, link, index }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:bg-white/10 transition-colors"
        >
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 w-full relative overflow-hidden">
                {/* Placeholder for project image */}
                <div className="absolute inset-0 bg-deep-blue/50 group-hover:bg-deep-blue/30 transition-colors" />
                <div className="absolute top-4 right-4 p-2 bg-black/50 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="text-white w-5 h-5" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center text-white/20 font-bold text-4xl select-none">
                    PROJETO
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold font-heading mb-2 text-white group-hover:text-turquoise transition-colors">
                    {title}
                </h3>
                <p className="text-white/60 text-sm mb-4 line-clamp-2">
                    {description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-xs font-medium px-2 py-1 rounded-md bg-turquoise/10 text-turquoise"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <Link href={link} className="absolute inset-0 z-10">
                <span className="sr-only">Ver projeto {title}</span>
            </Link>
        </motion.div>
    );
}
