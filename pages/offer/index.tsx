import React from "react";
import styles from "./index.module.css";

function Index(props: {
  companyList: {
    name: string;
    text: string;
  };
}) {
  const { companyList } = props;

  return <div className={styles.container}></div>;
}

export default Index;
