import React from 'react';
import { ArrowRight, Users, Leaf, TrendingUp, Target, Shield, Award, Mail, Phone, ClipboardCheck, Users2, MonitorSmartphone, MessageCircle, Video, Bell, Plane as Plant2, Map, CloudSun, Smartphone, Brain, Blocks, ChevronDown } from 'lucide-react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper core and required modules
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Home = () => {
  const [showCourses, setShowCourses] = useState(false);

  const courses = {
    'SCHOOL OF ENGINEERING': [
      'ND ELECTRICAL/ELECTRONIC ENGINEERING',
      'ND COMPUTER ENGINEERING'
    ],
    'SCHOOL OF SCIENCE & TECHNOLOGY': [
      'ND SCIENCE LABORATORY TECHNOLOGY',
      'ND PHARMACEUTICAL TECHNOLOGY',
      'ND COMPUTER SCIENCE',
      'ND ANIMAL HEALTH AND PRODUCTION TECHNOLOGY',
      'ND ENVIRONMENTAL SCIENCE AND MANAGEMENT TECHNOLOGY'
    ],
    'SCHOOL OF HEALTH SCIENCES': [
      'ND ORTHOPEDIC CAST TECHNOLOGY',
      'ND NUTRITION AND DIETETICS',
      'ND DISPENSING OPTICIANRY',
      'ND PUBLIC HEALTH TECHNOLOGY'
    ],
    'SCHOOL OF ENVIRONMENTAL STUDIES': [
      'ND QUANTITY SURVEYING',
      'ND ESTATE MANAGEMENT & VALUATION'
    ],
    'SCHOOL OF SOCIAL AND MANAGEMENT STUDIES': [
      'ND ACCOUNTING',
      'ND OFFICE TECHNOLOGY AND MANAGEMENT',
      'ND BUSINESS ADMINISTRATION AND MANAGEMENT'
    ]
  };

  const heroSlides = [
    {
      image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1740480174/photo_2025-02-24_15-04-32_vceag7.jpg",
      title: "Federal Polytechnic Kabo",
      subtitle: "Knowledge is the key to Success"
    },
    {
      image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1740480190/photo_2025-02-24_15-04-40_2_vgwqna.jpg",
      title: "Excellence in Education",
      subtitle: "Shaping Tomorrow's Leaders"
    },
    {
      image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1740480167/photo_2025-02-24_15-04-29_3_besgeg.jpg",
      title: "Innovation & Technology",
      subtitle: "Preparing for the Future"
    },
    {
      image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1740480162/photo_2025-02-24_15-04-27_dirrcx.jpg",
      title: "Federal Polytechnic Kabo",
      subtitle: "Knowledge is the key to Success"
    },
    {
      image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1740480071/photo_2025-02-24_15-03-32_razu8m.jpg",
      title: "Excellence in Education",
      subtitle: "Shaping Tomorrow's Leaders"
    },
    {
      image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1740480068/photo_2025-02-24_15-03-30_tkwayb.jpg",
      title: "Innovation & Technology",
      subtitle: "Preparing for the Future"
    },
    {
      image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1740480066/photo_2025-02-24_15-03-28_qw4bia.jpg",
      title: "Innovation & Technology",
      subtitle: "Preparing for the Future"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="h-[700px] relative">
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          effect="fade"
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation
          loop={true}
          className="h-full"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div 
                className="h-full bg-cover bg-center relative"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-blue-900/70 flex items-center justify-center">
                  <div className="text-center text-white max-w-5xl px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-3xl mb-12 font-light">
                      {slide.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link 
                        to="/admissions" 
                        className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
                      >
                        Admissions
                      </Link>
                      <div className="relative">
                        <button
                          onClick={() => setShowCourses(!showCourses)}
                          className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-lg font-semibold"
                        >
                          Courses
                          <ChevronDown className="ml-2 h-5 w-5" />
                        </button>
                        
                        {/* Courses Dropdown */}
                        {showCourses && (
                          <div className="absolute left-0 mt-2 w-96 bg-white rounded-lg shadow-xl z-50 max-h-[80vh] overflow-y-auto">
                            {Object.entries(courses).map(([school, programs]) => (
                              <div key={school} className="p-4 border-b border-blue-100 last:border-b-0">
                                <h3 className="text-blue-900 font-semibold text-lg pb-2 mb-2">
                                  {school}
                                </h3>
                                <ul className="space-y-2">
                                  {programs.map((program) => (
                                    <li key={program}>
                                      <Link
                                        to={`/courses/${program.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="block text-blue-700 hover:text-blue-900 hover:bg-blue-50 px-2 py-1.5 rounded text-sm"
                                      >
                                        {program}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Swiper Styles */}
        <style jsx>{`
          .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            background: white;
            opacity: 0.5;
          }
          .swiper-pagination-bullet-active {
            opacity: 1;
          }
          .swiper-button-prev,
          .swiper-button-next {
            color: white;
          }
          .swiper-button-prev:after,
          .swiper-button-next:after {
            font-size: 24px;
          }
          .swiper-pagination {
            bottom: 25px !important;
          }
        `}</style>
      </div>

      {/* Vision Section */}
      
      {/* Vice Chancellor's Message Section */}
      <div className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-800">Message from the Vice Chancellor</h2>
          <div className="flex flex-col md:flex-row items-center bg-white/90 backdrop-blur rounded-xl overflow-hidden shadow-xl border border-blue-200 hover:border-blue-400 hover:shadow-2xl transition-all">
            <div className="relative h-96 w-full md:w-1/2">
              <img 
                src="https://res.cloudinary.com/dc5qncppu/image/upload/v1740564750/WhatsApp_Image_2025-02-26_at_10.49.07_99d08333_dtcazq.jpg"
                alt="Vice Chancellor"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent"></div>
            </div>
            <div className="p-8 relative w-full md:w-1/2">
              <h3 className="text-3xl font-semibold mb-3 text-blue-800 text-center">Professor Mohammed Sanusi Magaji</h3>
              <p className="text-xl text-blue-600 text-center mb-6">Vice Chancellor</p>
              <p className="text-blue-600 mb-8 text-center">
                Distinguished Professor with over 37 years of experience in educational leadership and academic excellence.
              </p>
              <p className="text-blue-600 mb-8 text-center">
              "I wish to use this medium to appreciate all the stakeholders who are involed in actualizing dream of establishment of the new Federal Polytechnic Kabo (FEDPOKAB) Kano, its a welcome development to the people of Kano State. Education is fundamental in human development, it is a fundamental human right to acquired education at all level , Education is the best and strongest instruments for reducing poverty, gender inequality and then improving health care, bringing peace and stability as well as making individual and society to gain freedom and independent. For any society or community to prosper and become developed, education should be given much priority; there is need for higher investment on education".
              </p>
              <div className="flex flex-col items-center space-y-3">
                <div className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <Mail className="h-5 w-5" />
                  <span>vc@fepoka.edu.ng</span>
                </div>
                <div className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <Phone className="h-5 w-5" />
                  <span>+234 803 XXX XXXX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-800">Our Educational Services</h2>
          
          {/* E-Learning Solutions */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12 text-blue-700">E-Learning Solutions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: MonitorSmartphone,
                  title: "Virtual Learning Platform",
                  description: "Access course materials, lectures, and assignments from anywhere, anytime",
                  benefits: ["24/7 learning access", "Interactive content", "Progress tracking"]
                },
                {
                  icon: Video,
                  title: "Live Virtual Classes",
                  description: "Real-time online lectures and interactive sessions with professors",
                  benefits: ["Live Q&A sessions", "Recorded lectures", "Virtual office hours"]
                },
                {
                  icon: Brain,
                  title: "Adaptive Learning",
                  description: "AI-powered personalized learning paths tailored to each student",
                  benefits: ["Personalized pace", "Custom assessments", "Learning analytics"]
                }
              ].map((service, index) => (
                <div key={index} className="group bg-white/90 backdrop-blur rounded-xl p-8 border border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all">
                  <div className="flex justify-center mb-6">
                    <service.icon className="h-14 w-14 text-blue-600 group-hover:scale-110 transition-transform" />
                  </div>
                  <h4 className="text-2xl font-semibold mb-4 text-blue-800 text-center">{service.title}</h4>
                  <p className="text-blue-600 mb-6 text-center">{service.description}</p>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-blue-700">
                        <span className="h-1.5 w-1.5 bg-blue-500 rounded-full mr-2"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Immersive Learning */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12 text-blue-700">Immersive Learning Technologies</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Blocks,
                  title: "Virtual Reality Labs",
                  description: "Immersive VR experiences for practical training in science and engineering",
                  benefits: ["Hands-on practice", "Safe environment", "Real-world simulations"]
                },
                {
                  icon: Smartphone,
                  title: "Augmented Reality Learning",
                  description: "AR-enhanced study materials and interactive learning experiences",
                  benefits: ["3D visualization", "Interactive models", "Enhanced engagement"]
                },
                {
                  icon: Target,
                  title: "Mixed Reality Workshops",
                  description: "Blend of virtual and physical learning environments for enhanced understanding",
                  benefits: ["Practical training", "Collaborative learning", "Industry-ready skills"]
                }
              ].map((service, index) => (
                <div key={index} className="group bg-white/90 backdrop-blur rounded-xl p-8 border border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all">
                  <div className="flex justify-center mb-6">
                    <service.icon className="h-14 w-14 text-blue-600 group-hover:scale-110 transition-transform" />
                  </div>
                  <h4 className="text-2xl font-semibold mb-4 text-blue-800 text-center">{service.title}</h4>
                  <p className="text-blue-600 mb-6 text-center">{service.description}</p>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-blue-700">
                        <span className="h-1.5 w-1.5 bg-blue-500 rounded-full mr-2"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Digital Learning Tools */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-12 text-blue-700">Digital Learning Tools</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: MessageCircle,
                  title: "Collaborative Learning",
                  description: "Digital tools for group projects and peer-to-peer learning",
                  benefits: ["Team projects", "Knowledge sharing", "Peer reviews"]
                },
                {
                  icon: ClipboardCheck,
                  title: "Assessment Platform",
                  description: "Comprehensive digital assessment and feedback system",
                  benefits: ["Automated grading", "Instant feedback", "Performance analytics"]
                },
                {
                  icon: Bell,
                  title: "Student Support System",
                  description: "Integrated support tools for academic and technical assistance",
                  benefits: ["24/7 support", "Resource library", "Technical help"]
                }
              ].map((service, index) => (
                <div key={index} className="group bg-white/90 backdrop-blur rounded-xl p-8 border border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all">
                  <div className="flex justify-center mb-6">
                    <service.icon className="h-14 w-14 text-blue-600 group-hover:scale-110 transition-transform" />
                  </div>
                  <h4 className="text-2xl font-semibold mb-4 text-blue-800 text-center">{service.title}</h4>
                  <p className="text-blue-600 mb-6 text-center">{service.description}</p>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-blue-700">
                        <span className="h-1.5 w-1.5 bg-blue-500 rounded-full mr-2"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Committees Section */}
      <div className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-6 text-blue-800">Committees for Effective Implementation</h2>
          <p className="text-xl text-blue-600 text-center mb-16 max-w-3xl mx-auto">
            To ensure efficient execution and success, the following committees have been established:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/90 backdrop-blur rounded-xl p-8 text-center border border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all">
              <ClipboardCheck className="h-14 w-14 text-blue-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-3 text-blue-800">Implementation Committee</h3>
              <p className="text-blue-600">Comprising BIARN and BOA representatives to oversee execution.</p>
            </div>
            <div className="bg-white/90 backdrop-blur rounded-xl p-8 text-center border border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all">
              <Users2 className="h-14 w-14 text-blue-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-3 text-blue-800">Legal and Technical Supervisory Committee</h3>
              <p className="text-blue-600">Responsible for legal oversight and agronomic best practices.</p>
            </div>
            <div className="bg-white/90 backdrop-blur rounded-xl p-8 text-center border border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all">
              <MonitorSmartphone className="h-14 w-14 text-blue-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-3 text-blue-800">ICT and Publicity Committee</h3>
              <p className="text-blue-600">Driving digital transformation and public awareness.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h2 className="text-4xl font-bold mb-6 text-blue-800">Our Institution at a Glance</h2>
          <p className="text-xl text-blue-600 max-w-3xl mx-auto mb-12">
            Empowering students through quality education and innovative learning approaches across multiple disciplines.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Users className="h-16 w-16 text-blue-600" />
              </div>
              <h3 className="text-4xl font-bold mb-2 text-blue-800">5000+</h3>
              <p className="text-xl text-blue-600">Students Enrolled</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Leaf className="h-16 w-16 text-blue-600" />
              </div>
              <h3 className="text-4xl font-bold mb-2 text-blue-800">15+</h3>
              <p className="text-xl text-blue-600">Programs Offered</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <TrendingUp className="h-16 w-16 text-blue-600" />
              </div>
              <h3 className="text-4xl font-bold mb-2 text-blue-800">90%</h3>
              <p className="text-xl text-blue-600">Graduate Success Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Programs */}
      <div className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-800">Our Featured Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "School of Science & Technology",
                description: "Advanced computing, software development, and information technology programs",
                image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1740479845/photo_2025-02-24_15-02-00_mcjgqv.jpg"
              },
              {
                title: "School of Engineering",
                description: "Practical engineering skills with focus on modern technological applications",
                image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1740480054/photo_2025-02-24_15-03-23_3_xumtbo.jpg"
              },
              {
                title: "School of Social & Management Studies",
                description: "Contemporary business management and entrepreneurship programs",
                image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1740479998/photo_2025-02-24_15-03-02_2_dll8ii.jpg"
              }
            ].map((program, index) => (
              <div key={index} className="group bg-white/90 backdrop-blur rounded-xl overflow-hidden shadow-xl border border-blue-200 hover:border-blue-400 hover:shadow-2xl transition-all">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-3 text-blue-800">{program.title}</h3>
                  <p className="text-blue-600">{program.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Impact Stories */}
      

      {/* Leaders/Team Section */}
      <div className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-800">Our Leadership</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/90 backdrop-blur rounded-xl overflow-hidden shadow-xl border border-blue-200 hover:border-blue-400 hover:shadow-2xl transition-all">
              <div className="relative h-96">
                <img 
                  src="https://res.cloudinary.com/dc5qncppu/image/upload/v1740564750/WhatsApp_Image_2025-02-26_at_10.49.07_99d08333_dtcazq.jpg"
                  alt="Vice Chancellor"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent"></div>
              </div>
              <div className="p-8 relative">
                <h3 className="text-3xl font-semibold mb-3 text-blue-800 text-center">Professor Mohammed Sanusi Magaji</h3>
                <p className="text-xl text-blue-600 text-center mb-6">Vice Chancellor</p>
                <p className="text-blue-600 mb-8 text-center">
                  Distinguished Professor with over 35 years of experience in educational leadership and academic excellence
                </p>
                <div className="flex flex-col items-center space-y-3">
                  <div className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors">
                    <Mail className="h-5 w-5" />
                    <span>vc@fepoka.edu.ng</span>
                  </div>
                  <div className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors">
                    <Phone className="h-5 w-5" />
                    <span>+234 803 XXX XXXX</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dc5qncppu/image/upload/v1740480174/photo_2025-02-24_15-04-32_vceag7.jpg')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl font-bold mb-6 text-blue-800">Begin Your Academic Journey</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto text-blue-600">
            Take the first step towards your future. Join our diverse community of learners 
            and discover endless possibilities in education and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/apply" 
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
            >
              Apply Now
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors text-lg font-semibold"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;