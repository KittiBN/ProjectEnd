import { Award, Users, Calendar, ExternalLink, Github } from 'lucide-react';
import { Card } from '../ui/card';
import PageImageDisplay from '../PageImageDisplay';

export default function LandingPage() {
  const projects = [
    {
      title: "ระบบจัดการห้องสมุดออนไลน์",
      description: "ระบบจัดการหนังสือและการยืม-คืนสำหรับห้องสมุดโรงเรียน พัฒนาด้วย React และ Node.js",
      status: "เสร็จสิ้น",
    },
    {
      title: "แอปพลิเคชันร้านอาหาร",
      description: "แอปสำหรับสั่งอาหารออนไลน์ พร้อมระบบการชำระเงินและติดตามออเดอร์",
      status: "กำลังพัฒนา",
    },
    {
      title: "เว็บไซต์โรงเรียน",
      description: "เว็บไซต์ประชาสัมพันธ์และข้อมูลข่าวสารสำหรับโรงเรียน",
      status: "เสร็จสิ้น",
    },
    {
      title: "ระบบจัดการคลังสินค้า",
      description: "ระบบติดตามสินค้าคงคลังและการจัดการสต็อกสำหรับร้านค้า",
      status: "เสร็จสิ้น",
    },
    {
      title: "แอพติดตามสุขภาพ",
      description: "แอปพลิเคชันสำหรับติดตามการออกกำลังกายและสุขภาพส่วนบุคคล",
      status: "เสร็จสิ้น",
    },
    {
      title: "ระบบจองห้องประชุม",
      description: "ระบบจองห้องประชุมออนไลน์สำหรับองค์กรและบริษัท",
      status: "เสร็จสิ้น",
    }
  ];

  const achievements = [
    {
      title: "รางวัลชนะเลิศ",
      event: "การแข่งขันพัฒนาซอฟต์แวร์ระดับภูมิภาค",
      year: "2024",
      icon: <Award className="w-8 h-8 text-yellow-500" />
    },
    {
      title: "รางวัลรองชนะเลิศอันดับ 1",
      event: "Hackathon นวัตกรรมการศึกษา",
      year: "2024",
      icon: <Award className="w-8 h-8 text-gray-400" />
    },
    {
      title: "รางวัลโครงงานยอดเยี่ยม",
      event: "งานแสดงผลงานนักเรียน",
      year: "2023",
      icon: <Award className="w-8 h-8 text-orange-500" />
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          ผลงานนักเรียน
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          รวมผลงานโครงงานและแอปพลิเคชันที่พัฒนาโดยนักเรียนภาควิชาคอมพิวเตอร์โปรแกรมเมอร์ 
          วิทยาลัยอาชีวศึกษาสุพรรณบุรี
        </p>
      </div>

      {/* Images Section */}
      <PageImageDisplay page="landing" layout="grid" showTitles={true} />

      {/* Achievements Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">รางวัลและความสำเร็จ</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                {achievement.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{achievement.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{achievement.event}</p>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">{achievement.year}</span>
            </Card>
          ))}
        </div>
      </div>

      {/* Projects Gallery */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold text-gray-900">โครงงานและแอปพลิเคชัน</h2>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">เสร็จสิ้น</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">กำลังพัฒนา</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow group">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  project.status === 'เสร็จสิ้น' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {project.status}
                </span>
              </div>

              <p className="text-sm text-gray-600 mb-4">
                {project.description}
              </p>
            </Card>
          ))}
        </div>
      </div>

    </div>
  );
}
