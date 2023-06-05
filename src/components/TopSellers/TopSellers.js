import React from 'react'
import ProductSlider from '../ProductSlider/ProductSlider'
import styles from './TopSellers.module.scss'

export default function TopSellers() {
    return (
        <>
            <div class={styles.topSellersTitle}>Top Sellers</div>
            <div class={styles.genreDropdown}>Choose a genre
                <img src="assets/topsellers/Arrow.svg" alt="Dropdown" />
            </div>
            <div class={styles.interactiveSliderArea}>
            <ProductSlider />
            </div>

        </>
    )
}
