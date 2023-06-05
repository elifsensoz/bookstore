import React from 'react'
import SubscribeArea from './SubscribeArea';
import styles from './FooterMenu.module.scss'

export default function FooterMenu() {
  return (
    <>
      <div class={styles.footerMenu}>
        <div class={styles.socialMedia}>

          <img class={styles.mediaIcon} alt="search" src="assets/footer/_Instagram.svg" />
          <img class={styles.mediaIcon} alt="search" src="assets/footer/_Google.svg" />
          <img class={styles.mediaIcon} alt="search" src="assets/footer/_Facebook.svg" />
        </div>
        <div class={styles.footerLogo}></div>
        <div class={styles.footerMenuUpper}>
          <div class={styles.footerMenuUpperText}>About</div>
          <div class={styles.footerMenuUpperText}>Features</div>
          <div class={styles.footerMenuUpperText}>Pricing</div>
          <div class={styles.footerMenuUpperText}>Gallery</div>
          <div class={styles.footerMenuUpperText}>Team</div>
        </div>
        <div class={styles.footerMenuLower}>
          <div class={styles.footerMenuUpperText}>Privacy Policy</div>
          <div class={styles.footerMenuUpperText}>Terms of Use</div>
          <div class={styles.footerMenuUpperText}>Sales and Refunds</div>
          <div class={styles.footerMenuUpperText}>Legal</div>
        </div>
        <div class={styles.subscribeByMailArea}>
          <SubscribeArea />
        </div>

      </div>
    </>
  )
}

