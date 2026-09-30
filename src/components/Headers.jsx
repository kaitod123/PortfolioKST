import '../styles/header.css';
import ThemeToggle from './ThemeToggle';

// รับค่า language และ toggleLanguage เข้ามาในวงเล็บปีกกา
function Headers({ language, toggleLanguage }) {
  
  // ชุดคำแปลสำหรับเมนูด้านบน
  const navText = {
    EN: { skills: 'Skills', project: 'Project' },
    TH: {  skills: 'ทักษะ', project: 'ผลงาน'}
  };

  return (
    <div>
      <nav className="tab-menu">
        <div className="headname">
          <p>KST</p>
        </div>
        
        <ul className="nav-menu">
          <li><a href="#skills">{navText[language].skills}</a></li>
          <li><a href="#project">{navText[language].project}</a></li>
        </ul>

        <div className="action-button">
          {/* เรียกใช้ฟังก์ชันสลับภาษาเมื่อคลิก */}
          <button onClick={toggleLanguage} className="btn-action">
            {language}
          </button>
        </div>
        
        <div>
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
}

export default Headers;