import React from 'react';

const Awards = [
  { 
    id: 1, 
    // name: "Wipro", 
    image: "https://res.cloudinary.com/dhkemgng9/image/upload/v1742626224/SSS_2022_-_CTIPS-min_menkqe.jpg",
    // gradient: "from-blue-600 to-cyan-500" 
  },
  { 
    id: 2, 
    // name: "Accenture", 
    image: "https://res.cloudinary.com/dhkemgng9/image/upload/v1742626225/R_World_-_CTIEMT-min_ewiwnw.jpg",
    // gradient: "from-purple-600 to-violet-500" 
  },
  { 
    id: 3, 
    // name: "Precisely", 
    image: "https://res.cloudinary.com/dhkemgng9/image/upload/v1742626224/OBE_2022_-_CTIEMT-min_cilphg.jpg",
    // gradient: "from-indigo-600 to-purple-500" 
  },
  { 
    id: 4, 
    // name: "Bebo Technologies", 
    image: "https://res.cloudinary.com/dhkemgng9/image/upload/v1742626223/IAR-min_sh7eet.jpg",
    // gradient: "from-sky-600 to-blue-500" 
  },
  { 
    id: 5, 
    // name: "TCS", 
    image: "https://res.cloudinary.com/dhkemgng9/image/upload/v1742626223/ESER-min_dz2son.jpg",
    // gradient: "from-red-600 to-orange-500" 
  },
  { 
    id: 6, 
    // name: "Hoping Minds", 
    image: "https://res.cloudinary.com/dhkemgng9/image/upload/v1742633120/cer1_vkt0no.jpg",
    // gradient: "from-green-600 to-emerald-500" 
  },
  { 
    id: 7, 
    // name: "Seven Seas", 
    image: "https://res.cloudinary.com/dhkemgng9/image/upload/v1742633117/cer2_iuksbr.jpg",
    // gradient: "from-rose-600 to-red-500" 
  },
  { 
    id: 8, 
    // name: "The Leela", 
    image: "https://res.cloudinary.com/dhkemgng9/image/upload/v1742633117/cer_vx4jge.jpg",
    // gradient: "from-slate-600 to-gray-500" 
  }
];

function AwardsSlider() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E6EDF9] to-[#EEE8E5] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-primary bg-clip-text bg-gradient-to-r from-[#E6EDF9] to-[#EEE8E5] sm:text-5xl md:text-6xl">
          Proud Moments
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-primary sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          A showcase of remarkable achievements, milestones, and recognitions that define our journey of excellence. </p>
        </div>

        <div className="relative rounded-3xl bg-gradient-to-r from-gray-800 to-gray-700 p-1">
          <div className="relative rounded-[22px] bg-[#E6EDF9] shadow-2xl p-4">
            {/* Grid lines overlay */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {/* Vertical lines */}
                <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[2px] bg-black/70"></div>
                <div className="hidden lg:block absolute left-1/4 top-4 bottom-4 w-[2px] bg-black/70"></div>
                <div className="hidden lg:block absolute left-3/4 top-4 bottom-4 w-[2px] bg-black/70"></div>
                
                {/* Horizontal lines */}
                {Array.from({ length: 2 }).map((_, i) => (
                  <div
                    key={i}
                    className="hidden md:block absolute left-4 right-4 h-[2px] bg-black/70"
                    style={{ top: `${(i + 1) * 33.33}%`  }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {Awards.map((award) => (
                <div key={award.id} className="relative group">
                  <div className="relative aspect-[4/3] bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105">
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    
                    {/* Main image */}
                    <img
                      src={award.image}
                      alt="Award"
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Decorative borders */}
                    <div className="absolute inset-0 border-2 border-white/10 rounded-xl z-20 group-hover:border-white/30 transition-colors duration-300">
                      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white/30 rounded-tl-xl"></div>
                      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white/30 rounded-tr-xl"></div>
                      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white/30 rounded-bl-xl"></div>
                      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white/30 rounded-br-xl"></div>
                    </div>

                    {/* Hover effect shine */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                      <div className="absolute inset-0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AwardsSlider;