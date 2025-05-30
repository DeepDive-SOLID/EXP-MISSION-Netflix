import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div>
        <div className={styles.footerLinkContainer}>
          <h1 className={styles.footerLinkTitle}>넷플릭스 대한민국</h1>
          <div className={styles.footerLinkContent}>
            <a
              href="https://help.netflix.com/ko/node/412"
              className={styles.footerLink}
            >
              넷플릭스 소개
            </a>
            <a
              href="https://help.netflix.com/ko/"
              className={styles.footerLink}
            >
              고객센터
            </a>
            <a
              href="https://help.netflix.com/ko/"
              className={styles.footerLink}
            >
              미디어 센터
            </a>
            <a
              href="https://help.netflix.com/legal/termsofuse"
              className={styles.footerLink}
            >
              이용약관
            </a>
            <a
              href="https://help.netflix.com/legal/privacy"
              className={styles.footerLink}
            >
              개인정보
            </a>
            <a
              href="https://help.netflix.com/legal/corpinfo"
              className={styles.footerLink}
            >
              회사정보
            </a>
            <a
              href="https://help.netflix.com/ko/contactus"
              className={styles.footerLink}
            >
              문의하기
            </a>
            <a
              href="https://help.netflix.com/legal/notices"
              className={styles.footerLink}
            >
              법적고지
            </a>
          </div>
          <div className={styles.footerDescContainer}>
            <h2 className={styles.footerDescRights}>
              Netflix Rights Reserved.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
