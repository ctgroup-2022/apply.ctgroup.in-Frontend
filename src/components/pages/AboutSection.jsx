"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative w-full h-full bg-gradient-to-br from-white to-blue-50/70 px-4 py-16 sm:px-6 lg:px-8">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#224E91]/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-blue-100/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column - Images */}
          <div className="relative order-2 lg:order-1">
            <motion.div
              //   initial={{ opacity: 0, y: 20 }}
              //   whileInView={{ opacity: 1, y: 0 }}
              //   transition={{ duration: 0.8 }}
              //   viewport={{ once: true }}
              className="group relative"
            >
              {/* Main image */}
              <div className="relative z-10 overflow-hidden rounded-2xl bg-white p-2 shadow-xl transition-transform duration-300 hover:scale-[1.02]">
                <div className="aspect-[4/3] overflow-hidden rounded-xl">
                  <img
                    src="https://res.cloudinary.com/dhkemgng9/image/upload/v1741243037/culture_dybfpe.jpg"
                    alt="Dental professional"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Secondary image */}
              <div className="absolute -bottom-12 -right-12 z-20 hidden w-48 overflow-hidden rounded-xl bg-white p-1 shadow-lg transition-transform duration-300 hover:scale-105 lg:block">
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src="https://res.cloudinary.com/dhkemgng9/image/upload/v1741243023/audi_hcpvmu.jpg"
                    alt="Dental procedure"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Decorative dot pattern */}
              <div className="absolute -left-12 -top-12 -z-10 hidden h-full w-full rounded-2xl bg-primary lg:block" />
            </motion.div>
          </div>

          {/* Right column - Content */}
          <motion.div
            // initial={{ opacity: 0, x: 20 }}
            // whileInView={{ opacity: 1, x: 0 }}
            // transition={{ duration: 0.8, delay: 0.2 }}
            // viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="mb-4 inline-block rounded-full bg-primary px-4 py-1 text-sm font-medium text-text_color">
              Established 1997
            </span>

            <h1 className="mb-6 text-4xl font-bold tracking-tight text-dark_text sm:text-5xl xl:text-6xl">
              About Us
            </h1>

            <div className="mb-8 space-y-6 text-md leading-6 text-dark_text text-justify ">
              <p>
                CT Group of Institutions, Shahpur Campus, guarantees 100%
                placement assistance and endless career opportunities. Whether
                you aspire to secure your dream job, become an entrepreneur, or
                pursue research, CT Shahpur is your gateway to success. Our NAAC
                ‘A’ Grade accredited CT Institute of Engineering, Management &
                Technology (CTIEMT) ensures top-quality education, blending
                industry-ready skills, hands-on training, and practical exposure
                to help you excel in today’s competitive world.
              </p>
              <p>
                <ul>
                  <li>
                    ✔ Accomplished Doctoral Faculty and Expert Industry Mentors
                  </li>
                  <li>✔ Cutting-edge Labs & Tech-Enabled Classrooms</li>
                  <li>✔ Future Skills Training & Certifications</li>
                  <li>✔ Global Exposure Programs & Industry Internships</li>
                  <li>✔ 100% Placement Support & Career Guidance</li>
                  <li>✔ Personality Development & Soft Skills Enhancement</li>
                  <li>✔ Vibrant Campus Life with Cultural Fests & Events</li>
                  <li>✔ Entrepreneurship & Innovation Cells</li>
                </ul>
              </p>
              <p>
                At CT Shahpur, education goes beyond books, shaping you into a
                global leader. With cutting-edge labs, research opportunities,
                and a vibrant campus life, we blend academic excellence with
                dynamic experiences. Join the CT family, where innovation meets
                opportunity, and dreams become reality.
                <br />
                <br />
                <span className="text-lg mt-8">
                  🔹 Ready for the future? 🔹 Ready for CT Shahpur
                </span>
              </p>
            </div>

            {/* Quote */}
            {/* <blockquote className="mb-12 border-l-4 border-[#224E91] pl-6">
              <p className="text-lg italic text-gray-600">
                "A genuine smile comes from the heart, but a healthy smile needs
                good dental care."
              </p>
              <footer className="mt-2">
                <p className="text-base font-semibold text-gray-900">
                  — Kashish Singh
                </p>
              </footer>
            </blockquote> */}

            {/* Stats */}
            {/* <div className="mb-12 grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div>
                <p className="text-3xl font-bold text-primary">20+</p>
                <p className="mt-1 text-sm text-dark_red_text">
                  Years Experience
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">12k+</p>
                <p className="mt-1 text-sm text-dark_red_text">
                  Happy Patients
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">15+</p>
                <p className="mt-1 text-sm text-dark_red_text">
                  Expert Dentists
                </p>
              </div>
            </div> */}

            {/* CTA Button */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
