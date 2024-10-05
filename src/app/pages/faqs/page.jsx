import SubscriptionSection from "@/app/components/Subscription";
import styles from "./FaqSection.module.css";

export default function FaqSection() {
  return (
    <>
    <div className={styles.faqSection}>
      <h2 className={styles.title}>FAQS</h2>
      <div className={styles.fapContent}>
        <div className={styles.imageContainer}>
          <img src="https://ucarecdn.com/cbe49869-b835-444c-97b9-e871afc31f2b/-/format/auto/-/preview/1500x1500/-/quality/lighter/banner_2048x2048.webp" />
        </div>
        <div className={styles.content}>
          <h3>นโยบายการรับประกัน</h3>
          <p>
            - สินค้ามีอายุรับประกัน 1 ปี
            นับจากวันที่สั่งซื้อสินค้าที่ปรากฎบนใบเสร็จรับเงิน/ใบกำกับภาษีที่ได้รับจากบริษัท
            มหาจักรดีเวลอปเมนท์ จำกัด หรือ ตัวแทนจำหน่ายของบริษัท
          </p>
          <h3>การรับประกันสินค้า</h3>
          <p>
            - ลูกค้าสามารถลงทะเบียนการรับประกันด้วยการ Add Line Warranty :
            Mahajak Plus ฟรี!! รับประกันเพิ่ม 3 เดือน พร้อมรับสิทธิ์ Mahajak
            Plus อีกมากมาย หรือคลิกดูรายละเอียดได้ที่{" "}
            <a href="https://www.mahajak.com/th/mahajak-warranty">
              https://www.mahajak.com/th/mahajak-warranty
            </a>
          </p>
        </div>
        <div className={styles.content}>
          <h3>การรับประกันสินค้าไม่ครอบคลุมในกรณีดังนี้</h3>
          <p>
            - ความเสียหายหรือความขัดข้องอันเนื่องมาจากสาเหตุต่างๆ ดังต่อไปนี้
          </p>
          <p>
            &ensp;1. ความเสียหายอันเกิดจากการขาดความระมัดระวังของผู้ใช้ เช่น
            สินค้าถูกน้ำหกใส่ เป็นต้น
          </p>
          <p>
            &ensp;2. ความเสียหายอันเกิดจากภัยพิบัติทางธรรมชาติ เช่น อุทกภัย
            อัคคีภัย วาตภัย
          </p>
          <p>
            &ensp;3. ความเสียหายอันกิดจากการขนส่ง หรืออุบัติเหตุ
            และความประมาทเลินเล่อของผู้ใช้หลังจากที่ซื้อสินค้า
          </p>
          <p>
            &ensp;4. ความเสียหายอันเกิดจากการใช้งานที่ไม่ถูกต้อง เช่น
            การต่อพ่วงอุปกรณ์ผิด เปิดเสียงดัง ดัดแปลงอุปกรณ์
            หรือไฟฟ้าที่ไม่ได้มาตรฐาน
          </p>
          <p>
            &ensp;5. สินค้ามีสภาพผิดรูปทรง เช่น แตก หัก งอ ร้าว ยุบ เบี้ยว
            มีคราบน้ำ มีรอยไหม้ รอยสนิม รอยถลอก รอยขูด รอยขีด หรือมีบาง
            ส่วนสูญหาย หรือชำรุด ( ยกเว้นภายใน 7 วัน นับจากวันที่ซื้อสินค้า )
          </p>
          <p>
            - สินค้าที่ลูกค้านำเข้ามาจากต่างประเทศด้วยตนเอง
            หรือซื้อจากร้านที่ไม่ได้เป็นตัวแทนจำหน่ายของบริษัท มหาจักร
            ดีเวลอปเมนท์ จำกัด
          </p>
          <p>
            - สินค้าที่ผ่านการซ่อมจากร้านที่ไม่ได้รับการรับรองจากบริษัทฯ
            แม้สินค้าดังกล่าวจะยังอยู่ในการระยะเวลาการรับประกัน
          </p>
          <p>
            - ไม่มีเอกสารประกอบการขอรับบริการในระยะรับประกันสินค้า ได้แก่
            ใบเสร็จรับเงินหรือใบรับประกันสินค้า
          </p>
          <p>- สินค้าปลอม</p>
        </div>
        <div className={styles.content}>
          <h3>มีบริการจัดส่งทั่วประเทศมั้ย ?</h3>
          <p>
            - บริการจัดส่งสินค้าฟรี ทั่วประเทศไทย
            เมื่อสั่งซื้อสินค้าผ่านเว็บไซต์ของเรา
          </p>
        </div>
        <div className={styles.content}>
          <h3>มีบริการเก็บเงินปลายทางหรือไม่ ?</h3>
          <p>
          - ทางบริษัทไม่มีนโยบายเรียกเก็บค่าสินค้าผ่านปลายทาง
          </p>
        </div>
        <div className={styles.content}>
          <h3>สามารถขอใบกำกับภาษีแบบเต็มได้อย่างไร?</h3>
          <p>
          - ลูกค้าสามารถขอใบกำกับภาษีได้ผ่านทาง Email : <a href="mailto:onlinesupport@mahajak.com">onlinesupport@mahajak.com </a>
          <br/> และระบุข้อมูลในการขอใบกับภาษีให้ครบถ้วน
          </p>
        </div>
      </div>
    </div>
    <SubscriptionSection/>
    </>
  );
}