import { motion } from 'framer-motion';

function PageTransition({ childen }) {
    return (
        <motion.div
        // 1. สถานะก่อนหน้าเว็บจะแสดง (โปร่งใสและเลื่อนลงนิดหน่อย)
      initial={{ opacity: 0, y: 20 }}
      // 2. สถานะตอนหน้าเว็บแสดงผลแล้ว (ชัดเจนและอยู่ตำแหน่งเดิม)
      animate={{ opacity: 1, y: 0 }}
      // 3. สถานะตอนหน้าเว็บกำลังจะหายไป (โปร่งใสและเลื่อนขึ้น)
      exit={{ opacity: 0, y: -20 }}
      // ความเร็วของแอนิเมชัน (0.3 วินาที)
      transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            {childen}
        </motion.div>
    );
}

export default PageTransition;