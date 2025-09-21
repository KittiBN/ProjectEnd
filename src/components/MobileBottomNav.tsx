import { Home, Briefcase, Calendar, Users, Info } from 'lucide-react';

interface MobileBottomNavProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export default function MobileBottomNav({ currentPage, onPageChange }: MobileBottomNavProps) {
  const navigationItems = [
    { key: 'home', label: 'หน้าหลัก', icon: Home },
    { key: 'landing', label: 'ผลงาน', icon: Briefcase },
    { key: 'blog', label: 'กิจกรรม', icon: Calendar },
    { key: 'dashboard', label: 'บุคลากร', icon: Users },
    { key: 'pages', label: 'เกี่ยวกับ', icon: Info }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 md:hidden">
      <div className="grid grid-cols-5 h-16">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.key;
          
          return (
            <button
              key={item.key}
              onClick={() => onPageChange(item.key)}
              className={`flex flex-col items-center justify-center space-y-1 transition-colors ${
                isActive 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-600 hover:text-gray-900 active:bg-gray-50'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-blue-600' : 'text-gray-400'}`} />
              <span className={`text-xs ${isActive ? 'font-medium text-blue-600' : 'text-gray-600'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}