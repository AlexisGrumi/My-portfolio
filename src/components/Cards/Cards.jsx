// src/components/Cards.jsx
import { ArrowRight, RefreshCcw } from 'lucide-react';

export default function Cards({ projects }) {
  return (
    <div className="flex flex-wrap gap-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-transparent text-white border border-gray-700 w-[320px] font-mono"
        >
          {/* Imagen del proyecto */}
          <div className="border border-gray-500 overflow-hidden">
            <img
              src={project.imageSrc}
              alt={project.imageAlt}
              className="w-full h-full"
            />
          </div>

          {/* Tecnologías */}
          <div className="border-t border-gray-600 p-2 text-sm text-gray-400 flex gap-2 flex-wrap">
            {project.technologies.map((tech, i) => (
              <span key={i}>{tech}</span>
            ))}
          </div>

          {/* Título y descripción */}
          <div className="border-t border-gray-600 p-3">
            <h2 className="text-lg font-bold text-white">{project.title}</h2>
            <p className="text-gray-400 text-sm">{project.description}</p>

            {/* Botones */}
            <div className="mt-4 flex gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex hover:bg-[rgba(199,120,221,0.2)] items-center gap-2 border border-purple-400 text-white px-4 py-1 text-sm rounded transition"
              >
                Live <RefreshCcw className="w-4 h-4" />
              </a>
              <a
                href={project.cachedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-gray-500 text-white px-4 py-1 text-sm rounded hover:bg-gray-600 transition"
              >
                Cached <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
