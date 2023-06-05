import React from 'react'
import News from './News'
import styles from './Blog.module.scss'

export default function Blog() {
  return (
    <>
    <div class={styles.blogTitle}>News</div>
    <div class={styles.newsSliderArea}>
    <img src="" alt="" class={styles.arrowLeft} />
            <div class={styles.newsSliderContent}>
                    <News />
                    <News />
            </div>
            <img src="" alt="" class={styles.arrowRigth} />
            </div>
    </>
  )
}
