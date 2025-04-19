// components/WorkCard.tsx
import Image from "next/image";
import { Project } from "@/types/App";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const WorkCard = ({ project, index }: { project: Project, index: number }) => {
    return (
        <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
        >
            {/* Image Section */}
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-110 transition-transform duration-500"
                    priority
                />
               
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white text-xl font-bold">{project.title}</h3>
                </div>
                <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                        <span
                            key={idx}
                            className="bg-blue-50 text-blue-600 text-sm px-3 py-1 rounded-full font-medium"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

            </div>
        </motion.div>
    );
};

export default WorkCard;
