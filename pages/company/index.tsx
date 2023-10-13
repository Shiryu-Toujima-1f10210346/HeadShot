import React from "react";
import styles from "./index.module.css";
import Image from "next/image";

function index() {
  return (
    <div className={styles.container}>
      <div className={styles.topBox}>企業名</div>
      <div className={styles.middleBox}>
        <div className={styles.leftBox}>
          <div className={styles.text}>スローガン</div>
          <div className={styles.text}>会社詳細</div>
        </div>
        <div className={styles.rightBox}>
          <Image
            src="/images/ignoreImage.jpg"
            width={300}
            height={300}
            alt="logo"
          />
        </div>
      </div>

      <div className={styles.bottomBox}>
        <div className={styles.text}>募集要項</div>
      </div>
    </div>
  );
}

export default index;
