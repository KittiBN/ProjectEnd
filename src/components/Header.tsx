import { Search, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export default function Header({ currentPage, onPageChange }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { key: 'home', label: 'หน้าหลัก' },
    { key: 'landing', label: 'ผลงาน' },
    { key: 'blog', label: 'กิจกรรม' },
    { key: 'dashboard', label: 'บุคลากร' },
    { key: 'pages', label: 'เกี่ยวกับ' }
  ];

  const handleNavigation = (page: string) => {
    onPageChange(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg--600 rounded-md flex items-center justify-center">
                <img src="src\assets\logo1.jpg"  alt="Logo"   className="w-8 h-8 rounded-full"/>
              </div>
              <span className="text-xl font-semibold text-gray-900">ComputerProgrammer</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button 
                key={item.key}
                onClick={() => handleNavigation(item.key)}
                className={`transition-colors ${
                  currentPage === item.key 
                    ? 'text-blue-600 font-medium' 
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Search - Hide on mobile */}
            <button className="hidden sm:block p-2 text-gray-500 hover:text-gray-700 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            
            {/* Login Button - Responsive */}
            <Button 
              onClick={() => handleNavigation('login')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-6 py-2 rounded-lg text-sm sm:text-base"
            >
              <span className="hidden sm:inline">Login</span>
              <span className="sm:hidden">เข้าสู่ระบบ</span>
            </Button>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-500 hover:text-gray-700 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavigation(item.key)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base transition-colors ${
                    currentPage === item.key
                      ? 'text-blue-600 bg-blue-50 font-medium'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Search */}
              <button className="block w-full text-left px-3 py-2 rounded-md text-base text-gray-700 hover:text-gray-900 hover:bg-gray-50 flex items-center">
                <Search className="w-5 h-5 mr-3" />
                ค้นหา
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}