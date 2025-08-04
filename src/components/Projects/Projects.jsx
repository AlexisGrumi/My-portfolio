import React from 'react';
import Cards from '../Cards/Cards';
import AnnysPrinting from '../../assets/AnnysPrinting.png'
import CAMGSolucionesLanding from '../../assets/CAMGSolucionesLanding.png'
import CAMGSolucionesMiddleware from '../../assets/CAMGSolucionesMiddleware.png'
import AcademiaCedolinLanding from '../../assets/AcademiaCedolinLanding.png'
function Projects() {
  const projects = [
    {
      imageSrc: CAMGSolucionesMiddleware,
      imageAlt: "Middleware",
      technologies: ['NextJs', 'NodeJS', 'Tailwind', 'Firestore'],
      title: "Middleware CAMGSoluciones",
      description: "CAMGSoluciones es un middleware que centraliza la gestión de presupuestos, clientes y personal para optimizar servicios integrales en proyectos.",
      liveUrl: "",
      cachedUrl: ""
    },
    {
      imageSrc: CAMGSolucionesLanding,
      imageAlt: "Landing CAMGSoluciones",
      technologies: ['NextJs', 'NodeJs', 'Tailwind'],
      title: "CAMGSoluciones Landing Page",
      description: "Landing page de CAMGSoluciones que presenta y promociona servicios integrales, destacando eficiencia, gestión centralizada y atención profesional.",
      liveUrl: "https://camgsoluciones-landing.web.app",
      cachedUrl: "https://camgsoluciones-landing.web.app"
    },
    {
      imageSrc: AnnysPrinting,
      imageAlt: "Landing Anny´s Imprenta",
      technologies: ['NextJs', 'NodeJs', 'Tailwind'],
      title: "Anny´s Printing Landing Page",
      description: "Anny’s Printing es una imprenta digital especializada en agendas, invitaciones y productos personalizados 100% digitales.",
      liveUrl: "https://annys-printing.web.app",
      cachedUrl: "https://annys-printing.web.app"
    },
    {
      imageSrc: AcademiaCedolinLanding,
      imageAlt: "Landing Academia Cedolin",
      technologies: ['NextJs', 'NodeJs', 'Tailwind'],
      title: "Academia Cedolin Landing Page",
      description: "Academia Cedolin es una academia especializada en clases particulares de italiano, adaptadas a todos los niveles y objetivos.",
      liveUrl: "https://academia-cedolin.web.app/Home",
      cachedUrl: "https://academia-cedolin.web.app/Home"
    },
  ];

  return (
    <div className='w-full flex flex-col gap-y-4 gap-x-2 justify-center gap-y-12'>
      <div className='flex flex-row items-center gap-x-4 justify-between w-full'>
        <div className='flex flex-row items-center gap-x-4 w-full'>
          <h1 className='text-3xl'><span className='text-[#C778DD]'>#</span>projects</h1>
          <div className="w-3/5 border-t border-primary my-4" />
        </div>
        <div className='w-fit text-nowrap'>
          ViewAll {"->"}
        </div>
      </div>

      <Cards projects={projects} />
    </div>
  );
}

export default Projects;
