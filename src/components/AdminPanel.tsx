import { useState } from 'react';
import { Settings, Image, Users, FileText, Home, LogOut } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { useAuth } from './AuthContext';
import ImageManager from './ImageManager';

interface AdminPanelProps {
  onClose: () => void;
}

export default function AdminPanel({ onClose }: AdminPanelProps) {
  const { logout, user } = useAuth();
  const [activeTab, setActiveTab] = useState('home');

  const handleLogout = () => {
    logout();
    onClose();
  };

  const pages = [
    { id: 'home', name: 'หน้าหลัก', icon: Home },
    { id: 'landing', name: 'ผลงาน', icon: FileText },
    { id: 'blog', name: 'กิจกรรม', icon: FileText },
    { id: 'dashboard', name: 'บุคลากร', icon: Users },
    { id: 'pages', name: 'เกี่ยวกับ', icon: FileText }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-4 min-w-0">
            <Settings className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 flex-shrink-0" />
            <div className="min-w-0">
              <h1 className="text-lg sm:text-xl font-semibold text-gray-900 truncate">
                <span className="hidden sm:inline">ระบบจัดการเนื้อหา</span>
                <span className="sm:hidden">จัดการเนื้อหา</span>
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 truncate">ยินดีต้อนรับ, {user?.name}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button variant="outline" onClick={onClose} size="sm" className="text-xs sm:text-sm">
              <span className="hidden sm:inline">กลับสู่เว็บไซต์</span>
              <span className="sm:hidden">กลับ</span>
            </Button>
            <Button variant="destructive" onClick={handleLogout} size="sm" className="text-xs sm:text-sm">
              <LogOut className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">ออกจากระบบ</span>
              <span className="sm:hidden">ออก</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Mobile Tabs */}
        <div className="lg:hidden bg-white border-b border-gray-200 p-4">
          <select 
            value={activeTab} 
            onChange={(e) => setActiveTab(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg text-sm"
          >
            {pages.map((page) => (
              <option key={page.id} value={page.id}>
                จัดการรูปภาพ - {page.name}
              </option>
            ))}
          </select>
        </div>

        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-64 bg-white border-r border-gray-200 min-h-screen p-4">
          <nav className="space-y-2">
            {pages.map((page) => {
              const Icon = page.icon;
              return (
                <button
                  key={page.id}
                  onClick={() => setActiveTab(page.id)}
                  className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                    activeTab === page.id
                      ? 'bg-blue-100 text-blue-700 font-medium'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {page.name}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 sm:p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            {pages.map((page) => (
              <TabsContent key={page.id} value={page.id}>
                <Card className="p-4 sm:p-6">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <Image className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-blue-600" />
                    <h2 className="text-base sm:text-lg font-semibold">
                      <span className="hidden sm:inline">จัดการรูปภาพ - {page.name}</span>
                      <span className="sm:hidden">{page.name}</span>
                    </h2>
                  </div>
                  <ImageManager page={page.id} />
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
}