import React from 'react'
import styles from './Blog.module.scss'

export default function News() {
  return (
    <>
      <div class={styles.newsBG}>
      <div class={styles.newsPhoto}>
          </div>
          <div class={styles.newsTitle}>
          The Books You Need to Read in 2023
          </div>
          <div class={styles.newsDescription}>
          his is the blog we know you've all been waiting for. 
          We present the top 10 titles for 2023 in fiction, non-fiction and children's books; a glorious mix of masterful storytelling, 
          compelling subject matter and page-turning thrills...
          </div>
          <div class={styles.line}></div>
        </div>
    </>
  )
}
