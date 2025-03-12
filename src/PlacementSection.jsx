import React from "react";
import { motion, useAnimation } from "framer-motion"; // Import Framer Motion
import { Award } from "lucide-react";
import CounterSection from "./counter-section";

function PlacementSection() {
  const leftControls = useAnimation();
  const rightControls = useAnimation();

  const alumni = [
    {
      image:
        "https://res.cloudinary.com/dhkemgng9/image/upload/v1741243063/place5_n2orvu.png",
      name: "Alumni 1",
      role: "Role 1",
      width: 300, // Set explicit width
      height: 400, // Set explicit height
    },
    {
      image:
        "https://res.cloudinary.com/dhkemgng9/image/upload/v1741243064/place6_tlzxrk.png",
      name: "Alumni 2",
      role: "Role 2",
      width: 300, // Set explicit width
      height: 400, // Set explicit height
    },
    {
      image:
        "https://res.cloudinary.com/dhkemgng9/image/upload/v1741243059/place1_dye2cl.png",
      name: "Alumni 3",
      role: "Role 3",
      width: 300, // Set explicit width
      height: 400, // Set explicit height
    },
    {
      image:
        "https://res.cloudinary.com/dhkemgng9/image/upload/v1741243060/place2_jjdumd.png",
      name: "Alumni 4",
      role: "Role 4",
      width: 300, // Set explicit width
      height: 400, // Set explicit height
    },
  ];

  return (
    <div>
      {/* First Section */}
      <motion.div
        className="relative min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/dhkemgng9/image/upload/v1741243023/audi_hcpvmu.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <motion.div className="relative z-10 text-center text-text_color pt-10">
          <h1 className="text-4xl md:text-4xl font-bold mb-2">
            After CT What Comes Next?
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            Your Impeccable Placement
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            Opportunities With Milestone Packages
          </h3>
        </motion.div>
        <motion.div className="relative z-10 flex flex-col md:flex-row justify-between items-center min-h-[50vh] max-w-7xl mx-auto gap-10 p-9">
          <motion.div className="md:w-2/3 p-14 bg-black/30 backdrop-blur-sm rounded-xl text-center text-text_color">
            <h4 className="text-2xl font-bold mb-4">We have</h4>
            <div className="text-4xl md:text-5xl font-bold text-button_color mb-4">
              2,200+ Recruiters
            </div>
            <p className="text-2xl mb-4">
              Ready to Provide You with the Best Job Offers With up to
            </p>
            <div className="text-3xl md:text-5xl font-bold text-button_color mb-4">
              51 Lakhs Highest Package
            </div>
            <p className="text-lg mb-4">and average packages of</p>
            <div className="text-3xl md:text-5xl font-bold text-button_color">
              7-8 LPA
            </div>
          </motion.div>
          <motion.div className="md:w-1/3 bg-black/30 backdrop-blur-sm rounded-xl p-10 text-center text-text_color">
            <Award className="w-12 h-12 mx-auto mb-4 text-button_color" />
            <h4 className="text-2xl font-bold mb-2">Awarded as the</h4>
            <h5 className="text-2xl font-bold mb-2">Best University in</h5>
            <h6 className="text-2xl font-bold mb-2">placements by</h6>
            <span className="text-2xl font-bold text-button_color">
              ASSOCHAM
            </span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Alumni Section */}
      <motion.div
        className="relative h-1/2 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/dhkemgng9/image/upload/v1741243666/bg_np7yh8.avif")',
        }}
      >
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 container mx-auto px-4 pb-16 pt-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div className="flex-1">
              <CounterSection />
              <h2 className="text-4xl md:text-5xl text-text_color font-bold mt-32">
                Your Future Starts Here
              </h2>
              <h1 className="text-5xl md:text-6xl text-text_color font-bold mt-10">
                Our Alumni
              </h1>
              <h2 className="text-4xl md:text-5xl text-text_color font-bold mt-10">
                Working With the World's Top Companies
              </h2>
            </motion.div>
            <motion.div className="flex-1 grid grid-cols-2 gap-4">
              {alumni.map((person, index) => (
                <div key={index} className="relative group">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                    <img
                      src={person.image}
                      alt={person.name}
                      width={person.width}
                      height={person.height}
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default PlacementSection;
