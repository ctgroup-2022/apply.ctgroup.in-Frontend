import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Users,
  Trophy,
  Globe,
  Microscope,
} from "lucide-react";

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
          transform: `rotateY(${mousePosition.x * 20}deg) rotateX(${
            -mousePosition.y * 20
          }deg) translateZ(20px)`,
        }}
      >
        <div className="absolute inset-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform scale-110 group-hover:scale-125 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        </div>
        <div className="relative h-full p-6 flex flex-col items-center justify-center text-white">
          <div
            className={`p-4 rounded-full mb-4 transform-gpu transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}
            style={{ backgroundColor: `${color}40` }}
          >
            <Icon
              size={32}
              className="transform group-hover:rotate-12 transition-transform duration-300"
            />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-center">{title}</h3>
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
      color: "#3B82F6",
      image:
        "https://www.ctgroup.in/public//frontend/assets/images/institution/top-nav-image-min.jpg",
    },
    {
      icon: BookOpen,
      title: "Research Opportunities",
      description: "Cutting-edge research facilities and programs",
      color: "#10B981",
      image:
        "https://apply.ctgroup.in/assets/imgs/college/CT%20Institute%20of%20Technology%20&%20Research.jpg",
    },
    {
      icon: Users,
      title: "Student Life",
      description: "Vibrant campus community and activities",
      color: "#6366F1",
      image:
        "https://maqsudan.ctgroup.in/storage/app/public/Campus/CT-Campus-1679914827.jpg",
    },
    {
      icon: Trophy,
      title: "Athletics",
      description: "Championship-winning sports programs",
      color: "#EC4899",
      image:
        "https://www.ctuniversity.in/storage/Campus/mobile/CT-Campus-1687337739.jpg",
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "International programs and diverse community",
      color: "#F59E0B",
      image:
        "https://maqsudan.ctgroup.in/storage/app/public/Event/mobile/CT-Event-1681197885.jpg",
    },
    {
      icon: Microscope,
      title: "Innovation Hub",
      description: "State-of-the-art labs and technology centers",
      color: "#8B5CF6",
      image:
        "https://shahpur.ctgroup.in/storage/app/public/Infrastructure/CT-Infrastructure-1684904532.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl text-white font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            The Best of Our Offerings
          </h1>
          <p className="text-xl text-gray-300">
            Experience world-class education and opportunities
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="transform transition-all duration-500 hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
