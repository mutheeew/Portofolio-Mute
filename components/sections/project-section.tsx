'use client'
import React, { useEffect, useState } from 'react';

import {
  FaReact,
  FaClipboardList,
  FaBootstrap,
  FaShieldAlt,
  FaExternalLinkAlt,
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
  SiSupabase,
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
  scrollY: number;
}

interface Project {
  title: string;
  icons: React.ReactNode[];
  description: string;
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, icons, description, position, index, link, scrollY }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const cardRef = React.useRef<HTMLDivElement>(null);

  const speed = 0.2 + (index % 3) * 0.1;
  const translateY = -scrollY * speed;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="hidden md:block absolute bg-white rounded-lg shadow-xl p-8 hover:scale-105 hover:shadow-2xl cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => link && window.open(link, '_blank')}
      style={{
        left: `${position.left}%`,
        top: `${position.top}px`,
        width: '340px',
        maxWidth: '90vw',
        transform: `translate3d(0, ${translateY}px, 0) scale(${isVisible ? '1' : '0.8'})`,
        opacity: isVisible ? 1 : 0,
        transition: isVisible ? 'opacity 0.7s ease-out' : 'none',
        zIndex: isHovered ? 9999 : index,
        cursor: link ? 'pointer' : 'default',
        willChange: 'transform, opacity',
      }}
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
        {link && (
          <span className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 rounded-full px-3 py-1">
            <FaExternalLinkAlt className="text-[10px]" />
            Live Site
          </span>
        )}
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
}

const ProjectCardMobile: React.FC<{title: string; icons: React.ReactNode[]; description: string; link?: string}> = ({ title, icons, description, link }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  return (
    <div
      className="md:hidden bg-white rounded-lg shadow-lg p-6 transition-all hover:shadow-xl w-full"
      style={{ cursor: link ? 'pointer' : 'default' }}
      onClick={() => link && window.open(link, '_blank')}
    >
      <div className="flex mb-4 gap-4 items-start">
        <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0"></div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className="text-xl font-bold tracking-tight uppercase">
              {title.length > 15 ? title.slice(0, 17) + "..." : title}
            </h2>
            {link && (
              <span className="flex items-center gap-1 text-[10px] font-semibold text-blue-600 bg-blue-50 border border-blue-200 rounded-full px-2 py-0.5 whitespace-nowrap">
                <FaExternalLinkAlt className="text-[8px]" />
                Live
              </span>
            )}
          </div>
          <div className="flex gap-2 text-sm font-semibold text-gray-700 mt-1">
            {icons.map((icon, i) => (
              <span key={i}>{icon}</span>
            ))}
          </div>
        </div>
      </div>
      <p 
        className="text-sm text-gray-600 leading-relaxed"
        onClick={(e) => { e.stopPropagation(); setIsExpanded(!isExpanded); }}
      >
        {isExpanded 
          ? description 
          : (description.length > 80 
              ? <>{description.slice(0, 80)}<span className="text-blue-500 font-medium"> ...</span></> 
              : description
            )
        }
      </p>
    </div>
  );
}

const ProjectSection: React.FC = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      setScrollY(window.scrollY);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const projects: Project[] = [
    {
      title: 'Sales Dashboard',
      icons: [<SiNextdotjs key="1" />, <SiRadixui key="2" />, <SiReactquery key="3" />, <SiReacttable key="4" />, <SiTailwindcss key="5" />, <SiTypescript key="6" />, <FaShieldAlt key="7" />, "Orval"],
      description:
        'A web-based sales dashboard designed to support sales operations by managing sales data, tracking progress, and handling registration, approval, and data entry workflows. The dashboard provides clear visibility into sales activities and ensures structured, efficient, and traceable operational processes.',
    },
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
      title: 'Nikah Check',
      icons: [<SiNextdotjs key="1" />, <SiTypescript key="2" />, <SiSupabase key="3" />,],
      description:
        'is a pre-marriage compatibility questionnaire platform. Create a custom set of questions that matter to you, share the link with your potential partner, and get a detailed compatibility report — including which answers are deal-breakers and which are open for discussion.',
      link: "https://nikahcheck.web.id/"
    },
    {
      title: 'DNA - Company Profile',
      icons: [<FaClipboardList key="1" />],
      description:
        'A responsive informational website built to highlight company identity, product categories, mission & vision, and contact channels for stakeholders and potential partners in the chemical distribution sector.',
      link: "https://www.diannaturaagrifarma.com"
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
    { left: 30, top: 500 },
    { left: 55, top: 700 },
    { left: 75, top: 300 },
    { left: 5, top: 900 },
    { left: 25, top: 900 },
    { left: 70, top: 800 },
    { left: 35, top: 1000 },
    { left: 60, top: 1000 },
    { left: 12, top: 900 },
  ];

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <section id="projects" className="pt-5 pb-20 px-6" style={{ scrollMarginTop: '64px' }}>
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
            SELECTED PROJECTS
          </h2>
          <p className="text-lg sm:ext-xl text-gray-600 max-w-2xl mx-auto">
            Explore our diverse portfolio of innovative projects and creative solutions
          </p>
        </div>
      </section>

      {/* Desktop version with absolute positioning */}
      <section className="hidden md:block relative px-6" style={{ height: '900px' }}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            icons={project.icons}
            description={project.description}
            position={positions[index]}
            index={index}
            link={project.link}
            scrollY={scrollY}
          />
        ))}
      </section>

      {/* Mobile version with normal flow */}
      <section className="md:hidden px-6 pb-20">
        <div className="space-y-4">
          {projects.map((project, index) => (
            <ProjectCardMobile
              key={index}
              title={project.title}
              icons={project.icons}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </section>

    </div>
  );
};

export default ProjectSection;