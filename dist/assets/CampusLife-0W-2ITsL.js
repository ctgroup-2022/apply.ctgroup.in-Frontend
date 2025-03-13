import{r as a,j as t}from"./react-DzTocP85.js";import{G as d,U as m,P as h,F as p,X as u}from"./lucide-react-C3sF1K4c.js";import"./exenv-B2bGEOhO.js";const l=["https://res.cloudinary.com/dhkemgng9/image/upload/v1741243023/audi_hcpvmu.jpg","https://res.cloudinary.com/dhkemgng9/image/upload/v1741243023/hero2_mb8dnx.jpg","https://res.cloudinary.com/dhkemgng9/image/upload/v1741243023/hero1_oejtyu.jpg"],g=[{icon:d,title:"Academic Excellence",description:"Pursuing the highest standards in education"},{icon:m,title:"Vibrant Community",description:"Building lasting connections and friendships"},{icon:h,title:"Cultural Activities",description:"Celebrating diversity and creativity"},{icon:p,title:"Research Opportunities",description:"Advancing knowledge through innovation"}],x=[{id:1,url:"https://res.cloudinary.com/dhkemgng9/image/upload/v1741243022/gym_zpxm4q.jpg",title:"GYM & Fitness",description:"Modern fitness center equipped with state-of-the-art equipment for physical wellness, including cardio machines, weight training area, and dedicated workout spaces.",size:"large",width:600,height:400},{id:2,url:"https://res.cloudinary.com/dhkemgng9/image/upload/v1741243020/canteen_azuvdh.jpg",title:"Canteen",description:"Spacious and hygienic cafeteria serving fresh, nutritious meals with diverse menu options, comfortable seating, and a welcoming atmosphere for students and staff.",size:"small",width:300,height:200},{id:3,url:"https://res.cloudinary.com/dhkemgng9/image/upload/v1741243024/sports_fqzkwq.jpg",title:"Sports",description:"Comprehensive sports facilities including indoor and outdoor courts, playing fields, and training areas for various sports activities and competitions.",size:"small",width:300,height:200},{id:4,url:"https://res.cloudinary.com/dhkemgng9/image/upload/v1741243020/audi_zdx3et.jpg",title:"Auditorium",description:"State-of-the-art auditorium with excellent acoustics, modern audio-visual systems, and comfortable seating for events, performances, and large gatherings.",size:"large",width:600,height:400},{id:5,url:"https://res.cloudinary.com/dhkemgng9/image/upload/v1741243022/cult_unskh9.jpg",title:"Cultural Fest",description:"Annual cultural festival showcasing student talents through performances, exhibitions, and celebrations, fostering creativity and cultural exchange.",size:"small",width:300,height:200},{id:6,url:"https://res.cloudinary.com/dhkemgng9/image/upload/v1741243024/work_ammeuh.jpg",title:"Workshop",description:"Well-equipped workshop facility with modern tools and machinery for hands-on technical training and practical project development.",size:"small",width:300,height:200}];function w(){const[o,n]=a.useState(0),[s,r]=a.useState(null),[v,c]=a.useState(0);return a.useEffect(()=>{const e=()=>{c(window.scrollY)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),a.useEffect(()=>{const e=setInterval(()=>{n(i=>(i+1)%l.length)},5e3);return()=>clearInterval(e)},[]),t.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-dark_text to-primary text-white",children:[t.jsxs("div",{className:"relative h-[100svh] overflow-hidden",children:[l.map((e,i)=>t.jsxs("div",{className:`absolute inset-0 transition-opacity duration-1000 ${i===o?"opacity-100":"opacity-0"}`,children:[t.jsx("img",{src:e,alt:`Slide ${i+1}`,width:"1920",height:"1080",className:"w-full h-full object-cover"}),t.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"})]},i)),t.jsx("div",{className:"absolute inset-0 flex items-center justify-center px-4",children:t.jsxs("div",{className:"text-center",children:[t.jsx("h1",{className:"text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 px-2",children:"Experience College Life"}),t.jsx("p",{className:"text-lg sm:text-xl md:text-2xl text-white px-4",children:"Discover the perfect blend of academics, culture, and community"})]})})]}),t.jsx("div",{className:"relative z-10 -mt-16 sm:-mt-20 container mx-auto px-4",children:t.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6",children:g.map((e,i)=>t.jsxs("div",{className:"bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300",children:[t.jsx(e.icon,{className:"w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 text-button_color"}),t.jsx("h2",{className:"text-lg sm:text-xl font-semibold mb-2",children:e.title}),t.jsx("p",{className:"text-sm sm:text-base text-text_color",children:e.description})]},i))})}),t.jsxs("div",{className:"container mx-auto px-4 py-16 sm:py-24",children:[t.jsx("h2",{className:"text-3xl sm:text-5xl font-bold text-center mb-10 sm:mb-16",children:"Explore Our Facilities"}),t.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8",children:x.map(e=>t.jsx("div",{onClick:()=>r(e),className:`group cursor-pointer transform hover:-translate-y-2 transition-all duration-500 ${e.size==="large"?"sm:col-span-2 sm:row-span-2":""}`,children:t.jsxs("div",{className:"relative h-full overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300",children:[t.jsx("img",{src:e.url,alt:e.title,width:e.width,height:e.height,className:`w-full object-cover transform group-hover:scale-110 transition-transform duration-700 ${e.size==="large"?"h-[300px] sm:h-[400px] lg:h-[500px]":"h-[200px] sm:h-[240px]"}`}),t.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500"}),t.jsxs("div",{className:"absolute bottom-0 left-0 right-0 p-4 sm:p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500",children:[t.jsx("h3",{className:`text-white font-bold mb-2 drop-shadow-lg ${e.size==="large"?"text-2xl sm:text-3xl":"text-lg sm:text-xl"}`,children:e.title}),t.jsx("p",{className:"text-sm sm:text-base text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500",children:e.description})]})]})},e.id))})]}),s&&t.jsx("div",{className:"fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-2 sm:p-4",children:t.jsxs("div",{className:"relative w-full max-w-sm bg-gray-900 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl",children:[t.jsx("button",{onClick:()=>r(null),className:"absolute top-2 right-2 sm:top-4 sm:right-4 text-text_color z-10 bg-black/20 backdrop-blur-sm rounded-full p-1.5 sm:p-2 transition-all duration-300",children:t.jsx(u,{size:20,className:"sm:w-6 sm:h-6"})}),t.jsx("img",{src:s.url,alt:s.title,width:s.width,height:s.height,className:"w-full h-[150px] sm:h-[200px] object-cover mt-10 sm:mt-12"}),t.jsxs("div",{className:"p-4 sm:p-6 bg-gradient-to-t from-gray-900 to-gray-900/80 backdrop-blur-sm",children:[t.jsx("h3",{className:"text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-text_color",children:s.title}),t.jsx("p",{className:"text-sm sm:text-lg text-text_color leading-relaxed",children:s.description})]})]})})]})}export{w as default};
