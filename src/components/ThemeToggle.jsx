import { useState, useEffect } from 'react';
import '../styles/ThemeToggle.css'; // นำเข้าไฟล์ CSS

function ThemeToggle() {
  // สร้าง State สำหรับเก็บค่าโหมดหน้าจอ (ค่าเริ่มต้นคือ false = Light Mode)
  const [isDarkMode, setIsDarkMode] = useState(false);

  // ใช้ useEffect เพื่อจัดการการเปลี่ยนแปลงคลาสบน body
  useEffect(() => {
    // ดึงค่าธีมที่เก็บไว้ใน Local Storage (ถ้ามี)
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark-theme') {
      setIsDarkMode(true);
      document.body.classList.add('dark-theme');
    }
  }, []); // ทำงานครั้งแรกที่ Component ถูกโหลด

  // ฟังก์ชันสลับ Dark/Light Mode
  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
    // เพิ่มหรือลบคลาส 'dark' ที่แท็ก <body> ของหน้าเว็บ
    if (!isDarkMode) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark-theme'); // เก็บค่าธีมไว้ใน Local Storage
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    // โครงสร้างสำหรับทำสวิตช์ที่สวยงาม
    
    <div className="theme-toggle">
      <input 
        type="checkbox" 
        id="theme-checkbox" 
        className="checkbox" 
        checked={isDarkMode}
        onChange={toggleTheme} // เรียกใช้ฟังก์ชันสลับธีม
      />
<label htmlFor="theme-checkbox" className="label">
  <div className="ball"></div>
  <svg className="moon-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
  {/* ไอคอนดวงอาทิตย์ (SVG) */}
  <svg className="sun-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>

  {/* ไอคอนดวงจันทร์ (SVG) */}
  
</label>
    </div>
  );
}

export default ThemeToggle;