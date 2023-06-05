import React from 'react'
import styles from './ProductSlider.module.scss'

export default function Product(props) {
    const {title, description, price, src} = props;
  return (
    <>
    <div class={styles.product}>
                                <div class={styles.productAbout}>
                                    <div class={styles.about}>
                                        <div class={styles.aboutTitle}>{title}</div>
                                        <div class={styles.aboutDescription}>{description}</div>
                                        <div class={styles.aboutPrice}>$ {price}</div>
                                    </div>
                                    <div class={styles.productAddToBasket}>
                                        <img src="assets/navigation/Basket.svg" alt="Basket" />
                                            Add to basket
                                    </div>
                                </div>
                                <div class={styles.productPhoto} style= {{background: `url(${src})`}}></div>
                            </div>
    
    </>
  )
}