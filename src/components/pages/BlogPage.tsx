// import { Card } from '../ui/card';
// import PageImageDisplay from '../PageImageDisplay';

// export default function BlogPage() {
//   const activities = [
//     {
//       title: "การแข่งขันพัฒนาซอฟต์แวร์ระดับภูมิภาค 2024",
//       description: "นักเรียนภาควิชาคอมพิวเตอร์โปรแกรมเมอร์ เข้าร่วมการแข่งขันพัฒนาซอฟต์แวร์ระดับภูมิภาค และคว้ารางวัลชนะเลิศ",
//       image: "/src/assets/figma.jpg"
//     },
//     {
//       title: "Workshop React และ TypeScript",
//       description: "จัดอบรมการใช้งาน React และ TypeScript สำหรับนักเรียนชั้นปีที่ 2 และ 3",
//       image: "/src/assets/figma.jpg"
//     },
//     {
//       title: "งานแสดงผลงานนักเรียน ประจำปี 2024",
//       description: "งานแสดงโครงงานและผลงานของนักเรียนทุกชั้นปี พร้อมการนำเสนอสู่สาธารณะ",
//       image: "/src/assets/figma.jpg"
//     },
//     {
//       title: "Hackathon 48 ชั่วโมง",
//       description: "การแข่งขันพัฒนาแอปพลิเคชันแบบไม่หยุดพัก เพื่อแก้ปัญหาในชุมชน",
//       image: "/src/assets/figma.jpg"
//     },
//     {
//       title: "ค่ายอบรม AI และ Machine Learning",
//       description: "ค่ายอบรมการใช้งาน AI และ Machine Learning ในการพัฒนาแอปพลิเคชัน",
//       image: "/src/assets/figma.jpg"
//     },
//     {
//       title: "กิจกรรมจิตอาสา: สอนคอมพิวเตอร์ให้ผู้สูงอายุ",
//       description: "นักเรียนออกจิตอาสาสอนการใช้งานคอมพิวเตอร์และสมาร์ทโฟนให้ผู้สูงอายุในชุมชน",
//       image: "/src/assets/figma.jpg"
//     }
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//       <div className="text-center mb-16">
//         <h1 className="text-4xl font-bold text-gray-900 mb-6">
//           กิจกรรมและข่าวสาร
//         </h1>
//         <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//           ติดตามกิจกรรม การแข่งขัน การอบรม และข่าวสารต่างๆ ของภาควิชาคอมพิวเตอร์โปรแกรมเมอร์
//         </p>
//       </div>

//       {/* Images Section */}
//       <PageImageDisplay page="blog" layout="masonry" showTitles={true} />

//       <div className="space-y-6">
//         {activities.map((activity, index) => (
//           <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
//             <div className="flex flex-col lg:flex-row items-start gap-4">
//               <div className="w-full lg:w-64 aspect-[4/3] overflow-hidden rounded-lg">
//                 <img 
//                   src={activity.image} 
//                   alt={activity.title} 
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                   {activity.title}
//                 </h3>
//                 <p className="text-gray-600">
//                   {activity.description}
//                 </p>
//               </div>
//             </div>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }


import { Card } from '../ui/card';
import PageImageDisplay from '../PageImageDisplay';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';


export default function BlogPage() {
  const activities = [
    {
      title: "figma สร้างอาชีพ",
      description: "7 พฤศจิกายน 2567",
      image: "/src/assets/figma.jpg"
    },
    {
      title: "สายสัมพันธ์พี่รหัสน้องรหัสในแผนก",
      description: "31 พฤษภาคม 2567",
      image: "/src/assets/ronnong.jpg"
    },
    {
      title: "กิจกรรมออกแบบโปสเตอร์แผนก",
      description: "6 มิถุนายน 2567",
      image: "/src/assets/porter.jpg"
    },
    {
      title: "ประดิษฐ์ของใช้จากวัสดุรีไซเคิล",
      description: "16 มิถุนายน 2567",
      image: "/src/assets/16 6.jpg"
    },
    {
      title: "กิจกรรมอบรมการสร้างเว็ปไซต์ด้วย Google Site เพื่อส่งเสริมการเรียนรู้แบบบูรณาการ",
      description: "31 พฤษภาคม 2567",
      image: "/src/assets/google site.jpg"
    },
    {
      title: "การอบรมมาตราฐานวิชาชีพและคุณวุฒิวิชาชีพ สาขาซอฟแวร์และการประยุกต์ อาชีพนักพัฒนาระบบ ระดับ 3",
      description: "23 กรกฎคม 2567",
      image: "/src/assets/vichashee.jpg"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          กิจกรรมและข่าวสาร
        </h1>
      </div>

      {/* Images Section */}
      <PageImageDisplay page="blog" layout="masonry" showTitles={true} />

      <div className="space-y-6">
        {activities.map((activity, index) => (
          <ZoomCard key={index} activity={activity} />
        ))}
      </div>
    </div>
  );
}

// 🔹 Component สำหรับ scroll zoom effect
function ZoomCard({ activity }: { activity: { title: string; description: string; image: string } }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start({ scale: 1, opacity: 1, transition: { duration: 0.5 } });
    } else {
      controls.start({ scale: 0.95, opacity: 0.7 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      className="hover:shadow-lg transition-shadow"
    >
      <Card className="p-6">
        <div className="flex flex-col lg:flex-row items-start gap-4">
          <div className="w-14 lg:w-14  overflow-hidden rounded-lg">
            <img
              src={activity.image}
              alt={activity.title}
              className="w-14 h-14 object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{activity.title}</h3>
            <p className="text-gray-600">{activity.description}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
