import React from 'react'
import styles from "./Header.module.scss"
export default function Header() {
  return (
    <>
    <div class={styles.animation}>
                <div class={styles.book3}></div>
                <div class={styles.book2}></div>
                <div class={styles.book1}></div>
            </div>
            <div class={styles.headText}>
                <div class={styles.newsName}>New Releases This Week</div>
                <div class={styles.newsDescription}>It's time to update your reading list with some of the latest and greatest
                    releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week's new
                    releases offer something for everyone</div>
                <div class={styles.subscribeButton}>Subscribe</div>
            </div>
    </>
  )
}
