import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Headers from './components/Headers';
import MainPage from './components/MainPage';

function App() {
  // 1. สร้าง State เก็บภาษาไว้ที่ตัวแม่ (ค่าเริ่มต้นเป็น 'EN' หรือ 'TH' ก็ได้)
  const [language, setLanguage] = useState('EN');

  // 2. ฟังก์ชันสำหรับสลับภาษา
  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'TH' ? 'EN' : 'TH'));
  };

  return (
    <BrowserRouter>
      {/* 3. ส่งค่า language และฟังก์ชันกดสลับไปให้ Headers */}
      <Headers language={language} toggleLanguage={toggleLanguage} />
      
      <Routes>
        {/* 4. ส่งค่า language ไปให้ MainPage เพื่อใช้เปลี่ยนข้อความ */}
        <Route path="/" element={<MainPage language={language} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;