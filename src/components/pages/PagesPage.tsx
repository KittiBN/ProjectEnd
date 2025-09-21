import { MapPin, Phone, Mail, Clock, Users, Target, Book, Award, History } from 'lucide-react';
import { Card } from '../ui/card';
import PageImageDisplay from '../PageImageDisplay';

export default function PagesPage() {
  const facilitiesData = [
    {
      name: "ห้องปฏิบัติการคอมพิวเตอร์ 261",
      capacity: "30 คน",
      equipment: "คอมพิวเตอร์ 30 เครื่อง, โปรเจ็คเตอร์",
      software: "Visual Studio Code, React, Node.js"
    },
    {
      name: "ห้องปฏิบัติการคอมพิวเตอร์ 262", 
      capacity: "25 คน",
      equipment: "คอมพิวเตอร์ 25 เครื่อง, จอ Smart TV",
      software: "Android Studio, Flutter, Firebase"
    },
  ];



  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          เกี่ยวกับเรา
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          ภาควิชาคอมพิวเตอร์โปรแกรมเมอร์ วิทยาลัยอาชีวศึกษาสุพรรณบุรี 
          มุ่งมั่นในการผลิตบุคลากรด้านเทคโนโลยีสารสนเทศที่มีคุณภาพ
        </p>
      </div>

      {/* Images Section */}
      <PageImageDisplay page="pages" layout="carousel" showTitles={true} />

      {/* Vision & Mission */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <Card className="p-8">
          <div className="text-center mb-6">
            <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900">วิสัยทัศน์</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            เป็นภาควิชาชั้นนำในการผลิตบุคลากรด้านคอมพิวเตอร์โปรแกรมเมอร์ที่มีความรู้ 
            ทักษะ และคุณธรรม สามารถแข่งขันได้ในตลาดแรงงานระดับชาติและนานาชาติ 
            พร้อมสร้างนวัตกรรมเพื่อพัฒนาสังคมและประเทศชาติ
          </p>
        </Card>

        <Card className="p-8">
          <div className="text-center mb-6">
            <Book className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900">พันธกิจ</h2>
          </div>
          <ul className="text-gray-600 space-y-3">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              ผลิตบุคลากรด้านเทคโนโลยีสารสนเทศที่มีคุณภาพ
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              พัฒนาหลักสูตรให้ทันสมัยและตรงกับความต้องการของตลาด
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              ส่งเสริมการวิจัยและพัฒนานวัตกรรม
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              สร้างเครือข่ายความร่วมมือกับภาคอุตสาหกรรม
            </li>
          </ul>
        </Card>
      </div>

      {/* History */}


      {/* Contact Information */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <Card className="p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
            <MapPin className="w-6 h-6 mr-3" />
            ข้อมูลการติดต่อ
          </h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-gray-400 mt-1 mr-3 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-900">ที่อยู่</p>
                <p className="text-gray-600">
                  วิทยาลัยอาชีวศึกษาสุพรรณบุรี<br />
                  123 ถนนมาลัยแมน อำเภอเมือง<br />
                  จังหวัดสุพรรณบุรี 72000
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-gray-400 mr-3" />
              <div>
                <p className="font-medium text-gray-900">โทรศัพท์</p>
                <p className="text-gray-600">035-123-456</p>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-gray-400 mr-3" />
              <div>
                <p className="font-medium text-gray-900">อีเมล</p>
                <p className="text-gray-600">computer@spvc.ac.th</p>
              </div>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 text-gray-400 mr-3" />
              <div>
                <p className="font-medium text-gray-900">เวลาทำการ</p>
                <p className="text-gray-600">จันทร์ - ศุกร์ 8:00 - 16:30 น.</p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
            <Users className="w-6 h-6 mr-3" />
            สถิติภาควิชา
          </h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">100</div>
              <div className="text-gray-600">นักเรียนปัจจุบัน</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">3</div>
              <div className="text-gray-600">ระดับการศึกษา</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">5</div>
              <div className="text-gray-600">อาจารย์</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">8</div>
              <div className="text-gray-600">ปีประสบการณ์</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Facilities */}
      <Card className="p-8 mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">สิ่งอำนวยความสะดวก</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {facilitiesData.map((facility, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">{facility.name}</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-medium text-gray-700">ความจุ:</span>
                  <span className="ml-2 text-gray-600">{facility.capacity}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">อุปกรณ์:</span>
                  <span className="ml-2 text-gray-600">{facility.equipment}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">ซอฟต์แวร์:</span>
                  <span className="ml-2 text-gray-600">{facility.software}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

    </div>
  );
}