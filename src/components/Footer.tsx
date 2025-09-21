import { Mail, Phone } from "lucide-react";

export default function Footer(): JSX.Element {
  return (
    <footer className="mt-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white">
      {/* เนื้อหาหลัก */}
      <div className="max-w-4xl mx-auto px-6 py-12 flex flex-col items-center text-center gap-8">
        
        {/* โลโก้ + คำอธิบาย */}
        <div>
          <h2 className="text-2xl font-bold mb-3">ComputerProgrammer</h2>
          <p className="text-sm text-blue-100 leading-relaxed max-w-md mx-auto">
            แผนกวิชาคอมพิวเตอร์โปรแกรมเมอร์  
            วิทยาลัยอาชีวศึกษาสุพรรณบุรี  
            สร้างสรรค์บุคลากรด้าน IT และซอฟต์แวร์  
          </p>
        </div>

      </div> {/* 👈 ปิด div container */}
      
      {/* ลิขสิทธิ์ */}
      <div className="border-t border-white/20 text-center py-4 text-sm text-blue-100">
        © {new Date().getFullYear()} ComputerProgrammer - SPVC. All rights reserved.
      </div>
    </footer>
  );
}
