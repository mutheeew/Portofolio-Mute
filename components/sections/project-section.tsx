'use client'
import React, { useEffect, useState } from 'react';

import {
  FaReact,
  FaClipboardList,
  FaBootstrap,
  FaShieldAlt,
} from 'react-icons/fa';
import { 
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiReactrouter,
  SiAxios,
  SiRadixui,
  SiReactquery,
  SiReacttable,
} from "react-icons/si"

interface Position {
  left: number;
  top: number;
}

interface ProjectCardProps {
  title: string;
  icons: React.ReactNode[];
  description: string;
  position: Position;
  index: number;
  link?: string;
}

interface Project {
  title: string;
  icons: React.ReactNode[];
  description: string;
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, icons, description, position, index, link }) => {
  const [translateY, setTranslateY] = useState<number>(0);
  const [opacity, setOpacity] = useState<number>(0);
  const [scale, setScale] = useState<number>(0.8);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      const scrolled = window.scrollY;
      const speed = 0.2 + (index % 3) * 0.1;
      setTranslateY(-scrolled * speed);

      const cardTopPosition = position.top;
      const windowHeight = window.innerHeight;
      const scrollTrigger = cardTopPosition - windowHeight + 200;
      
      if (scrolled > scrollTrigger) {
        const progress = Math.min((scrolled - scrollTrigger) / 300, 1);
        setOpacity(progress);
        setScale(0.8 + progress * 0.2);
      } else {
        setOpacity(0);
        setScale(0.8);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [index, position.top]);

  return (
    <div
      className="absolute bg-white rounded-lg shadow-xl p-8 transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => link && window.open(link, '_blank')}
      style={{
        left: `${position.left}%`,
        top: `${position.top}px`,
        width: '340px',
        maxWidth: '90vw',
        transform: `translateY(${translateY}px) scale(${scale})`,
        opacity: opacity,
        zIndex: isHovered ? 9999 : index,
      }}
    >
      <div className="mb-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full mb-4"></div>
      </div>
      <h2 className="text-4xl font-bold mb-4 tracking-tight uppercase">
        {title}
      </h2>
      <div className="flex gap-2 mb-3 text-lg font-semibold text-gray-700">
        {icons.map((icon, i) => (
          <span key={i}>{icon}</span>
        ))}
      </div>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const ProjectSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'eRpay Dashboard',
      icons: [<FaReact key="1" />,<FaBootstrap key="2" />,<SiReactrouter key="3" />, <SiAxios key="4" />],
      description:
        'Develop a centralized web dashboard designed for eRpay merchants and internal users to manage transactions, merchant data, and payment operations, with role-based access and real-time data visibility across the payment ecosystem.',
    },
    {
      title: 'Ramah Indonesia Dashboard',
      icons: [<FaReact key="1" />],
      description:
        'A centralized e-commerce dashboard that serves as the source platform for managing UMKM products, orders, and merchant data, integrated with internal systems within the Ramah Indonesia ecosystem to support scalable and efficient operations.',
    },
    {
      title: 'Soundbox Dashboard',
      icons: [<SiNextdotjs key="1" />, <SiFramer key="2" />, <SiTailwindcss key="3" />, <SiTypescript key="4" />, <FaShieldAlt key="5" />],
      description:
        'A web-based management dashboard designed to configure and control soundbox devices, smart POS terminals, and payment devices. The dashboard enables remote settings for sound configuration, language preferences, advertising content, and device parameters, providing centralized control and efficient management across deployed payment terminals.',
    },
    {
      title: 'Service Hub Dashboard',
      icons: [<SiNextdotjs key="1" />, <SiTypescript key="2" />, <FaShieldAlt key="3" />],
      description:
        'An integration-focused dashboard that acts as a service hub, connecting FMS and TMS with multiple systems across the ecosystem through centralized control, data flow management, and real-time operational visibility.',
    },
    {
      title: 'Sales Dashboard',
      icons: [<SiNextdotjs key="1" />, <SiRadixui key="2" />, <SiReactquery key="3" />, <SiReacttable key="4" />, <SiTailwindcss key="5" />, <SiTypescript key="6" />, <FaShieldAlt key="7" />, "Orval"],
      description:
        'A web-based sales dashboard designed to support sales operations by managing sales data, tracking progress, and handling registration, approval, and data entry workflows. The dashboard provides clear visibility into sales activities and ensures structured, efficient, and traceable operational processes.',
    },
    {
      title: 'DNA - Company Profile',
      icons: [<FaClipboardList key="1" />],
      description:
        'A responsive informational website built to highlight company identity, product categories, mission & vision, and contact channels for stakeholders and potential partners in the chemical distribution sector.',
    },
    {
      title: 'Dumbflix',
      icons: [<FaReact key="1" />],
      description:
        'Inspired by Netflix is a subcription-based streaming service that offers a wide variety of TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
    },
    {
      title: 'Hallo Corona',
      icons: [<FaReact key="1" />],
      description:
        'A healthcare website that provides various healtcare servies to users in Indonesia, such as COVID-19 information, health tips, and online consultation with doctors.',
      link: "https://consultation-web.vercel.app/"
      },
    {
      title: 'Ways To Do App',
      icons: [<FaReact key="1" />],
      description:
        'Ways To Do is a task management application that helps users organize their daily activities, set reminders, and track their progress in completing tasks efficiently.',
    },
  ];

  const positions: Position[] = [
    { left: 5, top: 300 },
    { left: 60, top: 400 },
    { left: 30, top: 600 },
    { left: 40, top: 600 },
    { left: 20, top: 800 },
    { left: 70, top: 800 },
    { left: 35, top: 1000 },
    { left: 8, top: 1000 },
    { left: 75, top: 1200 },
  ];

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <section id="projects" className="pt-5 pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
            SELECTED PROJECTS
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our diverse portfolio of innovative projects and creative solutions
          </p>
        </div>
      </section>

      <section className="relative px-6" style={{ height: '900px' }}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            icons={project.icons}
            description={project.description}
            position={positions[index]}
            index={index}
            link={project.link}
          />
        ))}
      </section>

    </div>
  );
};

export default ProjectSection;