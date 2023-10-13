import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import { useState } from "react";

function Index() {
  const [companyName, setCompanyName] = useState("株式会社フルーリオ");
  const [companyDetail, setCompanyDetail] = useState(
    `株式会社フルーリオは
    TypeScriptのみでフルスタックアプリを作成可能な
    フレームワーク｢Frourio｣を提供しています`
  );
  const [companySlogan, setCompanySlogan] = useState("会社のスローガン");

  return (
    <div className={styles.container}>
      <div className={styles.topBox}>{companyName}</div>
      <div className={styles.middleBox}>
        <div className={styles.leftBox}>
          <div className={styles.text}>{companySlogan}</div>
          <div className={styles.text}>{companyDetail}</div>
        </div>
        <div className={styles.rightBox}>
          <Image
            src="/images/ignoreImage.jpg"
            width={480}
            height={300}
            alt="logo"
          />
        </div>
      </div>

      <div className={styles.bottomBox}>
        <div className={styles.text}>ここに募集要項</div>
      </div>
    </div>
  );
}

export default Index;
