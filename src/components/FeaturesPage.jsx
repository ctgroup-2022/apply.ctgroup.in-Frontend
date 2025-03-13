import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Users, Trophy, Globe, Microscope } from 'lucide-react';

function GridItem({ icon, title, description, color, image }) {
  const Icon = icon;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  return (
    <div
      className="group relative h-80 perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
    >
      <div
        className="absolute inset-0 rounded-xl shadow-lg transform-gpu transition-transform duration-200 overflow-hidden"
        style={{
          transform: `rotateY(${mousePosition.x * 20}deg) rotateX(${-mousePosition.y * 20}deg) translateZ(20px)`,
        }}
      >
        <div className="absolute inset-0">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transform scale-110 group-hover:scale-125 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        </div>
        <div className="relative h-full p-6 flex flex-col items-center justify-center text-white">
          <div
            className={`p-4 rounded-full mb-4 transform-gpu transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}
            style={{ backgroundColor: `${color}40` }}
          >
            <Icon size={32} className="transform group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <h2 className="text-2xl font-bold mb-2 text-center">{title}</h2>
          <p className="text-gray-200 text-center">{description}</p>
          <div
            className="absolute bottom-0 left-0 right-0 h-1 rounded-b-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
            style={{ backgroundColor: color }}
          />
        </div>
      </div>
    </div>
  );
}

function FeaturePage() {
  const items = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "World-class education with distinguished faculty",
      color: "text_color",
      image:
        "https://res.cloudinary.com/dhkemgng9/image/upload/v1741849494/Academic_Excellence_wmyvv9.webp",
    },
    {
      icon: BookOpen,
      title: "Research Opportunities",
      description: "Cutting-edge research facilities and programs",
      color: "text_color",
      image:
        "https://res.cloudinary.com/dhkemgng9/image/upload/v1741849516/Research_f86oxs.webp",
    },
    {
      icon: Users,
      title: "Student Life",
      description: "Vibrant campus community and activities",
      color: "text_color",
      image:
        "https://res.cloudinary.com/dhkemgng9/image/upload/v1741849500/Student_Life_fb0qcm.webp",
    },
    {
      icon: Trophy,
      title: "Athletics",
      description: "Championship-winning sports programs",
      color: "text_color",
      image:
        "https://res.cloudinary.com/dhkemgng9/image/upload/v1741243028/ctcampus_xdpyad.jpg",
    },
    {
      icon: Globe,
      title: "Library",
      description: "Extensive library resources and services",
      color: "text_color",
      image:
        "https://res.cloudinary.com/dhkemgng9/image/upload/v1741849517/Library_kz4npg.webp",
    },
    {
      icon: Microscope,
      title: "Innovation Hub",
      description: "State-of-the-art labs and technology centers",
      color: "text_color",
      image:
        "https://res.cloudinary.com/dhkemgng9/image/upload/t_Banner 16:9/v1741849494/Inovation_Hub_fbmnmv.webp",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl text-text_color font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-text_color to-text_color">
            The Best of Our Offerings
          </h1>
          <p className="text-xl text-text_color">Experience world-class education and opportunities</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="transform transition-all duration-500 hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
            >
              <GridItem {...item} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturePage;