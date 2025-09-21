import { User, Mail, Phone, Award, BookOpen, Calendar, MapPin, Briefcase } from 'lucide-react';
import { Card } from '../ui/card';

export default function DashboardPage() {
const faculty = [
  {
    name: "ผู้ช่วยศาสตราจารย์ เกล็ดนที ไชยชนะร",
    position: "หัวหน้าภาควิชา",
    image: "/src/assets/klednatee2.jpg",
    courses: ["Web Programming", "Software Engineering", "Database Systems"]
  },
  {
    name: "นายณัฐ กุลรัตน์",
    position: "อาจารย์ประจำ",
    image: "/src/assets/nut.jpg",
    courses: ["Mobile Programming", "UI/UX Design", "Human-Computer Interaction"]
  },
  {
    name: "นายพงศกร พวงสมบัติ",
    position: "อาจารย์ประจำ",
    image: "/src/assets/ohm.jpg",
    courses: ["AI Programming", "Machine Learning", "Data Science"]
  },
  {
    name: "นายไกรวี แสงวิเชียร",
    position: "อาจารย์ประจำ",
    image: "/src/assets/kraiwee2.jpg",
    courses: ["Network Programming", "Cybersecurity", "System Administration"]
  },
  {
    name: "นางสาวกรองกาญจน์ ยิ้มประเสริฐ",
    position: "อาจารย์ประจำ",
    image: "/src/assets/mint1.jpg",
    courses: ["Database Design", "Big Data Analytics", "Data Mining"]
  },
];



  const departmentInfo = {
    totalFaculty: 5,
    totalStudents: 180,
    totalCourses: 18,
    establishedYear: 2017
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          บุคลากร
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          ทีมงานอาจารย์และบุคลากรภาควิชาคอมพิวเตอร์โปรแกรมเมอร์ 
          วิทยาลัยอาชีวศึกษาสุพรรณบุรี
        </p>
      </div>

      {/* Department Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <Card className="p-6 text-center">
          <User className="w-8 h-8 text-blue-600 mx-auto mb-3" />
          <div className="text-3xl font-bold text-gray-900 mb-1">{departmentInfo.totalFaculty}</div>
          <div className="text-gray-600">อาจารย์</div>
        </Card>
        <Card className="p-6 text-center">
          <BookOpen className="w-8 h-8 text-green-600 mx-auto mb-3" />
          <div className="text-3xl font-bold text-gray-900 mb-1">{departmentInfo.totalStudents}</div>
          <div className="text-gray-600">นักเรียน</div>
        </Card>
        <Card className="p-6 text-center">
          <Briefcase className="w-8 h-8 text-purple-600 mx-auto mb-3" />
          <div className="text-3xl font-bold text-gray-900 mb-1">{departmentInfo.totalCourses}</div>
          <div className="text-gray-600">วิชาที่สอน</div>
        </Card>
        <Card className="p-6 text-center">
          <Calendar className="w-8 h-8 text-orange-600 mx-auto mb-3" />
          <div className="text-3xl font-bold text-gray-900 mb-1">{new Date().getFullYear() - departmentInfo.establishedYear}</div>
          <div className="text-gray-600">ปีที่ก่อตั้ง</div>
        </Card>
      </div>

      {/* Faculty Members */}
{/* Faculty Members */}
<div className="mb-12">
  <h2 className="text-2xl font-semibold text-gray-900 mb-8">คณะอาจารย์</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {faculty.map((member, index) => (
      <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
        <div className="text-center mb-4">
          <img
            src={member.image}
            alt={member.name}
            className="w-40 h-40 object-cover rounded-full mx-auto mb-3"
          />
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
          <p className="text-blue-600 font-medium mb-2">{member.position}</p>
        </div>
      </Card>
    ))}
  </div>
</div>


      {/* Department Information */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <MapPin className="w-5 h-5 mr-2" />
            ข้อมูลภาควิชา
          </h3>
          <div className="space-y-3">
            <div>
              <span className="font-medium text-gray-900">ชื่อภาควิชา:</span>
              <span className="ml-2 text-gray-600">คอมพิวเตอร์โปรแกรมเมอร์</span>
            </div>
            <div>
              <span className="font-medium text-gray-900">สังกัด:</span>
              <span className="ml-2 text-gray-600">วิทยาลัยอาชีวศึกษาสุพรรณบุรี</span>
            </div>
            <div>
              <span className="font-medium text-gray-900">ก่อตั้งเมื่อ:</span>
              <span className="ml-2 text-gray-600">พ.ศ. {departmentInfo.establishedYear + 543}</span>
            </div>
            <div>
              <span className="font-medium text-gray-900">ที่ตั้ง:</span>
              <span className="ml-2 text-gray-600">อำเภอเมือง จังหวัดสุพรรณบุรี</span>
            </div>
            <div>
              <span className="font-medium text-gray-900">เบอร์โทร:</span>
              <span className="ml-2 text-gray-600">035-123-456</span>
            </div>
            <div>
              <span className="font-medium text-gray-900">อีเมล:</span>
              <span className="ml-2 text-gray-600">computer@spvc.ac.th</span>
            </div>
          </div>
        </Card>

        
      </div>
    </div>
  );
}