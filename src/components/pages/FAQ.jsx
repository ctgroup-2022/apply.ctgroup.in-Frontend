"use client";
import React from "react";
import {
  TabDes,
  TabHeader,
  TabImage,
  TabImageContainer,
  TabItem,
  TabList,
  TabsProvider,
} from "../core/image-tab";
import { MdArrowForward } from "react-icons/md"; // Importing React Icon
import ScrollElement from '../core/scroll-element';
import shahpur from '../../assets/Images/shahpur.jpeg';
import apply from '../../assets/Images/apply.png';
import ct1 from '../../assets/Images/ct1.jpeg';
import admission from '../../assets/Images/admission.png';
import hostel from '../../assets/Images/hostel.png';

const tabs = [
  {
    title: "What programs do CT Group offer?",
    id: "improve",
    description:
      "CT Group offer a wide range of undergraduate, postgraduate, and diploma programs in various fields including Engineering, Management, Computer Science, Law, Pharmacy, and Commerce.",
      imageUrl: shahpur,
  },
  {
    title: "How can I apply to CT Group?",
    id: "important",
    description:
      "You can apply to CT Group through our online application portal. Visit our website and fill out the application form. You will need to upload your academic documents and recent photographs.",
      imageUrl: apply,
  },
  {
    title: "What are the eligibility criteria for admission?",
    id: "same",
    description:
      "The eligibility criteria depend on the course you are applying for. Please visit the respective program page for detailed information. Generally, a minimum percentage in your previous qualification is required to be eligible for admission.",
      imageUrl: ct1,
  },
  {
    title: "Are there any scholarships available?",
    id: "imp",
    description:
      "Yes, CT Group offer scholarships to meritorious students based on academic performance, financial need, and other criteria. For more information, visit the scholarship page on our website.",
      imageUrl: admission,
  },
  {
    title: "What are the hostel facilities at CT Group?",
    id: "import",
    description:
      "CT Group provide separate hostel facilities for boys and girls with modern amenities such as Wi-Fi, 24/7 electricity backup, water supply, and recreational areas. Please contact the hostel office for further details.",
      imageUrl: hostel,
  },
  {
    title: "How is the placement assistance at CT Group?",
    id: "sames",
    description:
      "CT Group have a dedicated placement cell that works tirelessly to secure job opportunities for students. We have collaborations with top companies, and our students have been successfully placed in reputed organizations.",
      imageUrl: admission,
  },
];

function FAQ() {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center pb-8 bg-white text-black">
        <ScrollElement
          viewport={{ amount: 0.5, margin: '0px 0px 0px 0px' }}
          className="text-5xl text-center py-4">
          <h1 className="text-4xl sm:text-5xl font-bold relative text-center pt-8">
            <span className="text-[#195CA0]"> Check</span> out the FAQ
            <svg
              className="absolute left-1/2 transform -translate-x-1/2 top-full mt-1"
              width="300"
              height="30"
              viewBox="0 0 300 50"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0,25 C75,-25 225,75 300,25"
                stroke="#185da0"
                strokeWidth="3"
                fill="none"
              />
              <path
                d="M0,35 C75,-15 225,85 300,35"
                stroke="#185da0"
                strokeWidth="3"
                fill="none"
              />
            </svg>
          </h1>
        </ScrollElement>
      </div>
      <div className="w-full h-full bg-white text-black">
        <TabsProvider
          defaultValue="improve"
          className="md:grid md:grid-cols-12 items-center justify-center"
        >
          <TabImageContainer className="md:col-span-5">
            {tabs.map((tab, index) => (
              <TabImage key={index} value={tab.id}>
                <div className="relative border rounded-md overflow-hidden">
                  <img
                    src={tab.imageUrl}
                    alt={tab.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center text-white font-bold text-lg">
                    {tab.title}
                  </div>
                </div>
              </TabImage>
            ))}
          </TabImageContainer>
          <TabList className="md:col-span-7">
            {tabs.map((tab, index) => (
              <TabItem key={index} value={tab.id}>
                <TabHeader value={tab.id}>
                  <div className="flex items-center gap-2">
                    <MdArrowForward className="text-[#185da0]" /> {/* Using React Icon */}
                    {tab.title}
                  </div>
                </TabHeader>
                <TabDes value={tab.id}>
                  <p className={`bg-[#F2F2F2] text-black p-3`}>
                    {tab.description}
                  </p>
                  <div className="block rounded-md overflow-hidden">
                    <img
                      src={tab.imageUrl}
                      alt={tab.title}
                      className="md:hidden w-full object-cover"
                    />
                  </div>
                </TabDes>
              </TabItem>
            ))}
          </TabList>
        </TabsProvider>
      </div>
    </>
  );
}

export default FAQ;