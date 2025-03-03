import React, { useState, useEffect } from 'react';
import { X, GraduationCap, Users, Palette, FlaskConical } from 'lucide-react';

// Import hero images
import hero1 from '../assets/Images/CampusLife/hero1.jpg';
import hero2 from '../assets/Images/CampusLife/hero2.jpg';
import hero3 from '../assets/Images/audi.jpg';

// Import grid images
import computerLab from '../assets/Images/CampusLife/gym.jpg';
import civilEngineering from '../assets/Images/CampusLife/canteen.jpg';
import culturalStudies from '../assets/Images/CampusLife/sports.jpg';
import chemistryLab from "../assets/Images/CampusLife/audi.jpg";
import researchFacilities from '../assets/Images/CampusLife/cult.jpg';
import engineeringWorkshop from '../assets/Images/CampusLife/work.jpg';

// Image data
const heroImages = [hero1, hero2, hero3];

const features = [
  { icon: GraduationCap, title: 'Academic Excellence', description: 'Pursuing the highest standards in education' },
  { icon: Users, title: 'Vibrant Community', description: 'Building lasting connections and friendships' },
  { icon: Palette, title: 'Cultural Activities', description: 'Celebrating diversity and creativity' },
  { icon: FlaskConical, title: 'Research Opportunities', description: 'Advancing knowledge through innovation' },
];

const gridImages = [
  {
    id: 1,
    url: computerLab,
    title: 'GYM & Fitness',
    description: 'Modern fitness center equipped with state-of-the-art equipment for physical wellness, including cardio machines, weight training area, and dedicated workout spaces.',
    size: 'large',
  },
  {
    id: 2,
    url: civilEngineering,
    title: 'Canteen',
    description: 'Spacious and hygienic cafeteria serving fresh, nutritious meals with diverse menu options, comfortable seating, and a welcoming atmosphere for students and staff.',
    size: 'small',
  },
  {
    id: 3,
    url: culturalStudies,
    title: 'Sports',
    description: 'Comprehensive sports facilities including indoor and outdoor courts, playing fields, and training areas for various sports activities and competitions.',
    size: 'small',
  },
  {
    id: 4,
    url: chemistryLab,
    title: 'Auditorium',
    description: 'State-of-the-art auditorium with excellent acoustics, modern audio-visual systems, and comfortable seating for events, performances, and large gatherings.',
    size: 'large',
  },
  {
    id: 5,
    url: researchFacilities,
    title: 'Cultural Fest',
    description: 'Annual cultural festival showcasing student talents through performances, exhibitions, and celebrations, fostering creativity and cultural exchange.',
    size: 'small',
  },
  {
    id: 6,
    url: engineeringWorkshop,
    title: 'Workshop',
    description: 'Well-equipped workshop facility with modern tools and machinery for hands-on technical training and practical project development.',
    size: 'small',
  },
];

function CampusLife() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      {/* Hero Section with Parallax */}
      <div className="relative h-[100svh] overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
          </div>
        ))}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 px-2">
              Experience College Life
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 px-4">
              Discover the perfect blend of academics, culture, and community
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 -mt-16 sm:-mt-20 container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300"
            >
              <feature.icon className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 text-yellow-400" />
              <h2 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h2>
              <p className="text-sm sm:text-base text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Image Grid */}
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-16">
          Explore Our Facilities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {gridImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className={`group cursor-pointer transform hover:-translate-y-2 transition-all duration-500 ${
                image.size === 'large' ? 'sm:col-span-2 sm:row-span-2' : ''
              }`}
            >
              <div className="relative h-full overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <img
                  src={image.url}
                  alt={image.title}
                  className={`w-full object-cover transform group-hover:scale-110 transition-transform duration-700 ${
                    image.size === 'large' 
                      ? 'h-[300px] sm:h-[400px] lg:h-[500px]' 
                      : 'h-[200px] sm:h-[240px]'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className={`text-white font-bold mb-2 drop-shadow-lg ${
                    image.size === 'large' ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl'
                  }`}>{image.title}</h3>
                  <p className="text-sm sm:text-base text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {image.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal/Popup */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-2 sm:p-4">
          <div className="relative w-full max-w-5xl bg-gray-900 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white/70 hover:text-white z-10 bg-black/20 backdrop-blur-sm rounded-full p-1.5 sm:p-2 transition-all duration-300"
            >
              <X size={20} className="sm:w-6 sm:h-6" />
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
            />
            <div className="p-4 sm:p-8 bg-gradient-to-t from-gray-900 to-gray-900/80 backdrop-blur-sm">
              <h3 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4 text-white">{selectedImage.title}</h3>
              <p className="text-sm sm:text-lg text-gray-300 leading-relaxed">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CampusLife;