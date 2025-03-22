"use client"

import { useState } from "react"
import { Trophy, Medal, Star, ArrowRight, GraduationCap, Globe, Award, BookOpen, CheckCircle, MapPin, Briefcase, Users, Laptop } from "lucide-react"
import { motion } from "framer-motion"

// Simple className utility function since utils file is not available
const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ")
}

export default function Ranking() {
  // Key points for left side - concise bullet points
  const rankingPoints = [
    {
      icon: <Trophy className="w-5 h-5 text-amber-500" />,
      title: "Premier Institute in Jalandhar",
      description: "Leading educational excellence in the region",
    },
    {
      icon: <Briefcase className="w-5 h-5 text-indigo-500" />,
      title: "100% Placement Support",
      description: "Dedicated career services for every student",
    },
    {
      icon: <Globe className="w-5 h-5 text-green-500" />,
      title: "International Certifications",
      description: "Industry-recognized global qualifications",
    },
  
    {
      icon: <Laptop className="w-5 h-5 text-blue-500" />,
      title: "Advanced Skill Development",
      description: "Specialized courses beyond core curriculum",
    },
    {
      icon: <Users className="w-5 h-5 text-purple-500" />,
      title: "Expert Faculty Members",
      description: "Experienced educators with industry background",
    },
    {
      icon: <Award className="w-5 h-5 text-red-500" />,
      title: "Industry Connection Program",
      description: "Regular workshops by field professionals",
    },
  ]

  const tabs = [
    { id: "overall", label: "Overall Rankings" },
    { id: "academic", label: "Academic Excellence" },
    { id: "placement", label: "Placement Records" },
    { id: "facilities", label: "Infrastructure" },
  ]

  const rankingItems = [
    {
      icon: <Trophy className="w-6 h-6 text-secondary" />,
      rank: 1,
      title: "Horizon Institute of Technology",
      description: "Leading institution for technological innovation and research excellence with 98% placement rate.",
      rating: 4.9,
      image: "/placeholder.svg?height=200&width=300",
      badges: ["Top Ranked", "5-Star Faculty"]
    },
    {
      icon: <Medal className="w-6 h-6 text-primary" />,
      rank: 2,
      title: "Evergreen State University",
      description: "Renowned for its diverse programs and strong industry connections, offering global opportunities.",
      rating: 4.7,
      image: "/placeholder.svg?height=200&width=300",
      badges: ["Rising Star"]
    },
    {
      icon: <Award className="w-6 h-6 text-dark_yellow_text" />,
      rank: 3,
      title: "Westlake College of Science",
      description: "Specializing in scientific research with state-of-the-art laboratories and expert faculty members.",
      rating: 4.5,
      image: "/placeholder.svg?height=200&width=300",
      badges: ["Research Excellence"]
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-dark_red_text" />,
      rank: 4,
      title: "Metropolitan Business School",
      description: "Premier business education with industry-integrated curriculum and entrepreneurship focus.",
      rating: 4.3,
      image: "/placeholder.svg?height=200&width=300",
      badges: ["Industry Favorite"]
    },
    {
      icon: <Globe className="w-6 h-6 text-dark_text" />,
      rank: 5,
      title: "International University of Arts",
      description: "Creative excellence and innovative design programs with global recognition in creative industries.",
      rating: 4.2,
      image: "/placeholder.svg?height=200&width=300",
      badges: ["International Acclaim"]
    },
  ]

  // Function to render star ratings
  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <div key={i} className="relative">
            <Star className="w-4 h-4 text-slate-200" />
            <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            </div>
          </div>
        )
      } else {
        stars.push(<Star key={i} className="w-4 h-4 text-slate-200" />)
      }
    }
    
    return (
      <div className="flex items-center">
        <div className="flex">{stars}</div>
        <span className="ml-2 text-amber-600 font-medium">{rating.toFixed(1)}</span>
      </div>
    )
  }

  return (
    <section className="min-h-screen py-12 bg-gradient-to-b from-slate-50 to-white flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Concise Points */}
          <div className="lg:w-2/5 space-y-6">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-secondary text-text_color font-medium text-sm mb-3">
                Top College in Jalandhar
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight">
                Why Study at <span className="text-primary">CTGI</span> Shahpur?
              </h1>
              <p className="mt-2 text-slate-600">
                Building careers through quality education and industry-ready skills
              </p>
            </div>

            {/* Points List - Concise Format */}
            <div className="space-y-4 mt-6">
              {rankingPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white border border-slate-100 hover:border-indigo-100 hover:shadow-sm transition-all"
                >
                  <div className="flex-shrink-0 p-2 bg-slate-50 rounded-full">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-800">{point.title}</h3>
                    <p className="text-xs text-slate-500">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

          {/* Right Column - 3 Images Layout */}
          <div className="lg:w-3/5 relative">
            <div className="relative h-full flex flex-col gap-3">
              {/* Main Horizontal Image */}
              <div className="w-full h-[240px] md:h-[400px] relative rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://res.cloudinary.com/dhkemgng9/image/upload/v1742623471/M1_ogocib.jpg"
                  alt="Top ranked university campus"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                  <div className="p-4 md:p-6 text-white w-full">
                    <div className="flex flex-col items-center text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Trophy className="w-8 h-8 md:w-10 md:h-10 text-yellow-400 mr-2 md:mr-3 animate-pulse" />
                        <div className="text-xl md:text-3xl font-bold bg-gradient-to-r from-yellow-300 to-amber-500 bg-clip-text text-transparent">
                          #1 Rank in University Results
                        </div>
                      </div>
                      <div className="bg-primary py-1 px-4 rounded-full text-xs md:text-sm font-medium mt-1 shadow-lg border border-primary/30">
                        Consecutive 5 Years
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Two Equal Images in a Row */}
              <div className="flex flex-col sm:flex-row gap-3 flex-1">
                {/* Left Image */}
                <div className="w-full sm:w-1/2 h-[160px] md:h-[200px] relative rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://res.cloudinary.com/dhkemgng9/image/upload/v1742542306/DSC00877_qgubzx.jpg"
                    alt="Modern classroom facilities"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-primary text-white p-2 rounded-bl-xl">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                    <div className="text-white text-sm font-medium">Best Infrastructure</div>
                  </div>
                </div>
                
                {/* Right Image */}
                <div className="w-full sm:w-1/2 h-[160px] md:h-[200px] relative rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://res.cloudinary.com/dhkemgng9/image/upload/v1742623454/M2_jzmv7v.jpg"
                    alt="Successful graduates"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 left-0 bg-button_color text-white p-2 rounded-br-xl">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                    <div className="text-white flex items-center">
                      <span className="text-sm font-medium">100% Placement Success Rate</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 w-64 h-64 rounded-full bg-indigo-50 -top-10 -left-10"></div>
              <div className="absolute -z-10 w-40 h-40 rounded-full bg-amber-50 bottom-20 right-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
