import React from 'react'
import Product from './Product'
import styles from './ProductSlider.module.scss'

export default function ProductSlider() {
    return (
        <>
            <img src="assets/Arrow-left.png" alt="" class={styles.arrowLeft} />
            <div class={styles.interactiveSliderContent}>
                <div class={styles.productList}>
                    <Product title="The Time Has Come"
                        description="Lindbergh's Pharmacy is an Athens, Georgia, institution..."
                        price="27.89"
                        src="assets/topsellers/book1.png" />
                    <Product title="I Want a Better Catastrophe..."
                        description="With global warming projected to rocket past the..."
                        price="26.99"
                        src="assets/topsellers/book2.png" />
                    <Product title="My Government...."
                        description="In the city, Trey meets up with a cast of characters...."
                        price="25.89"
                        src="assets/topsellers/book3.png" />


                </div>
            </div>
            <img src="assets/Arrow-right.svg" alt="" class={styles.arrowRigth} />
        </>
    )
}
