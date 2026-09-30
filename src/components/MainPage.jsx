import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import ThemeToggle from '../components/ThemeToggle'; // ตรวจสอบ Path ว่าถูกต้องหรือไม่
import Headers from '../components/Headers'; // ตรวจสอบ Path ว่าถูกต้องหรือไม่
import myProfileImage from '../assets/My.png';
import moonIcon from '../assets/moon.png';
import project1Img from '../assets/project1.png';
import project2Img from '../assets/project2.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/MainPage.css'; // แบบที่ถูกต้อง

function MainPage({language}) {

 const content = {
    EN: {
      role: "Full Stack Web Developer",
      bio: "Computer Science graduate with a passion for building modern web applications and managing IT infrastructure.",
      Name: 'SITTHIKON',
      LastName: 'FEEJATTURAT',
      skillsTitle: "My Skills",
      projectTitle: "My Projects",
      liveBtn: "Live Demo",
      projects: [
        {
          title: "CS Project Repository System",
          description: "A web platform for searching, managing, and archiving university computer science projects.",
          techStack: ["React", "Node.js", "Express", "PostgreSQL"],
          image: "https://i.pinimg.com/736x/12/5d/2a/125d2a09b7d625ff31f37eade68049a5.jpg",
          githubLink: "#",
          liveLink: "#"
        },
        {
          title: "Automated Leave Request System",
          description: "A digital leave management web app featuring calendar tracking and automated Word/PDF document generation.",
          techStack: ["React", "Python", "FastAPI"],
          image: "https://tse2.mm.bing.net/th/id/OIP.p0n7WyEYnOWoxAYXqQpngAHaFL?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
          githubLink: "#",
          liveLink: "#"
        },
        {
          title: "Badminton Queue & Matchmaking App",
          description: "An automated court management system with player queueing, MMR skill calculation, and court fee splitting.",
          techStack: ["React", "Tailwind CSS", "Node.js"],
          image: "https://digitalsynopsis.com/wp-content/uploads/2015/03/web-designer-developer-jokes-humour-funny-7.jpg",
          githubLink: "#",
          liveLink: "#"
        }
      ]
    },
    TH: {
      role: "นักพัฒนาเว็บไซต์ Full Stack",
      bio: "บัณฑิตสาขาวิทยาการคอมพิวเตอร์ มุ่งมั่นในการพัฒนาเว็บแอปพลิเคชันที่ทันสมัยและดูแลระบบเครือข่ายไอที",
      Name: 'สิทธิกร ฟีจัตุรัส',
      skillsTitle: "ทักษะความสามารถ",
      projectTitle: "ผลงานโปรเจกต์",
      liveBtn: "ดูหน้าเว็บจริง",
      projects: [
        {
          title: "ระบบคลังเก็บโครงงานคอมพิวเตอร์",
          description: "แพลตฟอร์มสำหรับค้นหา จัดการ และรวบรวมข้อมูลโครงงานของนักศึกษาสาขาวิทยาการคอมพิวเตอร์",
          techStack: ["React", "Node.js", "Express", "PostgreSQL"],
          image: "https://i.pinimg.com/736x/12/5d/2a/125d2a09b7d625ff31f37eade68049a5.jpg",
          githubLink: "#",
          liveLink: "#"
        },
        {
          title: "ระบบจัดการใบลาออนไลน์อัตโนมัติ",
          description: "เว็บแอปพลิเคชันสำหรับจัดการวันลา พร้อมระบบปฏิทินและสร้างไฟล์เอกสาร Word/PDF อัตโนมัติ",
          techStack: ["React", "Python", "FastAPI"],
          image: "https://tse2.mm.bing.net/th/id/OIP.p0n7WyEYnOWoxAYXqQpngAHaFL?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
          githubLink: "#",
          liveLink: "#"
        },
        {
          title: "ระบบจัดคิวก๊วนแบดมินตันอัจฉริยะ",
          description: "ระบบจัดคิวลงสนามอัตโนมัติ คำนวณระดับฝีมือผู้เล่น (MMR) และหารค่าสนามแบบเรียลไทม์",
          techStack: ["React", "Tailwind CSS", "Node.js"],
          image: "https://digitalsynopsis.com/wp-content/uploads/2015/03/web-designer-developer-jokes-humour-funny-7.jpg",
          githubLink: "#",
          liveLink: "#"
        }
      ]
    }
  };

  // ดึงข้อมูลตามภาษาที่กำลังเลือกอยู่ปัจจุบัน
  const t = content[language];

  // ข้อมูล Skills (ชื่อเทคโนโลยีทับศัพท์ได้ทั้งสองภาษา)
  const skillsData = [
    {
      category: language === 'EN' ? "Frontend Development" : "การพัฒนาส่วนหน้าบ้าน (Frontend)",
      items: ["JavaScript", "React", "Next.js", "Tailwind CSS", "Vite"]
    },
    {
      category: language === 'EN' ? "Backend Development" : "การพัฒนาส่วนหลังบ้าน (Backend)",
      items: ["Node.js", "Express", "PHP", "Laravel", "Python"]
    },
    {
      category: language === 'EN' ? "Database & Deployment" : "ฐานข้อมูลและระบบคลาวด์",
      items: ["MySQL", "PostgreSQL", "pgAdmin", "Render", "Railway", "Aiven"]
    },
    {
      category: language === 'EN' ? "Networking & Tools" : "ระบบเครือข่ายและเครื่องมือ",
      items: ["Git / GitHub", "Cisco Packet Tracer", "DHCP / DNS", "IT Support"]
    }
  ];

  return (
    <div>     
      <div className='content-container'>
        
        <img   src={myProfileImage} alt="My.jpg" width="200" height:auto/>
        
        <div className='text-section'>
          <p>{t.role}</p>
          <h1>{t.Name}</h1>
          <h1>{t.LastName}</h1>
          <p>{t.bio}</p>
        </div>
      </div>
      <div className='contact'>
        <u>sitthikon.fe07@gmail.com</u> <u>062-439-6855</u>

      </div>

      <div id="skills" className="skills-section" >
        <h1 className='headskill'>{t.skillsTitle}</h1>
        <div className='skill-grid'>
          {skillsData.map((skillGroup, index) => (
            <div key={index} className='skill-card'>
              <h3 className='skill-category'>{skillGroup.category}</h3>
              <div className='skill-badges'>
                {skillGroup.items.map((items, i)=> (
                  <span key={i} className='skill-badge'>{items}</span>
                  
                ))}
              </div>
            </div>
          ))}         
        </div>
      </div>
    <div id="project" className="project-section">
        <h2 className="section-title">My Project</h2>
        
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1.2} // 1.2 ทำให้เห็นขอบของสไลด์ข้างๆ
          centeredSlides={true}
          loop={false}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 1.5, spaceBetween: 40 }, // จอคอมให้กว้างขึ้น
          }}
          className="apple-swiper"
        >
          {t.projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="apple-slide">
                <img src={project.image} alt={project.title} className="slide-bg" />
                
                {/* ไล่สีดำจากข้างล่างขึ้นมา เพื่อให้ตัวหนังสืออ่านออก */}
                <div className="slide-gradient-overlay"></div>
                
                <div className="slide-content">
                  <div className="slide-text">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="slide-tech">
                      {project.techStack.map((tech, i) => (
                        <span key={i}>{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="slide-actions">
                    <a href={project.liveLink} className="apple-btn primary">Live Demo</a>
                    <a href={project.githubLink} className="apple-btn secondary">GitHub</a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default MainPage;
