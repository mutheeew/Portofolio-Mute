'use client'
import React, { useEffect, useState } from 'react';

import {
  FaReact,
  FaLaptopCode,
  FaLaughBeam,
  FaFingerprint,
  FaChartLine,
  FaClipboardList,
  FaFlask,
  FaPenNib,
  FaBootstrap,
} from 'react-icons/fa';

import { SiAxios, SiReactrouter } from 'react-icons/si';

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
}

interface Project {
  title: string;
  icons: React.ReactNode[];
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, icons, description, position, index }) => {
  const [translateY, setTranslateY] = useState<number>(0);
  const [opacity, setOpacity] = useState<number>(0);
  const [scale, setScale] = useState<number>(0.8);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      const scrolled = window.scrollY;
      // Setiap card bergerak dengan kecepatan berbeda (negatif untuk naik ke atas)
      const speed = 0.2 + (index % 3) * 0.1;
      setTranslateY(-scrolled * speed);

      // Menghitung opacity dan scale berdasarkan posisi scroll
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

    handleScroll(); // Initial call
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [index, position.top]);

  return (
    <div
      className="absolute bg-white rounded-lg shadow-xl p-8 transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
      title: 'ASYSON',
      icons: [<FaLaptopCode key="1" />],
      description:
        'Creating innovative digital solutions for modern businesses and brands.',
    },
    {
      title: 'KETAKUMA',
      icons: [<FaLaughBeam key="1" />],
      description:
        'KETAKUMA, A BEAR WHO LIVES FOR MOVING AGGRESSIVELY, AND HIS FRIEND KETAWAN.',
    },
    {
      title: 'KTKM',
      icons: [<FaFingerprint key="1" />],
      description:
        'A UNIQUE APPROACH TO BRAND STORYTELLING THROUGH VISUAL DESIGN.',
    },
    {
      title: 'M-TRUST',
      icons: [<FaChartLine key="1" />],
      description:
        'BUILDING TRUST THROUGH TRANSPARENT AND RELIABLE FINANCIAL SOLUTIONS.',
    },
    {
      title: 'RED&GREEN',
      icons: [<FaClipboardList key="1" />],
      description:
        'RED AND GREEN CO.,LTD IS THE TOTAL COORDINATOR OF THE PRODUCT PLANNING, BRANDING, AND CIRCULATION TO SALES.',
    },
    {
      title: 'BASTA',
      icons: [<FaFlask key="1" />],
      description:
        'BASTA IS A PRODUCT OF BASF, AN INTERNATIONAL CHEMICAL MANUFACTURER HEADQUARTERED IN GERMANY.',
    },
    {
      title: 'CREATIVE',
      icons: [<FaPenNib key="1" />],
      description:
        'PUSHING BOUNDARIES IN CREATIVE DESIGN AND VISUAL COMMUNICATION.',
    },
  ];

  // Posisi yang tidak beraturan untuk setiap card
  const positions: Position[] = [
    { left: 8, top: 400 },
    { left: 70, top: 400 },
    { left: 35, top: 500 },
    { left: 65, top: 490 },
    { left: 10, top: 600 },
    { left: 38, top: 650 },
    { left: 20, top: 730 },
    { left: 50, top: 810 },
  ];

  return (
    <div className="min-h-screen bg-background scroll-smooth">

      {/* Hero Section */}
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

      {/* Projects Section with Scroll Effect */}
      <section className="relative px-6" style={{ height: '600px' }}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            icons={project.icons}
            description={project.description}
            position={positions[index]}
            index={index}
          />
        ))}
      </section>

    </div>
  );
};

export default ProjectSection;