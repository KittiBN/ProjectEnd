import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, GraduationCap, Briefcase, Users, Calendar } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import TechBadge from './TechBadge';
import { Card } from './ui/card';

interface ImageData {
  id: string;
  url: string;
  title: string;
  description: string;
  page: string;
  createdAt: string;
}

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const [images, setImages] = useState([
    {
      url: "/src/assets/1.jpg",
      title: "ห้องเรียนโปรแกรมมิ่ง",
      description: "สภาพแวดล้อมการเรียนรู้ที่ทันสมัย"
    },
    {
      url: "/src/assets/2-1.jpg",
      title: "ห้องปฏิบัติการเทคโนโลยี",
      description: "เทคโนโลยีการศึกษาที่ทันสมัย"
    },
    {
      url: "/src/assets/2-2.jpg",
      title: "นักเรียนเรียนโค้ดดิ้ง",
      description: "การเรียนรู้การเขียนโปรแกรมอย่างเข้มข้น"
    },
    {
      url: "/src/assets/s1.jpg",
      title: "ห้องเรียนคอมพิวเตอร์ทันสมัย",
      description: "พื้นที่เรียนรู้ที่ตอบสนองความต้องการในยุคดิจิทัล"
    }
  ]);

  // Load images from localStorage
  useEffect(() => {
    const savedImages = localStorage.getItem('pageImages');
    if (savedImages) {
      const allImages = JSON.parse(savedImages);
      const homeImages = allImages.filter((img: ImageData) => img.page === 'home');
      if (homeImages.length > 0) {
        const formattedImages = homeImages.map((img: ImageData) => ({
          url: img.url,
          title: img.title,
          description: img.description
        }));
        setImages(formattedImages);
      }
    }
  }, []);

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      {/* Main Title */}
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
          ComputerProgrammer
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
          วิทยาลัยอาชีวศึกษาสุพรรณบุรี
        </p>
        
        {/* SPVC Badge */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <span className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium">
            <span className="mr-2"></span>
            SPVC
          </span>
        </div>
      </div>

      {/* Technology Badges */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        <TechBadge name="ประกาศนียบัตรวิชาชีพ(ปวช)" variant="ประกาศนียบัตรวิชาชีพ" />
        <TechBadge name="ประกาศนียบัตรวิชาชีพชั้นสูง(ปวส)" variant="ประกาศนียบัตรวิชาชีพชั้นสูง" />
        <TechBadge name="ปริญญาตรี(ป.ตรี)" variant="ปริญญาตรี" />
      </div>

      {/* Image Carousel */}
      <div className="relative mb-8 sm:mb-12 lg:mb-16">
        <div className="relative h-64 sm:h-80 lg:h-96 rounded-lg sm:rounded-2xl overflow-hidden shadow-lg">
          <ImageWithFallback
            src={images[currentImageIndex].url}
            alt={images[currentImageIndex].title}
            className="w-full h-full object-cover"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          
          {/* Content */}
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2">{images[currentImageIndex].title}</h3>
            <p className="text-sm sm:text-base lg:text-lg opacity-90">{images[currentImageIndex].description}</p>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevImage}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-1.5 sm:p-2 hover:bg-white/30 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-1.5 sm:p-2 hover:bg-white/30 transition-colors"
          >
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-3 sm:bottom-4 right-4 sm:right-6 flex space-x-1.5 sm:space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Department History */}
      <Card className="p-8 mb-16 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <div className="text-center mb-6">
          <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">ประวัติความเป็นมาของแผนก</h2>
        </div>
        <div className="grid grid-cols-1 gap-8">
          <div>
            <p className="w-full text-gray-700 leading-relaxed mb-4 text-justify">
              แผนกวิชาคอมพิวเตอร์โปรแกรมเมอร์ เป็นหนึ่งในสาขาวิชาภายใต้ ประเภทวิชาเทคโนโลยีสารสนเทศและการสื่อสาร ซึ่งมุ่งเน้นการพัฒนาองค์ความรู้ด้านการเขียนโปรแกรม พัฒนาแอปพลิเคชัน และเทคโนโลยีซอฟต์แวร์ เพื่อเตรียมความพร้อมให้นักศึกษาสามารถเข้าสู่ตลาดแรงงานด้านไอทีได้อย่างมีประสิทธิภาพ 
              <span className="w-full text-gray-700 leading-relaxed mb-4 text-justify">
                โดยแผนกวิชานี้ถือเป็น สาขาวิชาชีพแรกในประเทศไทย ที่มุ่งเน้นด้าน การเขียนโปรแกรมคอมพิวเตอร์อย่างเป็นระบบ
              </span>
            </p>
          </div>
          <div>
          </div>
        </div>
      </Card>

      {/* Career Paths */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        {/* Education Paths */}
        <Card className="p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
          <div className="text-center mb-4 sm:mb-6">
            <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-green-600 mx-auto mb-3 sm:mb-4" />
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">เส้นทางการศึกษาต่อ</h2>
          </div>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-start">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-600 rounded-full mt-1.5 sm:mt-2 mr-3 sm:mr-4 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base">ระดับปริญญาตรี</h3>
                <p className="text-gray-600 text-xs sm:text-sm">วิทยาการคอมพิวเตอร์, เทคโนโลยีสารสนเทศ, วิศวกรรมซอฟต์แวร์</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-600 rounded-full mt-1.5 sm:mt-2 mr-3 sm:mr-4 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base">หลักสูตรเฉพาะทาง</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Full Stack Developer, Mobile App Development, Data Science</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-600 rounded-full mt-1.5 sm:mt-2 mr-3 sm:mr-4 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base">การรับรอง</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Microsoft, Google Developer, AWS Certification</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Career Opportunities */}
        <Card className="p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200">
          <div className="text-center mb-4 sm:mb-6">
            <Briefcase className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-purple-600 mx-auto mb-3 sm:mb-4" />
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">โอกาสการทำงาน</h2>
          </div>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-start">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-purple-600 rounded-full mt-1.5 sm:mt-2 mr-3 sm:mr-4 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Software Developer</h3>
                <p className="text-gray-600 text-xs sm:text-sm">เงินเดือนเริ่มต้น 25,000-35,000 บาท</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-purple-600 rounded-full mt-1.5 sm:mt-2 mr-3 sm:mr-4 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Web Developer</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Frontend, Backend, Full Stack Developer</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-purple-600 rounded-full mt-1.5 sm:mt-2 mr-3 sm:mr-4 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Mobile App Developer</h3>
                <p className="text-gray-600 text-xs sm:text-sm">iOS, Android, React Native, Flutter</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-purple-600 rounded-full mt-1.5 sm:mt-2 mr-3 sm:mr-4 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base">ธุรกิจส่วนตัว</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Freelancer, Startup, IT Consultant</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Statistics */}
      <Card className="mt-8 sm:mt-12 lg:mt-16 p-4 sm:p-6 lg:p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="text-center mb-6 sm:mb-8">
          <Users className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto mb-3 sm:mb-4" />
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">ความสำเร็จของเรา</h2>
          <p className="text-blue-100 text-sm sm:text-base">ตัวเลขที่พูดแทนคุณภาพการศึกษา</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">180</div>
            <div className="text-blue-100 text-xs sm:text-sm">นักศึกษา</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">3</div>
            <div className="text-blue-100 text-xs sm:text-sm">ระดับการศึกษา</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">5</div>
            <div className="text-blue-100 text-xs sm:text-sm">บุคลากร</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">8</div>
            <div className="text-blue-100 text-xs sm:text-sm">ปีประสบการณ์</div>
          </div>
        </div>
      </Card>
    </div>
  );
}
