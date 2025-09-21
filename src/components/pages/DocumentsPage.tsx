import { Book, FileText, Download, Search, Filter, BookOpen } from 'lucide-react';
import { Card } from '../ui/card';
import { Input } from '../ui/input';

export default function DocumentsPage() {
  const documentCategories = [
    {
      title: "คู่มือการเรียน",
      count: 12,
      icon: <BookOpen className="w-6 h-6 text-blue-600" />,
      color: "blue"
    },
    {
      title: "เอกสารประกอบการสอน",
      count: 28,
      icon: <FileText className="w-6 h-6 text-green-600" />,
      color: "green"
    },
    {
      title: "ตัวอย่างโครงงาน",
      count: 15,
      icon: <Book className="w-6 h-6 text-purple-600" />,
      color: "purple"
    },
    {
      title: "คู่มือการใช้งาน",
      count: 8,
      icon: <FileText className="w-6 h-6 text-orange-600" />,
      color: "orange"
    }
  ];

  const recentDocuments = [
    {
      title: "คู่มือการใช้งาน React และ TypeScript",
      category: "คู่มือการเรียน",
      author: "อาจารย์สมชาย วิทยาการ",
      date: "15 มี.ค. 2024",
      format: "PDF",
      size: "2.4 MB",
      downloads: 156
    },
    {
      title: "เอกสารประกอบการสอน JavaScript ES6+",
      category: "เอกสารประกอบการสอน",
      author: "อาจารย์สมหญิง โค้ดดี",
      date: "12 มี.ค. 2024",
      format: "PDF",
      size: "1.8 MB",
      downloads: 203
    },
    {
      title: "ตัวอย่างโครงงาน Web Application",
      category: "ตัวอย่างโครงงาน",
      author: "อาจารย์วิทยา เทคโนโลยี",
      date: "10 มี.ค. 2024",
      format: "ZIP",
      size: "15.2 MB",
      downloads: 89
    },
    {
      title: "คู่มือการติดตั้ง Development Environment",
      category: "คู่มือการใช้งาน",
      author: "อาจารย์ประยุทธ โปรแกรม",
      date: "8 มี.ค. 2024",
      format: "PDF",
      size: "3.1 MB",
      downloads: 267
    },
    {
      title: "เอกสารสำหรับการสอบ Midterm",
      category: "เอกสารประกอบการสอน",
      author: "อาจารย์สมชาย วิทยาการ",
      date: "5 มี.ค. 2024",
      format: "PDF",
      size: "892 KB",
      downloads: 445
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          เอกสารและแหล่งข้อมูล
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          รวมเอกสารการเรียนการสอน คู่มือ และแหล่งข้อมูลสำหรับนักเรียนและอาจารย์
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input 
              placeholder="ค้นหาเอกสาร..."
              className="pl-10"
            />
          </div>
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
            <Filter className="w-4 h-4 mr-2" />
            ตัวกรอง
          </button>
        </div>
      </div>

      {/* Document Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {documentCategories.map((category, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-shadow cursor-pointer group">
            <div className="flex items-center mb-4">
              {category.icon}
              <h3 className="ml-3 font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                {category.title}
              </h3>
            </div>
            <p className="text-2xl font-bold text-gray-900 mb-1">
              {category.count}
            </p>
            <p className="text-sm text-gray-600">เอกสาร</p>
          </Card>
        ))}
      </div>

      {/* Recent Documents */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">เอกสารล่าสุด</h2>
          <button className="text-blue-600 hover:text-blue-700 font-medium">
            ดูทั้งหมด
          </button>
        </div>

        <div className="space-y-4">
          {recentDocuments.map((doc, index) => (
            <Card key={index} className="p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 cursor-pointer transition-colors">
                      {doc.title}
                    </h3>
                    <span className={`ml-3 px-2 py-1 rounded text-xs bg-blue-100 text-blue-800`}>
                      {doc.format}
                    </span>
                  </div>
                  
                  <p className="text-sm text-blue-600 mb-2">{doc.category}</p>
                  
                  <div className="flex items-center text-sm text-gray-600 space-x-4">
                    <span>โดย {doc.author}</span>
                    <span>{doc.date}</span>
                    <span>{doc.size}</span>
                    <span>ดาวน์โหลด {doc.downloads} ครั้ง</span>
                  </div>
                </div>
                
                <button className="ml-6 flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Download className="w-4 h-4 mr-2" />
                  ดาวน์โหลด
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Upload Section */}
      <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          สำหรับอาจารย์และเจ้าหน้าที่
        </h3>
        <p className="text-gray-600 mb-6">
          อัปโหลดเอกสารใหม่หรือจัดการเอกสารที่มีอยู่
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            อัปโหลดเอกสาร
          </button>
          <button className="bg-white text-gray-700 border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
            จัดการเอกสาร
          </button>
        </div>
      </div>
    </div>
  );
}