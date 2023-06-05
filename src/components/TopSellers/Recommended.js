import React from 'react'
import styles from './TopSellers.module.scss'
import ProductSlider from '../ProductSlider/ProductSlider'
export default function Recommended() {
    return (
        <>
            <div class={styles.topSellersTitle}>Recommended for You</div>
            <div class={styles.interactiveSliderArea} style={{ top: '59px' }}>
                <ProductSlider  />
            </div>
        </>
    )
}
